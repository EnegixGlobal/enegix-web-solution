"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe } from "@/components/magicui/globe";
import { RainbowButton } from "./magicui/rainbow-button";
import Typed from "typed.js";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { FlickeringGrid } from "./magicui/flickering-grid";

const HeroSection = () => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Custom Web Applications",
        "High-Impact SEO Strategies",
        "Creative Logo Designs",
        "WhatsApp Ad Campaigns",
        "Full-Stack Digital Solutions",
        "Scalable Online Platforms",
        "Conversion-Driven Websites",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      // Destroy instance on cleanup to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative px-10 mx-auto pt-10 min-h-screen w-full flex flex-col items-center justify-center"
    >
      {/* Background gradient */}
     
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      {/* Animated circles */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-400/20 blur-3xl pointer-events-none"
        />
      </div>{" "}
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/5 text-center md:text-left pr-0 md:pr-4"
        >
          {" "}
          <div className="group relative flex items-center w-fit  rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] my-4">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
              Introducing Our Services
            </AnimatedGradientText>
            <ChevronRight
              className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </div>
          <div className="my-4">
            <span
              ref={el}
              className=" relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-xl md:text-4xl tracking-tight  drop-shadow-md "
            />
          </div>
          <p className="text-lg md:text-lg text-gray-300 mb-8 max-w-xl font-space-grotesk body-text">
            We craft stunning websites, impactful digital marketing campaigns,
            and eye-catching designs that transform your vision into reality.
          </p>{" "}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <RainbowButton variant="outline" size={"lg"}>
              Get Started
            </RainbowButton>
            <RainbowButton size={"lg"}>Our Services</RainbowButton>
          </div>
        </motion.div>{" "}
        {/* Globe Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full md:w-4/6 h-[400px] md:h-[500px] flex justify-end relative"
        >
          <div className="w-full flex justify-end items-center relative">
            <div className="w-full md:w-[80%] lg:w-[80%] relative">
              <Globe />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>{" "}
      </motion.div>
    </section>
  );
};

export default HeroSection;
