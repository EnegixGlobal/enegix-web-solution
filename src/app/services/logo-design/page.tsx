"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  PenTool,
  Palette,
  Layers,
  Type,
  Image as ImageIcon,
  FileText,
  CheckCircle,
  ArrowRight,
  Globe,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Meteors } from "@/components/magicui/meteors";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import { enablePageScroll } from "@/utils/scroll-helper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// SEO Metadata for logo design
const seoData = {
  "logo-design": {
    title: "Logo Design Company India, Branding India",
    description:
      "Get a logo that tells your story. Our creative team at Enegix crafts brand identities that stand out across digital and print platforms in India.",
    keywords:
      "logo design company India, branding services india, graphic design India, brand identity design, visual design services",
    canonicalUrl: "https://enegixwebsolutions.com/services/logo-design",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Logo Design & Branding Services",
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
        "Get a logo that tells your story. Our creative team at Enegix crafts brand identities that stand out across digital and print platforms in India.",
      serviceType: "Logo Design & Branding",
    },
  },
};

const brandingFeatures = [
  {
    icon: Layers,
    title: "Full Identity Systems",
    description:
      "Cohesive branding packages including logos, color palettes, and brand voice",
  },
  {
    icon: Target,
    title: "Strategic Brand Building",
    description:
      "In-depth workshops to define purpose, positioning, and messaging",
  },
  {
    icon: FileText,
    title: "Consistency Standards",
    description:
      "Comprehensive brand guidelines for alignment across all platforms",
  },
  {
    icon: Type,
    title: "Messaging That Connects",
    description:
      "Crafting taglines and tone for emotional and communicative clarity",
  },
  {
    icon: Palette,
    title: "Visual Differentiation",
    description:
      "Designing market-specific visuals that stand out and scale effectively",
  },
  {
    icon: PenTool,
    title: "Smart Rebranding",
    description:
      "Modernizing your brand identity while preserving core recognition",
  },
];

const designServices = [
  {
    name: "Logo Design",
    description: "Creating distinctive symbols for brand identification",
    features: ["Multiple Concepts", "Vector Formats", "Trademark Guidance"],
  },
  {
    name: "Brand Identity",
    description: "Complete visual identity system for your business",
    features: ["Color Palette", "Typography", "Visual Elements"],
  },
  {
    name: "Graphic Design",
    description: "Marketing materials that communicate your brand",
    features: ["Business Cards", "Letterheads", "Social Media Kits"],
  },
  {
    name: "Rebranding",
    description: "Refreshing existing brands for modern appeal",
    features: ["Brand Audit", "Strategic Refresh", "Implementation"],
  },
];

const stats = [
  { number: "300+", label: "Brands Designed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "5+", label: "Design Awards" },
  { number: "24/7", label: "Support Available" },
];

const relatedServices = [
  {
    title: "Web Development",
    description: "Custom websites that showcase your brand identity",
    href: "/services/web-development",
    icon: Globe,
  },
  {
    title: "Digital Marketing",
    description: "Promote your brand across digital channels",
    href: "/services/digital-marketing",
    icon: Target,
  },
];

export default function LogoDesignPage() {
  const [mounted, setMounted] = useState(false);
  const currentSeoData = seoData["logo-design"];

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
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
              alt="Logo Design Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-teal-900/60" />
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
              <ol className="flex items-center space-x-2 text-sm text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-white font-medium" aria-current="page">
                  Logo Design
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
                <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white w-fit shadow-lg">
                  <PenTool className="w-8 h-8" />
                </div>

                {/* Title - H1 */}
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg">
                  Logo Design Company in India
                </h1>

                {/* Description with your content */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
                  <p className="text-white text-lg leading-relaxed">
                    We, at Enegix Web Solutions Pvt. Ltd., feel that your logo
                    is not merely a symbol—it's your story in one frame. Being a
                    progressive{" "}
                    <span className="font-extrabold text-teal-300">
                      Logo Design Company in India
                    </span>
                    , we care beyond looks to create identities that speak to
                    your people and tell your story. Whether startup looking for
                    a dramatic launch or an established brand looking for a
                    reboot, we combine strategy with creativity to make your
                    logo stand out, recall, and last. We create designs that
                    look amazing yet communicate clearly in digital and print.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link href="/#contact">
                    <RainbowButton
                      size="lg"
                      className="text-sm px-8 py-3 shadow-lg">
                      Start Your Branding
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
                    <div className="grid grid-cols-2 gap-6 w-full">
                      {[
                        "Logo Design",
                        "Brand Identity",
                        "Visual Systems",
                        "Guidelines",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-6 shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center text-white mb-3 shadow-lg">
                            <PenTool className="w-6 h-6" />
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
          </div>
        </header>
        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white p-6 rounded-xl border border-teal-100 shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Branding Features Section */}
        <section className="py-16 px-4 relative bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                <span className="text-teal-600">Branding in India</span> That
                Transcends the Logo
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                True Branding in India is the emotional DNA of a company—and at
                Enegix Web Solutions Pvt. Ltd., we create brands that breathe,
                live, and grow. From tone of voice to visual systems, we craft
                branding that is coherent, compelling, and competitive. We make
                sure that your audience feels your business the same way
                everywhere.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                More than design, our branding work tells stories, inspires
                trust, and establishes loyalty. We turn businesses into brands
                people remember.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-gray-900">
                        {feature.title}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-14">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>{" "}
          </div>
        </section>
        {/* Graphic Design Section */}
        <section className="py-16 px-4 relative bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-gray-900">
                <span className="text-teal-600">Graphic Design in India</span> –
                Functionality Meets Art
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Being a creative hotspot for Graphic Design in India, Enegix Web
                Solutions Pvt. Ltd. provides design resources that are both
                stunning and driven by purpose. We weave together design
                thinking and marketing understanding to design visuals that
                advocate campaigns, facilitate communication, and make ideas
                tangible.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From brochures and packaging to social media creatives and pitch
                decks, all that we create is in service to your business
                objectives and brand aesthetic. It's not about creating things
                that are beautiful to look at—it's about creating things that
                work more effectively.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Compelling Collateral",
                  desc: "Effective marketing collateral such as flyers, brochures, and banners",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Trendy Social Creatives",
                  desc: "Social media creatives that combine narrative with trend design",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Persuasive Visual Aids",
                  desc: "Presentation decks and infographics optimized for persuasion and understanding",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  ),
                },
                {
                  title: "Engaging Packaging Design",
                  desc: "Product packaging that boosts shelf presence and consumer engagement",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  ),
                },
                {
                  title: "Print-Ready Branding",
                  desc: "Print-ready artwork with accurate layout and consistency of branding",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Custom Visual Content",
                  desc: "Visual content customized for websites, campaigns, and business use",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
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
                      <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        {feature.icon}
                      </div>
                      <div className="font-bold text-gray-900">
                        {feature.title}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-14">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>{" "}
        {/* Design Services Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center">
              <h4 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                <span className="text-teal-600">Design Services</span> We Offer
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Comprehensive design solutions tailored to your brand needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md">
                  <div className="font-bold text-lg text-gray-900 mb-3">
                    {service.name}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
     
        {/* Related Services */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 tracking-tight text-center text-gray-900">
              Related <span className="text-teal-600">Services</span>
            </motion.h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-md">
                  <Link href={service.href}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4 text-teal-600">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
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
                Ready to Create Your Brand Identity?
              </h5>
              <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's design a logo and visual identity that truly represents
                your business
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
