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

// SEO Metadata for web development
const seoData = {
  "web-development": {
    title: "Web Development Company Ranchi, Website Development Services India",
    description:
      "We design and develop custom, mobile-friendly websites that convert. Partner with India's trusted web development team for your business success.",
    keywords:
      "web development company ranchi, website development services india, web design ranchi, custom websites, responsive web design",
    canonicalUrl: "https://enegixwebsolutions.com/services/web-development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Development Services",
      provider: {
        "@type": "Organization",
        name: "Enegix Global Pvt. Ltd.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          addressCountry: "India",
        },
      },
      description:
        "Complete web development services including custom website design, development, and digital marketing solutions",
      serviceType: "Web Development",
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
        className="w-10 h-10">
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
      "Drive organic traffic with our tailored search engine optimization strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    id: "ppc-advertising",
    title: "PPC Advertising",
    shortDescription:
      "Strategic pay-per-click campaigns that maximize your ROI.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
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
      <h5 className="text-lg font-bold text-white mb-2 group-hover:text-teal-600 transition-colors duration-300">
        {service.title}
      </h5>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
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

export default function WebDevelopmentPage() {
  const [mounted, setMounted] = useState(false);

  // Get SEO data for web development
  const currentSeoData = seoData["web-development"];

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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
              alt="Web Development Background"
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
          </div>{" "}
          <div className="max-w-7xl mx-auto relative z-20">
            {" "}
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-200">
                <li>
                  <Link
                    href="/"
                    className="hover:text-gray-900 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-600">/</li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-gray-900 transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-gray-600">/</li>
                <li className="text-teal-400 font-medium" aria-current="page">
                  Web Development
                </li>
              </ol>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </div>
                {/* Title - H1 */}
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg">
                  Web Development Company in Ranchi
                </h1>{" "}
                {/* Description with your content */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <p className="text-white text-lg leading-relaxed">
                    At Enegix Global, Ltd., we understand the importance of a{" "}
                    <span className="font-extrabold text-teal-300">
                      Web Development Company in Ranchi
                    </span>{" "}
                    to do more than simply "build" your next website. As your
                    partner of technology, our products and services will do
                    more than develop a platform; we create digital experiences
                    that embody your brand, connect with your audience, and
                    scale with your business. We create digital experiences for
                    brands of all sizes, from startups to enterprises, utilizing
                    best practices around simple architecture, modern coding
                    techniques, and a user-centric perspective. We build website
                    solutions that are not only operational but forward-thinking
                    - whether it is developing a site that leverages AI tooling
                    or is prepared for future scaling, we will build your
                    website with what comes next in mind.
                  </p>
                </div>{" "}
                {/* CTA Button */}
                <div className="pt-4">
                  <Link href="/#contact">
                    <RainbowButton
                      size="lg"
                      className="text-sm px-8 py-3 shadow-lg">
                      Get Started Today
                    </RainbowButton>
                  </Link>
                </div>
              </motion.div>{" "}
              {/* Right Column - Enhanced Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block">
                <div className="relative w-full h-80 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-emerald-400/20" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-6 w-full">
                      {[
                        "React & Next.js",
                        "Node.js & APIs",
                        "Cloud Hosting",
                        "Mobile Apps",
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
                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-white text-center">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>{" "}
        </header>
        {/* Stats Section */}
        <section className="py-12 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "150+", label: "Websites Built" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "3x", label: "Faster Loading" },
                { value: "24/7", label: "Technical Support" },
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
        {/* Main Content Section with Semantic HTML */}
        <section className="py-16 px-4 relative" role="main">
          <div className="container mx-auto">
            {/* H2 Section - Website Development Services */}
            <article className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12">
                {" "}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                  <span className="text-teal-600">
                    Website Development Services in India
                  </span>{" "}
                  are Beyond the Basics
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our{" "}
                  <span className="font-extrabold text-teal-600">
                    Website Development Services in India
                  </span>{" "}
                  at Enegix Web Solutions Pvt. Ltd. are more than simply
                  providing a live URL—we create high-performing digital assets
                  that work as tirelessly as you do. Your website is not only a
                  digital presence; it is a living, breathing tool that can
                  automate processes, interact with users, and bring about
                  conversions. We build intelligent, adaptive solutions that
                  integrate within your business environment—from CRM systems to
                  chatbots—and optimize for speed, security, and
                  discoverability. In the competitive online world of today,
                  development isn't a formality—it's a game-changer.
                </p>
              </motion.div>{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Business-Driven Development",
                    desc: "Intelligent, objective-driven development specific to business needs",
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
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 010 1.886A3.75 3.75 0 1115.75 15 11.95 11.95 0 0117.636 9.364M9.75 12l-3-3m5.25 0a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "System Integration",
                    desc: "Tight integration with business utilities and third-party platforms",
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
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "SEO-Optimized Code",
                    desc: "SEO-optimized codebase and architecture to enhance discoverability",
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
                    title: "Mobile-Optimized Design",
                    desc: "Quick-loading, mobile-optimized designs for enhanced engagement",
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Enterprise Security",
                    desc: "Enterprise-grade security with proactive monitoring",
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
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Scalable Architecture",
                    desc: "Scalable builds that respond to market fluctuations and traffic spikes",
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
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l-1-3m1 3l-1-3m-16.5 0h16.5"
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
            </article>{" "}
            {/* H3 Section - Web Design */}
            <article className="mx-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-gray-900">
                  <span className="text-teal-600">Web Design in India</span>{" "}
                  That Connects, Converts, and Captivates
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The design at Enegix Web Solutions Pvt. Ltd. is never skin
                  deep- it is about building a connection. The philosophy of our{" "}
                  <span className="text-teal-600 font-extrabold">
                    Web Design in India
                  </span>{" "}
                  is very simple: try to make it feel natural, keeping it
                  purposeful, and think of the user at all times. Today's
                  audiences scroll fast, think smart, and expect a seamless
                  digital journey- hence our design approach is to blend
                  aesthetics with empathy- visual, flow, function- in the right
                  touch. From a loud hero section to crisp typography to subtle
                  animations, we design to guide, inspire, and convert-without
                  scaring or underwhelming.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Clear & Smart Visuals",
                    desc: "Smart designs for concise and effective visual communication",
                  },
                  {
                    title: "UX Backed by Data",
                    desc: "Data-driven and behavior-informed UX design",
                  },
                  {
                    title: "Interactive User Engagement",
                    desc: "Interactive features to increase engagement and time-on-site",
                  },
                  {
                    title: "Mobile-First Responsiveness",
                    desc: "Mobile-first approach to guarantee responsiveness on all screens",
                  },
                  {
                    title: "Branded Visual Storytelling",
                    desc: "Color palettes and narrative elements extending the brand story",
                  },
                  {
                    title: "Inclusive & Accessible Design",
                    desc: "Universal design solutions for accessibility in an inclusive user experience",
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
            </article>
          </div>
        </section>{" "}
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
                Ready to Build Your Dream Website?
              </h5>
              <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how our web development services can help you
                achieve your business goals. Our team is ready to create
                customized solutions for your unique needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <RainbowButton
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100">
                    Start Your Project
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
