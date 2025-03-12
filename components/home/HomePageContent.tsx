import React, { useEffect, useRef } from "react";
import { useAppContext } from "../providers/AppStateContext";
import Terminal from "../terminal/Terminal";
import Link from "next/link";
import TypeWriter from "../common/TypeWriter";

const HomePageContent = () => {
  const { showTerminal } = useAppContext();

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
      output: <TypeWriter fullText="Hello, World;" />,
      description: "Prints a greeting."
    },
    wellcome: {
      output: <p>Wellcome to my website!, <span className="font-bold">please type help to see available commands</span></p>,
      description: "Prints a wellcome message."
    },
    about: {
      output: (
        <div>
          <p>Hey there, I'm Ömer Demirtaş.</p>
          <p>
            I'm a full-stack developer, and honestly, I really love building things. My heart's definitely in the backend – I get a kick out of crafting solid systems with Spring Boot, wiring up messaging with Kafka and RabbitMQ, and making everything play nicely in Kubernetes.
          </p>
          <p>
            I enjoy figuring out the big picture, designing system architectures that actually work, and automating stuff with Jenkins pipelines. Plus, I'm pretty comfortable hanging out in the Linux terminal.
          </p>
          <p>
            On the frontend, I use React and Next.js to make things look good and feel smooth. It's all about making the whole experience come together.
          </p>
          <p>
            If you're looking for someone who's genuinely passionate about building good software, and who can handle the backend heavy lifting, then let's chat!
          </p>
        </div>
      ),
      description: "Learn more about Ömer Demirtaş.",
    },
    version: {
      output: "v1.0.0",
      description: "Displays the current version."
    }
  };

  const terminalRef = useRef<any>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.runCommand("hello");

      const timeoutId1 = setTimeout(() => {
        terminalRef.current.runCommand("wellcome");

        const timeoutId2 = setTimeout(() => {
          terminalRef.current.runCommand("about");
        }, 500);

        return () => clearTimeout(timeoutId2);
      }, 500);

      return () => clearTimeout(timeoutId1);
    }
  }, []);

  return (    
    <React.Fragment>
      <div className={`transition-opacity duration-500 ${showTerminal ? "opacity-100" : "opacity-0"}`}>
        {showTerminal && <Terminal ref={terminalRef}  initialCommands={terminalCommands} />}
      </div>
      <div className={`transition-opacity duration-500 ${showTerminal ? "opacity-0" : "opacity-100"}`}>
        {!showTerminal && <UIPage />}
      </div>
    </React.Fragment>
  );
}

export default HomePageContent;


const UIPage = () => {
  return (
    <ul className="flex flex-col items-start space-y-4">
      <li>
        <Link
          href="/about"
          className="text-3xl font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/posts"
          className="text-3xl font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
        >
          Posts
        </Link>
      </li>
    </ul>
  );
}