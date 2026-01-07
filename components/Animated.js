"use client";

import { useEffect, useState } from "react";
import styles from "./animated.css";

const sentences = [
  "Welcome to Bit-Links!",
  "Short Links generated here.",
  "We provide fast URL shortening without any hassle.",
  "Thanks for choosing Bit-Links!",
];

export default function AnimatedText() {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect (letter by letter)
  useEffect(() => {
    if (charIndex < sentences[sentenceIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + sentences[sentenceIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [charIndex, sentenceIndex]);

  // Change sentence every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
      setDisplayText("");
      setCharIndex(0);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="ani text-3xl md:text-4xl font-bold text-center">
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
