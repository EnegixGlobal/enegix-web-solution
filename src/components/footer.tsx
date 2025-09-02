"use client";

import React from "react";
import Link from "next/link";
import Container from "./Container";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
} from "react-icons/fa6";
import Button from "./Button";

const Footer = () => {
  const pageLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blogs" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Sitemap", href: "/sitemap" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/enegixwebsolution/",
      icon: <FaFacebookF size={16} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/enegixwebsolutions/",
      icon: <FaInstagram size={16} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/enegix-global-private-limited/",
      icon: <FaLinkedinIn size={16} />,
    },
    {
      label: "Threads",
      href: "https://www.threads.com/@enegixwebsolutions",
      icon: <FaThreads size={16} />,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 text-lg to-teal-900 text-gray-200 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-teal-600/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900/70 to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* About Us Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 to-teal-400 bg-clip-text text-transparent">
                Enegix Web Solutions
              </h3>
              <p className="text-sm leading-relaxed max-w-xs">
                Crafting innovative web solutions with cutting-edge technology
                and creative design to empower your digital presence.
              </p>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className="mt-1 flex-shrink-0 text-teal-400"
                  size={16}
                />
                <p className="text-xs leading-relaxed">
                     Enegix Web Solutions, House No.2, Old AG More, near Bharat Kitchen, above Saryu Sons Jwellers, Kadru, Delatoli, Ranchi, Jharkhand 834002 {" "}
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 transition-all duration-300 text-gray-200 hover:text-white shadow-md">
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Pages Section */}
            <div className="md:ml-14">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                Pages
              </h4>
              <ul className="space-y-3">
                {pageLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-teal-400 transition-colors duration-300 inline-block py-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                Contact
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:contact@enegixwebsolutions.com"
                  className="flex items-start gap-3 hover:text-teal-400 transition-colors duration-300 group">
                  <IoMdMail
                    className="mt-1 flex-shrink-0 text-teal-400"
                    size={16}
                  />
                  <span className="text-sm">
                    contact@enegixwebsolutions.com
                  </span>
                </a>
                <a
                  href="tel:+919608263050"
                  className="flex items-center gap-3 hover:text-teal-400 transition-colors duration-300 group">
                  <FaPhoneAlt
                    className="flex-shrink-0 text-teal-400"
                    size={16}
                  />
                  <span className="text-sm">+91 96082 63050</span>
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                Newsletter
              </h4>
              <p className="text-sm mb-4 max-w-xs">
                Stay updated with the latest news, offers, and insights from
                Enegix.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800/50 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 w-full border border-gray-700/50"
                  required
                />
                <Button
                  type="button"
                  className=" py-3">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8 mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Enegix Web Solutions. All rights
                reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs hover:text-teal-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-center sm:justify-start items-center gap-1 text-xs text-gray-500">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>in India</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
