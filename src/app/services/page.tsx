"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
  FaBullseye,
  FaUsers,
  FaCogs,
  FaHeadset,
  FaBolt,
  FaRupeeSign,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import Button from "@/components/Button";
import Container from "@/components/Container";

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
    shortDescription:
      "Design experiences that are both stunning and user-focused.",
    description:
      "User-centered design solutions that combine aesthetics with functionality to create memorable digital experiences.",
    features: [
      "User Experience Research",
      "Interactive Prototyping",
      "Visual Design Systems",
      "Usability Testing",
    ],
    image: "/web-development.jpg",
    icon: FaPalette,
    color: "from-teal-500 to-pink-600",
    href: "/services/ui-ux-designing",
  },
  {
    id: "website-development",
    title: "Website Development",
    shortDescription:
      "Custom-coded websites that are fast, scalable, and SEO-ready.",
    description:
      "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Custom Web Applications",
      "Responsive Design",
      "Performance Optimization",
      "SEO-Ready Code",
    ],
    image: "/web-development.jpg",
    icon: FaCode,
    color: "from-teal-500 to-cyan-600",
    href: "/services/website-development",
  },
  {
    id: "mobile-application",
    title: "Mobile Application",
    shortDescription:
      "Build powerful Android & iOS apps for your business needs.",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Push Notifications",
    ],
    image: "/web-development.jpg",
    icon: FaMobile,
    color: "from-teal-500 to-emerald-600",
    href: "/services/mobile-application",
  },
  {
    id: "crm-mlm",
    title: "CRM/MLM Systems",
    shortDescription:
      "Custom CRM & MLM platforms to automate and scale your business.",
    description:
      "Comprehensive business management solutions with advanced automation and analytics capabilities.",
    features: [
      "Customer Relationship Management",
      "Multi-Level Marketing Tools",
      "Sales Automation",
      "Analytics Dashboard",
    ],
    image: "/web-development.jpg",
    icon: FaCog,
    color: "from-orange-500 to-red-600",
    href: "/services/crm-mlm",
  },
  {
    id: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortDescription: "Rank higher on Google with our proven SEO strategies.",
    description:
      "Data-driven SEO strategies that improve your search rankings and drive organic traffic to your website.",
    features: [
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "Content Optimization",
      "Local SEO",
    ],
    image: "/seo-optimization.jpg",
    icon: FaRocket,
    color: "from-teal-500 to-teal-600",
    href: "/services/search-engine-optimization",
  },
  {
    id: "google-my-business",
    title: "Google My Business",
    shortDescription: "Get discovered locally with optimized GMB listings.",
    description:
      "Local SEO optimization that helps your business get found by nearby customers searching for your services.",
    features: [
      "GMB Profile Optimization",
      "Local Citation Building",
      "Review Management",
      "Local SEO Strategy",
    ],
    image: "/web-development.jpg",
    icon: FaMapMarkerAlt,
    color: "from-red-500 to-pink-600",
    href: "/services/google-my-business",
  },
  {
    id: "paid-advertising",
    title: "Paid Advertising",
    shortDescription: "Maximize ROI with strategic Google & Meta ad campaigns.",
    description:
      "Performance-driven advertising campaigns that deliver measurable results and qualified leads for your business.",
    features: [
      "Google Ads Management",
      "Social Media Advertising",
      "Landing Page Optimization",
      "Conversion Tracking",
    ],
    image: "/ppc-advertising.jpg",
    icon: FaAd,
    color: "from-yellow-500 to-orange-600",
    href: "/services/paid-advertising",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription: "Grow your brand with targeted social media strategies.",
    description:
      "Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions.",
    features: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Influencer Marketing",
    ],
    image: "/digital-marketing.jpg",
    icon: FaShare,
    color: "from-indigo-500 to-teal-600",
    href: "/services/social-media-marketing",
  },
  {
    id: "blog-and-articles",
    title: "Blog & Articles",
    shortDescription:
      "Boost engagement and SEO with relevant, fresh blog content.",
    description:
      "High-quality content creation that establishes your expertise, improves SEO, and engages your target audience.",
    features: [
      "SEO Content Writing",
      "Blog Strategy",
      "Content Calendar",
      "Performance Analytics",
    ],
    image: "/web-development.jpg",
    icon: FaPen,
    color: "from-emerald-500 to-teal-600",
    href: "/services/blog-and-articles",
  },
  {
    id: "content-writing",
    title: "Content Writing",
    shortDescription:
      "Clear, persuasive content that speaks your brand's voice.",
    description:
      "Professional copywriting services that convert readers into customers with compelling, brand-aligned content.",
    features: [
      "Website Copywriting",
      "Marketing Content",
      "Brand Voice Development",
      "Content Strategy",
    ],
    image: "/web-development.jpg",
    icon: FaEdit,
    color: "from-cyan-500 to-teal-600",
    href: "/services/content-writing",
  },
  {
    id: "logo-design",
    title: "Logo Design",
    shortDescription: "Create memorable logos and a strong visual identity.",
    description:
      "Professional brand identity design that captures your company's essence and creates lasting impressions.",
    features: [
      "Custom Logo Design",
      "Brand Identity Systems",
      "Business Card Design",
      "Brand Guidelines",
    ],
    image: "/logo-design.jpg",
    icon: FaTags,
    color: "from-pink-500 to-red-600",
    href: "/services/logo-design",
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    shortDescription:
      "High-converting landing pages built for lead generation.",
    description:
      "Conversion-optimized landing pages designed to turn visitors into leads and customers effectively.",
    features: [
      "Conversion Optimization",
      "A/B Testing",
      "Lead Generation Forms",
      "Mobile Optimization",
    ],
    image: "/web-development.jpg",
    icon: FaBullseye,
    color: "from-violet-500 to-teal-600",
    href: "/services/landing-page-design",
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
      className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 overflow-hidden">
      {/* Service Icon Header */}
      <div className="relative h-42 bg-gray-100 overflow-hidden rounded-t-2xl">
        {/* Service image background */}
        <Image
          src={
            service.id === "ui-ux-designing"
              ? "https://plus.unsplash.com/premium_photo-1720903984909-04be5b4cda06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VUklMkZVWHxlbnwwfHwwfHx8MA%3D%3D "
              : service.id === "website-development"
              ? "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              : service.id === "mobile-application"
              ? "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
              : service.id === "crm-mlm"
              ? "https://images.unsplash.com/photo-1634836023845-eddbfe9937da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : service.id === "search-engine-optimization"
              ? "https://avatars.mds.yandex.net/get-altay/11873493/2a00000193f467aebf0c4d07782c55c3ebcf/XXXL"
              : service.id === "google-my-business"
              ? "/services/gmb.webp"
              : service.id === "paid-advertising"
              ? "/services/paid.jpg"
              : service.id === "social-media-marketing"
              ? "/services/social-media.webp"
              : service.id === "blog-and-articles"
              ? "/services/blog.jpg"
              : service.id === "content-writing"
              ? "/services/content.jpg"
              : service.id === "logo-design"
              ? "/services/design.webp"
              : service.id === "landing-page-design"
              ? "/services/landing.webp"
              : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
          }
          alt={service.title + " image"}
          fill
          className="object-cover object-center w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-teal-600 group-hover:to-teal-600 transition-all duration-300 leading-tight">
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
              <div
                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Request Service Button */}
        <div className="">
          <Link 
            href={`https://wa.me/919905953677?text=Hi! I'm interested in your ${encodeURIComponent(service.title)} service. Could you share pricing and timeline details? Thanks!`}
            target="_blank" 
            className={``}>
            <button className="flex items-center gap-2 justify-center text-teal-600 cursor-pointer hover:text-teal-500 bg-teal-50 hover:bg-teal-100 px-3 py-2 rounded-lg transition-all duration-300 text-xs font-medium">
              Request Service <FaArrowRight />
            </button>
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
        <Container  >
          {/* Hero Section */}
          <section className="pt-18 pb-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 "></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-teal-100 to-transparent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-30"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-6">
                  
                  {/* Badge */}

                  {/* Main Heading */}
                  <div className="space-y-3">
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="text-gray-900">Our</span>{" "}
                      <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Services
                      </span>
                    </motion.h1>
                    
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80px" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-1 bg-gradient-to-r from-teal-500 to-teal-500 rounded-full">
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Comprehensive digital solutions designed to{" "}
                    <span className="text-teal-600 font-semibold">transform your business</span>.
                    From stunning designs to powerful development, we deliver excellence in every project.
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-6 py-3">
                    {[
                      { number: "50+", label: "Projects Completed" },
                      { number: "25+", label: "Happy Clients" },
                      { number: "12", label: "Services Offered" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-teal-600">{stat.number}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="https://wa.me/919608263050?text=Hi%20I%20am%20interested%20in%20your%20services.%20Can%20you%20share%20more%20details%20about%20your%20offerings?"
                      target="_blank"
                      className="group">
                      <Button className="py-3 gap-3 px-6 text-base font-semibold bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Contact Us
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                    

                  </motion.div>
                </motion.div>

                {/* Right Side - Compact Image Section */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="relative">
                  
                  {/* Main Image Container */}
                  <div className="relative">
                    {/* Floating Cards - Smaller */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="absolute md:-left-6 left-3 top-10 bg-white rounded-xl p-3 shadow-lg border border-gray-100 z-20">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <FaCode className="text-white text-xs" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-900">Web Development</div>
                          <div className="text-xs text-gray-500">Modern & Fast</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                      className="absolute right-3 bottom-10 bg-white rounded-xl p-3 shadow-lg border border-gray-100 z-30">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <FaPalette className="text-white text-xs" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-900">UI/UX Design</div>
                          <div className="text-xs text-gray-500">User Focused</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Main Hero Image - Smaller */}
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Digital Solutions Hero"
                        height={400}
                        width={400}
                        className="w-full h-[350px] rounded-2xl object-cover shadow-xl transition-transform duration-700 ease-in-out hover:scale-102 z-10 relative"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                    </div>

                    {/* Background Pattern - Smaller */}
                    <div className="absolute -top-6 -right-6 w-full h-full">
                      <Image
                        src="/pattern.png"
                        alt="Background Pattern"
                        height={400}
                        width={400}
                        className="w-full h-full object-cover opacity-15 -z-10"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements - Smaller */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-teal-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Grid Section */}
          <section id="our-services" className="py-5 md:px-4 px-1 relative">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                  What We <span className="text-teal-600">Offer</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  From innovative design to powerful development, we provide
                  comprehensive digital solutions that transform your business
                  and drive growth.
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 px-4 ">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                  Why Choose <span className="text-teal-600">Enegix</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  We combine technical expertise with creative vision to deliver
                  solutions that exceed expectations and drive real business
                  results.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Expert Team",
                    description:
                      "Skilled professionals with years of experience in their respective fields.",
                    icon: <FaUsers className="w-6 h-6" />,
                  },
                  {
                    title: "Custom Solutions",
                    description:
                      "Tailored approaches that fit your unique business requirements and goals.",
                    icon: <FaCogs className="w-6 h-6" />,
                  },
                  {
                    title: "24/7 Support",
                    description:
                      "Round-the-clock assistance to ensure your business runs smoothly.",
                    icon: <FaHeadset className="w-6 h-6" />,
                  },
                  {
                    title: "Fast Delivery",
                    description:
                      "Quick turnaround times without compromising on quality.",
                    icon: <FaBolt className="w-6 h-6" />,
                  },
                  {
                    title: "Competitive Pricing",
                    description:
                      "Affordable solutions that deliver maximum value for your investment.",
                    icon: <FaRupeeSign className="w-6 h-6" />,
                  },
                  {
                    title: "Proven Results",
                    description:
                      "Track record of successful projects and satisfied clients.",
                    icon: <FaCheckCircle className="w-6 h-6" />,
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-teal-300 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ willChange: "transform" }}>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-100 to-teal-100 flex items-center justify-center text-teal-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
