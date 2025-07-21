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
import { FaArrowRight, FaPlus, FaMinus, FaSearch, FaClipboardList, FaUsers, FaPen, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function ContentWriting() {
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

  const faqs = [
    {
      question: "What types of content writing do you offer?",
      answer: "We provide comprehensive content writing services including website copy, sales pages, email marketing campaigns, social media content, product descriptions, blog posts, press releases, and marketing materials. Each piece is tailored to your brand voice and business goals."
    },
    {
      question: "How do you ensure content matches our brand voice?",
      answer: "We start with a detailed brand discovery process, analyzing your existing content, style guides, and communication preferences. We create a brand voice document and provide sample content for approval before proceeding with full projects to ensure perfect alignment."
    },
    {
      question: "Do you optimize content for SEO?",
      answer: "Yes, SEO optimization is integrated into our writing process when relevant. We conduct keyword research, optimize content structure, include meta descriptions, and ensure proper keyword placement while maintaining natural, engaging readability."
    },
    {
      question: "What's your turnaround time for content projects?",
      answer: "Turnaround times vary by project scope. Single web pages typically take 3-5 business days, email campaigns 2-3 days, and larger projects like complete website copy 1-2 weeks. We'll provide specific timelines during project planning."
    },
    {
      question: "Do you provide revisions if we're not satisfied?",
      answer: "Absolutely! We include up to 3 rounds of revisions with every project to ensure complete satisfaction. Our goal is to deliver content that perfectly matches your vision and achieves your business objectives."
    },
    {
      question: "Can you write content for specific industries or niches?",
      answer: "Yes, our writers have experience across various industries including technology, healthcare, finance, e-commerce, and more. We conduct thorough research to understand industry-specific terminology, trends, and audience expectations for each project."
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
                  <span className="text-4xl">📝</span>
                  <h1 className="text-5xl md:text-5xl font-bold text-teal-600">
                    Content Writing
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your ideas into powerful content that drives results. We create compelling copy, engaging articles, and persuasive marketing content that connects with your audience and achieves your business goals.
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
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                  alt="Content Writing Services"
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
                OUR CONTENT WRITING SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Writing Team That Converts
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
                    Website Copy & Sales Pages
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create compelling website copy through comprehensive conversion research and persuasive writing techniques. Using proven copywriting frameworks, we craft high-converting content your competitors can't match. This strategic foundation targets customer pain points and desires, positioning your business for sustainable sales growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Email Marketing Campaigns
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We optimize your email content to satisfy both deliverability and engagement. Our balanced approach combines strategic subject lines with compelling email copy that drives action. This enhances your email marketing performance and builds customer relationships.
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
                    Social Media Content
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experts ensure your social content meets all platform requirements for optimal engagement. We address audience preferences, platform algorithms, posting schedules and content variety to create effective social media strategies. This improves both reach and follower engagement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Product Descriptions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We boost your product sales through compelling product descriptions that target buyer intent. From feature highlights to benefit-focused copy, we implement proven e-commerce strategies that improve conversion rates and customer understanding to drive qualified purchases.
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
                    Press Releases & PR Content
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop newsworthy content from relevant, industry-specific announcements and achievements. Our PR strategies ensure media coverage that drives both credibility and brand awareness. This builds media authority, creating a competitive advantage that's difficult to replicate.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Content Strategy & Analytics
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We track all content performance against clear engagement metrics that matter to your business. Our transparent reporting shows content effectiveness, audience growth and conversion data, allowing continuous content refinement for maximum ROI.
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
                Find answers to common questions about our content writing process and services
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
