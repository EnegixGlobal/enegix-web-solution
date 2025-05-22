"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/", isActive: true },
  { label: "Services", href: "/services", isActive: false },
  { label: "Portfolio", href: "/portfolio", isActive: false },
  { label: "Team", href: "/team", isActive: false },
  { label: "About", href: "/about", isActive: false },
  { label: "Contact", href: "#contact-section", isActive: false },
];

export default function Navbar () {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState(navLinks);

  // Function to update active link
  const handleLinkClick = (clickedIndex: number) => {
    setActiveLinks((prevLinks) =>
      prevLinks.map((link, index) => ({
        ...link,
        isActive: index === clickedIndex,
      }))
    );
  };
 

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-gradient-to-r from-[#0a192f]/95 to-[#112240]/95 backdrop-blur-md py-3 shadow-lg shadow-blue-900/20 border-b border-white/5"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
        
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" >
            <Image
              src="/newlogo.png"
              alt="Logo"
              width={120}
              height={50}
              className={`rounded-full object-cover transition-all duration-500 ${
                scrolled
                  ? "drop-shadow-[0_0_12px_rgba(66,153,225,0.45)]"
                  : "drop-shadow-[0_0_8px_rgba(66,153,225,0.3)]"
              }`}
            />
            </Link>
          </motion.div>{" "}
          {/* Desktop Navigation */}{" "}
          <div className="hidden md:flex items-center space-x-2">
            {activeLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-md ${
                  link.isActive ? "text-white" : "text-gray-300"
                } hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-400/10 transition-all duration-300 nav-link text-sm relative overflow-hidden group`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                custom={index}
                onClick={() => handleLinkClick(index)}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 ${
                    link.isActive ? "w-full shadow-glow" : "w-0"
                  } h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300`}
                ></span>
              </motion.a>
            ))}{" "}
            <motion.a
              href="#contact-section"
              // className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white nav-button text-sm tracking-wider relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(66,153,225,0.5)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              animate={{
                boxShadow: scrolled
                  ? "0 0 15px rgba(66,153,225,0.35)"
                  : "0 0 10px rgba(66,153,225,0.2)",
              }}
            >
              {/* <span className="relative z-10">Get Started</span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span> */}

              <RainbowButton variant="outline" size={"lg"}>
                Get Started
              </RainbowButton>
            </motion.a>
          </div>{" "}
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transform transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transform transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </motion.button>
        </nav>{" "}
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-6 pb-6"
            >
              {" "}
              <div className="flex flex-col space-y-3 bg-gradient-to-b from-[#0a192f]/95 to-[#112240]/95 backdrop-blur-lg rounded-xl p-4 border border-white/5 shadow-lg shadow-blue-900/20">
                {activeLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3 ${
                      link.isActive
                        ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-400/20"
                        : "text-gray-300"
                    } hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-400/10 rounded-lg transition-all duration-300 nav-link relative overflow-hidden`}
                    onClick={() => {
                      handleLinkClick(index);
                      setMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                      delay: index * 0.08,
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative z-10 flex items-center">
                      {link.isActive && (
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-2"></span>
                      )}
                      {link.label}
                    </span>
                  </motion.a>
                ))}{" "}
                <motion.a
                  href="#contact-section"
                  // className="mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 text-white nav-button hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-center flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: navLinks.length * 0.08,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RainbowButton variant="outline" size={"lg"}>
                    Get Started
                  </RainbowButton>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};


