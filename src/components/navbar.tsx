"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDownIcon,
  XMarkIcon,
  Bars3BottomRightIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { Route } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { 
  FaRocket, 
  FaBuilding,
  FaUsers,
  FaBriefcase,
  FaNewspaper
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Subcategory {
  label: string;
  href: string;
  description: string;
}

interface DropdownItem {
  label: string;
  href: string;
  icon: IconType;
  description: string;
  subcategories?: Subcategory[];
}

const navLinks = [
  {
    label: "Services",
    href: "/services",
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
      {
        label: "About Us",
        href: "/about",
        icon: FaBuilding,
        description: "Learn more about our company and mission",
      },
      {
        label: "Our Team",
        href: "/team",
        icon: FaUsers,
        description: "Meet the talented people behind our success",
      },
      {
        label: "Careers",
        href: "/careers",
        icon: FaBriefcase,
        description: "Join our team and grow your career with us",
      },
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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

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
    return pathname ? pathname.startsWith(href) : false;
  };

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setHoveredCategory(null);
  };

  const handleCategoryHover = (categoryLabel: string) => {
    setHoveredCategory(categoryLabel);
  };

  return (
    <header className="fixed max bg-gray-100/75 backdrop-blur-lg shadow-lg top-0 left-0 right-0  mx-auto w-full z-50 transition-all duration-500 py-2 px-4 md:px-12">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src="/logo9.png"
                alt="Enegix Web Solutions"
                width={40}
                height={30}
                className="  md:w-13  object-cover transition-all duration-500"
              />
            </motion.div>
            <span className="font-extrabold md:text-3xl text-lg ml-3 ">
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
                      "flex items-center px-5 py-2 rounded-lg text-lg font-extrabold transition-all duration-300 cursor-pointer relative group",
                      isLinkActive(link.href)
                        ? "text-black border border-teal-300 rounded-full"
                        : "text-black hover:text-teal-800"
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
                    {hoveredLink === link.label && !isLinkActive(link.href) && (
                      <motion.div
                        className="absolute inset-0 border border-teal-300 rounded-full"
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
                <motion.div  className="relative">
                  <Link
                    href={link.href as Route}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-lg text-lg transition-all duration-300 cursor-pointer relative",
                      isLinkActive(link.href)
                        ? "text-black border border-teal-300 rounded-full "
                        : "text-black hover:text-teal-800"
                    )}>
                    <span className="relative z-10 font-bold">
                      {link.label}
                    </span>
                  </Link>
                  {hoveredLink === link.label && !isLinkActive(link.href) && (
                    <motion.div
                      className="absolute inset-0 border border-teal-300 rounded-full"
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

              {/* New Hierarchical Services Dropdown */}
              {link.hasDropdown &&
                activeDropdown === link.label &&
                link.label === "Services" && (
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-4xl bg-white backdrop-blur-xl border border-teal-200 rounded-xl shadow-2xl shadow-teal-900/20 p-4 mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{ transformOrigin: "top" }}>
                    
                    <div className="flex">
                      {/* Left side - Main Categories */}
                      <div className="w-1/2 pr-4 border-r border-teal-200">
                        <h3 className="text-lg font-bold text-teal-900 mb-4 px-3">Service Categories</h3>
                        <div className="space-y-1">
                          {link.dropdownItems?.map((category) => (
                            <div
                              key={category.label}
                              onMouseEnter={() => handleCategoryHover(category.label)}
                              className={cn(
                                "group flex items-center justify-between p-3 rounded-lg transition-all duration-300 cursor-pointer",
                                hoveredCategory === category.label
                                  ? "bg-teal-50 border-teal-200 border"
                                  : "hover:bg-teal-50 border border-transparent"
                              )}
                            >
                              <div className="flex items-center space-x-3">
                                <div className={cn(
                                  "transition-colors duration-300",
                                  hoveredCategory === category.label ? "text-teal-600" : "text-teal-500"
                                )}>
                                  <category.icon className="w-6 h-6" />
                                </div>
                                <div>
                                  <h4 className={cn(
                                    "font-semibold transition-colors duration-300",
                                    hoveredCategory === category.label ? "text-teal-700" : "text-teal-900"
                                  )}>
                                    {category.label}
                                  </h4>
                                  <p className="text-xs text-teal-600 mt-1">
                                    {category.description}
                                  </p>
                                </div>
                              </div>
                              <ChevronRightIcon className={cn(
                                "w-4 h-4 transition-all duration-300",
                                hoveredCategory === category.label ? "text-teal-600 translate-x-1" : "text-teal-400"
                              )} />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right side - Subcategories */}
                      <div className="w-1/2 pl-4">
                        {hoveredCategory ? (
                          <div>
                            <h3 className="text-lg font-bold text-teal-700 mb-4 px-3">
                              {hoveredCategory}
                            </h3>
                            <div className="space-y-2">
                              {(link.dropdownItems as DropdownItem[])
                                ?.find(cat => cat.label === hoveredCategory)
                                ?.subcategories?.map((subcategory: Subcategory) => (
                                <Link
                                  key={subcategory.label}
                                  href={subcategory.href as Route}
                                  className="group block p-3 rounded-lg hover:bg-teal-50 transition-all duration-300 border border-transparent hover:border-teal-200"
                                >
                                  <h5 className="font-semibold text-teal-900 group-hover:text-teal-600 transition-colors mb-1">
                                    {subcategory.label}
                                  </h5>
                                  <p className="text-xs text-teal-600 leading-relaxed">
                                    {subcategory.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center text-teal-500">
                              <FaRocket className="w-12 h-12 mx-auto mb-3 text-teal-300" />
                              <p className="text-sm">Hover over a category to see services</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="absolute -top-2 left-1/2 w-4 h-4 bg-white/95 transform -translate-x-1/2 rotate-45 border-l border-t border-teal-200"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    />
                  </motion.div>
                )}

              {/* Company Dropdown (unchanged) */}
              {link.hasDropdown &&
                activeDropdown === link.label &&
                link.label === "Company" && (
                  <motion.div
                    className="absolute top-full -left-1/2 w-80 bg-white backdrop-blur-xl border border-teal-200 rounded-xl shadow-2xl shadow-teal-900/30 p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}>
                    <div className="space-y-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href as Route}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-teal-100/50 transition-all duration-300 border border-transparent hover:border-teal-200">
                          <div className="text-teal-600 mt-1">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-teal-900 group-hover:text-teal-600 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-xs text-teal-600 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <motion.div
                      className="absolute -top-2 left-1/2 w-4 h-4 bg-white/95 transform -translate-x-1/2 rotate-45 border-l border-t border-teal-200"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    />
                  </motion.div>
                )}
            </div>
          ))}

          {/* CTA Button */}
          <Link className="ml-6" href="/contact">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col items-center justify-center p-2 rounded-lg bg-teal-100/30 hover:bg-teal-200/50 transition-colors duration-200 border border-teal-200"
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
                          className="w-full flex items-center justify-between px-4 py-3 text-black hover:text-teal-800 hover:bg-teal-100/30 rounded-lg transition-all duration-200 border border-teal-200">
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
                              {link.label === "Services" ? (
                                // Mobile hierarchical services menu
                                (link.dropdownItems as DropdownItem[])?.map((category) => (
                                  <div key={category.label} className="border-l-2 border-teal-200 pl-3 mb-3">
                                    <h4 className="font-semibold text-teal-700 mb-2 text-sm">
                                      {category.label}
                                    </h4>
                                    {category.subcategories?.map((subcategory: Subcategory) => (
                                      <Link
                                        key={subcategory.label}
                                        href={subcategory.href as Route}
                                        className="block px-2 py-1 text-xs text-black/80 hover:text-teal-800 hover:bg-teal-100/20 rounded transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}>
                                        {subcategory.label}
                                      </Link>
                                    ))}
                                  </div>
                                ))
                              ) : (
                                // Regular company menu
                                link.dropdownItems?.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href as Route}
                                    className="block px-4 py-2 text-sm text-black/80 hover:text-teal-800 hover:bg-teal-100/20 rounded-lg transition-all duration-200"
                                    onClick={() => setMobileMenuOpen(false)}>
                                    {item.label}
                                  </Link>
                                ))
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href as Route}
                        className="block px-4 py-3 text-black hover:text-teal-800 hover:bg-teal-100/30 rounded-lg transition-all duration-200 border border-teal-200"
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
                      <div className=" inset-0 bg-gradient-to-r from-teal-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <Button className="py-2">
                        Get Started
                      </Button>
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
