"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Meteors } from "@/components/magicui/meteors";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import Link from "next/link";
import Image from "next/image";
import { enablePageScroll } from "@/utils/scroll-helper";

// SEO Metadata for PPC advertising
const seoData = {
  "ppc-advertising": {
    title: "PPC Advertising India, Google Ads India",
    description:
      "Drive instant leads with ROI-focused PPC services. From Google Ads to Meta campaigns, Enegix Global ensures every click counts toward your growth.",
    keywords:
      "ppc advertising, google ads management, facebook ads, linkedin ads, paid advertising, performance marketing, lead generation",
    canonicalUrl: "https://enegixwebsolutions.com/services/ppc-advertising",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "PPC Advertising Services",
      provider: {
        "@type": "Organization",
        name: "Enegix Web Solutions Pvt. Ltd.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "India",
          addressRegion: "Jharkhand",
          addressCountry: "India",
        },
      },
      description:
        "Performance-driven PPC advertising campaigns for immediate traffic and lead generation",
      serviceType: "PPC Advertising & Paid Media",
    },
  },
};

// Service data array - related services for suggestions
const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Comprehensive digital marketing strategies to grow your online presence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
        />
      </svg>
    ),
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    shortDescription:
      "Technical SEO and content strategies for better search rankings.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Modern, responsive websites and web applications.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
];

// Related Service Card Component
const RelatedServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-500 group transition-all duration-300 hover:shadow-lg hover:shadow-teal-100">
      <div className="mb-4 p-3 rounded-full bg-teal-50 w-fit text-teal-600 group-hover:text-white group-hover:bg-teal-600 transition-all duration-300">
        {service.icon}
      </div>
      <h5 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
        {service.title}
      </h5>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      <Link
        href={`/services/${service.id}`}
        className="text-teal-600 font-medium text-sm hover:text-teal-800 transition-colors">
        Learn More →
      </Link>
    </div>
  );
};

