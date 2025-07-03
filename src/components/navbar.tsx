"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDownIcon,
  XMarkIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import { Route } from "next";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "UI/UX Designing",
        href: "/services/ui-ux-designing",
        icon: "🎨",
        description:
          "Design experiences that are both stunning and user-focused.",
      },
      {
        label: "Website Development",
        href: "/services/website-development",
        icon: "💻",
        description:
          "Custom-coded websites that are fast, scalable, and SEO-ready.",
      },
      {
        label: "Mobile Application",
        href: "/services/mobile-application",
        icon: "📱",
        description:
          "Build powerful Android & iOS apps for your business needs.",
      },
      {
        label: "CRM/MLM",
        href: "/services/crm-mlm",
        icon: "🧩",
        description:
          "Custom CRM & MLM platforms to automate and scale your business.",
      },
      {
        label: "Search Engine Optimization (SEO)",
        href: "/services/search-engine-optimization",
        icon: "🚀",
        description: "Rank higher on Google with our proven SEO strategies.",
      },
      {
        label: "Google My Business",
        href: "/services/google-my-business",
        icon: "📍",
        description: "Get discovered locally with optimized GMB listings.",
      },
      {
        label: "Paid Advertising",
        href: "/services/paid-advertising",
        icon: "💸",
        description: "Maximize ROI with strategic Google & Meta ad campaigns.",
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
        icon: "📢",
        description: "Grow your brand with targeted social media strategies.",
      },
      {
        label: "Blog And Articles",
        href: "/services/blog-and-articles",
        icon: "📝",
        description:
          "Boost engagement and SEO with relevant, fresh blog content.",
      },
      {
        label: "Content Writing",
        href: "/services/content-writing",
        icon: "✍️",
        description:
          "Clear, persuasive content that speaks your brand’s voice.",
      },
      {
        label: "Branding and Logo Design",
        href: "/services/logo-design",
        icon: "🏷️",
        description: "Create memorable logos and a strong visual identity.",
      },
      {
        label: "Landing Page Design",
        href: "/services/landing-page-design",
        icon: "🧲",
        description: "High-converting landing pages built for lead generation.",
      },
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
    <header className="fixed max bg-gray-100 shadow-2xl top-0 left-0 right-0  mx-auto w-full z-50 transition-all duration-500 py-2 px-4 md:px-12">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Image
                src="/logo.png"
                alt="Enegix Web Solutions"
                width={70}
                height={70}
                className="relative h-10 w-10 md:h-20 md:w-20 rounded-full object-cover transition-all duration-500"
              />
            </motion.div>
            <span className="font-extrabold md:text-3xl text-lg">
              Enegix Web Solutions
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-1">
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
              }}>
              {link.hasDropdown ? (
                <Link href={link.href as Route}>
                  <motion.button
                    className={cn(
                      "flex items-center px-4 py-2.5 rounded-lg text-lg font-extrabold transition-all duration-300 cursor-pointer relative group"
                    )}>
                    <span className="relative z-10 font-bold">
                      {link.label}
                    </span>
                    <ChevronDownIcon
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200 text-black",
                        activeDropdown === link.label ? "rotate-180" : ""
                      )}
                    />
                    {hoveredLink === link.label && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-400 rounded-full"
                        layoutId="navHover"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.button>
                </Link>
              ) : (
                <motion.div whileHover={{ y: -2 }} className="relative">
                  <Link
                    href={link.href as Route}
                    className={cn(
                      "flex items-center px-4 py-2.5 rounded-lg text-lg transition-all duration-300 cursor-pointer relative",
                      isLinkActive(link.href)
                        ? "text-white bg-gradient-to-r from-green-700/50 to-green-700/50 backdrop-blur-sm border border-teal-600/30 shadow-lg shadow-blue-900/20"
                        : "text-black hover:text-gray-800"
                    )}>
                    <span className="relative z-10 font-bold">
                      {link.label}
                    </span>
                  </Link>
                  {hoveredLink === link.label && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-400 rounded-full"
                      layoutId="navHover"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.div>
              )}

              {/* Redesigned Dropdown Menu for Services */}
              {link.hasDropdown &&
                activeDropdown === link.label &&
                link.label === "Services" && (
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-5xl bg-white backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl shadow-gray-900/20 p-4 mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{ transformOrigin: "top" }}>
                    <div className="grid grid-cols-4 gap-4">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href as Route}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-100/50 transition-all duration-300 border border-transparent hover:border-blue-200">
                          <span className="text-2xl mt-1">{item.icon}</span>
                          <div>
                            <h4 className="text-md font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1 line-clamp-3">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <motion.div
                      className="absolute -top-2 left-1/2 w-4 h-4 bg-white/95 transform -translate-x-1/2 rotate-45 border-l border-t border-gray-200"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    />
                  </motion.div>
                )}

              {/* Default Dropdown for Company */}
              {link.hasDropdown &&
                activeDropdown === link.label &&
                link.label !== "Services" && (
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl shadow-gray-900/30 p-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}>
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href as Route}
                        className="block px-4 py-3 text-sm text-black hover:text-gray-800 hover:bg-gray-100/30 rounded-lg transition-all duration-200 relative group">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}>
                          {item.label}
                          <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
            </div>
          ))}

          {/* CTA Button */}
          <motion.div
            className=""
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <div className="">
                <RainbowButton>Get Started</RainbowButton>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col items-center justify-center p-2 rounded-lg bg-gray-100/30 hover:bg-gray-200/50 transition-colors duration-200 border border-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3BottomRightIcon className="h-6 w-6 text-black" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}>
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
                          className="w-full flex items-center justify-between px-4 py-3 text-black hover:text-gray-800 hover:bg-gray-100/30 rounded-lg transition-all duration-200 border border-gray-200">
                          <span>{link.label}</span>
                          <ChevronDownIcon
                            className={cn(
                              "h-4 w-4 transition-transform duration-200 text-black",
                              activeDropdown === link.label ? "rotate-180" : ""
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              className="ml-4 mt-2 space-y-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}>
                              {link.dropdownItems?.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href as Route}
                                  className="block px-4 py-2 text-sm text-black/80 hover:text-gray-800 hover:bg-gray-100/20 rounded-lg transition-all duration-200"
                                  onClick={() => setMobileMenuOpen(false)}>
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
                        className="block px-4 py-3 text-black hover:text-gray-800 hover:bg-gray-100/30 rounded-lg transition-all duration-200 border border-gray-200"
                        onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="relative group">
                      <div className=" inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <RainbowButton
                        variant="outline"
                        size="lg"
                        className="w-full font-semibold relative border-blue-500/30 hover:border-blue-400/50 text-white">
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
    </header>
  );
}
