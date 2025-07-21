"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Reasons To Hire A Web Development Company in Ranchi",
    excerpt: "In a world where your site represents your brand's authenticity, professional online presence is not a choice but a necessity. Discover why Ranchi is emerging as the center for quality web solutions.",
    content: `In a world where your site represents your brand's authenticity, professional online presence is not a choice but a necessity. While Bangalore and Delhi rule the tech landscape, something silent is taking place in the capital of Jharkhand. Ranchi is quickly emerging as the center for good quality and value-for-money web solutions. This is why employing a Web Development Company in Ranchi might be one of your best business choices.

1. Big Results Without the Big-City Price Tag
Web development services in Ranchi are that much more reasonable in price than in bigger cities — and with no compromise on quality, mind you. You get superior development at a price that won't make you gasp for breath.

2. Personalized Attention, Always
Unlike big agencies juggling hundreds of clients, companies in Ranchi often work closely with businesses, offering tailored solutions and dedicated attention that bigger firms simply can't match.

3. Home to a Rising Pool of Talent
Ranchi's growing tech ecosystem has created a steady influx of skilled developers, UI/UX designers, and creative thinkers. These professionals are not just tech-savvy — they're also passionate about building digital solutions that work.

4. Single Roof for Full-Service Capabilities
Most Web Development Company in India provide end-to-end services — UI/UX design, SEO integration, responsive development, and CMS implementation — all under one roof from initial consultation to maintenance post-launch.

5. In-Depth Knowledge of Indian Business Scenarios
Given that it is based in the center of India, Ranchi-based developers understand regional business requirements with sophistication. As either a retail startup or a regional service provider, they understand how to design solutions that speak to your audience.

6. Simplified Collaboration and Timezone Advantage
Indian businesses benefit from partnering with a local team, as it does away with timezone conflicts and cultural misalignment. The process is more streamlined, communication is faster, and deadlines are simpler to hit.

7. Quick Turnaround Agile Teams
Require a website launched quickly? Most firms here adopt agile practices and can change track immediately based on feedback from you, such that your site goes live at the desired time.

8. Current with Global Trends in Tech
Just because it's local doesn't mean it's old. Ranchi-based web developers use the newest tech stacks — from React and Laravel to WordPress and Shopify — so your website is up-to-date, quick, and secure.

9. Dependable Long-Term Support
Sites require maintenance, updates, and constant optimization. Local businesses provide dependable, easy-to-reach support — not buried behind ticketing systems or off-shore call centers.

10. Contributing to India's Digital Future
By hiring a Ranchi-based web company, you're not just investing in your business — you're fueling regional growth and promoting innovation in India's expanding digital economy.

At Enegix Global, we've seen firsthand how powerful a well-crafted website can be for a business — whether local or global. And with Ranchi emerging as a digital destination, now is the perfect time to tap into its potential. In search of trustworthy and cutting-edge Web Development Services in India? Start right here, where innovation and quality collide.`,
    category: "Web Development",
    date: "June 19, 2025",
    readTime: "8 min read",
    author: "Enegix Team",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    tags: ["Web Development", "Ranchi", "India", "Technology"],
    keywords: "Web Development Company in Ranchi, Web Development Company in India, Web Development Services in India"
  },
  {
    id: 2,
    title: "Skyrocket Your Online Presence with the Right Digital Marketing Agency",
    excerpt: "In the age of digital-first impressions, your web presence determines your brand's visibility, credibility, and success. Discover how the right agency can transform your brand from invisible to unforgettable.",
    content: `In the age of digital-first impressions, your web presence determines your brand's visibility, credibility, and success. With customers' lives changing in a hurry to mobile screens and social media, a streamlined website that is just good is no longer sufficient. In order to really make a splash, enterprises require thoughtful digital marketing. And that is exactly where the right Content Marketing agency comes in. Let us explore how a credible agency could turn your unique brand from invisible to unforgettable.

Why Your Business Requires Digital Marketing
Nowadays, individuals search, compare, and make a decision online before buying. Whether you are a local company or an emerging startup, your audience already is online — are you? A professional agency brings about experience, tools, and tactics to:
• Increase your brand's visibility
• Drive targeted visitors to your website
• Convert visitors into repeat customers
• Make you stay ahead of the competition

What the Right Agency Brings to the Table
Hiring the right digital marketing agency means gaining access to a team of specialists who understand how to connect your brand with your audience. Here's what they offer:

1. Customized Strategy for Your Brand
No templates fit all. Top agencies craft campaigns uniquely tailored to your business, audience, and objectives.

2. Effective SEO
Google ranking isn't magic — it's process. From on-page SEO to link building strategies, an agency makes your site shine where it counts.

3. Social Media Mastery
It's not about posting — it's about connecting. Innovative campaigns, behavioral advertising, and branding that's consistent across platforms can create a loyal following around your brand.

4. Content That Converts
Blogs, videos, infographics — good content can establish trust and inspire action. A good agency creates content that not only informs but convinces.

Why Ranchi Is Turning into a Digital Hub
While metros hog the headlines, cities such as Ranchi are quietly creating robust digital ecosystems. It may be a wise decision to hire a Digital Marketing Agency in Ranchi — providing the ideal blend of value for money, innovation, and quality service. Domestic agencies comprehend local flavours as they provide globally competitive outcomes.

Online Marketing in India: Growing Faster Than Ever
The digital market in India is booming. With more than 700 million people online and rising smartphone penetration, Online Marketing in India is no longer a luxury — it's an imperative. Brands that adopt digital marketing now are poised for success in the long run.

How Enegix Global Can Assist
We at Enegix Global are committed to developing strategies that are innovative, data-informed, and growth-oriented for your brand. Be it SEO, social, performance marketing, or content — we develop solutions that resonate with your distinct identity.

Final Thoughts
Your digital presence is your largest brand asset — handle it with care. With the right online marketing agency, you don't just have an online presence — you shine. Ready to bring your brand to the next level? Make the right choice. Having the right agency can be the difference between being remembered or being noticed.`,
    category: "Digital Marketing",
    date: "June 19, 2025", 
    readTime: "6 min read",
    author: "Enegix Team",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    tags: ["Digital Marketing", "SEO", "Content Marketing", "Online Marketing"],
    keywords: "Digital Marketing Agency in Ranchi, Online Marketing in India, Content Marketing"
  }
];

