"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { Route } from "next";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    label: "Services",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
      { label: "Search Engine Optimization", href: "/services/search-engine-optimization" },
      { label: "PPC Advertising", href: "/services/ppc-advertising" },
      { label: "Logo Design", href: "/services/logo-design" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    
  },
  {
    label: "Company",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    hasDropdown: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0d2a35]/95 backdrop-blur-xl py-4 shadow-2xl shadow-teal-900/20 border-b border-teal-800/30"
          : "bg-[#0d2a35]/95 backdrop-blur-xl py-4 shadow-2xl shadow-teal-900/20 border-b border-teal-800/30"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="/newlogo.png"
                  alt="Enegix Web Solutions"
                  width={130}
                  height={100}
                  className="relative rounded-full object-cover transition-all duration-500"
                />
              </motion.div>
              {/* <motion.div 
                className="hidden sm:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Enegix
                </h1>
                <p className="text-xs text-teal-400/80 -mt-1 font-medium tracking-wider">
                  WEB SOLUTIONS
                </p>
              </motion.div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredLink(link.label);
                  if (link.hasDropdown) handleDropdownEnter(link.label);
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                  if (link.hasDropdown) handleDropdownLeave();
                }}
              >
                {link.hasDropdown ? (
                  <Link href={link.href as Route}>
                    <motion.button
                      className={cn(
                        "flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer relative group",
                        isLinkActive(link.href)
                          ? "text-white bg-gradient-to-r from-teal-700/50 to-emerald-700/50 backdrop-blur-sm border border-teal-600/30 shadow-lg shadow-teal-900/20"
                          : "text-teal-200 hover:text-white"
                      )}
                      whileHover={{ y: -2 }}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <ChevronDownIcon
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200 text-teal-300",
                          activeDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                      {hoveredLink === link.label && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
                          layoutId="navHover"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  </Link>
                ) : (
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <Link
                      href={link.href as Route}
                      className={cn(
                        "flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer relative",
                        isLinkActive(link.href)
                          ? "text-white bg-gradient-to-r from-teal-700/50 to-emerald-700/50 backdrop-blur-sm border border-teal-600/30 shadow-lg shadow-teal-900/20"
                          : "text-teal-200 hover:text-white"
                      )}
                    >
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                    {hoveredLink === link.label && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
                        layoutId="navHover"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                )}

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.label && (
                  <motion.div
                    className="absolute top-full left-0 w-64 bg-[#0d2a35]/95 backdrop-blur-xl border border-teal-800/30 rounded-xl shadow-2xl shadow-teal-900/30 p-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href as Route}
                        className="block px-4 py-3 text-sm text-teal-200 hover:text-white hover:bg-teal-800/30 rounded-lg transition-all duration-200 relative group"
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.label}
                          <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></div>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <motion.div 
              className="ml-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <RainbowButton 
                    size="lg" 
                    className="relative font-semibold bg-gradient-to-r from-teal-600 to-emerald-700 text-white border-teal-500/30 hover:border-teal-400/50 shadow-lg shadow-teal-900/30"
                  >
                    Get Started
                  </RainbowButton>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col items-center justify-center p-2 rounded-lg bg-teal-800/30 hover:bg-teal-700/50 transition-colors duration-200 border border-teal-700/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-teal-300" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6 text-teal-300" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 pb-6">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === link.label ? null : link.label
                              )
                            }
                            className="w-full flex items-center justify-between px-4 py-3 text-teal-200 hover:text-white hover:bg-teal-800/30 rounded-lg transition-all duration-200 border border-teal-800/30"
                          >
                            <span>{link.label}</span>
                            <ChevronDownIcon
                              className={cn(
                                "h-4 w-4 transition-transform duration-200 text-teal-400",
                                activeDropdown === link.label ? "rotate-180" : ""
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.label && (
                              <motion.div
                                className="ml-4 mt-2 space-y-1"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {link.dropdownItems?.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href as Route}
                                    className="block px-4 py-2 text-sm text-teal-300/80 hover:text-white hover:bg-teal-800/20 rounded-lg transition-all duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href as Route}
                          className="block px-4 py-3 text-teal-200 hover:text-white hover:bg-teal-800/30 rounded-lg transition-all duration-200 border border-teal-800/30"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <RainbowButton
                          variant="outline"
                          size="lg"
                          className="w-full font-semibold relative border-teal-500/30 hover:border-teal-400/50 text-white"
                        >
                          Get Started
                        </RainbowButton>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}