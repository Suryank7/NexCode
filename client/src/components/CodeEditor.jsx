import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, language = 'javascript', onChange }) => {
    
    const handleEditorChange = (value) => {
        onChange(value);
    };

    return (
        <div className="h-full w-full bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700 shadow-xl">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] text-gray-300 text-sm border-b border-gray-700">
                <span>Editor</span>
                <span className="uppercase text-xs tracking-wider opacity-70">{language}</span>
            </div>
            <Editor
                height="90vh"
                defaultLanguage={language}
                language={language}
                value={code}
                theme="vs-dark"
                onChange={handleEditorChange}
                options={{
                    minimap: { enabled: true },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    padding: { top: 16 }
                }}
            />
        </div>
    );
};

export default CodeEditor;
