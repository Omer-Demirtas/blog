"use client";

import { useState, useEffect } from "react";

const TypeWriter = ({ fullText }: { fullText: string }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50);



      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <h1 className="text-4xl md:text-6xl text-left font-extrabold font-mono tracking-tight">
      {text === "" ? (fullText.charAt(0)) : text}
    </h1>
  );
};

export default TypeWriter;