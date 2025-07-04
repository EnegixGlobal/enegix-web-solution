"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import Link from "next/link";
import Image from "next/image";
import { enablePageScroll } from "@/utils/scroll-helper";
import Button from "@/components/Button";
import { FaArrowRight, FaPlus, FaMinus, FaSearch, FaChartLine, FaRocket, FaBullseye, FaLink, FaFileAlt } from "react-icons/fa";
import { MdTrendingUp, MdAnalytics, MdSpeed, MdKeyboard, MdLocationOn, MdInsights } from "react-icons/md";

export default function SearchEngineOptimization() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);

  const features = [
    {
      title: "Keyword Research & Strategy",
      description:
        "In-depth keyword analysis to target high-value search terms that drive qualified traffic",
      icon: <FaSearch className="text-4xl text-blue-500" />,
    },
    {
      title: "On-Page SEO Optimization",
      description:
        "Complete optimization of content, meta tags, headers, and technical elements",
      icon: <FaFileAlt className="text-4xl text-green-500" />,
    },
    {
      title: "Technical SEO Audit",
      description:
        "Comprehensive website analysis to fix crawlability and indexing issues",
      icon: <MdSpeed className="text-4xl text-purple-500" />,
    },
    {
      title: "Link Building & Authority",
      description:
        "Strategic link building campaigns to increase domain authority and rankings",
      icon: <FaLink className="text-4xl text-orange-500" />,
    },
    {
      title: "Local SEO Optimization",
      description: "Google My Business and local search optimization for location-based businesses",
      icon: <MdLocationOn className="text-4xl text-red-500" />,
    },
    {
      title: "SEO Analytics & Reporting",
      description: "Detailed performance tracking and monthly reports with actionable insights",
      icon: <MdAnalytics className="text-4xl text-cyan-500" />,
    },
  ];


  const process = [
    {
      step: "1",
      title: "SEO Audit & Analysis",
      description:
        "We conduct a comprehensive analysis of your website's current SEO performance, identifying opportunities and technical issues that need attention.",
      icon: <MdInsights className="text-2xl text-blue-500" />,
    },
    {
      step: "2",
      title: "Keyword Research",
      description:
        "In-depth keyword research to identify high-value search terms your target audience uses, focusing on optimal search volume and competition balance.",
      icon: <FaSearch className="text-2xl text-purple-500" />,
    },
    {
      step: "3",
      title: "On-Page Optimization",
      description:
        "Complete optimization of your website's content, meta tags, headers, and internal structure to align with target keywords and SEO best practices.",
      icon: <FaFileAlt className="text-2xl text-green-500" />,
    },
    {
      step: "4",
      title: "Technical Implementation",
      description:
        "Fix technical SEO issues including site speed, mobile responsiveness, crawlability, and indexing problems to improve search engine accessibility.",
      icon: <MdSpeed className="text-2xl text-orange-500" />,
    },
    {
      step: "5",
      title: "Link Building & Authority",
      description:
        "Strategic link building campaigns and content marketing to increase domain authority and earn high-quality backlinks from relevant websites.",
      icon: <FaLink className="text-2xl text-cyan-500" />,
    },
    {
      step: "6",
      title: "Monitor & Optimize",
      description:
        "Continuous monitoring of rankings, traffic, and conversions with ongoing optimization to maintain and improve search performance.",
      icon: <MdTrendingUp className="text-2xl text-red-500" />,
    },
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. You may start seeing improvements in 3-6 months, with significant results typically appearing in 6-12 months. The timeline depends on your industry competitiveness, current website state, and the keywords you're targeting."
    },
    {
      question: "What's included in your SEO service?",
      answer: "Our comprehensive SEO service includes keyword research, on-page optimization, technical SEO audit and fixes, content optimization, link building, local SEO (if applicable), and monthly performance reporting with actionable insights."
    },
    {
      question: "Do you guarantee first page rankings on Google?",
      answer: "While we can't guarantee specific rankings (no legitimate SEO company can), we use proven strategies and best practices to significantly improve your search visibility. We focus on sustainable, white-hat techniques that provide long-term results."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple metrics including keyword rankings, organic traffic growth, click-through rates, conversion rates, and overall ROI. We provide detailed monthly reports showing progress and areas for improvement."
    },
    {
      question: "Can you help with local SEO for my business?",
      answer: "Yes! We specialize in local SEO for businesses serving specific geographic areas. This includes Google My Business optimization, local citations, review management, and location-specific content strategies to help you dominate local search results."
    },
    {
      question: "What's the difference between SEO and paid advertising?",
      answer: "SEO focuses on earning organic (free) traffic through search engine rankings, while paid advertising provides immediate visibility through paid placements. SEO takes longer but provides sustainable, cost-effective results. Both strategies work best when used together."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}>
                <div className="flex items-center space-x-3 mb-6">
                  <FaSearch className="text-4xl text-blue-500" />
                  <h1 className="text-5xl md:text-5xl font-bold text-green-600">
                    Search Engine Optimization
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Boost your online visibility and drive organic traffic with proven SEO strategies. 
                  We optimize your website to rank higher on Google and attract customers who are 
                  actively searching for your products and services.
                </p>

                <div className="w-sm">
                  <Link
                    href="https://wa.me/919608263050?text=Hi%20I%20am%20interested%20in%20your%20services.%20Can%20you%20share%20more%20details%20about%20your%20offerings?"
                    target="_blank">
                    <Button className="py-2 gap-3">Connect with Us <FaArrowRight /></Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-full flex justify-right mb-10  ">
                <Image
                  src="https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000_1280.jpg"
                  alt="SEO & Search Engine Optimization"
                  height={600}
                  width={500}
                  className=" h-[400px] rounded-tl-[100px] rounded-br-[100px]  object-cover shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-102  z-20"
                />
                <Image
                  src="/pattern.png"
                  alt="Hero Image"
                  height={600}
                  width={600}
                  className=" h-[400px] -top-15  relative md:-left-[200px] -left-[350px] object-cover  "
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-12 ">
          <div className="max-w-7xl mx-auto bg-white md:p-10 p-3 shadow-xl rounded-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16">
              <div className="text-green-500 font-semibold text-sm uppercase tracking-wider mb-4">
                OUR SEO SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                SEO That Drives Real Results
              </h2>
            </motion.div>

            {/* Services Grid - Clean Text Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Column 1 */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Keyword Research & Strategy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We conduct comprehensive keyword research to identify high-value search terms your target audience uses. Our strategic approach focuses on keywords with optimal search volume and competition balance, positioning your website to capture qualified organic traffic.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    On-Page SEO Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete optimization of your website's content, meta tags, headers, and internal structure. We ensure every page is perfectly optimized for search engines while maintaining excellent user experience and readability.
                  </p>
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Technical SEO Audit
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive technical analysis to identify and fix crawlability issues, site speed problems, mobile responsiveness, and indexing errors. We ensure search engines can easily access and understand your website content.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Link Building & Authority
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic link building campaigns to increase your domain authority and search rankings. We focus on earning high-quality backlinks from relevant, authoritative websites through content marketing and outreach strategies.
                  </p>
                </motion.div>
              </div>

              {/* Column 3 */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Local SEO Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized local search optimization for location-based businesses. We optimize your Google My Business profile, manage local citations, and implement location-specific strategies to dominate local search results and attract nearby customers.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    SEO Analytics & Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive performance tracking with detailed monthly reports showing keyword rankings, organic traffic growth, and conversion metrics. Our transparent reporting keeps you informed of progress and ROI from our SEO efforts.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16">
              <div className="text-green-500 font-semibold text-sm uppercase tracking-wider mb-4">
                PROVEN SEO PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Analysis to Rankings
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative mb-16">
              {/* Desktop Timeline */}
              <div className="hidden lg:block">
                {/* Dotted Line */}
                <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-green-300 via-green-400 to-green-500" 
                     style={{background: 'repeating-linear-gradient(to right, #22c55e 0px, #22c55e 10px, transparent 10px, transparent 20px)'}}>
                </div>
                
                {/* Step Circles */}
                <div className="flex justify-between items-start relative">
                  {process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="flex flex-col items-center text-center relative z-10"
                      style={{ width: `${100/6}%` }}>
                      
                      {/* Circle */}
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-8 shadow-lg">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-4xl mb-4">
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed px-2">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="lg:hidden space-y-8">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className="flex items-start gap-6">
                    
                    {/* Circle */}
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Icon */}
                      <div className="text-3xl mb-2">
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="text-center w-lg mx-auto">
              <Link href="/contact">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold">
                  Start your project →
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our SEO services and process
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                    <span className="font-semibold text-gray-900 text-lg">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <FaMinus className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <FaPlus className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
