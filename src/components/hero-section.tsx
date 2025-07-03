"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { usePrefersReducedMotion } from "@/utils/use-reduced-motion";
import Image from "next/image";
import Container from "./Container";

const HeroSection = () => {
  const [heroRef, isInView] = useIntersectionObserver({ threshold: 0.3 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Container>
    <section
      ref={heroRef}
      id="home-section"
      className=" mt-30 mb-20  w-full flex items-center justify-center overflow-hidden"
      >
      <div className=" relative z-10 flex flex-col lg:flex-row items-center ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-balance text-3xl font-semibold mb-10 leading-none tracking-tighter md:text-5xl sm:text-5xl text-white">
            <span className="text-green-600">
              Top Web Design & Marketing{" "}
              <span className="block">Company in India</span>
            </span>
          </h1>
          <p className="text-md mt-3 md:text-lg  text-black font-bold mb-8 max-w-xl mx-auto lg:mx-0">
            We’re a young, driven, and dynamic startup with big ambitions — and
            even bigger results. At Enegix Web Solutions, we believe that trust
            isn’t claimed — it’s earned through delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link  href="https://wa.me/919608263050?text=Hi%20I%20am%20interested%20in%20your%20services.%20Can%20you%20share%20more%20details%20about%20your%20offerings?"
                  target="_blank">
              <RainbowButton
                size="lg"
                className=" py-4 text-md font-semibold bg-gradient-to-r from-green-500 to-blue-600 text-white">
                  Connect with Us
              </RainbowButton>
            </Link>
            <Link href="/portfolio">
              <RainbowButton
                variant="outline"
                size="lg"
                className="px-8 py-4 text-md border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-green-700">
                View Our Work
              </RainbowButton>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-right mt-10 mb-10  ">
       
            <Image
              src="/hero-image.jpg"
              alt="Hero Image"
              height={600}
              width={500}
              className=" h-[500px] rounded-tl-[100px] rounded-br-[100px]  object-cover shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-102  z-20"
            />
            <Image
              src="/pattern.png"
              alt="Hero Image"
              height={600}
              width={600}
              className=" h-[500px] -top-20  relative md:-left-[210px] -left-[350px] object-cover  "
            />
          
        </motion.div>
      </div>
    </section>
    </Container>
  );
};

export default HeroSection;
