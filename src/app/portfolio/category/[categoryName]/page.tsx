"use client";

import { useEffect, useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import {
  LayoutGrid,
  ShoppingCart,
  Code2,
  Plane,
  Home,
  Car,
  Shirt,
  Dumbbell,
  Activity,
  GraduationCap,
  Cpu,
  Coins,
  Building2,
  Tv,
  FlaskConical,
  Utensils,
  FolderOpen,
  ArrowLeft,
  Search,
  RefreshCw,
  type LucideIcon
} from "lucide-react";

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

// Category metadata definitions
interface CategoryMeta {
  title: string;
  image: string;
  icon: LucideIcon;
  description: string;
}

const CATEGORY_META_MAP: Record<string, CategoryMeta> = {
  All: {
    title: "All Projects",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    icon: LayoutGrid,
    description: "Explore our complete showcase of bespoke client successes."
  },
  "E-commerce": {
    title: "E-Commerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
    icon: ShoppingCart,
    description: "High-performance digital stores designed to boost sales."
  },
  "Web Development": {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    icon: Code2,
    description: "Custom web applications and sophisticated API systems."
  },
  "Travel": {
    title: "Travel & Tourism",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
    icon: Plane,
    description: "Immersive experiences and robust booking applications."
  },
  "Interior Design": {
    title: "Interior Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    icon: Home,
    description: "Visual architectural showcases and designer portfolios."
  },
  "Automotive": {
    title: "Automotive",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80",
    icon: Car,
    description: "Dynamic dealerships and vehicle rental applications."
  },
  "Clothing": {
    title: "Fashion & Clothing",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
    icon: Shirt,
    description: "Stunning apparel e-stores and modern fashion catalogs."
  },
  "Gym": {
    title: "Gym & Fitness",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    icon: Dumbbell,
    description: "Energetic booking portals and athletic trainer sites."
  },
  "Healthcare": {
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    icon: Activity,
    description: "Patient management apps and wellness clinic sites."
  },
  "Education": {
    title: "Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    icon: GraduationCap,
    description: "Advanced e-learning resources and academy portals."
  },
  "Technology": {
    title: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    icon: Cpu,
    description: "SaaS products, IT innovations, and modern tech portfolios."
  },
  "Finance": {
    title: "Finance",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    icon: Coins,
    description: "Fintech solutions, secure payments, and accounting."
  },
  "Real Estate": {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    icon: Building2,
    description: "Property listings, realtor portals, and complex MLS systems."
  },
  "Entertainment": {
    title: "Entertainment",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    icon: Tv,
    description: "High-fidelity video hubs, audio portals, and events."
  },
  "Chemicals": {
    title: "Chemicals & Industry",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=600&q=80",
    icon: FlaskConical,
    description: "Sophisticated industrial catalogues and logistics sites."
  },
  "Food & Beverage": {
    title: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
    icon: Utensils,
    description: "Exquisite culinary interfaces and restaurant sites."
  },
  "Other": {
    title: "Bespoke Solutions",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    icon: FolderOpen,
    description: "Custom digital architectures tailored for niche businesses."
  }
};

const getCategoryMeta = (category: string): CategoryMeta => {
  const normalized = category.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  
  // Find key that matches normalized string
  const foundKey = Object.keys(CATEGORY_META_MAP).find(key => {
    const keyNorm = key.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
    return keyNorm === normalized || keyNorm + "s" === normalized || normalized + "s" === keyNorm;
  });

  if (foundKey) {
    return CATEGORY_META_MAP[foundKey];
  }

  // Common variations and typos
  if (normalized.includes("ecom") || normalized.includes("shop")) {
    return CATEGORY_META_MAP["E-commerce"];
  }
  if (normalized.includes("cloth") || normalized.includes("wear") || normalized.includes("fashion")) {
    return CATEGORY_META_MAP["Clothing"];
  }
  if (normalized.includes("travel") || normalized.includes("tour")) {
    return CATEGORY_META_MAP["Travel"];
  }
  if (normalized.includes("gym") || normalized.includes("fit") || normalized.includes("sport") || normalized.includes("workout")) {
    return CATEGORY_META_MAP["Gym"];
  }

  // Default fallback
  return {
    title: category,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    icon: FolderOpen,
    description: `Clean digital creations for the ${category} sector.`
  };
};

// Featured Project Card Component
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
              width={65}
              height={55}
              className="mb-4 block md:hidden"
            />
          </div>

          <p className="text-gray-600 mb-4 md:mb-4 leading-relaxed text-sm md:text-base ">
            {project.description}
          </p>

          <div className="flex sm:flex-row">
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
          <div className="relative shadow-lg h-60 lg:h-60 lg:top-4 lg:right-4 lg:rounded-bl-2xl lg:rounded-tr-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="hover:scale-105 transition-transform duration-500"
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

interface PageProps {
  params: Promise<{
    categoryName: string;
  }>;
}

export default function CategoryPortfolioPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const categoryName = decodeURIComponent(resolvedParams.categoryName);
  
  const [mounted, setMounted] = useState(false);
  const [portfolioProjects, setPortfolioProjects] = useState<Portfolio[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Portfolio[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const categoryMeta = getCategoryMeta(categoryName);
  const CategoryIcon = categoryMeta.icon;

  // Fetch portfolios from API filtered by category
  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      // Fetch only for specific category
      const response = await fetch(`/api/portfolio?status=active&limit=50&category=${encodeURIComponent(categoryName)}`);
      const data = await response.json();

      if (data.success) {
        setPortfolioProjects(data.data);
        setFilteredProjects(data.data);
      } else {
        console.error("Failed to fetch portfolios:", data.message);
        toast.error(`Failed to load ${categoryMeta.title} projects`);
      }
    } catch (error) {
      console.error("Error fetching portfolios:", error);
      toast.error(`Failed to load ${categoryMeta.title} projects`);
    } finally {
      setLoading(false);
    }
  };

  // Filter projects based on local search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProjects(portfolioProjects);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = portfolioProjects.filter(
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

    setFilteredProjects(filtered);
  }, [searchQuery, portfolioProjects]);

  // Fetch portfolios on mount/categoryName change
  useEffect(() => {
    fetchPortfolios();
  }, [categoryName]);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Add smooth scrolling and transform fixes
  useEffect(() => {
    if (!mounted) return;

    enablePageScroll();

    const mainContent =
      document.getElementById("__next") || document.querySelector("main");
    if (mainContent) {
      mainContent.style.transform = "none";
    }
  }, [mounted]);

  if (loading) {
    return (
      <>
        <ScrollFix />
        <Navbar />
        <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
          <Container>
            <div className="flex flex-col justify-center items-center py-40 gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
              <p className="text-gray-500 text-sm animate-pulse">Loading {categoryMeta.title} projects...</p>
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
        {/* Category Hero Header Banner */}
        <section className="relative pt-28 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-gray-950">
          {/* Background themed image with scale and elegant overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={categoryMeta.image}
              alt={categoryMeta.title}
              fill
              priority
              className="object-cover opacity-60 scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/60 to-gray-950 z-10" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto px-4 md:px-0 flex flex-col items-center text-center">
              
              {/* Back to Portfolio navigation pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Link href="/portfolio">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/25 transition-all duration-300 backdrop-blur-md cursor-pointer hover:-translate-x-1">
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Portfolio
                  </span>
                </Link>
              </motion.div>

              {/* Large Glowing Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-4 rounded-3xl bg-teal-500/10 text-teal-400 border border-teal-500/20 backdrop-blur-md mb-6 shadow-[0_0_30px_rgba(20,184,166,0.15)]"
              >
                <CategoryIcon className="h-10 w-10 md:h-12 md:w-12 animate-pulse-slow" />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-4"
              >
                {categoryMeta.title} <span className="text-teal-400">Projects</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed"
              >
                {categoryMeta.description} We construct tailored high-converting architectures for companies in the {categoryMeta.title.toLowerCase()} sector.
              </motion.p>

            </div>
          </div>
        </section>

        {/* Projects Listing & Search Section */}
        <Container>
          <section className="py-10 md:py-16">
            <div className="max-w-5xl mx-auto px-4 md:px-0">
              
              {/* Filter and Search Bar */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-b border-gray-150 pb-6 mb-8">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    Category Showcase
                  </h2>
                  <p className="text-gray-500 text-xs md:text-sm mt-0.5">
                    Currently displaying {filteredProjects.length} {filteredProjects.length === 1 ? 'creation' : 'creations'}
                  </p>
                </div>

                {/* Local search input within category */}
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search inside category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-full text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Projects Grid List */}
              <div className="space-y-6 md:space-y-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project: Portfolio) => (
                    <motion.div
                      key={project._id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <FeaturedProjectCard project={project} />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200"
                  >
                    <FolderOpen className="mx-auto h-14 w-14 text-gray-300 mb-4 animate-bounce" />
                    <h3 className="text-lg font-bold text-gray-900 mb-1">No Projects Found</h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto px-4 mb-6">
                      {searchQuery
                        ? `There are no projects matching "${searchQuery}" inside the ${categoryMeta.title} category.`
                        : `We are currently crafting some amazing new portfolios under the ${categoryMeta.title} category. Check back soon!`}
                    </p>
                    <div className="flex justify-center gap-3">
                      {searchQuery ? (
                        <Button
                          onClick={() => setSearchQuery("")}
                          className="flex items-center gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          <RefreshCw className="h-3.5 w-3.5" />
                          Clear Search
                        </Button>
                      ) : (
                        <Link href="/portfolio">
                          <Button className="bg-teal-600 text-white hover:bg-teal-700">
                            Explore Other Categories
                          </Button>
                        </Link>
                      )}
                    </div>
                  </motion.div>
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
