"use client";

import {
  Avatar as TheAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

function Avatar() {
  return (
    <TheAvatar className="absolute left-[50%] translate-x-[-50%] top-0">
      <MotionLink
        href="/"
        className="w-10 h-10 bg-foreground text-foreground flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <AvatarImage src="/avatars/Avatar-3.webp" alt="@khairislama" />
        <AvatarFallback>KS</AvatarFallback>
      </MotionLink>
    </TheAvatar>
  );
}

export default Avatar;
