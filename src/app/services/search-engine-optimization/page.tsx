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

// SEO Metadata for SEO optimization
const seoData = {
  "seo-optimization": {
    title: "SEO Company in India, SEO Services India",
    description: "Rank higher on Google with our proven SEO strategies. Enegix Global boosts your visibility with on-page, off-page & technical SEO tailored for India.",
    keywords: "seo company India, seo services india, search engine optimization, seo expert India, organic traffic optimization, google ranking",
    canonicalUrl: "https://enegixwebsolutions.com/services/seo-optimization",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Optimization Services",
      "provider": {
        "@type": "Organization",
        "name": "Enegix Web Solutions Pvt. Ltd.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "India",
          "addressRegion": "Jharkhand",
          "addressCountry": "India"
        }
      },
      "description": "Professional SEO services including keyword optimization, technical SEO, content optimization, and search engine ranking improvement",
      "serviceType": "Search Engine Optimization"
    }
  }
};

// Service data array - related services for suggestions
const services = [{
  id: "digital-marketing",
  title: "Digital Marketing",
  shortDescription: "Comprehensive digital marketing strategies to grow your online presence.",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
    </svg>
  ),
}, 
{
  id: "web-development",
  title: "Web Development",
  shortDescription: "Custom websites and web applications built with modern technologies.",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
}, 
{
  id: "ecommerce-solutions",
  title: "E-Commerce Solutions",
  shortDescription: "Complete e-commerce platforms that drive sales and conversions.",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  ),
}];

