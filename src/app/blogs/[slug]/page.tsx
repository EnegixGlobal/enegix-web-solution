"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Tag, 
  Eye, 
  Heart, 
  Share2,
  ChevronRight,
  Star
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";

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

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  // Fetch blog by slug
  const fetchBlog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/blogs/${slug}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          setError("Blog not found");
        } else {
          throw new Error("Failed to fetch blog");
        }
        return;
      }

      const data = await response.json();
      setBlog(data.data);

      // Set meta tags
      document.title = data.data.metaTitle || data.data.title;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", data.data.metaDescription || data.data.excerpt);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", data.data.metaDescription || data.data.excerpt);
        document.head.appendChild(metaDescription);
      }

      // Fetch related blogs
      fetchRelatedBlogs(data.data.category);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError("Failed to load blog");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch related blogs
  const fetchRelatedBlogs = async (category: string) => {
    try {
      const response = await fetch(`/api/blogs?category=${category}&limit=3&status=published`);
      if (response.ok) {
        const data = await response.json();
        setRelatedBlogs(data.data.blogs.filter((b: Blog) => b.slug !== slug).slice(0, 3));
      }
    } catch (error) {
      console.error("Error fetching related blogs:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <ScrollFix />
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading blog...</p>
          </div>
        </div>
        <Footer />
        <ScrollToTopButton />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <ScrollFix />
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {error || "Blog not found"}
            </h1>
            <p className="text-gray-600 mb-6">
              The blog you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>
        </div>
        <Footer />
        <ScrollToTopButton />
      </>
    );
  }

  return (
    <>
      <ScrollFix />
      <Navbar />
      <main className="bg-white text-gray-900 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200 pt-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blogs" className="hover:text-teal-600 transition-colors">
                Blogs
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">{blog.title}</span>
            </nav>
          </div>
        </div>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category and Featured Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
              {blog.featured && (
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{blog.formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>{blog.views} views</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>{blog.likes} likes</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div 
              className="text-gray-800 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
            />
          </motion.div>

          {/* Tags */}
          {blog.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100 hover:bg-teal-100 transition-colors duration-300"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 mb-12"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Found this article helpful?
              </h3>
              <p className="text-gray-600 mb-6">
                Share it with others who might benefit from these insights
              </p>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => {
                    navigator.share?.({
                      title: blog.title,
                      text: blog.excerpt,
                      url: window.location.href,
                    }) || navigator.clipboard.writeText(window.location.href);
                  }}
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-center justify-between pt-8 border-t border-gray-200"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all blogs
            </Link>
            
            <div className="text-right">
              <p className="text-sm text-gray-600">More insights coming soon</p>
            </div>
          </motion.div>
        </article>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h2>
                <p className="text-gray-600">
                  Discover more insights in {blog.category}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog, index) => (
                  <motion.article
                    key={relatedBlog._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/blogs/${relatedBlog.slug}`}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedBlog.image}
                            alt={relatedBlog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs font-medium">
                              {relatedBlog.category}
                            </span>
                            {relatedBlog.featured && (
                              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                            {relatedBlog.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {relatedBlog.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{relatedBlog.formattedDate}</span>
                            <span>{relatedBlog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
