"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import Link from "next/link";
import Image from "next/image";
import { enablePageScroll } from "@/utils/scroll-helper";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { toast } from "react-hot-toast";

// Portfolio project interface
interface Portfolio {
  _id: string;
  title: string;
  logo: string;
  category: string;
  type?: string;
  description: string;
  image: string;
  technologiesUsed: string[];
  tags: string[];
  link?: string;
  featured: boolean;
  status: string;
  stats: {
    organicGrowth: number;
    paidGrowth: number;
  };
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

// Featured Project Card Component (larger display)
const FeaturedProjectCard = ({ project }: { project: Portfolio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 mx-4 lg:mx-0">
      <div className="flex flex-col lg:flex-row min-h-[350px] lg:h-[400px]">
        {/* Project Info */}
        <div className="p-4 md:p-6 lg:p-8 flex-1 lg:flex-7 flex flex-col justify-center">
          <Image
            src={project.logo || "/placeholder-logo.png"}
            alt={project.title}
            width={100}
            height={100}
            className="mb-4 hidden md:block"
          />

          <div className="flex justify-between">
            <h3 className="text-lg border-t pt-5 border-gray-300 sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
              {project.title}
            </h3>
            <Image
              src={project.logo || "/placeholder-logo.png"}
              alt={project.title}
              width={60}
              height={50}
              className="mb-4 block md:hidden"
            />
          </div>

          <p className="text-gray-600 mb-4 md:mb-4 leading-relaxed text-sm md:text-base ">
            {project.description}
          </p>

          <div className="flex  sm:flex-row ">
            <Link href={`/portfolio/${project._id}`}></Link>

            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit sm:w-auto text-xs md:text-sm">
                  Live Demo
                </Button>
              </Link>
            )}
          </div>
        </div>
        {/* Project Image */}
        <div className="lg:flex-6 relative">
          <div className="relative h-60 lg:h-60 lg:top-4 lg:right-4  lg:rounded-bl-2xl lg:rounded-tr-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Stats Cards - Only show on larger screens */}
          <div className="hidden lg:flex absolute bottom-4 right-4 left-4 flex-wrap gap-2">
            <div className="bg-white/90 backdrop-blur-sm p-2 text-center rounded-lg shadow-md flex-1 min-w-0">
              <h4 className="text-gray-500 text-xs font-medium truncate">
                Growth
              </h4>
              <p className="text-lg font-bold text-teal-600">
                {project.stats?.organicGrowth || 150}%
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-2 text-center rounded-lg shadow-md flex-1 min-w-0">
              <h4 className="text-gray-500 text-xs font-medium truncate">
                Success
              </h4>
              <p className="text-lg font-bold text-teal-600">
                {project.stats?.paidGrowth || 98}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [portfolioProjects, setPortfolioProjects] = useState<Portfolio[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Portfolio[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Featured projects for showcase
  const featuredProjects = portfolioProjects.filter(
    (project: Portfolio) => project.featured
  );

  // Fetch portfolios from API
  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/portfolio?status=active&limit=50");
      const data = await response.json();

      if (data.success) {
        setPortfolioProjects(data.data);
        setFilteredProjects(data.data);
      } else {
        console.error("Failed to fetch portfolios:", data.message);
        toast.error("Failed to load portfolio projects");
      }
    } catch (error) {
      console.error("Error fetching portfolios:", error);
      toast.error("Failed to load portfolio projects");
    } finally {
      setLoading(false);
    }
  };

  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = portfolioProjects;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (project: Portfolio) => project.category === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project: Portfolio) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologiesUsed.some((tech: string) =>
            tech.toLowerCase().includes(query)
          ) ||
          (project.tags &&
            project.tags.some((tag: string) =>
              tag.toLowerCase().includes(query)
            ))
      );
    }

    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery, portfolioProjects]);

  // Fetch portfolios on mount
  useEffect(() => {
    fetchPortfolios();
  }, []);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (!mounted) return;

    // Enable page scrolling and fix scroll issues
    enablePageScroll();

    // Clear any transform styles that might be affecting scroll
    const mainContent =
      document.getElementById("__next") || document.querySelector("main");
    if (mainContent) {
      mainContent.style.transform = "none";
    }
  }, [mounted]);

  // Get unique categories from portfolios
  const categories = [
    "All",
    ...Array.from(new Set(portfolioProjects.map((p) => p.category))),
  ];

  if (loading) {
    return (
      <>
        <ScrollFix />
        <Navbar />
        <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
          <Container>
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollFix />
      <Navbar />

      <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        <Container>
          {/* Hero Section - Edge-to-edge, big tilted image cards */}
          <section className="relative pt-26 md:pt-24 pb-8 md:pb-12 bg-white border-b border-teal-100">
            <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center px-4 md:px-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-3 md:mb-4 leading-tight">
                  Our Portfolio
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 max-w-xl leading-relaxed">
                  Explore a curated selection of our best work in web,
                  e-commerce, branding, and marketing. Simple, effective, and
                  results-driven.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <Link href="/contact">
                    <Button
                      size="sm"
                      className="bg-teal-600 text-white hover:bg-teal-700 w-full sm:w-auto text-xs md:text-sm px-4 py-2 md:px-6 md:py-3">
                      Start Your Project
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-600 text-teal-700 hover:bg-teal-50 w-full sm:w-auto text-xs md:text-sm px-4 py-2 md:px-6 md:py-3">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Right: Three big tilted images like cards */}
              <div className="flex-1 flex justify-center items-center relative min-h-[280px] sm:min-h-[350px] md:min-h-[420px] lg:min-h-[500px] w-full">
                {/* Card 1 (bottom, left) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-[55%] rotate-[-12deg] shadow-xl rounded-2xl md:rounded-3xl overflow-hidden border border-teal-100 w-[200px] h-[140px] sm:w-[280px] sm:h-[180px] md:w-[360px] md:h-[240px] lg:w-[440px] lg:h-[300px] bg-gray-100 z-10">
                  <Image
                    src={portfolioProjects[1]?.image || "/portfolio/cozy.png"}
                    alt={portfolioProjects[1]?.title || "Portfolio Project"}
                    width={440}
                    height={300}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Card 2 (middle, main) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[3deg] shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden border-2 border-teal-200 w-[220px] h-[160px] sm:w-[320px] sm:h-[220px] md:w-[400px] md:h-[280px] lg:w-[480px] lg:h-[340px] bg-white z-20">
                  <Image
                    src={
                      portfolioProjects[0]?.image || "/portfolio/thakurain.png"
                    }
                    alt={portfolioProjects[0]?.title || "Portfolio Project"}
                    width={480}
                    height={340}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Card 3 (top, right) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-[45%] rotate-[15deg] shadow-xl rounded-2xl md:rounded-3xl overflow-hidden border border-teal-100 w-[200px] h-[140px] sm:w-[280px] sm:h-[180px] md:w-[360px] md:h-[240px] lg:w-[440px] lg:h-[300px] bg-gray-100 z-10">
                  <Image
                    src={
                      portfolioProjects[2]?.image || "/portfolio/wedding.png"
                    }
                    alt={portfolioProjects[2]?.title || "Portfolio Project"}
                    width={440}
                    height={300}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section id="featured-projects" className="py-6 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-8 md:mb-12 px-4 md:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6 text-gray-900">
                {activeCategory === "All" ? "Featured" : activeCategory}{" "}
                <span className="text-teal-600">Projects</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                {activeCategory === "All" 
                  ? "Take a closer look at some of our most successful projects that have delivered exceptional results for our clients."
                  : `Explore our ${activeCategory.toLowerCase()} projects and see how we've helped clients in this industry.`
                }
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4 relative">
              {/* Sticky Left Button - Hidden on mobile */}
              <div className="hidden lg:block w-[180px] z-20 h-fit space-y-2 sticky top-24">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-fit text-left text-xs py-2 px-3 ${
                      activeCategory === category
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                    {category}
                    
                  </Button>
                ))}
              </div>

              {/* Mobile Category Pills */}
              <div className="lg:hidden flex gap-2 mb-4 px-4 overflow-x-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap text-xs py-1 px-3 ${
                      activeCategory === category
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                    {category}
                  </Button>
                ))}
              </div>

              {/* Scrollable Cards */}
              <div className="flex-1 space-y-3 md:space-y-4">
                {activeCategory === "All" 
                  ? featuredProjects.map((project: Portfolio) => (
                      <FeaturedProjectCard key={project._id} project={project} />
                    ))
                  : filteredProjects.map((project: Portfolio) => (
                      <FeaturedProjectCard key={project._id} project={project} />
                    ))
                }
                
                {/* Show message if no projects in selected category */}
                {filteredProjects.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">
                      {activeCategory === "All" 
                        ? "No featured projects available" 
                        : `No projects found in ${activeCategory} category`
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
