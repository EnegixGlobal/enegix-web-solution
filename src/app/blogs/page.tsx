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

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  keywords: string;
  image: string;
  author: string;
  readTime: string;
  status: "draft" | "published" | "archived";
  featured: boolean;
  views: number;
  likes: number;
  metaTitle?: string;
  metaDescription?: string;
  publishedAt?: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
  formattedDate: string;
}

interface BlogsResponse {
  success: boolean;
  data: {
    blogs: Blog[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
    categoryStats: Array<{
      _id: string;
      count: number;
    }>;
  };
}

const categories = [
  "All", 
  "Web Development", 
  "Digital Marketing", 
  "SEO", 
  "Design", 
  "Technology", 
  "Business", 
  "Tutorial", 
  "Case Study", 
  "Industry News", 
  "Tips & Tricks"
];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false
  });
  const [categoryStats, setCategoryStats] = useState<Array<{_id: string, count: number}>>([]);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const queryParams = new URLSearchParams({
        page: "1",
        limit: "20",
        status: "published",
        ...(selectedCategory !== "All" && { category: selectedCategory }),
        ...(searchTerm && { search: searchTerm })
      });

      const response = await fetch(`/api/blogs?${queryParams}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data: BlogsResponse = await response.json();
      setBlogs(data.data.blogs);
      setPagination(data.data.pagination);
      setCategoryStats(data.data.categoryStats);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      // Fallback to empty array if API fails
      setBlogs([]);
    } finally {
      setIsLoading(false);
    }
  };

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

  useEffect(() => {
    if (mounted) {
      fetchBlogs();
    }
  }, [mounted, selectedCategory, searchTerm]);

  const filteredPosts = blogs;

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
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading blogs...</p>
              </div>
            ) : filteredPosts.length === 0 ? (
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
                {filteredPosts.map((post: Blog, index: number) => (
                  <motion.article
                    key={post._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/blogs/${post.slug}`}>
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
                          {post.featured && (
                            <div className="absolute top-6 right-6">
                              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                Featured
                              </span>
                            </div>
                          )}
                          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
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
                              {post.formattedDate}
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
