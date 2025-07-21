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
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import Container from "@/components/Container";

// Portfolio project data
const portfolioProjects = [
  {
    id: "cozy-trunk",
    title: "Cozy Trunk",
    category: "Clothing",
    type: "E-commerce",
    description:
      "Cozy Trunk is your one-stop destination for trendy, comfy, and affordable fashion. From cozy everyday wear to statement outfits, we bring handpicked styles right to your doorstep. Explore fresh collections that blend comfort with confidence—because you deserve to look good and feel even better.",
    image: "/portfolio/cozy.png",
    tags: ["Wordpress", "PHP", "MySQL", "Elementor"],
    link: "https://cozytrunk.in/",
    featured: true,
    stats: {
      organicGrowth: 1200,
      paidGrowth: 300,
    },
  },
  {
    id: "thakurain",
    title: "Thakurain",
    category: "Clothing",
    type: "E-commerce",
    description:
      "Thakurain.in is your go‑to hub for stylish and affordable ethnic fashion—desi vibes, global appeal. Whether you need festive lehengas, chic kurtis, or everyday designer sarees, this store wraps traditional craftsmanship in a modern silhouette. Expect curated looks with free shipping across India, trending designs, and sizes that actually fit. (<em>Exactly–what you want to wear.</em>)",
    image: "/portfolio/thakurain.png",
    tags: ["Wordpress", "PHP", "Elementor", "MySQL"],
    link: "https://thakurain.in/",
    featured: true,
  },
  {
    id: "aussie-voyages",
    title: "Aussie Voyages",
    category: "Travel",
    description:
      "Aussie Voyages is a Victoria-based inbound tour operator offering custom travel experiences across Australia and New Zealand. From private coach tours to flexible holiday packages, they make exploring easy and unforgettable. With 24/7 support and expert planning, your dream adventure starts he",
    image: "/portfolio/ausi.png",
    tags: ["Logo Design", "Brand Identity", "Typography"],
    link: "https://aussievoyages.com.au/",
    featured: true,
  },
  {
    id: "bharat-edge",
    title: "Bharat Edge",
    category: "Web Development",
    description:
      "Bharat Edge helps startups and MSMEs grow with expert services like company registration, certifications, and funding support. From launch to scale, their tailored solutions simplify business compliance and boost credibility. Your trusted partner for hassle-free business growth across India.",
    image: "/portfolio/bharat.png",
    tags: ["WordPress", "PHP", "Elementor", "MySQL"],
    link: "https://bharat-edge.com",
    featured: false,
  },
  {
    id: "bagwan-interiors",
    title: "Bagwan Interiors",
    category: "Interior Design",
    description:
      "Online store for premium interior design services with detailed project portfolios and personalized consultations.",
    image: "/portfolio/bagwan.png",
    tags: ["WordPress", "Custom Theme", "WooCommerce"],
    link: "https://bagwaninterior.com/",
    featured: false,
  },
  {
    id: "rjholidays",
    title: "RJ Holidays",
    category: "Travel",
    description:
      "RJ Holidays offers expert travel packages to South Korea with everything from flights and hotels to guided tours. Explore Seoul, Jeju, and more with hassle-free planning and personalized service. Your gateway to unforgettable Korean adventures.",
    image: "/portfolio/travel.png",
    tags: ["SEO", "Content Marketing", "PPC", "Analytics"],
    link: "https://rjholidays.co.in/",
    featured: false,
  },
  {
    id: "well-pit",
    title: "Well Pit",
    category: "Chemicals",
    description:
      "Wellpit offers high-quality industrial chemicals and refreshing beverages like mango and jaljeera drinks. Trusted for purity, lab-tested products, and sustainable practices. Blending science and refreshment with innovation from Gujarat, India.",
    image: "/portfolio/wellpit.png",
    tags: ["Packaging Design", "Logo Design", "Visual Identity"],
    link: "https://wellpit.com",
    featured: false,
  },
  {
    id: "north-goa-taxi-services",
    title: "North Goa Taxi Services",
    category: "Travel",
    description:
      "Reliable taxi services in North Goa for hassle-free airport transfers, local sightseeing, and intercity travel.",
    image: "/portfolio/ride.png",
    tags: ["React", "Stripe", "Firebase", "Netlify"],
    link: "https://northgoataxiservice.com/",
    featured: false,
  },
  {
    id: "shree-moters",
    title: "Shree Motors",
    category: "Automotive",
    description:
      "Complete visual identity for an automotive company specializing in electric vehicles.",
    image: "/portfolio/shreemoters.png",
    tags: ["Logo Design", "Brand Guidelines", "Print Materials"],
    link: "https://srirammotors.in/",
    featured: false,
  },
];

// Filter categories
const categories = [
  "All",
  "Web Development",
  "E-commerce",
  "Branding",
  "Digital Marketing",
];

// Project Card Component
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof portfolioProjects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
      {/* Project Image */}
      <div className="relative h-60 sm:h-56 md:h-64 w-full overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ7mFT6VQAAAABJRU5ErkJggg=="
        />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-2 md:top-4 left-2 md:left-4 z-20">
            <span className="px-2 py-1 text-xs font-medium text-white bg-teal-600 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-teal-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-1 md:gap-2 flex-wrap mb-4 md:mb-6">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <Link href={`/portfolio/${project.id}`}>
          <Button
            variant="outline"
            size="sm"
            className="w-full group/btn text-xs md:text-sm py-2">
            View Project
            <svg
              className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

