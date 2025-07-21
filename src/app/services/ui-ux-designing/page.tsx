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
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";

export default function UIUXDesigning() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);

  const features = [
    {
      title: "User Research & Analysis",
      description:
        "In-depth user research to understand your target audience and their needs",
      icon: "🔍",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Interactive prototypes to visualize the user journey before development",
      icon: "📐",
    },
    {
      title: "Visual Design",
      description:
        "Beautiful, modern interfaces that reflect your brand identity",
      icon: "🎨",
    },
    {
      title: "Usability Testing",
      description:
        "Testing designs with real users to ensure optimal user experience",
      icon: "🧪",
    },
    {
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly across all devices",
      icon: "📱",
    },
    {
      title: "Design Systems",
      description: "Scalable design systems for consistent user experiences",
      icon: "🔧",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description:
        "We delve deep to fully understand your business and its goals. This includes analyzing your industry, competitors, and your target audience's preferences and behaviors.",
      icon: "💡",
    },
    {
      step: "2",
      title: "Planning",
      description:
        "Next, we tailor our strategy to align with your business objectives, beginning with a comprehensive analysis of user needs and market requirements.",
      icon: "📋",
    },
    {
      step: "3",
      title: "Preparation",
      description:
        "Using the strategy as a roadmap, we assess both your current design and external elements to ensure they align with the strategic plan.",
      icon: "📝",
    },
    {
      step: "4",
      title: "Implementation",
      description:
        "Our design framework is designed to provide a consistent flow of optimizations, creating an action plan that respects your internal resources.",
      icon: "🚀",
    },
    {
      step: "5",
      title: "Growth",
      description:
        "As your project gains momentum, we focus on tracking progress towards your goals and ensuring continued, sustainable design success.",
      icon: "⚙️",
    },
    {
      step: "6",
      title: "Refinement",
      description:
        "We continuously analyze performance data to identify new opportunities and adapt to user feedback. This ongoing optimization ensures your design strategy evolves with your business and market conditions.",
      icon: "📦",
    },
  ];

  const faqs = [
    {
      question: "What's included in your UI/UX design service?",
      answer: "Our comprehensive UI/UX design service includes user research, wireframing, visual design, prototyping, usability testing, and design system creation. We provide all design files, assets, and detailed specifications for development."
    },
    {
      question: "How long does a typical UI/UX design project take?",
      answer: "Project timelines vary based on complexity. A simple website redesign typically takes 4-6 weeks, while complex applications can take 8-12 weeks. We provide detailed timelines during our initial consultation based on your specific requirements."
    },
    {
      question: "Do you provide design files and assets for development?",
      answer: "Yes, we provide all necessary design files including Figma/Sketch files, exported assets, style guides, and detailed specifications. We also offer developer handoff sessions to ensure smooth implementation of the designs."
    },
    {
      question: "Can you redesign an existing website or app?",
      answer: "Absolutely! We specialize in both new designs and redesigns. We'll analyze your current design, identify pain points, and create an improved user experience while maintaining your brand identity and business goals."
    },
    {
      question: "Do you conduct user testing?",
      answer: "Yes, user testing is a crucial part of our process. We conduct usability testing with real users to validate design decisions, identify potential issues, and ensure the final product meets user expectations and business objectives."
    },
    {
      question: "What's the difference between UI and UX design?",
      answer: "UX (User Experience) focuses on the overall feel and user journey, including research, wireframing, and user flow. UI (User Interface) focuses on the visual elements like colors, typography, and interactive components. We provide both services as an integrated approach."
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
                  <span className="text-4xl">🎨</span>
                  <h1 className="text-5xl md:text-5xl font-bold text-teal-600">
                    UI/UX Designing
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Design experiences that are both stunning and user-focused. We
                  create intuitive interfaces that delight users and drive
                  business results.
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
                  src="/hero-image.jpg"
                  alt="Hero Image"
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
                OUR UI/UX SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Design Team That Delivers
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
                    User Research & Analysis
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We identify valuable user insights through comprehensive research analysis. Using advanced tools, we uncover behavioral patterns your competitors miss. This strategic foundation targets users your customers actually represent, positioning your business for sustainable design growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Wireframing & Prototyping
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We optimize your user flows to satisfy both functionality and users. Our balanced approach combines strategic layout planning with engaging interactions that answer visitor questions. This enhances existing interfaces and builds your design authority.
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
                    Visual Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experts ensure your interface meets all design requirements for optimal usability. We address visual hierarchy, brand consistency, accessibility issues and aesthetics to create a solid design foundation. This improves both appeal and user experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Usability Testing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We boost your design effectiveness through comprehensive user testing to reach target users. From prototype validation to interface optimization, we implement proven tactics that improve user satisfaction and design performance to drive qualified engagement.
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
                    Mobile-First Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop responsive designs from relevant, mobile-first websites in your industry. Our ethical strategies ensure compatibility that drives both functionality and mobile traffic. This builds device authority, creating a competitive advantage that's difficult to replicate.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Design Systems & Analytics
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We track all design activities against clear performance metrics that matter to your business. Our transparent methodology shows usability improvements, engagement growth and conversion data, allowing continuous refinement for maximum ROI.
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
                Find answers to common questions about our UI/UX design process and services
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
