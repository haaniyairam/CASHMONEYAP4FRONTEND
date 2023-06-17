import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
Write a report in the style of how a sales executive would highlight a product its advantages and disadvantages
`;

export default async function POST(req, res) {
  const body = req.json();
  if (body.method === "POST") {
    console.log(`API: ${basePromptPrefix}${body.userInput}`);

    const baseCompletion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${basePromptPrefix}${body.userInput}\n`,
      temperature: 0.7,
      max_tokens: 250,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    // Build Prompt #2
    const secondPrompt = `List the product's reviews in an optimistic manner.

    Title: ${body.userInput}

    Table of Contents: ${basePromptOutput.text}

    Blog Post:'.

    Title: ${body.userInput}

    Table of Contents: ${basePromptOutput.text}

    `;

    // Call the OpenAI API a second time with Prompt #2
    const secondPromptCompletion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${secondPrompt}`,
      // Set a higher temperature for this one. Up to you!
      temperature: 0.8,
      // Increase max_tokens.
      max_tokens: 250,
    });

    // Get the output
    const secondPromptOutput = JSON.stringify(
      secondPromptCompletion.data.choices.pop()
    );

    // Send Prompt #2's output to the UI instead of Prompt #1's.
    return NextResponse.json({ output: secondPromptOutput });
  } else {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
}
