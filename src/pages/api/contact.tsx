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
  limiter(req, res, (err: any) => {
    if (err) {
      return res.status(429).json({
        success: false,
        message: "Too many requests, please try again later.",
        status: 429,
      });
    }

    const email = req.body.email;
    const name = req.body.name;
    const subject = req.body.subject;
    const content = req.body.content;

    const webhookUrl =
      "https://discord.com/api/webhooks/1118315502125715579/WTfglNaOHHZDfF1veWWRnuij8HVVBJC8k-QS-7QSJroAZpQgewgZuh3gOAwPNYLwH5In";
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
