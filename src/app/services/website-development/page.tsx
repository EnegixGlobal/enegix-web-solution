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

export default function WebDevelopment() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);



  const process = [
    {
      step: "1",
      title: "Planning & Analysis",
      description:
        "We analyze your business requirements, target audience, and technical specifications. This includes competitor research, feature planning, and creating a comprehensive development roadmap.",
      icon: "💡",
    },
    {
      step: "2",
      title: "Design & Architecture",
      description:
        "We create wireframes, design mockups, and plan the technical architecture. This phase includes database design, API planning, and establishing the overall system structure.",
      icon: "📋",
    },
    {
      step: "3",
      title: "Development Setup",
      description:
        "We set up the development environment, configure servers, and establish version control. This includes selecting the right technology stack and setting up development workflows.",
      icon: "📝",
    },
    {
      step: "4",
      title: "Coding & Integration",
      description:
        "Our developers build your website using modern frameworks and best practices. We implement features, integrate APIs, and ensure code quality through regular testing and reviews.",
      icon: "🚀",
    },
    {
      step: "5",
      title: "Testing & Optimization",
      description:
        "We conduct comprehensive testing including functionality, performance, security, and cross-browser compatibility. We optimize for speed, SEO, and user experience.",
      icon: "⚙️",
    },
    {
      step: "6",
      title: "Launch & Maintenance",
      description:
        "We deploy your website to production servers and provide ongoing maintenance. This includes monitoring, updates, security patches, and performance optimization to ensure long-term success.",
      icon: "📦",
    },
  ];

  const faqs = [
    {
      question: "What technologies do you use for website development?",
      answer: "We use modern technologies including React.js, Next.js, Node.js, Python, PHP, and various databases like MongoDB and PostgreSQL. We select the best technology stack based on your specific project requirements and goals."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "Development time varies based on complexity. A simple business website takes 2-4 weeks, while complex e-commerce or web applications can take 6-12 weeks. We provide detailed timelines during project planning."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. We ensure your website stays secure, fast, and up-to-date."
    },
    {
      question: "Will my website be mobile-friendly and responsive?",
      answer: "Absolutely! All our websites are built with responsive design principles, ensuring they work perfectly on all devices including smartphones, tablets, and desktops with optimal user experience."
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Yes, we specialize in integrating various third-party services including payment gateways, CRM systems, email marketing tools, social media platforms, and custom APIs to enhance your website's functionality."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we offer reliable hosting solutions and can help with domain registration. We provide various hosting options including shared hosting, VPS, and cloud hosting based on your website's requirements and traffic."
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
                  <span className="text-4xl">💻</span>
                  <h1 className="text-5xl md:text-5xl font-bold text-teal-600">
                    Website Development
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Build powerful, scalable websites that drive business growth. We
                  create custom web solutions using modern technologies and best
                  practices for optimal performance.
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
                OUR DEVELOPMENT SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Development Team That Builds Excellence
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
                    Custom Web Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We build tailor-made websites from scratch using cutting-edge technologies. Our custom solutions are designed to meet your specific business requirements, ensuring scalability, security, and optimal performance across all devices and platforms.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    E-commerce Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create powerful online stores with secure payment gateways, inventory management, and user-friendly shopping experiences. Our e-commerce solutions are built to handle high traffic and drive conversions with seamless checkout processes.
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
                    CMS Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop content management systems that make it easy for you to update and manage your website content. Our CMS solutions are user-friendly, secure, and provide full control over your website without requiring technical expertise.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    API Integration
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We seamlessly integrate third-party APIs and services to enhance your website functionality. From payment gateways to social media integration, we connect your website with essential business tools and external services.
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
                    Responsive Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We ensure your website works flawlessly across all devices and screen sizes. Our responsive development approach guarantees optimal user experience on desktop, tablet, and mobile devices with fast loading times and smooth functionality.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Performance Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We optimize website performance through advanced caching, code optimization, and server configuration. Our performance-focused approach ensures fast loading speeds, better SEO rankings, and improved user engagement rates.
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
                Find answers to common questions about our website development process and services
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
