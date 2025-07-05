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

export default function BlogAndArticles() {
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
      question: "What's included in your blog and article writing service?",
      answer: "Our comprehensive content writing service includes keyword research, topic ideation, SEO-optimized writing, editing, proofreading, meta descriptions, and content optimization. We provide ready-to-publish articles with proper formatting and relevant internal/external links."
    },
    {
      question: "How often do you publish new blog posts?",
      answer: "Publication frequency depends on your content strategy and budget. We can provide weekly, bi-weekly, or monthly content. Most businesses see best results with 2-4 high-quality posts per month. We'll recommend the optimal posting schedule during our consultation."
    },
    {
      question: "Do you research topics and keywords for our industry?",
      answer: "Yes, comprehensive research is included in our service. We analyze your industry trends, competitor content, keyword opportunities, and audience interests to create relevant, engaging topics that drive traffic and engagement."
    },
    {
      question: "Can you write in our brand voice and style?",
      answer: "Absolutely! We study your existing content, brand guidelines, and communication style to ensure all articles match your brand voice. We can adapt to any tone - professional, casual, technical, or conversational - to maintain brand consistency."
    },
    {
      question: "Do you optimize content for SEO?",
      answer: "Yes, SEO optimization is a core part of our writing process. We include keyword research, proper keyword placement, meta descriptions, header structure, internal linking, and content optimization to improve search engine rankings and organic traffic."
    },
    {
      question: "What types of content do you write besides blog posts?",
      answer: "We create various content types including industry articles, thought leadership pieces, how-to guides, case studies, social media content, newsletter articles, and web copy. We'll recommend the best content mix for your business goals and audience."
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
                  <span className="text-4xl">✍️</span>
                  <h1 className="text-5xl md:text-5xl font-bold text-green-600">
                    Blog & Articles
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Create engaging content that drives traffic and builds authority. We write compelling blog posts and articles that educate your audience, improve SEO, and establish your brand as an industry leader.
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
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Blog & Articles Writing"
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
                OUR CONTENT WRITING SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Content Team That Engages
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
                    SEO-Optimized Blog Posts
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create search engine optimized blog posts through comprehensive keyword research and content strategy. Using proven SEO techniques, we craft engaging articles your competitors can't match. This strategic foundation targets keywords your customers actually search for, positioning your business for sustainable organic growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Industry-Specific Articles
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We optimize your content to satisfy both search engines and readers. Our balanced approach combines strategic keyword placement with engaging storytelling that answers user questions. This enhances your brand authority and builds reader engagement.
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
                    Content Strategy & Planning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experts ensure your content calendar meets all marketing requirements for optimal reach. We address content gaps, audience needs, publishing frequency and distribution strategy to create a solid content foundation. This improves both engagement and search rankings.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Thought Leadership Content
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We boost your industry authority through comprehensive research and expert insights. From trend analysis to opinion pieces, we implement proven content strategies that improve brand recognition and establish thought leadership to drive qualified traffic.
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
                    Social Media Content
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop shareable content from relevant, trending topics in your industry. Our social media strategies ensure viral potential that drives both engagement and website traffic. This builds social authority, creating a competitive advantage that's difficult to replicate.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Performance Analytics & Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We track all content performance against clear engagement metrics that matter to your business. Our transparent reporting shows traffic growth, engagement rates and conversion data, allowing continuous content refinement for maximum ROI.
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
                Find answers to common questions about our content writing process and blog management services
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
