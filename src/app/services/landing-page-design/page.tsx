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
import { FaArrowRight, FaPlus, FaMinus, FaRocket, FaBullseye, FaClipboardList, FaPalette, FaCode, FaFlask, FaChartLine } from "react-icons/fa";

export default function LandingPageDesign() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);

  const process = [
    {
      step: "1",
      title: "Discovery",
      description:
        "We analyze your target audience, business goals, and current conversion challenges. This includes studying your competitors, understanding your value proposition, and identifying key conversion barriers.",
      icon: <FaBullseye className="text-blue-500" />,
    },
    {
      step: "2",
      title: "Strategy",
      description:
        "We develop a conversion-focused strategy tailored to your specific audience and objectives, beginning with wireframes and user journey mapping.",
      icon: <FaClipboardList className="text-purple-500" />,
    },
    {
      step: "3",
      title: "Design",
      description:
        "Using conversion best practices, we create visually compelling designs that guide visitors toward your desired action while maintaining brand consistency.",
      icon: <FaPalette className="text-pink-500" />,
    },
    {
      step: "4",
      title: "Development",
      description:
        "Our development team builds fast-loading, mobile-responsive landing pages optimized for conversions and search engines.",
      icon: <FaCode className="text-green-500" />,
    },
    {
      step: "5",
      title: "Testing",
      description:
        "We conduct thorough testing across devices and browsers, then set up A/B tests to optimize headlines, CTAs, and form placement for maximum conversions.",
      icon: <FaFlask className="text-orange-500" />,
    },
    {
      step: "6",
      title: "Optimization",
      description:
        "We continuously monitor performance data and user behavior to identify optimization opportunities. This ongoing refinement ensures your landing pages evolve to maximize ROI.",
      icon: <FaChartLine className="text-red-500" />,
    },
  ];

  const faqs = [
    {
      question: "What's included in your landing page design service?",
      answer: "Our comprehensive landing page service includes conversion strategy, wireframing, visual design, copywriting, form optimization, A/B testing setup, and performance analytics. We provide all design files, development-ready assets, and detailed conversion optimization recommendations."
    },
    {
      question: "How long does it take to create a landing page?",
      answer: "A typical landing page project takes 2-4 weeks from concept to launch. This includes strategy development, design, development, testing, and optimization setup. Rush projects can be completed in 1-2 weeks with our expedited service."
    },
    {
      question: "Do you write the copy for landing pages?",
      answer: "Yes, we provide conversion-focused copywriting as part of our service. Our copywriters specialize in persuasive headlines, compelling value propositions, and clear calls-to-action that drive conversions. We can also work with your existing copy if preferred."
    },
    {
      question: "Can you integrate my landing page with my CRM or email marketing tool?",
      answer: "Absolutely! We can integrate your landing pages with popular CRMs like HubSpot, Salesforce, and email marketing platforms like Mailchimp, ConvertKit, and ActiveCampaign. We ensure seamless lead capture and follow-up automation."
    },
    {
      question: "Do you provide A/B testing and optimization?",
      answer: "Yes, A/B testing is a core part of our service. We test different headlines, images, CTAs, and form variations to optimize conversion rates. We provide ongoing optimization recommendations based on performance data and user behavior analytics."
    },
    {
      question: "What's the difference between a landing page and a website?",
      answer: "Landing pages are single-focused pages designed for specific campaigns or conversions, while websites are multi-page experiences. Landing pages remove distractions and guide visitors toward one clear action, typically resulting in higher conversion rates for specific goals."
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
                  <FaRocket className="text-4xl text-green-600" />
                  <h1 className="text-5xl md:text-5xl font-bold text-green-600">
                    Landing Page Design
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Create high-converting landing pages that turn visitors into customers. We design landing pages that capture attention, build trust, and drive action with compelling calls-to-action.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt="Landing Page Design"
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
                OUR LANDING PAGE SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Landing Page Team That Converts
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
                    Conversion-Focused Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create landing pages with strategic conversion optimization through comprehensive A/B testing and analytics. Using proven design patterns, we craft high-converting layouts your competitors overlook. This strategic foundation targets visitor actions your customers actually take, positioning your business for sustainable conversion growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Compelling Headlines & Copy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We optimize your messaging to satisfy both search engines and visitors. Our balanced approach combines strategic headline creation with persuasive copywriting that answers visitor objections. This enhances existing content and builds your brand authority.
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
                    Lead Generation Forms
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experts ensure your forms capture maximum leads through optimal design and placement. We address form length, field validation, trust signals and user experience to create effective lead capture systems. This improves both conversion rates and lead quality.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    A/B Testing & Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We boost your conversion rates through systematic testing of landing page elements. From headline variations to button placement, we implement data-driven optimizations that improve performance and maximize ROI to drive qualified leads.
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
                    Mobile-Responsive Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop mobile-optimized landing pages that convert across all devices. Our responsive strategies ensure seamless user experience that drives both desktop and mobile conversions. This builds cross-platform authority, creating a competitive advantage that's difficult to replicate.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Analytics & Performance Tracking
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We track all landing page activities against clear conversion metrics that matter to your business. Our transparent reporting shows conversion improvements, traffic quality and ROI data, allowing continuous optimization for maximum lead generation.
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
                CUSTOM LANDING PAGES BUILT AROUND YOU
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Converting in Six Easy Steps
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
                Find answers to common questions about our landing page design process and conversion optimization
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
