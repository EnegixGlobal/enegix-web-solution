"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, BookmarkIcon, Eye } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import { notFound } from "next/navigation";

// Blog posts data (same as in the main blogs page)
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

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [mounted, setMounted] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    setMounted(true);
    
    if (!post) {
      notFound();
      return;
    }

    // Update page title and meta description
    document.title = `${post.title} - Enegix Web Solutions Blog`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", post.excerpt);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", post.excerpt);
      document.head.appendChild(metaDescription);
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", post.keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", post.keywords);
      document.head.appendChild(metaKeywords);
    }

    // Reading progress tracker
    const handleScroll = () => {
      const articleElement = document.getElementById('article-content');
      if (articleElement) {
        const totalHeight = articleElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(Math.max(progress, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  if (!mounted || !post) {
    return (
      <>
        <ScrollFix />
        <Navbar />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Format content with proper line breaks and styling
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.trim().match(/^\d+\./)) {
        // This is a numbered point
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-6 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border-l-4 border-teal-500"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-3 leading-relaxed">
              {paragraph.split('\n')[0]}
            </h3>
            {paragraph.split('\n').slice(1).map((line, lineIndex) => (
              <p key={lineIndex} className="text-gray-700 leading-relaxed mb-2">
                {line}
              </p>
            ))}
          </motion.div>
        );
      } else if (paragraph.trim().startsWith('•')) {
        // This is a bullet point list
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <ul className="space-y-3">
              {paragraph.split('\n').map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.replace('• ', '')}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      } else {
        // Regular paragraph
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed mb-6 text-lg"
          >
            {paragraph}
          </motion.p>
        );
      }
    });
  };

  return (
    <>
      <ScrollFix />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-500 to-emerald-500"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <Navbar />
      
      <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        {/* Back to Blogs */}
        <section className="pt-24 pb-8 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/blogs"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-300 mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-16" id="article-content">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                {post.category}
              </span>
            </div>

            {/* Share Button */}
            <div className="absolute top-6 right-6">
              <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg">
                <Share2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </motion.div>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-inter">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-500" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-teal-500" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-teal-500" />
                <span>{Math.floor(Math.random() * 1000) + 500} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100 hover:bg-teal-100 transition-colors duration-300"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Excerpt */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-teal-500 mb-12">
              <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                {post.excerpt}
              </p>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed space-y-6">
              {formatContent(post.content)}
            </div>
          </motion.div>

          {/* Article Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            {/* Author Section */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{post.author}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The Enegix team consists of experienced web developers, digital marketing experts, and creative professionals 
                    dedicated to helping businesses establish a strong online presence and achieve their digital goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Found this article helpful?</h3>
                <p className="text-gray-600">Share it with others who might benefit from it</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                  <BookmarkIcon className="w-4 h-4" />
                  Bookmark
                </button>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blogs/${relatedPost.id}`}
                    className="group block bg-white rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </article>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
