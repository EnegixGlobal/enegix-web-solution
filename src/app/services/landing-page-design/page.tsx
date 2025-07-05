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
import { FaArrowRight, FaPlus, FaMinus, FaRocket } from "react-icons/fa";

export default function LandingPageDesign() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);



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
        <section className="pt-32 pb-10 px-4 md:px-12">
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
        <section className=" px-4 md:px-12 ">
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
