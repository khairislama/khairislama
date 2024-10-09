"use client";

import { motion, Variants } from "framer-motion";

const infiniteScroll: Variants = {
  animate: {
    left: "-40px",
    transition: {
      duration: 3,
    },
  },
};

function FeaturesOneProject() {
  const list = ["Blender", "Freelance", "solo", "web design", "next.js"];
  return (
    <motion.ul
      className="grid grid-cols-5 gap-10 mt-12 w-full relative"
      variants={infiniteScroll}
      animate="animate"
    >
      {list.map((item, i) => (
        <li
          className="py-2 px-4 h-10 w-32 bg-foreground/40 rounded-full text-center absolute left-[100%] repeat-infinite"
          key={i}
        >
          {item}
        </li>
      ))}
    </motion.ul>
  );
}

export default FeaturesOneProject;
