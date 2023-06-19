import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import rateLimit, { ValueDeterminingMiddleware } from "express-rate-limit";

const keyGenerator: ValueDeterminingMiddleware<string> = (
  req: NextApiRequest
) => {
  return (
    (req.headers["x-forwarded-for"] as string) ||
    req.connection.remoteAddress ||
    ""
  );
};

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 1,
  keyGenerator: keyGenerator,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = req.body.email;
  const name = req.body.name;
  const subject = req.body.subject;
  const content = req.body.content;

  if (name.length >= "51")
    return res.status(400).json({
      success: false,
      message: "Email text exceeds max length.",
      status: 400,
    });

  if (name.length >= "51")
    return res.status(400).json({
      success: false,
      message: "Name text exceeds max length.",
      status: 400,
    });

  if (subject.length >= "76")
    return res.status(400).json({
      success: false,
      message: "Subject text exceeds max length.",
      status: 400,
    });

  if (content.length >= "1501")
    return res.status(400).json({
      success: false,
      message: "Content body exceeds max length.",
      status: 400,
    });

  limiter(req, res, (err: any) => {
    if (err) {
      return res.status(429).json({
        success: false,
        message: "Too many requests, please try again later.",
        status: 429,
      });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL as string;
    const message = {
      content: `Email: **${email}** - Name: **${name}**\nSubject: \`${subject}\`\n\`------------------------\`\n\n${content}`,
    };

    axios
      .post(webhookUrl, message)
      .then((response) => {
        console.log("Message sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending message to Discord:", error);
      });

    res
      .status(200)
      .json({ success: true, message: "Sent message.", status: 200 });
  });
}
