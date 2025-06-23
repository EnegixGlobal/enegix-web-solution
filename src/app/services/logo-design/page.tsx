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

// SEO Metadata for logo design
const seoData = {
  "logo-design": {
    title: "Logo Design Company in Ranchi | Brand Identity & Visual Design",
    description: "Professional logo design company in Ranchi creating memorable brand identities. Complete branding solutions including logo design, brand guidelines, and graphic design services.",
    keywords: "logo design company ranchi, branding services india, graphic design ranchi, brand identity design, visual design services",
    canonicalUrl: "https://enegixwebsolutions.com/services/logo-design",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Logo Design & Branding Services",
      "provider": {
        "@type": "Organization",
        "name": "Enegix Web Solutions Pvt. Ltd.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "addressCountry": "India"
        }
      },
      "description": "Professional logo design, branding, and graphic design services creating memorable brand identities and visual systems",
      "serviceType": "Logo Design & Branding"
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
  id: "seo-optimization",
  title: "SEO Optimization",
  shortDescription: "Drive organic traffic with our tailored search engine optimization strategies.",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
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

export default function LogoDesignPage() {
  const [mounted, setMounted] = useState(false);

  // Get SEO data for logo design
  const currentSeoData = seoData["logo-design"];

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
                <li className="text-cyan-400 font-medium" aria-current="page">Logo Design</li>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                  </svg>
                </div>                {/* Title - H1 */}
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Logo Design Company in Ranchi
                </h1>

                {/* Description with your content */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  We, at Enegix Web Solutions Pvt. Ltd., feel that your logo is not merely a symbol—it's your story in one frame. Being a progressive Logo Design Company in Ranchi, we care beyond looks to create identities that speak to your people and tell your story. Whether startup looking for a dramatic launch or an established brand looking for a reboot, we combine strategy with creativity to make your logo stand out, recall, and last. We create designs that look amazing yet communicate clearly in digital and print.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
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

            {/* H2 Section - Branding */}
            <article className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  <AuroraText>Branding in India That Transcends the Logo</AuroraText>
                </h2>
                <p className="text-gray-300 text-lg max-w-5xl mx-auto leading-relaxed">
                  True <span className="font-extrabold text-green-700">Branding in India</span> is the emotional DNA of a company—and at Enegix Web Solutions Pvt. Ltd., we create brands that breathe, live, and grow. From tone of voice to visual systems, we craft branding that is coherent, compelling, and competitive. We make sure that your audience feels your business the same way everywhere. More than design, our branding work tells stories, inspires trust, and establishes loyalty. We turn businesses into brands people remember.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Complete brand identity systems like logos, palettes, and voice",
                  "Brand strategy sessions to establish purpose, positioning, and messaging",
                  "Developing brand guidelines for consistency across all touchpoints",
                  "Creating taglines and tone of voice for clarity and emotion",
                  "Market-specific visual language to distinguish and scale",
                  "Rebranding options to renew without losing recognition"
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

            {/* H3 Section - Graphic Design */}
            <article className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                  <AuroraText>Graphic Design in India – Functionality Meets Art</AuroraText>
                </h3>
                <p className="text-gray-300 text-lg max-w-5xl mx-auto leading-relaxed">
                  Being a creative hotspot for <span className="text-green-700 font-extrabold">Graphic Design in India</span>, Enegix Web Solutions Pvt. Ltd. provides design resources that are both stunning and driven by purpose. We weave together design thinking and marketing understanding to design visuals that advocate campaigns, facilitate communication, and make ideas tangible. From brochures and packaging to social media creatives and pitch decks, all that we create is in service to your business objectives and brand aesthetic. It's not about creating things that are beautiful to look at—it's about creating things that work more effectively.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Compelling Collateral", desc: "Effective marketing collateral such as flyers, brochures, and banners" },
                  { title: "Trendy Social Creatives", desc: "Social media creatives that combine narrative with trend design" },
                  { title: "Persuasive Visual Aids", desc: "Presentation decks and infographics optimized for persuasion and understanding" },
                  { title: "Engaging Packaging Design", desc: "Product packaging that boosts shelf presence and consumer engagement" },
                  { title: "Print-Ready Branding", desc: "Print-ready artwork with accurate layout and consistency of branding" },
                  { title: "Custom Visual Content", desc: "Visual content customized for websites, campaigns, and business use" }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Brand?</h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how our logo design and branding services can help you create a memorable identity.
                Our team is ready to craft designs that tell your unique story.
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
