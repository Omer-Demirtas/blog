"use client"

import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

interface TerminalCommand {
  output: React.ReactNode;
  description: string;
}

interface TerminalCommands {
  [key: string]: TerminalCommand;
}

interface TerminalProps {
  initialCommands?: TerminalCommands;
  className?: string;
}

export interface TerminalRef {
  executeCommand: (command: string) => void;
}

const Terminal = forwardRef<TerminalRef, TerminalProps>(({ initialCommands = {}, className = "" }, ref) => {
  const [commandHistory, setCommandHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const commands: TerminalCommands = {
    help: {
      output: (
        <div>
          <p>Available commands:</p>
          <ul className="mt-2 space-y-1">
            {Object.entries({ ...initialCommands, help: { output: "", description: "Show this help message" } }).map(
              ([cmd, { description }]) => (
                <li key={cmd} className="flex items-start gap-2">
                  <span className="text-cyan-400">{cmd}</span>
                  <span className="text-muted-foreground">- {description}</span>
                </li>
              )
            )}
          </ul>
        </div>
      ),
      description: "Show this help message",
    },
    clear: {
      output: null,
      description: "Clear the terminal",
    },
    ...initialCommands,
  };

  const executeCommand = (command: string) => {
    if (!command.trim()) return;

    const cmd = command.toLowerCase();
    const output = commands[cmd]?.output || (
      <p className="text-red-400">Command not found: {command}</p>
    );

    if (cmd === "clear") {
      setCommandHistory([]);
    } else {
      setCommandHistory((prev) => [...prev, { command, output }]);
    }

    setCurrentCommand("");
    setHistoryIndex(-1);
  };

  useImperativeHandle(ref, () => ({
    executeCommand,
  }));

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(currentCommand);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex].command);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand("");
      }
    }
  };

  return (
    <div className={`terminal ${className} flex flex-col h-full`}> {/* Terminal tam yüksekliği kullanacak */}
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="terminal-control terminal-control-close" />
          <div className="terminal-control terminal-control-minimize" />
          <div className="terminal-control terminal-control-maximize" />
        </div>
      </div>
      <div className="terminal-content flex-grow overflow-y-auto p-2" ref={contentRef} style={{ maxHeight: "100%" }}> {/* Scrollbar eklendi */}
        <div className="terminal-history">
          {commandHistory.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="terminal-prompt">
                <span className="terminal-prompt-symbol">$</span>
                <span className="terminal-command">{item.command}</span>
              </div>
              <div className="terminal-output mt-1">{item.output}</div>
            </div>
          ))}
        </div>
        <div className="terminal-prompt">
          <span className="terminal-prompt-symbol">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
          />
          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
});

Terminal.displayName = "Terminal";

export default Terminal;
