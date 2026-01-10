import React, { useState } from 'react';
import ChatPanel from './components/ChatPanel';
import CodeEditor from './components/CodeEditor';
import { generateCode, explainCode } from './services/api';

function App() {
  const [code, setCode] = useState('// Your generated code will appear here...');
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState('');

  const handleGenerate = async (prompt) => {
    setLoading(true);
    setExplanation('');
    try {
      const result = await generateCode(prompt);
      if (result && result.code) {
        setCode(result.code);
      }
    } catch (error) {
      console.error(error);
      setCode('// Error generating code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleExplain = async () => {
    if (!code) return;
    setLoading(true);
    try {
        const result = await explainCode(code);
        setExplanation(result.explanation);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden">
      {/* Sidebar / Chat */}
      <div className="w-1/3 min-w-[350px] max-w-[500px]">
        <ChatPanel onGenerate={handleGenerate} loading={loading} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 bg-[#0e0e0e]">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-300">Editor</h1>
            <div className="flex gap-2">
                <button 
                  onClick={handleExplain}
                  disabled={loading}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm rounded-md border border-gray-700 transition-colors"
                >
                  Explain Code
                </button>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-sm text-white rounded-md transition-colors shadow-lg shadow-purple-900/20">
                    Run Code (Demo)
                </button>
            </div>
        </div>
        
        <div className="flex-1 flex gap-4">
            <div className={`flex-1 transition-all duration-300 ${explanation ? 'w-2/3' : 'w-full'}`}>
                <CodeEditor code={code} onChange={setCode} language="javascript" />
            </div>
            
            {explanation && (
                <div className="w-1/3 bg-gray-900 rounded-lg p-4 border border-gray-800 overflow-y-auto animate-in slide-in-from-right fade-in">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-purple-400">Explanation</h3>
                        <button onClick={() => setExplanation('')} className="text-gray-500 hover:text-white">&times;</button>
                    </div>
                    <div className="prose prose-invert prose-sm text-gray-300">
                        <p>{explanation}</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
