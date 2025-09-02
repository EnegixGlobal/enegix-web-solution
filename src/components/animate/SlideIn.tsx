"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

export default function SlideIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const distance = 40;
  const offsets: Record<Direction, { x: number; y: number }> = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
