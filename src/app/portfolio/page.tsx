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
import { FaArrowRight } from "react-icons/fa";

// Portfolio project data
const portfolioProjects = [
  {
    id: "healthier-you",
    title: "Healthier You",
    category: "Web Development",
    description:
      "A dynamic health and wellness platform featuring personalized nutrition plans, workout routines, and health tracking tools.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://healthier-you.com",
    featured: true,
    stats: {
      organicGrowth: 1200,
      paidGrowth: 300,
    },
  },
  {
    id: "urban-taste",
    title: "Urban Taste",
    category: "E-commerce",
    description:
      "An elegant food delivery platform connecting users with local restaurants offering gourmet dining experiences.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Firebase"],
    link: "https://urban-taste.com",
    featured: true,
  },
  {
    id: "echo-studios",
    title: "Echo Studios",
    category: "Branding",
    description:
      "Complete brand identity for a recording studio, including logo design, color palette, typography, and marketing materials.",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    tags: ["Logo Design", "Brand Identity", "Typography"],
    link: "https://echo-studios.com",
    featured: true,
  },
  {
    id: "terra-realty",
    title: "Terra Realty",
    category: "Web Development",
    description:
      "A real estate platform with property listings, virtual tours, and agent profiles for a premium realty company.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    tags: ["WordPress", "Custom Plugins", "Google Maps API"],
    link: "https://terra-realty.com",
    featured: false,
  },
  {
    id: "fit-gear",
    title: "FitGear",
    category: "E-commerce",
    description:
      "Online store for premium fitness equipment with detailed product specifications and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1583454110551-21f9d2291d10",
    tags: ["Shopify", "Custom Theme", "Payment Gateway Integration"],
    link: "https://fit-gear.com",
    featured: false,
  },
  {
    id: "pulse-marketing",
    title: "Pulse Marketing",
    category: "Digital Marketing",
    description:
      "Comprehensive digital marketing campaign that increased client's online visibility by 150% and lead generation by 80%.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["SEO", "Content Marketing", "PPC", "Analytics"],
    link: "https://pulse-agency.com",
    featured: false,
  },
  {
    id: "nova-coffee",
    title: "Nova Coffee",
    category: "Branding",
    description:
      "Brand identity and packaging design for a specialty coffee roaster, emphasizing sustainability and artisanal quality.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    tags: ["Packaging Design", "Logo Design", "Visual Identity"],
    link: "https://nova-coffee.com",
    featured: false,
  },
  {
    id: "tech-summit",
    title: "Tech Summit 2023",
    category: "Web Development",
    description:
      "Event website with registration system, speaker profiles, and real-time schedule updates for a major tech conference.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    tags: ["React", "Stripe", "Firebase", "Netlify"],
    link: "https://tech-summit-2023.com",
    featured: false,
  },
  {
    id: "green-planet",
    title: "Green Planet",
    category: "Branding",
    description:
      "Complete visual identity for an environmental non-profit organization focused on conservation and sustainability.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    tags: ["Logo Design", "Brand Guidelines", "Print Materials"],
    link: "https://green-planet-initiative.org",
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
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ7mFT6VQAAAABJRU5ErkJggg=="
        />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 text-xs font-medium text-white bg-teal-600 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-2 flex-wrap mb-6">
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
          <Button variant="outline" size="sm" className="w-full group/btn">
            View Project
            <svg
              className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
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
      className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row h-[400px]">
        {/* Project Info */}
        <div className="p-8  flex-7 flex-col justify-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-teal-700 bg-teal-100 rounded-full w-fit">
            {project.category}
          </span>

          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {project.title}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex gap-2 flex-wrap mb-8">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-gray-100 rounded-md text-gray-700">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href={`/portfolio/${project.id}`}>
              <Button size="lg" className="group">
                View Case Study
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                <Button variant="outline" size="lg">
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
        {/* Project Image */}
        <div className=" flex-5">
          <div className="relative h-60 top-4 right-4 rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform rounded-2xl duration-500"
            />
          </div>

          {/* Featured Badge */}
          <div className="mt-16 space-x-3">
            <span className=" bg-gray-300 px-16 py-10 rounded-xl">{project.stats && project.stats.organicGrowth}</span>
            <span className=" bg-gray-300 px-16 py-10 rounded-xl">{project.stats && project.stats.organicGrowth}</span>
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
          <section className="relative md:pt-12 pt-30  bg-white border-b border-teal-100">
            <div className="w-full flex flex-col md:flex-row items-center md:items-stretch md:gap-0 gap-10">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center ">
                <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
                  Our Portfolio
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
                  Explore a curated selection of our best work in web,
                  e-commerce, branding, and marketing. Simple, effective, and
                  results-driven.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-teal-600 text-white hover:bg-teal-700">
                      Start Your Project
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-teal-600 text-teal-700 hover:bg-teal-50">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Right: Three big tilted images like cards */}
              <div className="flex-1 flex justify-center items-center relative min-h-[420px] md:min-h-[520px] lg:min-h-[600px] w-full">
                {/* Card 1 (bottom, left) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-[55%] rotate-[-12deg] shadow-2xl rounded-3xl overflow-hidden border-2 border-teal-100 w-[320px] h-[220px] md:w-[440px] md:h-[300px] lg:w-[520px] lg:h-[340px] bg-gray-100 z-10">
                  <Image
                    src={portfolioProjects[1].image}
                    alt={portfolioProjects[1].title}
                    width={520}
                    height={340}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Card 2 (middle, main) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[3deg] shadow-2xl rounded-3xl overflow-hidden border-2 border-teal-200 w-[340px] h-[240px] md:w-[480px] md:h-[340px] lg:w-[560px] lg:h-[380px] bg-white z-20">
                  <Image
                    src={portfolioProjects[0].image}
                    alt={portfolioProjects[0].title}
                    width={560}
                    height={380}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Card 3 (top, right) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-[45%] rotate-[15deg] shadow-2xl rounded-3xl overflow-hidden border-2 border-teal-100 w-[320px] h-[220px] md:w-[440px] md:h-[300px] lg:w-[520px] lg:h-[340px] bg-gray-100 z-10">
                  <Image
                    src={portfolioProjects[2].image}
                    alt={portfolioProjects[2].title}
                    width={520}
                    height={340}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-5 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "40+", label: "Happy Clients" },
                { value: "4", label: "Service Categories" },
                { value: "99%", label: "Success Rate" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Featured Projects Section */}
          <section id="featured-projects" className="py-5 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Featured <span className="text-teal-600">Projects</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Take a closer look at some of our most successful projects that
                have delivered exceptional results for our clients.
              </p>
            </motion.div>

            <div className="flex gap-4 relative">
              {/* Sticky Left Button */}
              <div className="w-[200px] z-20 h-fit space-y-3 sticky top-24 self-start">
                <Button className="w-fit">All</Button>
                <Button className="w-fit">Gym Website</Button>
                <Button className="w-fit">E-commerce Store</Button>
                <Button className="w-fit">Portfolio Website</Button>
                <Button className="w-fit">Landing Page</Button>
                <Button className="w-fit">Blog</Button>
              </div>

              {/* Scrollable Cards */}
              <div className="flex-1 max-h-[600px] overflow-y-auto pr-2 space-y-4">
                {featuredProjects.map((project) => (
                  <FeaturedProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* Filter and Search Section */}
          <section className="py-5 bg-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                All <span className="text-teal-600">Projects</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Browse through our complete portfolio and filter by category or
                search for specific projects.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                      activeCategory === category
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                    )}>
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
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
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-400"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No projects found
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We couldn't find any projects matching your current filters.
                    Try adjusting your search criteria.
                  </p>
                  <Button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                    variant="outline">
                    Reset Filters
                  </Button>
                </motion.div>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="py-10 ">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Let's Create Something
                  <span className="text-teal-600"> Amazing Together</span>
                </h2>

                <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                  Ready to bring your vision to life? We're here to help you
                  create a project that exceeds your expectations and delivers
                  real results for your business.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg">Start a Project</Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg">
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
