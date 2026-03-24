"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  direction?: "up" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  children: ReactNode;
  className?: string;
}

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 } },
};

export default function ScrollReveal({
  direction = "up",
  delay = 0,
  duration = 0.6,
  children,
  className = "",
}: ScrollRevealProps) {
  const v = variants[direction];

  return (
    <motion.div
      initial={v.hidden}
      whileInView={v.visible}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
