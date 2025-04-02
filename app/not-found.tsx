"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace("/blog/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-lg p-8 max-w-md w-full text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Page Not Found
        </p>
        <p className="text-muted-foreground mb-8">
          Redirecting to blog...
        </p>
        <Link
          href="/blog"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          Click here if you are not redirected automatically
        </Link>
      </motion.div>
    </div>
  );
} 