export default function PPCAdvertisingPage() {
  const [mounted, setMounted] = useState(false);

  // Get SEO data for PPC advertising
  const currentSeoData = seoData["ppc-advertising"];

  // Get 3 related services for suggestions
  const relatedServices = services.slice(0, 3);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Add structured data to head
    if (currentSeoData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(currentSeoData.structuredData);
      document.head.appendChild(script);

      // Update page title and meta description
      document.title = currentSeoData.title;

      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", currentSeoData.description);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", currentSeoData.description);
        document.head.appendChild(metaDescription);
      }

      // Add keywords meta tag
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", currentSeoData.keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", currentSeoData.keywords);
        document.head.appendChild(metaKeywords);
      }

      // Add canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", currentSeoData.canonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", currentSeoData.canonicalUrl);
        document.head.appendChild(canonical);
      }
    }
  }, [currentSeoData]);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (!mounted) return;

    // Enable page scrolling and fix scroll issues
    enablePageScroll();

    // Clear any transform styles that might be affecting scroll
    const mainContent =
      document.getElementById("__next") || document.querySelector("main");
    if (mainContent) {
      mainContent.style.transform = "none";
    }
  }, [mounted]);

  return (
    <>
      <ScrollFix />
      <Navbar />{" "}
      <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        {" "}
        {/* Hero Section with Background Image */}
        <header
          className="relative pt-24 pb-16 px-6 lg:px-8 min-h-[80vh] flex items-center"
          role="banner">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
              alt="PPC Advertising Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-teal-900/60" />
          </div>

          {/* Subtle decorative effects */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] opacity-5">
              <Meteors number={15} />
            </div>
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-teal-100 blur-3xl opacity-20" />
          </div>

          <div className="max-w-7xl mx-auto relative z-20">
            {" "}
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-teal-200">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-teal-300/70">/</li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-teal-300/70">/</li>
                <li className="text-white font-medium" aria-current="page">
                  PPC Advertising
                </li>
              </ol>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6">
                {" "}
                {/* Service Icon */}
                <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-teal-400 w-fit shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                </div>
                {/* Title - H1 */}
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                  PPC Advertisement in India
                </h1>{" "}
                {/* Description */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <p className="text-white text-lg leading-relaxed">
                    At Enegix Web Solutions Pvt. Ltd., what we consider{" "}
                    <span className="font-extrabold text-teal-300">
                      PPC Advertising in India
                    </span>{" "}
                    is a science of intent and impact. Creating our campaigns
                    lean, intelligent, and conversion-bound built on real-time
                    insight and audience behavior will depend on the action or
                    goal you have, whether launching a product, pulling leads,
                    or bringing in revenue. We deploy budget-smart strategies,
                    not just generating clicks but delivering results. Our paid
                    media team crafts high-performance ad creatives with
                    razor-sharp targeting designed for noise-breaking growth.
                  </p>
                </div>{" "}
                {/* CTA Button */}
                <div className="pt-4 flex gap-4">
                  <Link href="/#contact">
                    <RainbowButton
                      size="lg"
                      className="text-sm px-8 py-3 shadow-lg">
                      Get Started
                    </RainbowButton>
                  </Link>
                  
                </div>
              </motion.div>{" "}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block">
                <div className="relative w-full h-96 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-emerald-400/20" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-6 w-full">
                      {[
                        "Google Ads",
                        "Facebook Ads",
                        "LinkedIn Ads",
                        "Display Ads",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-6 shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center text-white mb-3 shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-6 h-6">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-white">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </header>
        {/* Stats Section */}
        <section className="py-12 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "300%", label: "Average ROAS" },
                { value: "45%", label: "Lower CPC" },
                { value: "2.8x", label: "Higher CTR" },
                { value: "24/7", label: "Campaign monitoring" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white p-6 rounded-xl border border-teal-100 shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Main Content Section */}
        <section id="services" className="py-16 px-4 relative" role="main">
          <div className="container mx-auto max-w-6xl">
            {/* PPC Services */}
            <article className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12">
                {" "}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                  <span className="text-teal-600"> Google Ads in India</span>{" "}
                  That Bring More Than Traffic
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Google is where decisions get made—Enegix Web Solutions Pvt.
                  Ltd. puts you at the helm when it counts. Our{" "}
                  <span className="font-extrabold text-shadow-green-500 text-green-600">
                    Google Ads in India
                  </span>{" "}
                  management integrates keen keyword tactics, persuasive ad
                  copy, and landing page optimization to drive high-quality
                  traffic that actually converts. We don't pursue impressions—we
                  build intent-driven campaigns with cost-effectiveness in
                  balance with impact. With data-driven cycles of optimization
                  and a discerning view to search trends, we get you ahead—and
                  keep you there
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Smart Keyword Targeting",
                    desc: "Intelligent keyword mapping on business priority",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Optimized Ad Performance",
                    desc: "Quality Score optimization to reduce CPC and increase rankings",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Conversion-Focused Pages",
                    desc: "Branded landing pages specifically matched to ad intent",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.5-3h15m-15 0a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 019.75 4.5h4.5a2.25 2.25 0 012.25 2.25v8.25A2.25 2.25 0 0114.25 17.25H9.75z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Cost Efficiency",
                    desc: "Negative keyword filtering to reduce wasteful expenditure.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Adaptive Ad Formats",
                    desc: "Responsive search ads and dynamic targeting capabilities.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Precise Audience Reach",
                    desc: "Geo-targeting and device optimization for exact delivery.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                        />
                      </svg>
                    ),
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md">
                    <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
                      {service.icon}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </article>
          </div>
        </section>
        {/* H3 Section */}
        <article className="mx-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12">
            {" "}
            <h3 className="text-2xl md:text-3xl font-bold  mb-6 tracking-tight text-gray-900">
              Paid Campaign{" "}
              <span className="text-teal-600">Experts in India</span> Who Design
              Outcomes
            </h3>
            <p className="text-gray-600 text-md    leading-relaxed">
              Being{" "}
              <span className="font-extrabold text-shadow-teal-600 text-teal-600">
                Paid Campaign Experts in India
              </span>{" "}
              is not just about handling platforms—it is about handling results.
              At Enegix Web Solutions Pvt. Ltd., we combine strategy, velocity,
              and data expertise to create campaigns that scale profitably. Our
              team doesn't place ads—we create ecosystems that build momentum.
              From retargeting warm leads, building full-funnel strategies on
              YouTube, Facebook, and LinkedIn, we optimize for each and every
              step of the customer journey. The outcome? Campaigns that are
              constantly learning, improving, and outshining.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cross-Platform Strategy",
                desc: "Multi-channel PPC campaigns across Google, Meta, LinkedIn for wider reach",
              },
              {
                title: "Full-Funnel Targeting",
                desc: " Strategic audience segmentation from awareness to retention",
              },
              {
                title: "Intent-Based Remarketing",
                desc: " Behavioral retargeting to bring back high-potential visitors",
              },
              {
                title: "Live Performance Tracking",
                desc: " Real-time analytics dashboards for transparent campaign insights",
              },
              {
                title: "Predictive Budget Planning",
                desc: " Forecasting and performance modeling before campaign launch",
              },
              {
                title: "Platform-Specific Creatives",
                desc: " Adaptive ad designs tailored to channel behavior and audience response",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </article>{" "}
        {/* Related Services */}
        <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 tracking-tight text-center text-gray-900">
              Related <span className="text-teal-600">Services</span>
            </motion.h5>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relService, index) => (
                <motion.div
                  key={relService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <RelatedServiceCard service={relService} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>{" "}
        {/* CTA Section */}
        <section className="py-20 px-4 relative bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')]"></div>
          </div>
          <div className="container mx-auto relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
              <h5 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Boost Your ROI?
              </h5>
              <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's create high-performing PPC campaigns that drive qualified
                traffic and convert visitors into customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <RainbowButton
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100">
                    Get Started
                  </RainbowButton>
                </Link>
                <Link href="/services">
                  <button className="px-6 py-3 text-sm font-medium text-white hover:text-teal-100 transition-colors border border-white/30 rounded-lg hover:border-white/50">
                    Explore All Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