export default function SeoOptimizationPage() {
  const [mounted, setMounted] = useState(false);

  // Get SEO data for SEO optimization
  const currentSeoData = seoData["seo-optimization"];

  // Get related services for suggestions
  const relatedServices = services.slice(0, 3);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Add structured data to head
    if (currentSeoData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(currentSeoData.structuredData);
      document.head.appendChild(script);

      // Update page title and meta description
      document.title = currentSeoData.title;

      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', currentSeoData.description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', currentSeoData.description);
        document.head.appendChild(metaDescription);
      }

      // Add keywords meta tag
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', currentSeoData.keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', currentSeoData.keywords);
        document.head.appendChild(metaKeywords);
      }

      // Add canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', currentSeoData.canonicalUrl);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', currentSeoData.canonicalUrl);
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
    const mainContent = document.getElementById('__next') || document.querySelector('main');
    if (mainContent) {
      mainContent.style.transform = 'none';
    }
  }, [mounted]);

  return (
    <>
      <ScrollFix />
      <Navbar />
      <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        {/* Hero Section with Background Image */}
        <header className="relative pt-24 pb-16 px-6 lg:px-8 min-h-[80vh] flex items-center" role="banner">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
              alt="SEO Optimization Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          </div>

          {/* Subtle decorative effects */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] opacity-5">
              <Meteors number={15} />
            </div>
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-teal-100 blur-3xl opacity-20" />
          </div>

          <div className="max-w-7xl mx-auto relative z-20 mt-6">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-gray-500">/</li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li className="text-gray-500">/</li>
                <li className="text-white font-medium" aria-current="page">SEO Optimization</li>
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
                <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white w-fit shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>

                {/* Title - H1 */}
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg">
                  Search Engine Optimization Company in India
                </h1>

                {/* Description with your content */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
                  <p className="text-white text-lg leading-relaxed">
                    At Enegix Web Solutions Pvt. Ltd., as the top <span className="font-extrabold text-green-600">SEO Company in India</span>, our services are designed to propel your business from invisible to unmissable. With constantly changing algorithms and increasing digital noise, we concentrate on building true, authority-led presence for your brand. Our strategy isn't about hunting traffic—it's about earning relevance. By means of ethical tactics, technical expertise, and audience intent mapping, we make your brand rank and connect. We blend accuracy analysis with market intelligence to place your company where your customers are actively looking.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link href="/#contact">
                    <RainbowButton size="lg" className="text-sm px-8 py-3 shadow-lg">
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
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-80 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-emerald-400/20" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-6 w-full">
                      {['Keyword Research', 'Technical SEO', 'Content Optimization', 'Link Building'].map((item, i) => (
                        <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-6 shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center text-white mb-3 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
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

        {/* Main Content Section with Semantic HTML */}
        <section className="py-16 px-4 relative bg-gradient-to-br from-teal-50 to-emerald-50" role="main">
          <div className="container mx-auto">

            {/* H2 Section - SEO Services */}
            <article className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                  <span className="text-teal-600">SEO Services in India</span> having a Strategic Edge
                </h2>
                <p className="text-gray-600 text-lg max-w-5xl mx-auto leading-relaxed">
                  As the most renowned provider of <span className="font-extrabold text-teal-600">SEO Services in India</span>, Enegix Web Solutions Pvt. Ltd. is indeed different. We combine strategy and substance. Guessing is less; we believe in data, trend, and intent. Whether your business is small-local like wanting to dominate the city, or it is a national brand wanting to lead SERPs, our SEO blueprints promise traction that matters. Each campaign is custom-built in terms of research and is ever refining itself for better impact. We position your brand where it matters- on page one, with purpose.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Customized SEO roadmaps for scalable success",
                  "Industries-specific keyword ecosystems to outrank competition",
                  "Competitor gap analyses to spot and seize ranking opportunities",
                  "Multi-lingual and geo-targeted SEO for regional dominance",
                  "Core Web Vital speed and usability optimization",
                  "Monthly reporting with actionable insights and next steps"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mt-1 text-teal-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature}</p>
                    </div>
                  </motion.div>))}
              </div>
            </article>

            {/* H3 Section - Search Engine Optimization */}
            <article className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-gray-900">
                  <span className="text-teal-600">Search Engine Optimization</span> Approaches That Are Future-Proof
                </h3>
                <p className="text-gray-600 text-lg max-w-5xl mx-auto leading-relaxed">
                  Search engines are smarter than ever, and with them, your <span className="text-teal-600 font-extrabold">Search Engine Optimization in India</span> strategy should be as well. At Enegix Web Solutions Pvt. Ltd., our approach is to optimize not only for algorithms but also for human behavior. From semantic search alignment to site enrichment, we make sure that your digital presence is meaningfully discoverable and sustainable. We blend structured data with user signals and content hierarchy to send a clear signal to search engines: "This is the best result." It is not about tricking the system, but about earning your place by relevance and experience.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Enhanced Search Features", desc: "Structured data and schema markup for enhanced search features" },
                  { title: "Intent-Driven Content", desc: "Search intent-oriented content that engages and converts" },
                  { title: "Next-Gen SEO", desc: "Voice search and mobile SEO optimization for emerging trends" },
                  { title: "Topical Authority", desc: "Topical clusters and pillar pages for topical authority" },
                  { title: "Holistic Visibility", desc: "Integrated with content marketing for holistic visibility" },
                  { title: "Sustainable SEO", desc: "Ethical practices for ensuring long-term rankings and brand trust" }
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
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
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
        </section>

        {/* Related Services */}
        <section className="py-16 px-4 bg-white">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relService, index) => (
                <motion.div
                  key={relService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-500 group transition-all duration-300 hover:shadow-lg hover:shadow-teal-100">
                    <div className="mb-4 p-3 rounded-full bg-teal-50 w-fit text-teal-600 group-hover:text-white group-hover:bg-teal-600 transition-all duration-300">
                      {relService.icon}
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                      {relService.title}
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {relService.shortDescription}
                    </p>
                    <Link href={`/services/${relService.id}`} className="text-teal-600 font-medium text-sm hover:text-teal-800 transition-colors">
                      Learn More →
                    </Link>
                  </div>
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
              <h5 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Rankings?</h5>
              <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how our SEO services can help you dominate search results and drive organic traffic.
                Our team is ready to create customized SEO strategies for your unique needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <RainbowButton size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
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
