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
} from "@heroicons/react/24/outline";
import { Route } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { FaBuilding, FaUsers, FaBriefcase } from "react-icons/fa";
import { IconType } from "react-icons";

interface DropdownItem {
  label: string;
  href: string;
  icon: IconType;
  description: string;
}

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
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
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // ⭐ NEW — mobile company dropdown toggle
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === href : pathname?.startsWith(href);

  return (
    <header className="fixed bg-gray-100/75 backdrop-blur-lg shadow-lg top-0 left-0 right-0 mx-auto w-full z-50 transition-all duration-500 py-2 px-4 md:px-12">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src="/enegix_logo.svg"
              alt="Enegix Web Solutions"
              width={120}
              height={40}
              className="h-8 w-auto md:h-11 object-contain"
            />
          </motion.div>

          <span className="font-extrabold md:text-3xl text-lg">
            Enegix Web Solutions
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.hasDropdown && setHoveredLink(link.label)
              }
              onMouseLeave={() => {
                setHoveredLink(null);
                setActiveDropdown(null);
              }}
            >
              <Link
                href={link.href as Route}
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg text-lg font-bold transition-all",
                  isLinkActive(link.href)
                    ? "text-black border border-teal-300 rounded-full"
                    : "text-black hover:text-teal-800"
                )}
                onMouseEnter={() =>
                  link.hasDropdown && setActiveDropdown(link.label)
                }
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDownIcon
                    className={`ml-1 h-4 w-4 transition ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* DESKTOP COMPANY DROPDOWN */}
              {link.label === "Company" &&
                activeDropdown === "Company" && (
                  <motion.div
                    className="absolute top-full -left-1/2 w-80 bg-white border rounded-xl shadow-xl p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href as Route}
                        className="flex gap-3 p-3 rounded-lg hover:bg-teal-50"
                      >
                        <item.icon className="text-teal-600 mt-1" />
                        <div>
                          <h4 className="text-sm font-semibold">
                            {item.label}
                          </h4>
                          <p className="text-xs text-teal-600">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
            </div>
          ))}

          <Link href="/contact" className="ml-6">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg border bg-white"
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3BottomRightIcon className="h-6 w-6" />
          )}
        </motion.button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <div className="pt-4 pb-6 space-y-2">

              {navLinks.map((link) =>
                link.label === "Company" ? (
                  /* 📱 MOBILE COMPANY DROPDOWN */
                  <div key="Company" className="px-4">
                    <button
                      className="w-full flex justify-between items-center px-3 py-3 border rounded-lg"
                      onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    >
                      Company
                      <ChevronDownIcon
                        className={`h-5 w-5 transition ${
                          mobileCompanyOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileCompanyOpen && (
                      <div className="mt-2 rounded-lg border bg-gray-50">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href as Route}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex gap-3 px-4 py-3 hover:bg-teal-50"
                          >
                            <item.icon className="text-teal-600 mt-1" />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href as Route}
                    className="block px-4 py-3 border rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-3">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
