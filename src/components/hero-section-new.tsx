"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { usePrefersReducedMotion } from "@/utils/use-reduced-motion";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

const HeroSectionNew = () => {
  const [heroRef, isInView] = useIntersectionObserver({ threshold: 0.3 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <Container>
        <section
          ref={heroRef}
          id="home-section"
          className="relative z-10 md:pt-26 pt-26 pb-16 ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                Leading Web Solutions in India
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900">Top Web Design &</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Marketing Company
                </span>
                <br />
                <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl">
                  in India
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-md text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We're a young, driven, and dynamic startup with big ambitions —
                and even bigger results. At Enegix Web Solutions, we believe
                that trust isn't claimed — it's earned through delivery.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://wa.me/919608263050?text=Hi%20I%20am%20interested%20in%20your%20services.%20Can%20you%20share%20more%20details%20about%20your%20offerings?"
                  target="_blank"
                  className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <Button className="relative px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    Connect with Us
                  </Button>
                </Link>
                <Link href="/portfolio" className="group">
                  <Button className="px-8 py-4 bg-white border-2 border-gray-200 text-green-600! font-semibold rounded-lg hover:border-teal-500 hover:text-teal-600 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
                    View Our Work
                  </Button>
                </Link>
              </motion.div>

              {/* Stats or Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative">
              {/* Main Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl transform rotate-6 scale-105 opacity-10"></div>
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                  <Image
                    src="/hero-image.jpg"
                    alt="Hero Image"
                    height={600}
                    width={500}
                    className="w-full h-[450px] object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Live Projects
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-xl shadow-lg text-white">
                <div className="text-center">
                  <div className="text-lg font-bold">4.9★</div>
                  <div className="text-xs">Rating</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HeroSectionNew;
