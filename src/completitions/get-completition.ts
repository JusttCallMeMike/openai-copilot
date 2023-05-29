// Import the OpenAI npm package

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const getCompletions = async (prompt: string) => {
  const openai = new OpenAIApi(configuration)
  const params = {
    prompt,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    max_tokens: 64,
    temperature: 0.7,
    n: 3,
    stop: '\n',
    model: 'text-davinci-002',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fill_in: 'FILL_IN',
  }

  // Call the OpenAI API with the parameters
  const response = await openai.createCompletion(params)
  const { data } = response

  const completions = removeEmptyArrayElements(data.choices).map((choice) => choice.text?.trim())
  return removeEmptyArrayElements(completions)
}

// Example usage of the getFITBCompletions function
// async function example() {
//   const code = ‘function addNumbers(x, y) { return x + y; }\nlet sum = addNumbers(1, 2);\nconsole.log("The sum is " +’;
//   const cursorPos = code.indexOf(‘+’) + 1; // set the cursor position to the character after the ‘+’
//   const codeBeforeCursor = code.substring(0, cursorPos);
//   const codeAfterCursor = code.substring(cursorPos);

//   const prompt = ${codeBeforeCursor} FILL_IN ${codeAfterCursor};
//   const completions = await getFITBCompletions(prompt);

//   console.log(completions);
// }

// example();
