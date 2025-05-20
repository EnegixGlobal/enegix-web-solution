"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/utils/use-reduced-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Shorter loading time for users who prefer reduced motion
    const loadTime = prefersReducedMotion ? 1000 : 2000;
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadTime);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a192f] z-[9999] flex items-center justify-center"
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          document.body.style.overflow = "auto";
        } else {
          document.body.style.overflow = "hidden";
        }
      }}
    >      <div className="relative">
        {!prefersReducedMotion ? (
          <>
            <motion.div
              className="w-24 h-24 rounded-full border-t-4 border-l-4 border-r-4 border-b-transparent border-blue-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-t-4 border-l-4 border-cyan-400 border-r-4 border-b-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                E
              </motion.div>
            </motion.div>
          </>
        ) : (
          // Static version for reduced motion preference
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Enegix
            </div>
            <div className="text-sm text-gray-400">Loading...</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
