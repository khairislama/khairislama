"use client";

import { motion } from "framer-motion";

interface Props {
  orientation: "left" | "top" | "right" | "bottom";
}

function InfiniteScroll({ orientation = "right" }: Props) {
  const isHorizontal = orientation === "right" || orientation === "left";
  const isReversed = orientation === "left" || orientation === "top";

  const scrollVariants = {
    animate: isHorizontal
      ? {
          x: isReversed ? [0, "-100%"] : ["-100%", 0], // Moves continuously left or right
        }
      : {
          y: isReversed ? [0, "-100%"] : ["-100%", 0], // Moves continuously top or bottom
        },
  };

  const containerClass = isHorizontal
    ? "w-80 h-36 overflow-hidden flex flex-nowrap"
    : "w-56 h-80 overflow-hidden flex flex-col";

  return (
    <div className={containerClass}>
      <motion.div
        className={isHorizontal ? "flex" : "flex flex-col"}
        variants={scrollVariants}
        animate="animate"
        transition={{
          repeat: Infinity,
          duration: 10, // Adjust speed here
          ease: "linear",
        }}
      >
        {[
          "bg-red-500",
          "bg-blue-500",
          "bg-green-500",
          "bg-yellow-500",
          "bg-purple-500",
        ].map((color, index) => (
          <div
            key={index}
            className={`${color} ${
              isHorizontal ? "w-20 h-full mr-2" : "h-20 w-full mb-2"
            }`}
          />
        ))}
        {/* Duplicating items to create a seamless wrap-around effect */}
        {[
          "bg-red-500",
          "bg-blue-500",
          "bg-green-500",
          "bg-yellow-500",
          "bg-purple-500",
        ].map((color, index) => (
          <div
            key={index + 5}
            className={`${color} ${
              isHorizontal ? "w-20 h-full mr-2" : "h-20 w-full mb-2"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteScroll;
