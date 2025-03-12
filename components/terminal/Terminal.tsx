"use client"

import React, { useState, useRef, useEffect, KeyboardEvent, useImperativeHandle, forwardRef } from 'react';

interface TerminalProps {
  initialCommands: {
    [key: string]: {
      output: React.ReactNode | string;
      description?: string;
    };
  };
}

interface TerminalRef {
  runCommand: (command: string, props?: any) => void;
}

interface CommandResult {
  command: string;
  output: React.ReactNode | string | null;
}

const Terminal = forwardRef<TerminalRef, TerminalProps>(({ initialCommands }, ref) => {
  const [commands, setCommands] = useState<{
    [key: string]: {
      output: React.ReactNode | string;
      description?: string;
    };
  }>(initialCommands);
  const [commandResults, setCommandResults] = useState<CommandResult[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandResults]);

  const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand.trim());
      setCurrentCommand('');
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        setHistoryIndex((prevIndex) => prevIndex - 1);
        setCurrentCommand(commandResults[historyIndex - 1]?.command || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandResults.length) {
        setHistoryIndex((prevIndex) => prevIndex + 1);
        setCurrentCommand(commandResults[historyIndex]?.command || '');
      } else {
        setCurrentCommand('');
      }
    }
  };

  const executeCommand = (command: string, props?: any) => {
    console.log(`Running command: ${command}`);
    let resultOutput: React.ReactNode | string | null = null;

    if (commands[command]) {
      resultOutput = commands[command].output;
    } else if (command === 'clear') {
      setCommandResults([]);
      setHistoryIndex(0);
      return;
    } else if (command === 'help') {
      resultOutput = (
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
      resultOutput = `Command not found: ${command}`;
    }

    setCommandResults((prevResults) => [...prevResults, { command, output: resultOutput }]);
    setHistoryIndex((prevIndex) => prevIndex + 1);
  };

  useImperativeHandle(ref, () => ({
    runCommand: executeCommand,
  }));

  return (
    <div className="terminal text-green-400 font-mono p-4 rounded-lg shadow-lg">
      <div ref={terminalRef} className="overflow-y-auto max-h-[700px] scroll-smooth">
        {commandResults.map((result, index) => (
          <div key={index}>
            <p className="text-sm">$ {result.command}</p>
            {result.output && (
              <div className="mt-2">
                {result.output}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-2">
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
});

Terminal.displayName = 'Terminal';

export default Terminal;