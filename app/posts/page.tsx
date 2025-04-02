"use client";

import TagGroup from "@/components/common/TagsGroup";
import posts from "@/data/posts";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PostHomePage = () => {
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
    <div className="relative min-h-screen">
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
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Blog Posts</h1>
          <p className="text-muted-foreground text-lg">Explore my thoughts and experiences in software development</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.id.toString()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/posts/${post.path.join('/')}`}>
                <div className="glass-effect rounded-xl p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-primary/20">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.createdDate}
                    </p>
                  </div>
                  <div className="mt-4">
                    <TagGroup tags={post.tags} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostHomePage;