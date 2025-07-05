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
        <section className="pt-32 pb-10 px-4 md:px-12">
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
        <section className=" px-4 md:px-12 ">
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



        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-12">
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
