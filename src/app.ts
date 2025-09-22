import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

client.chat.completions
  .create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Quanto é 1 + 1?",
      },
    ],
  })
  .then((res) => {
    console.log(res.choices[0].message);
  });
