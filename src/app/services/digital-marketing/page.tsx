"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Meteors } from "@/components/magicui/meteors";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import Link from "next/link";
import Image from "next/image";
import { enablePageScroll } from "@/utils/scroll-helper";

const seoData = {
  "digital-marketing": {
    title:
      "Digital Marketing Agency Ranchi, Top 10 Best Digital Marketing Services India",
    description:
      "Get high-performance digital marketing campaigns including SEO, social media, content & ads. Enegix helps you drive traffic, leads, and sales online.",
    keywords:
      "digital marketing agency ranchi, digital marketing services india, content marketing india, seo services ranchi, ppc advertising",
    canonicalUrl: "https://enegixwebsolutions.com/services/digital-marketing",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Digital Marketing Services",
      provider: {
        "@type": "Organization",
        name: "Enegix Web Solutions Pvt. Ltd.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          addressCountry: "India",
        },
      },
      description:
        "Comprehensive digital marketing services including SEO, PPC, content marketing, and social media marketing",
      serviceType: "Digital Marketing",
    },
  },
};

const services = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Custom websites and web applications built with modern technologies.",
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
        className="w-8 h-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
  },
];

const RelatedServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4 text-teal-600">
        {service.icon}
      </div>
      <h5 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h5>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      <Link
        href={`/services/${service.id}`}
        className="text-teal-600 font-medium text-sm hover:text-teal-800 transition-colors flex items-center gap-1">
        Learn More <span>→</span>
      </Link>
    </motion.div>
  );
};

export default function DigitalMarketingPage() {
  const [mounted, setMounted] = useState(false);
  const currentSeoData = seoData["digital-marketing"];
  const relatedServices = services.slice(0, 3);

  useEffect(() => {
    setMounted(true);
    if (currentSeoData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(currentSeoData.structuredData);
      document.head.appendChild(script);
      document.title = currentSeoData.title;

      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", currentSeoData.description);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", currentSeoData.description);
        document.head.appendChild(metaDescription);
      }

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", currentSeoData.keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", currentSeoData.keywords);
        document.head.appendChild(metaKeywords);
      }

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

  useEffect(() => {
    if (!mounted) return;
    enablePageScroll();
    const mainContent =
      document.getElementById("__next") || document.querySelector("main");
    if (mainContent) {
      mainContent.style.transform = "none";
    }
  }, [mounted]);

  return (
    <>
      {" "}
      <ScrollFix />
      <Navbar />
      <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        {/* Hero Section with Background Image */}
        <header
          className="relative pt-24 pb-16 px-6 lg:px-8 min-h-[80vh] flex items-center"
          role="banner">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
              alt="Digital Marketing Background"
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
                  Digital Marketing
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
                      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                    />
                  </svg>
                </div>

                {/* Title - H1 */}
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg">
                  Digital Marketing Agency in Ranchi
                </h1>

                {/* Description with your content */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <p className="text-white text-lg leading-relaxed">
                    At Enegix Web Solutions Pvt. Ltd., we are not simply a{" "}
                    <span className="font-extrabold text-teal-300">
                      Digital Marketing Agency in Ranchi
                    </span>
                    , but a catalyst for your growth strategy. In a digital age overflowing with ads, likes, and scrolls, we focus on creating experiences that connect, resonate, and deliver. Our marketing philosophy blends data intelligence with storytelling craft, leaving every campaign felt rather than just seen. Besides building branding presence and engineering lead conversions, we act as an extension of your vision; creatively and performance-led by the edge of precision marketing.
                  </p>
                </div>

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
              </motion.div>

              {/* Right Column - Enhanced Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block">
                <div className="relative w-full h-80 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-emerald-400/20" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {[
                        "SEO",
                        "PPC",
                        "Content",
                        "Social",
                        "Email",
                        "Analytics",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-4 shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center text-white mb-2 shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-white text-center">
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
        </header>{" "}
        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { value: "200+", label: "Successful Campaigns" },
                { value: "95%", label: "Client Satisfaction" },
                { value: "3-5x", label: "Average ROI" },
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
        {/* Main Content */}
        <section className="py-16 px-4 relative bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto max-w-6xl">
            <article className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                  <span className="text-teal-600">
                    Top 10 Best Digital Marketing Services in India
                  </span>{" "}
                  Is In Tune With The Times
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  What does <span className="font-extrabold text-teal-600">Top 10 Best Digital Marketing Services in India</span> mean to your brand in today's world? An agile and omnipresent approach intertwined with becoming deeply relevant to customers across the contexts of their environments search, scroll, stream, and/or shop. At Enegix Web Solutions Pvt. Ltd., we architect digital ecosystems that are designed for evolution, as your customers do. We bring behavioral insights, automated intelligence, and platform-native expertise into play for wholly personalized experiences with your audience down to the minutia of their having to be in search, scroll, stream, or shop. Every touchpoint is made maximally engaging and fine-tuned to be ready for action, providing your brand a seamless, data-driven existence within a digital environment.
                </p>
                
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Strategic SEO Growth",
                    desc: "Comprehensive, sustainable SEO strategies that drive long-term visibility",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Performance-Driven PPC",
                    desc: "Precision-targeted ad campaigns designed to maximize ROI with efficient spend",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z" />
                        <path d="M6 6a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V6z" />
                      </svg>
                    )
                  },
                  {
                    title: "Email Automation",
                    desc: "Smart, automated email journeys that turn curiosity into conversions",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    )
                  },
                  {
                    title: "Social Storytelling",
                    desc: "Community-building content that sparks conversations and strengthens brand identity",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Reputation Authority",
                    desc: "Digital reputation management that enhances brand credibility and trust",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Unified Brand Messaging",
                    desc: "Consistent brand voice across platforms for cohesive digital presence",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mt-1 text-teal-600">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm mb-2">{feature.title}</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </article>

            <article className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-gray-900">
                  The <span className="text-teal-600">Content Marketing in India</span>{" "}
                  That Creates Dialogues
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  A good content marketer doesn't sell; they speak, inspire, and solve. At Enegix Web Solutions Pvt. Ltd., we have a belief in <span className="font-extrabold text-teal-600">Content Marketing in India</span> that captures attention and keeps it. Every blog, video, guide, or post we produce is rooted in strategy and backed up by insights that are crafted to position your brand as a trusted voice, not just another presence. Be it a thought leadership initiative or conversions, we convert into material that is relevant, relatable, and results-driven.
                </p>
             
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Educational Long-Form Content",
                    desc: "Long-form content and blogs designed to educate and engage",
                  },
                  {
                    title: "Conversion-Focused Copywriting",
                    desc: "Optimization for conversion - friendly landing pages plus website copy",
                  },
                  {
                    title: "Investor-Aligned Content Strategy",
                    desc: "Investor intent aligned strategy calendar",
                  },
                  {
                    title: "Storytelling for Social & Video",
                    desc: "High impact storytelling for social media and video",
                  },
                  {
                    title: "SEO Content with Organic Value",
                    desc: "Natural, informative, and well-indexed SEO content",
                  },
                  {
                    title: "Authority-Building Case Content",
                    desc: "Case studies, whitepapers, and guides that build authority",
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
                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
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
        <section className="py-16 px-4 bg-white">
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
        </section>
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
                Ready to Transform Your Digital Presence?
              </h5>
              <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how our digital marketing services can help you
                achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <RainbowButton
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100">
                    Contact Us
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
