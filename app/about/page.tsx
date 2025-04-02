"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

export default function About() {
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

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-effect rounded-lg p-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-primary">About Me</h1>
          
          <div className="space-y-6 text-lg">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hey there! I'm Ömer Demirtaş, a passionate software engineer with a deep love for building robust and scalable systems. My journey in software development has been driven by curiosity and a desire to create elegant solutions to complex problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My expertise lies in backend development, where I specialize in:
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="list-disc list-inside space-y-2 ml-4"
            >
              <li>Spring Boot and Java ecosystem</li>
              <li>Message queues (Kafka, RabbitMQ)</li>
              <li>Container orchestration with Kubernetes</li>
              <li>CI/CD pipelines with Jenkins</li>
              <li>System architecture and design</li>
              <li>Linux system administration</li>
            </motion.ul>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              On the frontend, I work with modern technologies like React and Next.js to create responsive and user-friendly interfaces. I believe in writing clean, maintainable code and following best practices to ensure the long-term success of any project.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts. I'm always excited to learn new things and share my experiences with the developer community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="https://github.com/Omer-Demirtas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/omer-demirtas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 