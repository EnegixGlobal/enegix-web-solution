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

  const features = [
    {
      title: "Content Strategy & Creation",
      description:
        "Engaging content that resonates with your audience and drives meaningful interactions",
      icon: <MdContentCopy className="text-4xl text-blue-500" />,
    },
    {
      title: "Platform Management",
      description:
        "Complete management of Facebook, Instagram, LinkedIn, Twitter, and YouTube accounts",
      icon: <FaFacebook className="text-4xl text-blue-600" />,
    },
    {
      title: "Community Engagement",
      description:
        "Active community management with timely responses and relationship building",
      icon: <MdPeople className="text-4xl text-green-500" />,
    },
    {
      title: "Paid Social Advertising",
      description:
        "Strategic paid campaigns across platforms to maximize reach and conversions",
      icon: <MdCampaign className="text-4xl text-purple-500" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed performance tracking and insights to optimize your social presence",
      icon: <MdAnalytics className="text-4xl text-orange-500" />,
    },
    {
      title: "Influencer Partnerships",
      description: "Strategic influencer collaborations to expand your brand reach and credibility",
      icon: <MdTrendingUp className="text-4xl text-red-500" />,
    },
  ];

  const process = [
    {
      step: "1",
      title: "Brand Analysis & Strategy",
      description:
        "We analyze your brand, target audience, and competitors to develop a comprehensive social media strategy that aligns with your business goals.",
      icon: <MdAnalytics className="text-2xl text-blue-500" />,
    },
    {
      step: "2",
      title: "Content Planning & Creation",
      description:
        "Develop engaging content calendars with high-quality posts, graphics, videos, and stories tailored to each platform and audience segment.",
      icon: <MdContentCopy className="text-2xl text-purple-500" />,
    },
    {
      step: "3",
      title: "Platform Setup & Optimization",
      description:
        "Optimize your social media profiles with compelling bios, branded visuals, and strategic keywords to maximize discoverability and professional appearance.",
      icon: <MdSchedule className="text-2xl text-green-500" />,
    },
    {
      step: "4",
      title: "Content Publishing & Scheduling",
      description:
        "Strategic scheduling and publishing of content across platforms at optimal times to maximize engagement and reach your target audience effectively.",
      icon: <FaHashtag className="text-2xl text-orange-500" />,
    },
    {
      step: "5",
      title: "Community Engagement",
      description:
        "Active engagement with your audience through timely responses, community building, and fostering meaningful conversations around your brand.",
      icon: <MdPeople className="text-2xl text-cyan-500" />,
    },
    {
      step: "6",
      title: "Performance Analysis & Optimization",
      description:
        "Continuous monitoring and analysis of performance metrics with regular optimization to improve engagement, reach, and conversion rates.",
      icon: <MdTrendingUp className="text-2xl text-red-500" />,
    },
  ];

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
        <section className="pt-32 pb-20 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}>
                <div className="flex items-center space-x-3 mb-6">
                  <FaHashtag className="text-4xl text-blue-500" />
                  <h1 className="text-5xl md:text-5xl font-bold text-green-600">
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
        <section className="py-20 px-4 md:px-12 ">
          <div className="max-w-7xl mx-auto bg-white md:p-10 p-3 shadow-xl rounded-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16">
              <div className="text-green-500 font-semibold text-sm uppercase tracking-wider mb-4">
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

        {/* Process Section */}
        <section className="py-20 px-4 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16">
              <div className="text-green-500 font-semibold text-sm uppercase tracking-wider mb-4">
                SOCIAL MEDIA GROWTH PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Strategy to Social Success
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
