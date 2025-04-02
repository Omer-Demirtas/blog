import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../providers/AppStateContext";
import Terminal from "../terminal/Terminal";
import Link from "next/link";
import TypeWriter from "../common/TypeWriter";
import { motion } from "framer-motion";

const HomePageContent = () => {
  const { showTerminal } = useAppContext();
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setStars(newStars);
  }, []);

  const terminalCommands = {
    ls: {
      output: (
        <ul>
          <li>
            <Link href="/posts" className="text-blue-400 hover:underline">
              posts
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-400 hover:underline">
              about
            </Link>
          </li>
        </ul>
      ),
      description: 'List available directories.',
    },
    hello: {
      output: <TypeWriter fullText="Hello, World;" />,
      description: 'Prints a greeting.',
    },
    wellcome: {
      output: (
        <p>
          Wellcome to my website!,{' '}
          <span className="font-bold">
            please type help to see available commands
          </span>
        </p>
      ),
      description: 'Prints a wellcome message.',
    },
    about: {
      output: (
        <div>
          <p>Hey there, I&apos;m Ömer Demirtaş.</p>
          <p>
            I&apos;m a full-stack developer, and honestly, I really love building
            things. My heart&apos;s definitely in the backend – I get a kick out
            of crafting solid systems with Spring Boot, wiring up messaging with
            Kafka and RabbitMQ, and making everything play nicely in Kubernetes.
          </p>
          <p>
            I enjoy figuring out the big picture, designing system architectures
            that actually work, and automating stuff with Jenkins pipelines. Plus,
            I&apos;m pretty comfortable hanging out in the Linux terminal.
          </p>
          <p>
            On the frontend, I use React and Next.js to make things look good and
            feel smooth. It&apos;s all about making the whole experience come
            together.
          </p>
          <p>
            If you&apos;re looking for someone who&apos;s genuinely passionate
            about building good software, and who can handle the backend heavy
            lifting, then let&apos;s chat!
          </p>
        </div>
      ),
      description: 'Learn more about Ömer Demirtaş.',
    },
    version: {
      output: 'v1.0.0',
      description: 'Displays the current version.',
    },
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative">
        <motion.div 
          className={`transition-opacity duration-500 ${showTerminal ? "opacity-100" : "opacity-0"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: showTerminal ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {showTerminal && <Terminal ref={terminalRef} initialCommands={terminalCommands} />}
        </motion.div>
        <motion.div 
          className={`transition-opacity duration-500 ${showTerminal ? "opacity-0" : "opacity-100"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: showTerminal ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {!showTerminal && <UIPage />}
        </motion.div>
      </div>
    </div>
  );
}

export default HomePageContent;

const UIPage = () => {
  const menuItems = [
    { href: "/about", label: "About", delay: 0.1 },
    { href: "/posts", label: "Posts", delay: 0.2 },
    { href: "/contact", label: "Contact", delay: 0.3 },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 glass-effect rounded-lg p-8 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-2 text-primary">Ömer Demirtaş</h1>
        <p className="text-xl text-muted-foreground">Software Engineer</p>
      </motion.div>
      <ul className="flex flex-col items-start space-y-6">
        {menuItems.map((item) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            <Link
              href={item.href}
              className="group text-3xl font-semibold text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-2"
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 flex gap-4"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
      </motion.div>
    </div>
  );
}