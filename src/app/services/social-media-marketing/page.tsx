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
import { FaArrowRight, FaPlus, FaMinus, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaHashtag } from "react-icons/fa";
import { MdCampaign, MdAnalytics, MdTrendingUp, MdPeople, MdContentCopy, MdSchedule } from "react-icons/md";

export default function SocialMediaMarketing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);


  const faqs = [
    {
      question: "Which social media platforms do you manage?",
      answer: "We manage all major social media platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, TikTok, and Pinterest. We'll recommend the best platforms based on your target audience and business objectives."
    },
    {
      question: "How often do you post content on social media?",
      answer: "Posting frequency varies by platform and strategy. Typically, we post 1-2 times daily on Facebook and Instagram, 3-5 times on Twitter, and 2-3 times weekly on LinkedIn. We customize the schedule based on your audience engagement patterns."
    },
    {
      question: "Do you create all the content or do we need to provide it?",
      answer: "We handle all content creation including graphics, captions, videos, and stories. However, we also welcome any content you'd like to share. Our team ensures all content aligns with your brand voice and marketing goals."
    },
    {
      question: "How do you measure social media success?",
      answer: "We track key metrics including engagement rate, reach, follower growth, website traffic from social media, lead generation, and conversions. We provide detailed monthly reports with insights and recommendations for improvement."
    },
    {
      question: "Can you help with paid social media advertising?",
      answer: "Yes! We create and manage paid social media campaigns across platforms. This includes audience targeting, ad creation, budget optimization, and performance tracking to maximize your advertising ROI."
    },
    {
      question: "How long does it take to see results from social media marketing?",
      answer: "You'll see initial engagement within the first few weeks, but significant growth in followers and brand awareness typically takes 3-6 months. Consistent, high-quality content and engagement are key to long-term social media success."
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
                  <FaHashtag className="text-4xl text-blue-500" />
                  <h1 className="text-5xl md:text-5xl font-bold text-teal-600">
                    Social Media Marketing
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Build a powerful social media presence that connects with your audience 
                  and drives real business results. We create engaging content and strategic 
                  campaigns across all major social platforms.
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
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Social Media Marketing"
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
              <div className="text-teal-500 font-semibold text-sm uppercase tracking-wider mb-4">
                OUR SOCIAL MEDIA SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Social Strategies That Convert
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
                    Content Strategy & Creation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop comprehensive content strategies that align with your brand voice and business goals. Our creative team produces engaging posts, graphics, videos, and stories that capture attention and drive meaningful interactions across all social platforms.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Multi-Platform Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete management of your social media presence across Facebook, Instagram, LinkedIn, Twitter, YouTube, and emerging platforms. We tailor content and strategies to each platform's unique audience and algorithm requirements.
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
                    Community Engagement & Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Active community management with timely responses to comments, messages, and mentions. We build authentic relationships with your audience, handle customer service inquiries, and foster a positive brand community that drives loyalty.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Paid Social Advertising
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic paid advertising campaigns across social platforms to amplify your reach and drive conversions. We create targeted ads, optimize budgets, and track performance to maximize your social media advertising ROI.
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
                    Analytics & Performance Tracking
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive analytics and reporting to track engagement, reach, follower growth, and conversion metrics. We provide detailed insights and recommendations to continuously optimize your social media strategy for better results.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Influencer Marketing & Partnerships
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic influencer partnerships to expand your brand reach and credibility. We identify relevant influencers, manage collaborations, and track campaign performance to ensure authentic brand advocacy and measurable results.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-12 ">
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
                Find answers to common questions about our social media marketing services and process
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
                      <FaMinus className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    ) : (
                      <FaPlus className="w-5 h-5 text-teal-600 flex-shrink-0" />
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
