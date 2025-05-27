"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    label: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
      { label: "SEO Optimization", href: "/services/seo-optimization" },
      { label: "PPC Advertising", href: "/services/ppc-advertising" },
      { label: "Logo Design", href: "/services/logo-design" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    hasDropdown: true,
    dropdownItems: [
      { label: "Web Projects", href: "/portfolio/web-projects" },
      { label: "Mobile Apps", href: "/portfolio/mobile-apps" },
      { label: "Branding", href: "/portfolio/branding" },
      { label: "E-commerce", href: "/portfolio/ecommerce" },
    ],
  },
  {
    label: "Company",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Check if the current path matches a nav link
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    if (href.startsWith("#")) {
      return false;
    }
    return pathname.startsWith(href);
  };

  // Handle dropdown hover
  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a192f]/95 backdrop-blur-xl py-3 border-b border-gray-700/30 shadow-2xl shadow-black/20"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {" "}
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <Image
                  src="/newlogo.png"
                  alt="Enegix Web Solutions"
                  width={50}
                  height={50}
                  className="relative rounded-full object-cover ring-2 ring-gray-500/30 group-hover:ring-blue-400/50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-300">
                  Enegix{" "}
                </h1>
                <p className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors duration-300 -mt-1 font-medium">
                  Web Solutions
                </p>
              </div>
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && handleDropdownEnter(link.label)
                }
                onMouseLeave={() => link.hasDropdown && handleDropdownLeave()}
              >
                {" "}
                <Link href={link.href === "#" ? "" : link.href} passHref>
                  <motion.div
                    className={cn(
                      "flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer relative group",
                      isLinkActive(link.href)
                        ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg backdrop-blur-sm border border-blue-500/20"
                        : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:backdrop-blur-sm hover:border hover:border-blue-500/10"
                    )}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    custom={index}
                  >
                    {" "}
                    <span className="relative z-10">
                      {link.label}
                      {isLinkActive(link.href) && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                          layoutId="activeTab"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </span>
                    {/* Hover effect background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId={`hover-${link.label}`}
                    />
                    {link.hasDropdown && (
                      <ChevronDownIcon
                        className={cn(
                          "ml-1 h-4 w-4 transition-all duration-200 relative z-10",
                          activeDropdown === link.label
                            ? "rotate-180 text-blue-300"
                            : ""
                        )}
                      />
                    )}
                  </motion.div>
                </Link>
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-[#0a192f]/95 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-2xl shadow-black/20 py-3 z-50 overflow-hidden hidden md:block"
                    >
                      {/* Dropdown gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

                      {link.dropdownItems?.map((item, itemIndex) => (
                        <Link key={item.label} href={item.href}>
                          <motion.div
                            className="relative px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-200 cursor-pointer flex items-center group"
                            whileHover={{ x: 6, scale: 1.02 }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-200"></div>
                            <span className="relative z-10">{item.label}</span>
                            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            {/* CTA Button */}
            <motion.div className="ml-6">
              <Link href="/contact">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <RainbowButton
                    variant="outline"
                    size="lg"
                    className="relative font-semibold border-blue-500/30 hover:border-blue-400/50 text-gray-700 hover:text-blue-600"
                  >
                    Get Started
                  </RainbowButton>
                </motion.div>
              </Link>
            </motion.div>
          </div>{" "}
          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white focus:outline-none p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300 shadow-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white rounded-full origin-center"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 9 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full origin-center"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -9 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden pt-6 pb-6"
            >
              {" "}
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="bg-[#0a192f]/95 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-2xl shadow-black/20 p-6 relative overflow-hidden"
              >
                {/* Mobile menu gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>{" "}
                <div className="relative z-10 flex flex-col space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = isLinkActive(link.href);
                    // For mobile, use main href for navigation (no dropdowns)
                    const mobileHref = link.href === "#" ? "/about" : link.href;

                    return (
                      <motion.div key={link.label}>
                        <Link href={mobileHref}>
                          <motion.div
                            className={cn(
                              "px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 cursor-pointer flex items-center justify-between relative group",
                              isActive
                                ? "text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30 shadow-lg border border-blue-500/20"
                                : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 24,
                              delay: index * 0.1,
                            }}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center relative z-10">
                              {isActive && (
                                <motion.div
                                  className="w-2 h-2 bg-blue-400 rounded-full mr-3"
                                  layoutId="mobileDot"
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                  }}
                                />
                              )}
                              <span>{link.label}</span>
                            </div>
                            {/* Mobile hover background */}
                            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                {/* Mobile CTA */}
                <motion.div
                  className="relative z-10 mt-6 pt-6 border-t border-blue-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link href="/contact">
                    <motion.div
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <RainbowButton
                        variant="outline"
                        size="lg"
                        className="w-full font-semibold relative border-blue-500/30 hover:border-blue-400/50"
                      >
                        Get Started
                      </RainbowButton>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
