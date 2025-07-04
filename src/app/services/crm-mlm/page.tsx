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
import { FaArrowRight, FaPlus, FaMinus, FaUsers, FaCog, FaChartLine, FaRocket, FaShieldAlt, FaHeadset, FaSearch, FaClipboardList, FaCode, FaCheckCircle, FaPaperPlane, FaMobile, FaCloud } from "react-icons/fa";

export default function CrmMlm() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);

  const features = [
    {
      title: "Customer Relationship Management",
      description:
        "Comprehensive CRM solutions to manage customer interactions and relationships",
      icon: <FaUsers className="text-green-500" />,
    },
    {
      title: "Multi-Level Marketing Systems",
      description:
        "Advanced MLM platforms with compensation plans and downline management",
      icon: <FaChartLine className="text-green-500" />,
    },
    {
      title: "Lead Management",
      description:
        "Automated lead tracking, scoring, and nurturing systems",
      icon: <FaSearch className="text-green-500" />,
    },
    {
      title: "Sales Pipeline Automation",
      description:
        "Streamlined sales processes with automated follow-ups and notifications",
      icon: <FaCog className="text-green-500" />,
    },
    {
      title: "Mobile CRM Apps",
      description: "Mobile-friendly CRM access for on-the-go sales management",
      icon: <FaMobile className="text-green-500" />,
    },
    {
      title: "Cloud-Based Solutions",
      description: "Secure, scalable cloud infrastructure for your CRM/MLM needs",
      icon: <FaCloud className="text-green-500" />,
    },
  ];

  const process = [
    {
      step: "1",
      title: "Requirements Analysis",
      description:
        "We analyze your business model, sales processes, and specific CRM/MLM requirements to design the perfect solution for your organization.",
      icon: <FaSearch className="text-white" />,
    },
    {
      step: "2",
      title: "System Planning",
      description:
        "We create a comprehensive plan for your CRM/MLM system, including database structure, user roles, and compensation plans.",
      icon: <FaClipboardList className="text-white" />,
    },
    {
      step: "3",
      title: "Development",
      description:
        "Our team develops your custom CRM/MLM platform with modern technologies, ensuring scalability and security.",
      icon: <FaCode className="text-white" />,
    },
    {
      step: "4",
      title: "Integration",
      description:
        "We integrate payment gateways, email systems, and third-party tools to create a complete business solution.",
      icon: <FaCog className="text-white" />,
    },
    {
      step: "5",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing ensures your CRM/MLM system works flawlessly across all scenarios and user interactions.",
      icon: <FaCheckCircle className="text-white" />,
    },
    {
      step: "6",
      title: "Launch & Support",
      description:
        "We deploy your system and provide ongoing support, training, and maintenance to ensure continued success.",
      icon: <FaRocket className="text-white" />,
    },
  ];

  const faqs = [
    {
      question: "What CRM/MLM features do you provide?",
      answer: "Our CRM/MLM solutions include lead management, sales pipeline automation, commission tracking, downline management, genealogy trees, payment processing, reporting dashboards, and mobile applications. We customize features based on your specific business model."
    },
    {
      question: "How long does it take to develop a CRM/MLM system?",
      answer: "Development time varies based on complexity. A basic CRM system typically takes 6-8 weeks, while comprehensive MLM platforms with advanced features can take 12-16 weeks. We provide detailed timelines after analyzing your requirements."
    },
    {
      question: "Do you support different MLM compensation plans?",
      answer: "Yes, we support all major MLM compensation plans including Binary, Matrix, Unilevel, Board, Hybrid plans, and custom compensation structures. Our flexible system can accommodate complex commission calculations and bonuses."
    },
    {
      question: "Is the CRM/MLM system mobile-friendly?",
      answer: "Absolutely! All our CRM/MLM solutions are fully responsive and include dedicated mobile applications for iOS and Android. Users can manage their business, track commissions, and access reports on the go."
    },
    {
      question: "What security measures do you implement?",
      answer: "We implement enterprise-level security including SSL encryption, secure payment gateways, user role management, data backup systems, and compliance with industry standards. Your business and customer data is completely secure."
    },
    {
      question: "Do you provide training and ongoing support?",
      answer: "Yes, we provide comprehensive training for administrators and users, detailed documentation, video tutorials, and ongoing technical support. We also offer maintenance packages to keep your system updated and running smoothly."
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
                  <FaUsers className="text-4xl text-green-600" />
                  <h1 className="text-5xl md:text-5xl font-bold text-green-600">
                    CRM & MLM Solutions
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Powerful CRM and MLM systems that streamline your business operations, 
                  automate sales processes, and drive network growth. Scale your business 
                  with our comprehensive solutions.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80"
                  alt="CRM MLM Dashboard"
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
                OUR CRM/MLM SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Business Solutions
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
                    Customer Relationship Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We build comprehensive CRM systems that manage your entire customer lifecycle. From lead capture to customer retention, our solutions provide complete visibility into your sales pipeline and customer interactions, driving business growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Multi-Level Marketing Systems
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our MLM platforms support all compensation plans including Binary, Matrix, and Unilevel structures. Advanced genealogy trees, commission tracking, and automated payments ensure your network marketing business runs smoothly.
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
                    Lead Management & Automation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Intelligent lead scoring, automated follow-ups, and nurturing campaigns convert prospects into customers. Our systems track lead sources, behaviors, and interactions to optimize your sales processes and improve conversion rates.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Sales Pipeline Automation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Streamline your sales processes with automated workflows, opportunity tracking, and performance analytics. Our solutions provide real-time insights into sales activities, helping teams close more deals faster.
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
                    Mobile CRM Applications
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access your CRM on the go with native mobile applications for iOS and Android. Sales teams can manage contacts, update opportunities, and track activities from anywhere, ensuring no lead is missed.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Analytics & Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive dashboards and reports provide insights into sales performance, commission tracking, and business metrics. Make data-driven decisions with real-time analytics and customizable reporting features.
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
                CUSTOM CRM/MLM DEVELOPMENT PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Success in Six Strategic Steps
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
                Find answers to common questions about our CRM and MLM development services
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
