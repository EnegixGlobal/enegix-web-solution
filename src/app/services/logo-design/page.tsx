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
import { FaArrowRight, FaPlus, FaMinus, FaPalette, FaLightbulb, FaClipboardList, FaPencilRuler, FaRocket, FaCogs, FaGem, FaSearch, FaSketch, FaCode, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function LogoDesign() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);





  const faqs = [
    {
      question: "What's included in your logo design service?",
      answer: "Our comprehensive logo design service includes brand discovery, multiple concept development, logo refinement, complete brand guidelines, and final delivery in all necessary formats (AI, EPS, PNG, JPG, SVG). We also provide usage guidelines and brand applications."
    },
    {
      question: "How long does the logo design process take?",
      answer: "A typical logo design project takes 2-3 weeks from initial consultation to final delivery. This includes discovery phase, concept development, revisions, and brand guideline creation. Rush projects can be completed in 1-2 weeks with our expedited service."
    },
    {
      question: "How many logo concepts do you provide?",
      answer: "We typically provide 3-5 initial logo concepts based on your brand discovery. Each concept explores different creative directions. After you select your preferred direction, we provide 2-3 refined variations before finalizing your logo."
    },
    {
      question: "Do you provide brand guidelines and style guides?",
      answer: "Yes! We create comprehensive brand guidelines that include your logo variations, color palettes, typography, spacing rules, dos and don'ts, and application examples. This ensures consistent brand usage across all materials."
    },
    {
      question: "What file formats will I receive?",
      answer: "You'll receive your logo in all necessary formats including vector files (AI, EPS, SVG), high-resolution raster files (PNG, JPG), and web-optimized versions. We also provide black & white versions and different orientations."
    },
    {
      question: "Can you redesign an existing logo or create a completely new one?",
      answer: "We can do both! Whether you need a complete rebrand with a new logo or want to refresh and modernize your existing logo, we'll work with you to create a design that perfectly represents your brand and resonates with your target audience."
    }
  ];

  return (
    <>
      <div className="min-h-screen  bg-gradient-to-br from-gray-50 to-gray-100">
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
                  <FaPalette className="text-4xl text-teal-600" />
                  <h1 className="text-5xl md:text-5xl font-bold text-teal-600">
                   Branding & Logo Design
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Create powerful brand identities that leave lasting impressions. We design 
                  memorable logos and comprehensive brand systems that connect with your 
                  audience and drive business growth.
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
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Logo Design Process"
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
                OUR BRANDING SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Branding Team That Creates Impact
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
                    Logo Design & Creation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create memorable, scalable logos that perfectly represent your brand identity. Through comprehensive research and creative exploration, we design distinctive marks that resonate with your target audience and stand out in competitive markets.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Brand Identity Systems
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop comprehensive brand identity systems including color palettes, typography, visual elements, and brand voice. Our systematic approach ensures consistent brand expression across all touchpoints and applications.
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
                    Brand Guidelines & Standards
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create detailed brand guidelines that ensure consistent application of your brand across all materials. These comprehensive documents include usage rules, color specifications, typography guidelines, and application examples.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Brand Strategy & Positioning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop strategic brand positioning that differentiates you from competitors. Through market analysis and brand audits, we create compelling brand stories and messaging that connect emotionally with your audience.
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
                    Brand Applications & Mockups
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create realistic mockups showing your brand in real-world applications including business cards, letterheads, signage, and digital platforms. This helps visualize your brand's impact across different mediums.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Brand Refresh & Rebranding
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We help evolve existing brands through strategic refreshes or complete rebranding. Our approach balances brand heritage with modern relevance, ensuring smooth transitions while maintaining customer recognition and loyalty.
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
                Find answers to common questions about our logo design and branding services
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