const categories = ["All", "Web Development", "Digital Marketing", "SEO", "Design"];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
    document.title = "Blogs & Articles - Enegix Web Solutions | Web Development & Digital Marketing Insights";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read expert insights on web development, digital marketing, and technology trends from Enegix Web Solutions. Stay updated with the latest industry knowledge and best practices.");
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Read expert insights on web development, digital marketing, and technology trends from Enegix Web Solutions. Stay updated with the latest industry knowledge and best practices.");
      document.head.appendChild(metaDescription);
    }
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <ScrollFix />
      <Navbar />
      <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 px-6 lg:px-8 min-h-[75vh] flex items-center ">
          {/* Background Effects */}


          <div className="max-w-7xl pt-10 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
             

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-5xl lg:text-5xl font-bold mb-8 font-inter tracking-tight"
              >
                <span className="text-gray-900">Blogs &</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                  Articles
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 text-xl md:text-xl max-w-4xl mx-auto font-inter leading-relaxed mb-10"
              >
                Stay ahead with expert insights on web development, digital marketing, and the latest technology trends from Enegix Web Solutions.
              </motion.p>

              {/* Enhanced Search Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-lg mx-auto relative mb-8"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles, topics, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white/90 backdrop-blur-sm shadow-lg text-lg"
                  />
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-teal-500 w-6 h-6" />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Topic Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {["Web Development", "Digital Marketing", "SEO Optimization", "Tech Innovation"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium border border-gray-200/50 shadow-sm hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Categories Filter */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore by Category</h2>
              <p className="text-gray-600">Filter articles by your interests</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xl shadow-teal-500/25 scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-emerald-50 hover:text-teal-700 hover:shadow-lg hover:scale-105"
                  }`}
                >
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="categoryBackground"
                      className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-10 px-6 lg:px-8 bg-gradient-to-br from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                <p className="text-gray-600 mb-8">Try adjusting your search or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/blogs/${post.id}`}>
                      <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-teal-300 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2 relative">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                        
                        {/* Blog Image */}
                        <div className="relative h-96 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 "
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-6 left-6">
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                              {post.category}
                            </span>
                          </div>
                          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-teal-600" />
                            </div>
                          </div>
                        </div>

                        {/* Blog Content */}
                        <div className="p-8 relative z-10">
                          {/* Meta Info */}
                          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300 leading-tight line-clamp-2">
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-medium border border-teal-100 hover:bg-teal-100 transition-colors duration-300"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More */}
                          <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                            <span>Read Full Article</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

      

       
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
