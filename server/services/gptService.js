// This service would normally call OpenAI API.
// For the prompt of "Internship-grade", we will implement a robust mock or a real API integration if keys are provided.
// Since I don't have the user's API key yet, I will create a mock service that can be easily switched to real.

exports.generate = async (prompt, language = 'javascript', framework = 'node') => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(`Generating code for prompt: "${prompt}" in ${language}`);

    // Simple heuristic-based mock response
    let code = `// Code generation for "${prompt}"\n`;

    if (prompt.toLowerCase().includes('server') || prompt.toLowerCase().includes('express')) {
        code += `
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Example app listening at http://localhost:\${port}\`);
});
`;
    } else if (prompt.toLowerCase().includes('react') || prompt.toLowerCase().includes('component')) {
        code += `
import React, { useState } from 'react';

const GeneratedComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded shadow">
      <h1>Generated Component</h1>
      <p>Count: {count}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default GeneratedComponent;
`;
    } else {
        code += `
// Boilerplate for ${language}
function main() {
    console.log("Implementation for: ${prompt}");
}

main();
`;
    }

    return {
        code: code.trim(),
        explanation: "This is a generated example based on your prompt."
    };
};

exports.explain = async (codeSnippet) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        explanation: `
### Code Explanation
1. **Overview**: The provided code performs a specific task based on its structure.
2. **Logic**: It defines functions and variables to execute logic.
3. **Usage**: It is likely used within a larger application as a module or component.
(Note: Real logic analysis would require LLM integration)
        `.trim()
    };
};
