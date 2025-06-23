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
import { enablePageScroll } from "@/utils/scroll-helper";

// SEO Metadata for web development
const seoData = {
  "web-development": {
    title: "Web Development Company Ranchi, Website Development Services India",
    description: "We design and develop custom, mobile-friendly websites that convert. Partner with India's trusted web development team for your business success.",
    keywords: "web development company ranchi, website development services india, web design ranchi, custom websites, responsive web design",
    canonicalUrl: "https://enegixwebsolutions.com/services/web-development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Enegix Global Pvt. Ltd.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "addressCountry": "India"
        }
      },
      "description": "Complete web development services including custom website design, development, and digital marketing solutions",
      "serviceType": "Web Development"
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
  id: "seo-optimization",
  title: "SEO Optimization",
  shortDescription: "Drive organic traffic with our tailored search engine optimization strategies.",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
}, 
{
  id: "ppc-advertising",
  title: "PPC Advertising",
  shortDescription: "Strategic pay-per-click campaigns that maximize your ROI.",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  ),
}];

// Related Service Card Component
const RelatedServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 w-fit text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 font-montserrat tracking-tight">
        {service.title}
      </h3>
      <p className="text-gray-400 font-space-grotesk font-light text-sm leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      <Link href={`/services/${service.id}`} className="text-cyan-400 font-medium text-sm hover:text-cyan-300 transition-colors">
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
      <main className="bg-[#0c1220] text-white min-h-screen relative overflow-x-hidden">
        {/* Hero Section with Modern Design */}
        <header className="relative pt-24 pb-12 px-6 lg:px-8" role="banner">
          {/* Subtle background effects */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] opacity-20">
              <Meteors number={20} />
            </div>
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-400/5 blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-purple-500/5 to-pink-400/5 blur-2xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                <li className="text-gray-600">•</li>
                <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
                <li className="text-gray-600">•</li>
                <li className="text-cyan-400 font-medium" aria-current="page">Web Development</li>
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
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-cyan-400/20 text-cyan-400 w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>

                {/* Title - H1 */}
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Web Development Company in Ranchi
                </h1>

                {/* Description with your content */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  At Enegix Global, Ltd., we understand the importance of a <span className="font-extrabold text-green-700">Web Development Company in Ranchi</span> to do more than simply "build" your next website. As your partner of technology, our products and services will do more than develop a platform; we create digital experiences that embody your brand, connect with your audience, and scale with your business. We create digital experiences for brands of all sizes, from startups to enterprises, utilizing best practices around simple architecture, modern coding techniques, and a user-centric perspective. We build website solutions that are not only operational but forward-thinking - whether it is developing a site that leverages AI tooling or is prepared for future scaling, we will build your website with what comes next in mind.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link href="/#contact">
                    <RainbowButton size="lg" className="text-sm px-8 py-3">
                      Get Started Today
                    </RainbowButton>
                  </Link>
                </div>
              </motion.div>

              {/* Right Column - Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-80 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20 border border-white/10 backdrop-blur-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-cyan-400/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </div>
                  <div className="absolute bottom-6 right-6 space-y-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full" />
                    <div className="w-16 h-2 bg-cyan-400/40 rounded-full" />
                    <div className="w-20 h-2 bg-white/20 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

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
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  <AuroraText>Website Development Services in India are Beyond the Basics</AuroraText>
                </h2>
                <p className="text-gray-300 text-lg max-w-5xl mx-auto leading-relaxed">
                  Our <span className="font-extrabold text-green-700">Website Development Services in India</span> at Enegix Web Solutions Pvt. Ltd. are more than simply providing a live URL—we create high-performing digital assets that work as tirelessly as you do. Your website is not only a digital presence; it is a living, breathing tool that can automate processes, interact with users, and bring about conversions. We build intelligent, adaptive solutions that integrate within your business environment—from CRM systems to chatbots—and optimize for speed, security, and discoverability. In the competitive online world of today, development isn't a formality—it's a game-changer.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Intelligent, objective-driven development specific to business needs",
                  "Tight integration with business utilities and third-party platforms",
                  "SEO-optimized codebase and architecture to enhance discoverability",
                  "Quick-loading, mobile-optimized designs for enhanced engagement",
                  "Enterprise-grade security with proactive monitoring",
                  "Scalable builds that respond to market fluctuations and traffic spikes"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{feature}</p>
                    </div>
                  </motion.div>))}
              </div>
            </article>

            {/* H3 Section - Web Design */}
            <article className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                  <AuroraText>Web Design in India That Connects, Converts, and Captivates</AuroraText>
                </h3>
                <p className="text-gray-300 text-lg max-w-5xl mx-auto leading-relaxed">
                  The design at Enegix Web Solutions Pvt. Ltd. is never skin deep- it is about building a connection. The philosophy of our <span className="text-green-700 font-extrabold">Web Design in India</span> is very simple: try to make it feel natural, keeping it purposeful, and think of the user at all times. Today's audiences scroll fast, think smart, and expect a seamless digital journey- hence our design approach is to blend aesthetics with empathy- visual, flow, function- in the right touch. From a loud hero section to crisp typography to subtle animations, we design to guide, inspire, and convert-without scaring or underwhelming.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Clear & Smart Visuals", desc: "Smart designs for concise and effective visual communication" },
                  { title: "UX Backed by Data", desc: "Data-driven and behavior-informed UX design" },
                  { title: "Interactive User Engagement", desc: "Interactive features to increase engagement and time-on-site" },
                  { title: "Mobile-First Responsiveness", desc: "Mobile-first approach to guarantee responsiveness on all screens" },
                  { title: "Branded Visual Storytelling", desc: "Color palettes and narrative elements extending the brand story" },
                  { title: "Inclusive & Accessible Design", desc: "Universal design solutions for accessibility in an inclusive user experience" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-white text-sm">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed pl-11">
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
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 tracking-tight text-center"
            >
              Related <AuroraText>Services</AuroraText>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relService, index) => (
                <motion.div
                  key={relService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RelatedServiceCard service={relService} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how our web development services can help you achieve your business goals.
                Our team is ready to create customized solutions for your unique needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <RainbowButton size="lg">
                    Contact Us
                  </RainbowButton>
                </Link>
                <Link href="/services">
                  <RainbowButton variant="outline" size="lg">
                    Explore All Services
                  </RainbowButton>
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
