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
import { 
  FaPalette, 
  FaCode, 
  FaMobile, 
  FaCog, 
  FaRocket, 
  FaMapMarkerAlt, 
  FaAd, 
  FaShare, 
  FaPen, 
  FaEdit, 
  FaTags, 
  FaBullseye 
} from "react-icons/fa";
import Button from "@/components/Button";

// SEO Metadata for Services page
const seoData = {
  title: "Our Services | Web Development, Digital Marketing & Design Solutions",
  description:
    "Comprehensive digital solutions including web development, e-commerce, PPC advertising, SEO optimization, logo design, and digital marketing services.",
  keywords:
    "web development, digital marketing, ecommerce solutions, ppc advertising, seo optimization, logo design, ranchi web solutions",
  canonicalUrl: "https://enegixwebsolutions.com/services",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Solutions Services",
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
    description: "Comprehensive digital solutions and services for businesses",
    serviceType: "Digital Solutions & Web Services",
  },
};

// Services data array based on navbar
const services = [
  {
    id: "ui-ux-designing",
    title: "UI/UX Designing",
    shortDescription: "Design experiences that are both stunning and user-focused.",
    description: "User-centered design solutions that combine aesthetics with functionality to create memorable digital experiences.",
    features: [
      "User Experience Research",
      "Interactive Prototyping", 
      "Visual Design Systems",
      "Usability Testing"
    ],
    image: "/web-development.jpg",
    icon: FaPalette,
    color: "from-purple-500 to-pink-600",
    href: "/services/ui-ux-designing"
  },
  {
    id: "website-development", 
    title: "Website Development",
    shortDescription: "Custom-coded websites that are fast, scalable, and SEO-ready.",
    description: "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Custom Web Applications",
      "Responsive Design",
      "Performance Optimization", 
      "SEO-Ready Code"
    ],
    image: "/web-development.jpg",
    icon: FaCode,
    color: "from-blue-500 to-cyan-600",
    href: "/services/website-development"
  },
  {
    id: "mobile-application",
    title: "Mobile Application",
    shortDescription: "Build powerful Android & iOS apps for your business needs.",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Push Notifications"
    ],
    image: "/web-development.jpg",
    icon: FaMobile,
    color: "from-green-500 to-emerald-600",
    href: "/services/mobile-application"
  },
  {
    id: "crm-mlm",
    title: "CRM/MLM Systems",
    shortDescription: "Custom CRM & MLM platforms to automate and scale your business.",
    description: "Comprehensive business management solutions with advanced automation and analytics capabilities.",
    features: [
      "Customer Relationship Management",
      "Multi-Level Marketing Tools",
      "Sales Automation",
      "Analytics Dashboard"
    ],
    image: "/web-development.jpg",
    icon: FaCog,
    color: "from-orange-500 to-red-600",
    href: "/services/crm-mlm"
  },
  {
    id: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortDescription: "Rank higher on Google with our proven SEO strategies.",
    description: "Data-driven SEO strategies that improve your search rankings and drive organic traffic to your website.",
    features: [
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "Content Optimization",
      "Local SEO"
    ],
    image: "/seo-optimization.jpg",
    icon: FaRocket,
    color: "from-teal-500 to-blue-600",
    href: "/services/search-engine-optimization"
  },
  {
    id: "google-my-business",
    title: "Google My Business",
    shortDescription: "Get discovered locally with optimized GMB listings.",
    description: "Local SEO optimization that helps your business get found by nearby customers searching for your services.",
    features: [
      "GMB Profile Optimization",
      "Local Citation Building",
      "Review Management",
      "Local SEO Strategy"
    ],
    image: "/web-development.jpg",
    icon: FaMapMarkerAlt,
    color: "from-red-500 to-pink-600",
    href: "/services/google-my-business"
  },
  {
    id: "paid-advertising",
    title: "Paid Advertising",
    shortDescription: "Maximize ROI with strategic Google & Meta ad campaigns.",
    description: "Performance-driven advertising campaigns that deliver measurable results and qualified leads for your business.",
    features: [
      "Google Ads Management",
      "Social Media Advertising",
      "Landing Page Optimization",
      "Conversion Tracking"
    ],
    image: "/ppc-advertising.jpg",
    icon: FaAd,
    color: "from-yellow-500 to-orange-600",
    href: "/services/paid-advertising"
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription: "Grow your brand with targeted social media strategies.",
    description: "Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions.",
    features: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Influencer Marketing"
    ],
    image: "/digital-marketing.jpg",
    icon: FaShare,
    color: "from-indigo-500 to-purple-600",
    href: "/services/social-media-marketing"
  },
  {
    id: "blog-and-articles",
    title: "Blog & Articles",
    shortDescription: "Boost engagement and SEO with relevant, fresh blog content.",
    description: "High-quality content creation that establishes your expertise, improves SEO, and engages your target audience.",
    features: [
      "SEO Content Writing",
      "Blog Strategy",
      "Content Calendar",
      "Performance Analytics"
    ],
    image: "/web-development.jpg",
    icon: FaPen,
    color: "from-emerald-500 to-green-600",
    href: "/services/blog-and-articles"
  },
  {
    id: "content-writing",
    title: "Content Writing",
    shortDescription: "Clear, persuasive content that speaks your brand's voice.",
    description: "Professional copywriting services that convert readers into customers with compelling, brand-aligned content.",
    features: [
      "Website Copywriting",
      "Marketing Content",
      "Brand Voice Development",
      "Content Strategy"
    ],
    image: "/web-development.jpg",
    icon: FaEdit,
    color: "from-cyan-500 to-blue-600",
    href: "/services/content-writing"
  },
  {
    id: "logo-design",
    title: "Logo Design",
    shortDescription: "Create memorable logos and a strong visual identity.",
    description: "Professional brand identity design that captures your company's essence and creates lasting impressions.",
    features: [
      "Custom Logo Design",
      "Brand Identity Systems",
      "Business Card Design",
      "Brand Guidelines"
    ],
    image: "/logo-design.jpg",
    icon: FaTags,
    color: "from-pink-500 to-red-600",
    href: "/services/logo-design"
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    shortDescription: "High-converting landing pages built for lead generation.",
    description: "Conversion-optimized landing pages designed to turn visitors into leads and customers effectively.",
    features: [
      "Conversion Optimization",
      "A/B Testing",
      "Lead Generation Forms",
      "Mobile Optimization"
    ],
    image: "/web-development.jpg",
    icon: FaBullseye,
    color: "from-violet-500 to-purple-600",
    href: "/services/landing-page-design"
  }
];

