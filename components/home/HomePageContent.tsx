"use client";

import React, { useRef, useEffect } from "react";
import Terminal, { TerminalRef } from "../terminal/Terminal";
import Link from "next/link";
import TypeWriter from "../common/TypeWriter";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal as TerminalIcon } from "lucide-react";

const HomePageContent = () => {
  const terminalRef = useRef<TerminalRef>(null);

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

  // Mock data for recent posts
  const recentPosts = [
    {
      title: "Building a Modern Terminal Interface",
      date: "2024-03-15",
      description: "Learn how to create a beautiful terminal interface using React and TypeScript.",
      slug: "building-modern-terminal-interface"
    },
    {
      title: "Space Theme Design System",
      date: "2024-03-10",
      description: "Creating a cohesive space-themed design system for web applications.",
      slug: "space-theme-design-system"
    },
    {
      title: "Next.js 14 Features Overview",
      date: "2024-03-05",
      description: "Exploring the latest features and improvements in Next.js 14.",
      slug: "nextjs-14-features-overview"
    }
  ];

  useEffect(() => {
    // Execute help command when terminal is mounted
    if (terminalRef.current) {
      terminalRef.current.executeCommand('help');
    }
  }, []);

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-effect rounded-lg p-4 hover:bg-primary/5 transition-colors"
            >
              <Link href={`/posts/${post.slug}`}>
                <h3 className="text-lg font-medium mb-2 text-primary hover:text-primary/80">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{post.description}</p>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </Link>
            </motion.div>
          ))}

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="/posts"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              All Posts
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          whileHover={{ scale: 1.02 }}
          className="glass-effect rounded-lg h-full flex flex-col overflow-hidden"
        >
          <Terminal ref={terminalRef} initialCommands={terminalCommands} className="flex-1" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePageContent;