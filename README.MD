# OpenAI CLI App Template

This template is a Node.js project with TypeScript checking (`@ts-check`), designed as a base platform for small, simple OpenAI CLI applications. It leverages the OpenAI API to create powerful CLI tools with ease.

## Getting Started

To use this template, follow these steps:

1. **Clone the repository**

   Start by cloning this repository to your local machine.

   ```
   git clone <repository-url>
   ```

2. **Install dependencies**

   Navigate to the cloned repository's directory and install the necessary dependencies.

   ```
   npm install
   ```

3. **Set up the OPENAI_API_KEY environment variable**

   In order to use the OpenAI API, you need to set up an environment variable named `OPENAI_API_KEY` with your OpenAI API key. This key is essential for authenticating your requests to OpenAI.

   - **For Unix/Linux/macOS:**

     Open your terminal and run the following command:

     ```
     export OPENAI_API_KEY='your_openai_api_key_here'
     ```

     To make this change permanent, add the command to your shell's startup file, like `~/.bashrc` or `~/.zshrc`.

   - **For Windows:**

     Open Command Prompt and run the following command:

     ```
     setx OPENAI_API_KEY "your_openai_api_key_here"
     ```

     Note: You will need to restart Command Prompt to see the changes.

4. **Running the application**

   After setting up the `OPENAI_API_KEY`, you can run the application using:

   ```
   npm run exec
   ```

   This will execute the `src/index.js` file, which is the entry point of the application.

5. **Running tests**

   To ensure everything is set up correctly, you can run the predefined tests using:

   ```
   npm test
   ```

   This command runs the tests defined in `src/openAiClient.spec.js` to verify the OpenAI client creation.

## Conclusion

This template provides a quick start for building OpenAI CLI applications with Node.js. By following the above steps, you can set up your development environment and start building your own OpenAI-powered CLI tools.
