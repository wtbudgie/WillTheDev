import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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

  res.status(200).json({ success: true, message: "Sent message." });
}