// Featured Project Card Component (larger display)
const FeaturedProjectCard = ({
  project,
}: {
  project: (typeof portfolioProjects)[0];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 mx-4 lg:mx-0">
      <div className="flex flex-col lg:flex-row min-h-[320px] lg:h-[360px]">
        {/* Project Info */}
        <div className="p-4 md:p-6 lg:p-8 flex-1 lg:flex-7 flex flex-col justify-center">
          <span className="inline-block px-2 py-1 mb-2 md:mb-3 text-xs font-medium text-teal-700 bg-teal-100 rounded-full w-fit">
            {project.category}
          </span>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base line-clamp-4">
            {project.description}
          </p>

          <div className="flex gap-1 md:gap-2 flex-wrap mb-4 md:mb-6">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex  sm:flex-row gap-2 md:gap-3">
            <Link href={`/portfolio/${project.id}`}>
              <Button className="group w-fit sm:w-auto text-xs md:text-sm">
                View Case Study
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </Link>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit sm:w-auto text-xs md:text-sm">
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
        {/* Project Image */}
        <div className="lg:flex-6 relative">
          <div className="relative h-56 lg:h-60 lg:top-4 lg:right-4  lg:rounded-bl-2xl lg:rounded-tr-2xl overflow-hidden">
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
                {project.stats?.organicGrowth || "150%"}
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-2 text-center rounded-lg shadow-md flex-1 min-w-0">
              <h4 className="text-gray-500 text-xs font-medium truncate">
                Success
              </h4>
              <p className="text-lg font-bold text-teal-600">
                {project.stats?.paidGrowth || "98%"}
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
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [searchQuery, setSearchQuery] = useState("");

  // Featured projects for showcase
  const featuredProjects = portfolioProjects.filter(
    (project) => project.featured
  );

  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = portfolioProjects;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (project) => project.category === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery]);

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
                    src="/portfolio/cozy.png"
                    alt={portfolioProjects[1].title}
                    width={440}
                    height={300}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Card 2 (middle, main) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[3deg] shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden border-2 border-teal-200 w-[220px] h-[160px] sm:w-[320px] sm:h-[220px] md:w-[400px] md:h-[280px] lg:w-[480px] lg:h-[340px] bg-white z-20">
                  <Image
                    src="/portfolio/thakurain.png"
                    alt={portfolioProjects[0].title}
                    width={480}
                    height={340}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Card 3 (top, right) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-[45%] rotate-[15deg] shadow-xl rounded-2xl md:rounded-3xl overflow-hidden border border-teal-100 w-[200px] h-[140px] sm:w-[280px] sm:h-[180px] md:w-[360px] md:h-[240px] lg:w-[440px] lg:h-[300px] bg-gray-100 z-10">
                  <Image
                    src="/portfolio/wedding.png"
                    alt={portfolioProjects[2].title}
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
                Featured <span className="text-teal-600">Projects</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                Take a closer look at some of our most successful projects that
                have delivered exceptional results for our clients.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4 relative">
              {/* Sticky Left Button - Hidden on mobile */}
              <div className="hidden lg:block w-[180px] z-20 h-fit space-y-2 sticky top-24">
                <Button className="w-fit text-xs py-2 px-3">All</Button>
                <Button className="w-fit text-xs py-2 px-3">Gym Website</Button>
                <Button className="w-fit text-xs py-2 px-3">E-commerce</Button>
                <Button className="w-fit text-xs py-2 px-3">Portfolio</Button>
                <Button className="w-fit text-xs py-2 px-3">
                  Landing Page
                </Button>
                <Button className="w-fit text-xs py-2 px-3">Blog</Button>
              </div>

              {/* Mobile Category Pills */}
              <div className="lg:hidden flex gap-2 mb-4 px-4 overflow-x-auto">
                <Button className="whitespace-nowrap text-xs py-1 px-3">
                  All
                </Button>
                <Button className="whitespace-nowrap text-xs py-1 px-3">
                  Gym
                </Button>
                <Button className="whitespace-nowrap text-xs py-1 px-3">
                  Shop
                </Button>
                <Button className="whitespace-nowrap text-xs py-1 px-3">
                  Portfolio
                </Button>
                <Button className="whitespace-nowrap text-xs py-1 px-3">
                  Landing
                </Button>
              </div>

              {/* Scrollable Cards */}
              <div className="flex-1 space-y-3 md:space-y-4">
                {featuredProjects.map((project) => (
                  <FeaturedProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* Filter and Search Section */}
          <section className="py-6 md:py-8 bg-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12 px-4 md:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6 text-gray-900">
                All <span className="text-teal-600">Projects</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                Browse through our complete portfolio and filter by category or
                search for specific projects.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-between items-center mb-8 md:mb-12 gap-4 md:gap-6 px-4 md:px-0">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start w-full lg:w-auto">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300",
                      activeCategory === category
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102"
                    )}>
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 md:py-3 pl-10 md:pl-12 pr-4 text-sm md:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12 md:py-16 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-md mx-auto">
                  <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-12 md:w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    No projects found
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    We couldn't find any projects matching your current filters.
                    Try adjusting your search criteria.
                  </p>
                  <Button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                    variant="outline"
                    size="sm"
                    className="text-xs md:text-sm">
                    Reset Filters
                  </Button>
                </motion.div>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="py-8 md:py-10">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-12 border border-gray-200 shadow-lg text-center max-w-4xl mx-4 md:mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                  Let's Create Something
                  <span className="text-teal-600"> Amazing Together</span>
                </h2>

                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Ready to bring your vision to life? We're here to help you
                  create a project that exceeds your expectations and delivers
                  real results for your business.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                  <Link href="/contact">
                    <Button
                      size="sm"
                      className="w-full sm:w-auto text-xs md:text-sm px-4 md:px-6">
                      Start a Project
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto text-xs md:text-sm px-4 md:px-6">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </Container>
          </section>
        </Container>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