// Service Card Component
const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const IconComponent = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 overflow-hidden">
      
      {/* Service Icon Header */}
      <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="w-6 h-6" />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white/30 backdrop-blur-sm"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-white/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 leading-tight">
            {service.title}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed mb-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-1 mb-4">
          {service.features.slice(0, 3).map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs text-gray-600">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="pt-3 border-t border-gray-100">
          <Link
            href={service.href}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium text-xs hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn w-full justify-center`}>
            Read More
            <svg
              className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Add structured data to head
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(seoData.structuredData);
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = seoData.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", seoData.description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", seoData.description);
      document.head.appendChild(metaDescription);
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", seoData.keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", seoData.keywords);
      document.head.appendChild(metaKeywords);
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", seoData.canonicalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", seoData.canonicalUrl);
      document.head.appendChild(canonical);
    }
  }, []);

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
      <Navbar />

      <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        <header
          className="relative pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-white"
          role="banner">
          {/* Background decorative elements */}
          <Meteors number={15} />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8 mt-5">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-blue-600 font-medium" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6">
                
                {/* Service Icon */}
                <div className="inline-flex p-4 rounded-3xl bg-white/60 backdrop-blur-sm border border-blue-200/50 text-blue-600 shadow-lg">
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
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                  Comprehensive digital solutions designed to transform your business. From stunning designs to powerful development, we deliver excellence in every project.
                </p>

                {/* CTA Buttons */}
                <div className="pt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="text-sm px-8 py-3">
                      Get Started Today
                    </Button>
                  </Link>
                  <Link href="#our-services">
                    <Button className="text-sm px-8 py-3 bg-white hover:bg-blue-500! text-blue-500! hover:text-white!">
                      Explore Services ↓
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </header>


        {/* Services Grid Section */}
        <section id="our-services" className="py-20 md:px-4 px-2 relative">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                What We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Offer
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                From innovative design to powerful development, we provide comprehensive digital solutions that transform your business and drive growth.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Enegix
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                We combine technical expertise with creative vision to deliver solutions that exceed expectations and drive real business results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Team",
                  description:
                    "Skilled professionals with years of experience in their respective fields.",
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
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 3.197a6.062 6.062 0 01-4.943-.721 24.586 24.586 0 01-1.6-.564m8.543-2.512a18.916 18.916 0 01-1.84-.126m1.84.126A13.061 13.061 0 0012 13.5c-1.97 0-3.835.44-5.503 1.238m8.543-2.512C13.967 12.754 13.006 13 12 13s-1.967-.246-2.96-.774m8.543-2.512A18.916 18.916 0 0012 12c-1.967 0-3.835.44-5.503 1.238"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Custom Solutions",
                  description:
                    "Tailored approaches that fit your unique business requirements and goals.",
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
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "24/7 Support",
                  description:
                    "Round-the-clock assistance to ensure your business runs smoothly.",
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Fast Delivery",
                  description:
                    "Quick turnaround times without compromising on quality.",
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
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Competitive Pricing",
                  description:
                    "Affordable solutions that deliver maximum value for your investment.",
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
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Proven Results",
                  description:
                    "Track record of successful projects and satisfied clients.",
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
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
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

     
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
