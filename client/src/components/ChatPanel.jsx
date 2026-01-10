import React, { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';

const ChatPanel = ({ onGenerate, loading }) => {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim() && !loading) {
            onGenerate(prompt);
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-900 border-r border-gray-800">
            <div className="p-4 border-b border-gray-800">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    AI Co-Pilot
                </h2>
                <p className="text-gray-400 text-xs mt-1">Describe what you want to build.</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Chat history could go here */}
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <p className="text-gray-300 text-sm">
                        Welcome! I can help you generate code. Try asking:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-gray-400 list-disc pl-4">
                        <li>Create a REST API with Express</li>
                        <li>Build a React counter component</li>
                        <li>Explain this code logic</li>
                    </ul>
                </div>
            </div>

            <div className="p-4 bg-gray-900 border-t border-gray-800">
                <form onSubmit={handleSubmit} className="relative">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., Create a user login endpoint..."
                        className="w-full bg-gray-800 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 resize-none h-24"
                    />
                    <button
                        type="button" // changed to button for now or submit if form
                        onClick={handleSubmit} 
                        disabled={loading || !prompt.trim()}
                        className="absolute bottom-3 right-3 p-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : <Send className="w-4 h-4 text-white" />}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatPanel;
