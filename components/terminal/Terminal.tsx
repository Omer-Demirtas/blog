"use client"

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Link from 'next/link';

interface TerminalProps {
  commands: {
    [key: string]: {
      output: React.ReactNode | string;
      description?: string;
    };
  };
}

const Terminal: React.FC<TerminalProps> = ({ commands }) => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [output, setOutput] = useState<React.ReactNode | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [historyIndex, setHistoryIndex] = useState<number>(commandHistory.length);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmedCommand = currentCommand.trim();
      setCommandHistory((prevHistory) => [...prevHistory, trimmedCommand]);
      setHistoryIndex(commandHistory.length + 1);

      if (commands[trimmedCommand]) {
        setOutput(commands[trimmedCommand].output);
      } else if (trimmedCommand === 'clear') {
        setOutput(null);
        setCommandHistory([]);
        setHistoryIndex(0);
      } else if (trimmedCommand === 'help') {
        setOutput(
          <div>
            {Object.entries(commands).map(([cmd, details]) => (
              <p key={cmd}>
                <span className="font-bold">{cmd}:</span> {details.description || 'No description'}
              </p>
            ))}
            <p><span className="font-bold">clear:</span> Clear the terminal</p>
            <p><span className="font-bold">help:</span> List available commands</p>
          </div>
        );

      } else {
        setOutput(`Command not found: ${trimmedCommand}`);
      }
      setCurrentCommand('');
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        setHistoryIndex((prevIndex) => prevIndex - 1);
        setCurrentCommand(commandHistory[historyIndex - 1] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length) {
        setHistoryIndex((prevIndex) => prevIndex + 1);
        setCurrentCommand(commandHistory[historyIndex] || '');
      } else {
        setCurrentCommand('');
      }
    }
  };

  return (
    <div className="terminal text-green-400 font-mono p-4 rounded-lg shadow-lg">
      <div className="overflow-y-auto max-h-64">
        {commandHistory.map((cmd, index) => (
          <div key={index}>
            <p className="text-sm">$ {cmd}</p>
            {index === commandHistory.length - 1 && output && (
              <div className="mt-2">
                {output}
              </div>
            )}
          </div>
        ))}
        {output && commandHistory.length === 0 && (
          <div className="mt-2">
            {output}
          </div>
        )}
      </div>

      <div className="flex items-center mt-2"> {/* flex items-center eklendi */}
  <span className="text-sm">$ </span>
  <input
    autoFocus
    ref={inputRef}
    type="text"
    value={currentCommand}
    onChange={(e) => setCurrentCommand(e.target.value)}
    onKeyDown={handleCommand}
    className="bg-transparent outline-none flex-grow text-green-400 caret-green-400 pl-1"
  />
</div>
    </div>
  );
};

export default Terminal;

// Example Usage in a page or component:

/* const MyComponent = () => {
  const terminalCommands = {
    ls: {
      output: (
        <ul>
          <li>
            <Link href="/posts" className="text-blue-400 hover:underline">posts</Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-400 hover:underline">about</Link>
          </li>
        </ul>
      ),
      description: "List available directories."
    },
    hello: {
      output: "Hello, world!",
      description: "Prints a greeting."
    },
    version: {
      output: "v1.0.0",
      description: "Displays the current version."
    }
  
  return (
    <div>
      <Terminal commands={terminalCommands} />
    </div>
  );
}; */