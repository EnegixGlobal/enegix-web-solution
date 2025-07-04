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
import { FaArrowRight, FaPlus, FaMinus, FaMobile, FaCode, FaRocket, FaShieldAlt, FaStore, FaUsers } from "react-icons/fa";
import { MdDashboard, MdCloud, MdIntegrationInstructions, MdAnalytics, MdSecurity, MdSupport } from "react-icons/md";

export default function MobileApplication() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);

  const features = [
    {
      title: "Native iOS & Android Apps",
      description:
        "High-performance native applications built specifically for iOS and Android platforms",
      icon: <FaMobile className="text-blue-500" />,
    },
    {
      title: "Cross-Platform Development",
      description:
        "Cost-effective React Native and Flutter apps that work seamlessly across platforms",
      icon: <FaCode className="text-purple-500" />,
    },
    {
      title: "App Store Optimization",
      description:
        "Complete app store submission and optimization for maximum visibility and downloads",
      icon: <FaStore className="text-green-500" />,
    },
    {
      title: "Backend Integration",
      description:
        "Robust backend systems with APIs, databases, and cloud services integration",
      icon: <MdCloud className="text-cyan-500" />,
    },
    {
      title: "User Analytics & Insights",
      description: "Advanced analytics to track user behavior and app performance metrics",
      icon: <MdAnalytics className="text-orange-500" />,
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance with industry standards",
      icon: <MdSecurity className="text-red-500" />,
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description:
        "We analyze your business requirements, target audience, and market needs. This includes competitor analysis, feature planning, and creating a comprehensive development roadmap tailored to your goals.",
      icon: <MdAnalytics className="text-2xl text-blue-500" />,
    },
    {
      step: "2",
      title: "UI/UX Design",
      description:
        "Our design team creates intuitive wireframes and stunning visual designs. We focus on user experience, ensuring your app is both beautiful and easy to navigate across all devices.",
      icon: <FaCode className="text-2xl text-purple-500" />,
    },
    {
      step: "3",
      title: "Development & Testing",
      description:
        "We build your app using the latest technologies and best practices. Rigorous testing ensures optimal performance, security, and compatibility across different devices and OS versions.",
      icon: <FaRocket className="text-2xl text-green-500" />,
    },
    {
      step: "4",
      title: "App Store Deployment",
      description:
        "We handle the complete app store submission process for both iOS and Android platforms, including optimization for maximum visibility and download rates.",
      icon: <FaStore className="text-2xl text-orange-500" />,
    },
    {
      step: "5",
      title: "Launch & Marketing",
      description:
        "We support your app launch with marketing strategies, user acquisition campaigns, and performance monitoring to ensure a successful market entry.",
      icon: <FaUsers className="text-2xl text-cyan-500" />,
    },
    {
      step: "6",
      title: "Maintenance & Updates",
      description:
        "Ongoing support includes regular updates, feature enhancements, bug fixes, and performance optimization to keep your app competitive and up-to-date with platform changes.",
      icon: <MdSupport className="text-2xl text-red-500" />,
    },
  ];

  const faqs = [
    {
      question: "What platforms do you develop mobile apps for?",
      answer: "We develop for both iOS and Android platforms. We offer native development using Swift/Objective-C for iOS and Kotlin/Java for Android, as well as cross-platform solutions using React Native and Flutter for cost-effective development."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Development timelines vary based on complexity. A simple app typically takes 3-4 months, while complex apps with advanced features can take 6-12 months. We provide detailed project timelines during our initial consultation based on your specific requirements."
    },
    {
      question: "Do you help with app store submission and approval?",
      answer: "Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store. This includes preparing all required assets, metadata optimization, and ensuring compliance with store guidelines to maximize approval chances."
    },
    {
      question: "Can you integrate my app with existing systems or APIs?",
      answer: "Absolutely! We specialize in integrating mobile apps with existing business systems, third-party APIs, databases, and cloud services. We ensure seamless data synchronization and secure communication between your app and backend systems."
    },
    {
      question: "Do you provide ongoing maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance packages including regular updates, bug fixes, performance optimization, and feature enhancements. We also ensure your app stays compatible with the latest OS versions and security standards."
    },
    {
      question: "What's the difference between native and cross-platform development?",
      answer: "Native apps are built specifically for one platform (iOS or Android) offering the best performance and access to all platform features. Cross-platform apps use frameworks like React Native or Flutter to work on both platforms, reducing development time and cost while maintaining good performance."
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
                  <FaMobile className="text-4xl text-blue-500" />
                  <h1 className="text-5xl md:text-5xl font-bold text-green-600">
                    Mobile Application
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your ideas into powerful mobile applications. We build 
                  native and cross-platform apps that engage users and drive 
                  business growth across iOS and Android platforms.
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
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mobile Application Development"
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
                OUR MOBILE APP SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mobile Apps That Make Impact
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
                    Native iOS & Android Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We build high-performance native applications using Swift for iOS and Kotlin for Android. Our platform-specific approach ensures optimal performance, access to native features, and seamless integration with device capabilities for superior user experiences.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Cross-Platform Solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Maximize your ROI with React Native and Flutter development. We create apps that work seamlessly across both iOS and Android platforms, reducing development time and costs while maintaining native-like performance and user experience.
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
                    Backend & API Integration
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop robust backend systems with secure APIs, real-time databases, and cloud services integration. Our scalable architecture ensures your app can handle growing user bases while maintaining fast response times and data security.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    App Store Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We handle complete app store submission and optimization for both Apple App Store and Google Play Store. From metadata optimization to screenshot design, we ensure maximum visibility and download rates for your mobile application.
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
                    Security & Compliance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We implement enterprise-grade security measures including data encryption, secure authentication, and compliance with GDPR, HIPAA, and other industry standards. Your users' data remains protected with our comprehensive security protocols.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Analytics & Performance Monitoring
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We integrate advanced analytics and monitoring tools to track user behavior, app performance, and crash reporting. Our comprehensive insights help you make data-driven decisions for continuous app improvement and user retention.
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
                MOBILE APP DEVELOPMENT PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Concept to App Store
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
                Find answers to common questions about our mobile app development process and services
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
