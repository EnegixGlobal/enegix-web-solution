'use client';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Package,
  BarChart3,
  Smartphone,
  Globe,
  Target
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Meteors } from '@/components/magicui/meteors';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top';
import ScrollFix from '@/components/scroll-fix';

const seoData = {
  "ecommerce-solutions": {
    title: "E-Commerce Solutions Ranchi, E-Commerce Website India",
    description: "Launch and scale your online store with feature-rich e-commerce websites. We build secure, fast, and conversion-optimized shopping platforms.",
    keywords: "ecommerce solutions ranchi, ecommerce website india, online store development, shopping website design, ecommerce platform",
    canonicalUrl: "https://enegixwebsolutions.com/services/ecommerce-solutions",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "E-Commerce Solutions",
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
      description: "Professional e-commerce development services including custom online stores, payment integration, and mobile optimization",
      serviceType: "E-Commerce Development",
    },
  },
};



const features = [
  {
    icon: Target,
    title: "Conversion-Centered Design",
    description: "Simple, intuitive layouts that guide users toward action"
  },
  {
    icon: ShoppingCart,
    title: "Smart Shopping Features",
    description: "Advanced filters, wishlists, and seamless cart functionality"
  },
  {
    icon: Smartphone,
    title: "Device-Responsive UI",
    description: "Visually optimized interfaces for flawless viewing on any screen"
  },
  {
    icon: Globe,
    title: "Personalized Experience",
    description: "Product recommendations based on user behavior and purchase history"
  },
  {
    icon: BarChart3,
    title: "Business Automation",
    description: "CRM and ERP integrations for streamlined backend operations"
  },
  {
    icon: Package,
    title: "Actionable Insights",
    description: "Built-in analytics to monitor site performance and user behavior"
  }
];



const stats = [
  { number: "250+", label: "Online Stores Built" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "40%", label: "Average Sales Increase" },
  { number: "24/7", label: "Support Available" }
];

const relatedServices = [
  {
    title: "Digital Marketing",
    description: "Drive traffic and increase conversions for your online store",
    href: "/services/digital-marketing",
    icon: Target
  },
  {
    title: "Web Development",
    description: "Custom web applications and business solutions",
    href: "/services/web-development",
    icon: Globe
  }
];

export default function EcommerceSolutionsPage() {
  const currentSeoData = seoData["ecommerce-solutions"];

  useEffect(() => {
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

  return (
    <>
    <ScrollFix />
    <Navbar/>
    <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <header className="relative pt-24 pb-16 px-6 lg:px-8 min-h-[80vh] flex items-center" role="banner">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="E-Commerce Solutions Background"
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
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-teal-300/70">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li className="text-teal-300/70">/</li>
              <li className="text-white font-medium" aria-current="page">E-Commerce Solutions</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Service Icon */}
              <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-teal-400 w-fit shadow-lg">
                <ShoppingCart className="w-8 h-8" />
              </div>

              {/* Title - H1 */}
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg">
                E-Commerce Solutions in Ranchi
              </h1>

              {/* Description with your content */}
              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <p className="text-white text-lg leading-relaxed">
                  We at Enegix Web Solutions Pvt. Ltd. provide innovative{" "}
                  <span className="font-extrabold text-teal-300">
                    E-Commerce Solutions in Ranchi
                  </span>{" "}
                  that do more than sell products—they build smooth digital experiences that turn visitors into repeat buyers. We realize that online shopping is as much about usability, speed, and trust as choice. Our solutions are designed for scale, engineered for performance, and handcrafted with precision—whether you're opening your first store or revamping an enterprise-grade platform. From bespoke functionalities to user-centric design, we design systems that stay ahead of the curve in a competitive eCommerce environment.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/#contact">
                  <RainbowButton size="lg" className="text-sm px-8 py-3 shadow-lg">
                    Start Your Store
                  </RainbowButton>
                </Link>
                
              </div>
            </motion.div>

            {/* Right Column - Enhanced Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-80 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-emerald-400/20" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    {['WooCommerce', 'Shopify', 'Magento', 'Custom Build'].map((item, i) => (
                      <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-6 shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center text-white mb-3 shadow-lg">
                          <ShoppingCart className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-semibold text-white text-center">{item}</span>
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
                className="text-center bg-white p-6 rounded-xl border border-teal-100 shadow-sm"
              >
                <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 relative bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
              <span className="text-teal-600">E-Commerce Website in India</span> Development That Conversions, Rather Than Displays
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              An <span className="font-extrabold text-teal-600">E-Commerce Website in India</span> must be beautiful—it must also be a revenue machine. At Enegix Web Solutions Pvt. Ltd., we build and design online stores that are not only pretty—they get the job done. With conversion-driven design, intuitive shopping experiences, and intelligent integrations, we craft sites that streamline the buying experience and optimize customer delight. Each detail—product pages to checkout paths—is crafted with the aim of minimizing friction, instilling confidence, and driving repeat business.
            </p>
           
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md"
              >
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
          </div>
        </div>
      </section>

      {/* Online Shopping Experiences Section */}
      <section className="py-16 px-4 relative bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-gray-900">
              <span className="text-teal-600">Online Shopping in India</span> Experiences That Engage and Delight
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Building an <span className="font-extrabold text-teal-600">Online Store in India</span> today is about creating a brand experience that individuals desire to come back to. At Enegix Web Solutions Pvt. Ltd., we don't build stores—we craft digital experiences. Whether you sell artisanal crafts or run a big B2B platform, we create engaging shopping experiences that are functional, memorable, and scalable. With a focus on customer behavior, automation, and visual storytelling, your store isn't just a website—it's a destination.
            </p>
         
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Story-Driven UI",
                desc: "Interactive storefronts that combine storytelling with intelligent UI",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Retention Boosters",
                desc: "Loyalty schemes, reviews, and referrals to maximize retention",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Engagement Tools",
                desc: "Smart carts and real-time notices for maximizing user interaction",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Visual Shopping Experience",
                desc: "High-resolution product galleries and image zoom functionality",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Smart Inventory Systems",
                desc: "Self-updating inventory and order tracking systems",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.834.032L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.279-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Omnichannel Selling",
                desc: "Multi-channel support to sell across social media and marketplaces",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
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
                className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-900">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-14">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
     

    

      {/* Related Services */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 tracking-tight text-center text-gray-900"
          >
            Related <span className="text-teal-600">Services</span>
          </motion.h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Link href={service.href}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4 text-teal-600">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h5>
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
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center"
          >
            <h5 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Online Store?</h5>
            <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's build an e-commerce solution that drives sales and grows your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contacyt">
                <RainbowButton size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-Commerce Solutions Ranchi",
            "description": "Launch and scale your online store with feature-rich e-commerce websites. We build secure, fast, and conversion-optimized shopping platforms.",
            "provider": {
              "@type": "Organization",
              "name": "Enegix Web Solutions Pvt. Ltd.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ranchi",
                "addressRegion": "Jharkhand",
                "addressCountry": "India"
              },
              "url": "https://enegixwebsolutions.com"
            },
            "serviceType": "E-Commerce Development",
            "areaServed": [
              {
                "@type": "Place",
                "name": "Ranchi"
              },
              {
                "@type": "Place", 
                "name": "India"
              }
            ],
            "offers": {
              "@type": "Offer",
              "description": "Custom e-commerce solutions for businesses of all sizes including online stores, payment integration, and mobile optimization"
            }
          })
        }}
      />
    </main>

    <Footer />
    <ScrollToTopButton />
    </>
  );
}