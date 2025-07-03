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

// Services data array
const services = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
    description:
      "Custom web solutions that drive business growth with responsive design, fast performance, and seamless user experience.",
    features: [
      "Custom Web Applications",
      "Responsive Design",
      "E-commerce Platforms",
      "CMS Development",
    ],
    image: "/web-development.jpg",
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
    color: "from-teal-500 to-emerald-600",
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    shortDescription:
      "Complete online store development with payment integration and inventory management.",
    description:
      "Full-featured e-commerce platforms that convert visitors into customers with secure payments and smooth checkout.",
    features: [
      "Online Store Development",
      "Payment Integration",
      "Inventory Management",
      "Order Tracking",
    ],
    image: "/ecommerce-solutions.jpg",
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
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Comprehensive digital marketing strategies to grow your online presence and reach.",
    description:
      "Data-driven marketing campaigns across multiple channels to maximize your brand's online visibility and engagement.",
    features: [
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "Brand Development",
    ],
    image: "/digital-marketing.jpg",
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
    color: "from-teal-600 to-emerald-500",
  },
  {
    id: "ppc-advertising",
    title: "PPC Advertising",
    shortDescription:
      "Performance-driven paid advertising campaigns for immediate traffic and lead generation.",
    description:
      "Strategic PPC campaigns across Google Ads, Facebook, and LinkedIn that maximize ROI and drive qualified leads.",
    features: [
      "Google Ads Management",
      "Social Media Ads",
      "Landing Page Optimization",
      "Conversion Tracking",
    ],
    image: "/ppc-advertising.jpg",
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
    color: "from-emerald-600 to-teal-500",
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    shortDescription:
      "Technical SEO and content strategies for better search engine rankings and visibility.",
    description:
      "Comprehensive SEO strategies that improve your website's visibility and drive organic traffic from search engines.",
    features: [
      "Technical SEO Audit",
      "Keyword Research",
      "Content Optimization",
      "Local SEO",
    ],
    image: "/seo-optimization.jpg",
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
    color: "from-teal-500 to-emerald-600",
  },
  {
    id: "logo-design",
    title: "Logo Design",
    shortDescription:
      "Professional brand identity and logo design services for memorable brand recognition.",
    description:
      "Creative logo design and brand identity solutions that capture your brand's essence and leave lasting impressions.",
    features: [
      "Custom Logo Design",
      "Brand Identity",
      "Business Cards",
      "Brand Guidelines",
    ],
    image: "/logo-design.jpg",
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
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
  },
];

// Service Card Component
const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl border border-teal-100 hover:border-teal-300 transition-all duration-500 hover:shadow-xl hover:shadow-teal-100/50 overflow-hidden">
      {/* Service Image */}
      <div className="relative h-48 bg-gradient-to-br from-teal-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {service.icon}
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {service.features.slice(0, 3).map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link
            href={`/services/${service.id}`}
            className="inline-flex items-center gap-2 text-teal-600 font-medium text-sm hover:text-teal-800 transition-colors group/link">
            Learn More
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
      <div className="absolute inset-0 bg-gradient-to-t from-teal-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
          className="relative pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-emerald-50 to-white"
          role="banner">
          {/* Background decorative elements */}

          <Meteors number={10} />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8 mt-5">
              <ol className="flex items-center space-x-2 text-sm text-teal-800/80">
                <li>
                  <Link
                    href="/"
                    className="hover:text-teal-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-teal-600/50">/</li>
                <li className="text-teal-700 font-medium" aria-current="page">
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
                <div className="inline-flex p-4 rounded-3xl bg-white/60 backdrop-blur-sm border border-teal-200/50 text-teal-600 shadow-lg">
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                  Comprehensive digital solutions designed to accelerate your
                  business growth. From web development to digital marketing, we
                  deliver results that matter.
                </p>

                {/* CTA Buttons */}
                <div className="pt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/#contact">
                    <RainbowButton size="lg" className="text-sm px-8 py-3">
                      Get Started
                    </RainbowButton>
                  </Link>
                  <Link href="#our-services">
                    <button className="px-6 py-3 text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors bg-white/60 backdrop-blur-sm rounded-lg border border-white/50 hover:bg-white/80 shadow-lg">
                      Explore Services ↓
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "100+", label: "Projects Completed" },
                { value: "50+", label: "Happy Clients" },
                { value: "6", label: "Service Categories" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="our-services" className="py-20 px-4 relative">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                What We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  Offer
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                From concept to launch, we provide end-to-end digital solutions
                that help your business thrive in the digital landscape.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-emerald-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  Enegix
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                We combine technical expertise with creative vision to deliver
                solutions that exceed expectations.
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
                  className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss your project and create a digital solution that
                drives real results for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <RainbowButton
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100">
                    Start Your Project
                  </RainbowButton>
                </Link>
                <Link href="/portfolio">
                  <button className="px-6 py-3 text-sm font-medium text-white hover:text-teal-100 transition-colors border border-white/30 rounded-lg hover:border-white/50">
                    View Our Work
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
