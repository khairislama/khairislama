"use client";

import { motion, Variants } from "framer-motion";

const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.h1
      className={`inline-block w-full ${className}`}
      variants={quote}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={word + "-" + index}
          className="inline-block"
          variants={singleWord}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default AnimatedText;
