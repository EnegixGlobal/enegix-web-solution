"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import Link from "next/link";
import Image from "next/image";
import { enablePageScroll } from "@/utils/scroll-helper";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { notFound } from "next/navigation";

// Portfolio project data (same as in main portfolio page)
const portfolioProjects = [
  {
    id: "cozy-trunk",
    title: "Cozy Trunk",
    category: "Clothing",
    type: "E-commerce",
    description: "Cozy Trunk is your one-stop destination for trendy, comfy, and affordable fashion. From cozy everyday wear to statement outfits, we bring handpicked styles right to your doorstep. Explore fresh collections that blend comfort with confidence—because you deserve to look good and feel even better.",
    fullDescription: "Cozy Trunk revolutionizes online fashion retail by combining comfort with style. The platform features an intuitive shopping experience, advanced filtering systems, personalized recommendations, and seamless checkout processes. Built with WordPress and Elementor, it provides a scalable solution for growing fashion businesses while maintaining excellent performance and user experience.",
    image: "/portfolio/cozy.png",
    images: [
      "/portfolio/cozy.png",
      "/portfolio/cozy-1.png",
      "/portfolio/cozy-2.png",
      "/portfolio/cozy-3.png"
    ],
    tags: ["Wordpress", "PHP", "MySQL", "Elementor"],
    technologies: ["WordPress", "PHP", "MySQL", "Elementor", "WooCommerce", "Payment Gateway", "SEO"],
    link: "https://cozytrunk.in/",
    featured: true,
    client: "Cozy Trunk Fashion",
    duration: "2 months",
    year: "2024",
    challenges: [
      "Creating intuitive product discovery",
      "Optimizing for mobile commerce",
      "Integrating multiple payment options",
      "Building scalable inventory management"
    ],
    solutions: [
      "Implemented advanced filtering system",
      "Designed mobile-first responsive layout",
      "Integrated secure payment gateways",
      "Built custom inventory tracking"
    ],
    results: [
      "300% increase in online sales",
      "65% mobile conversion rate",
      "45% reduction in cart abandonment",
      "4.7/5 customer satisfaction score"
    ],
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
    description: "Thakurain.in is your go‑to hub for stylish and affordable ethnic fashion—desi vibes, global appeal. Whether you need festive lehengas, chic kurtis, or everyday designer sarees, this store wraps traditional craftsmanship in a modern silhouette.",
    fullDescription: "Thakurain represents the perfect blend of traditional Indian craftsmanship and modern e-commerce technology. The platform showcases ethnic fashion with detailed product galleries, size guides, and cultural context for each piece. Built with WordPress and enhanced with custom functionality for ethnic wear sizing and regional preferences.",
    image: "/portfolio/thakurain.png",
    images: [
      "/portfolio/thakurain.png",
      "/portfolio/thakurain-1.png",
      "/portfolio/thakurain-2.png",
      "/portfolio/thakurain-3.png"
    ],
    tags: ["Wordpress", "PHP", "Elementor", "MySQL"],
    technologies: ["WordPress", "PHP", "Elementor", "MySQL", "WooCommerce", "Custom Post Types", "ACF"],
    link: "https://thakurain.in/",
    featured: true,
    client: "Thakurain Fashion",
    duration: "3 months",
    year: "2024",
    challenges: [
      "Showcasing intricate ethnic designs",
      "Managing complex sizing variations",
      "Cultural context presentation",
      "Regional shipping optimization"
    ],
    solutions: [
      "Created detailed product galleries",
      "Built custom sizing system",
      "Added cultural information sections",
      "Optimized logistics integration"
    ],
    results: [
      "250% increase in ethnic wear sales",
      "80% customer retention rate",
      "40% improvement in size accuracy",
      "Expansion to 15 Indian states"
    ]
  },
  {
    id: "aussie-voyages",
    title: "Aussie Voyages",
    category: "Travel",
    description: "Aussie Voyages is a Victoria-based inbound tour operator offering custom travel experiences across Australia and New Zealand. From private coach tours to flexible holiday packages, they make exploring easy and unforgettable.",
    fullDescription: "Aussie Voyages needed a comprehensive digital presence to showcase their premium travel experiences. We created a visually stunning website that captures the beauty of Australia and New Zealand while providing easy booking functionality and detailed itinerary presentations.",
    image: "/portfolio/ausi.png",
    images: [
      "/portfolio/ausi.png",
      "/portfolio/ausi-1.png",
      "/portfolio/ausi-2.png",
      "/portfolio/ausi-3.png"
    ],
    tags: ["Logo Design", "Brand Identity", "Typography"],
    technologies: ["WordPress", "Custom Design", "Booking System", "Google Maps", "SEO", "Analytics"],
    link: "https://aussievoyages.com.au/",
    featured: true,
    client: "Aussie Voyages Travel",
    duration: "4 months",
    year: "2024",
    challenges: [
      "Showcasing diverse travel experiences",
      "Complex booking system integration",
      "Multi-destination itinerary display",
      "Mobile-responsive gallery design"
    ],
    solutions: [
      "Created immersive visual galleries",
      "Integrated custom booking platform",
      "Built interactive itinerary builder",
      "Optimized for mobile experiences"
    ],
    results: [
      "150% increase in online bookings",
      "60% improvement in user engagement",
      "35% growth in repeat customers",
      "Recognition as top Australian tour operator"
    ]
  },
  {
    id: "bharat-edge",
    title: "Bharat Edge",
    category: "Web Development",
    description: "Bharat Edge helps startups and MSMEs grow with expert services like company registration, certifications, and funding support. From launch to scale, their tailored solutions simplify business compliance and boost credibility.",
    fullDescription: "Bharat Edge required a professional platform to showcase their comprehensive business services. We developed a user-friendly website with service catalogues, application tracking, and client portals to streamline the business registration and compliance process.",
    image: "/portfolio/bharat.png",
    images: [
      "/portfolio/bharat.png",
      "/portfolio/bharat-1.png",
      "/portfolio/bharat-2.png",
      "/portfolio/bharat-3.png"
    ],
    tags: ["WordPress", "PHP", "Elementor", "MySQL"],
    technologies: ["WordPress", "PHP", "Elementor", "MySQL", "Custom Forms", "CRM Integration", "Security"],
    link: "https://bharat-edge.com",
    featured: false,
    client: "Bharat Edge Consulting",
    duration: "2.5 months",
    year: "2024",
    challenges: [
      "Complex service categorization",
      "Document management system",
      "Client application tracking",
      "Compliance information display"
    ],
    solutions: [
      "Built hierarchical service structure",
      "Integrated document upload system",
      "Created application status dashboard",
      "Designed compliance resource center"
    ],
    results: [
      "200% increase in service inquiries",
      "75% improvement in client onboarding",
      "50% reduction in processing time",
      "99% client satisfaction rate"
    ]
  },
  {
    id: "bagwan-interiors",
    title: "Bagwan Interiors",
    category: "Interior Design",
    description: "Online store for premium interior design services with detailed project portfolios and personalized consultations.",
    fullDescription: "Bagwan Interiors needed a sophisticated platform to showcase their premium interior design work. We created an elegant website featuring detailed project portfolios, service catalogs, and consultation booking systems that reflect their high-end brand positioning.",
    image: "/portfolio/bagwan.png",
    images: [
      "/portfolio/bagwan.png",
      "/portfolio/bagwan-1.png",
      "/portfolio/bagwan-2.png",
      "/portfolio/bagwan-3.png"
    ],
    tags: ["WordPress", "Custom Theme", "WooCommerce"],
    technologies: ["WordPress", "Custom Theme", "WooCommerce", "Gallery Systems", "Booking Calendar", "SEO"],
    link: "https://bagwaninterior.com/",
    featured: false,
    client: "Bagwan Interior Design",
    duration: "3 months",
    year: "2024",
    challenges: [
      "High-quality image optimization",
      "Complex project categorization",
      "Consultation booking system",
      "Portfolio presentation design"
    ],
    solutions: [
      "Implemented advanced image compression",
      "Created filterable portfolio system",
      "Built custom booking calendar",
      "Designed immersive project galleries"
    ],
    results: [
      "180% increase in consultation requests",
      "90% improvement in portfolio engagement",
      "65% growth in project inquiries",
      "Featured in design industry publications"
    ]
  },
  {
    id: "rjholidays",
    title: "RJ Holidays",
    category: "Travel",
    description: "RJ Holidays offers expert travel packages to South Korea with everything from flights and hotels to guided tours. Explore Seoul, Jeju, and more with hassle-free planning and personalized service.",
    fullDescription: "RJ Holidays specializes in South Korean travel experiences, requiring a platform that captures the excitement of Korean culture while providing comprehensive booking capabilities. We created an engaging website with detailed destination guides and seamless booking integration.",
    image: "/portfolio/travel.png",
    images: [
      "/portfolio/travel.png",
      "/portfolio/travel-1.png",
      "/portfolio/travel-2.png",
      "/portfolio/travel-3.png"
    ],
    tags: ["SEO", "Content Marketing", "PPC", "Analytics"],
    technologies: ["WordPress", "Booking Integration", "Payment Gateway", "SEO", "Analytics", "Social Media"],
    link: "https://rjholidays.co.in/",
    featured: false,
    client: "RJ Holidays Travel",
    duration: "3.5 months",
    year: "2024",
    challenges: [
      "Destination-specific content creation",
      "Multi-currency payment processing",
      "Cultural guide integration",
      "Seasonal package management"
    ],
    solutions: [
      "Created comprehensive destination guides",
      "Integrated multi-currency support",
      "Built cultural information sections",
      "Developed dynamic package system"
    ],
    results: [
      "300% increase in South Korea bookings",
      "85% customer satisfaction score",
      "40% growth in repeat travelers",
      "Recognition as top Korea specialist"
    ]
  },
  {
    id: "well-pit",
    title: "Well Pit",
    category: "Chemicals",
    description: "Wellpit offers high-quality industrial chemicals and refreshing beverages like mango and jaljeera drinks. Trusted for purity, lab-tested products, and sustainable practices.",
    fullDescription: "Well Pit required a professional platform to showcase their dual focus on industrial chemicals and beverage products. We created a clean, modern website that effectively communicates their commitment to quality and sustainability while serving both B2B and B2C markets.",
    image: "/portfolio/wellpit.png",
    images: [
      "/portfolio/wellpit.png",
      "/portfolio/wellpit-1.png",
      "/portfolio/wellpit-2.png",
      "/portfolio/wellpit-3.png"
    ],
    tags: ["Packaging Design", "Logo Design", "Visual Identity"],
    technologies: ["WordPress", "Product Catalog", "B2B Portal", "Quality Certifications", "SEO", "Analytics"],
    link: "https://wellpit.com",
    featured: false,
    client: "Well Pit Industries",
    duration: "2 months",
    year: "2024",
    challenges: [
      "Dual market targeting (B2B/B2C)",
      "Complex product categorization",
      "Quality certification display",
      "Regulatory compliance presentation"
    ],
    solutions: [
      "Created separate user experiences",
      "Built hierarchical product structure",
      "Integrated certification displays",
      "Designed compliance resource center"
    ],
    results: [
      "220% increase in B2B inquiries",
      "150% growth in beverage sales",
      "95% compliance approval rate",
      "Industry recognition for transparency"
    ]
  },
  {
    id: "north-goa-taxi-services",
    title: "North Goa Taxi Services",
    category: "Travel",
    description: "Reliable taxi services in North Goa for hassle-free airport transfers, local sightseeing, and intercity travel.",
    fullDescription: "North Goa Taxi Services needed a modern booking platform to compete in the competitive Goa tourism market. We developed a user-friendly website with real-time booking, fare calculators, and driver tracking features.",
    image: "/portfolio/ride.png",
    images: [
      "/portfolio/ride.png",
      "/portfolio/ride-1.png",
      "/portfolio/ride-2.png",
      "/portfolio/ride-3.png"
    ],
    tags: ["React", "Stripe", "Firebase", "Netlify"],
    technologies: ["WordPress", "Booking System", "Payment Gateway", "GPS Integration", "Mobile App", "Analytics"],
    link: "https://northgoataxiservice.com/",
    featured: false,
    client: "North Goa Taxi Services",
    duration: "2.5 months",
    year: "2024",
    challenges: [
      "Real-time booking system",
      "Dynamic fare calculation",
      "Driver management interface",
      "Tourist-friendly design"
    ],
    solutions: [
      "Built responsive booking platform",
      "Integrated fare calculator",
      "Created driver dashboard",
      "Designed intuitive user interface"
    ],
    results: [
      "400% increase in online bookings",
      "70% reduction in booking time",
      "95% customer satisfaction rate",
      "Expansion to South Goa market"
    ]
  },
  {
    id: "shree-moters",
    title: "Shree Motors",
    category: "Automotive",
    description: "Complete visual identity for an automotive company specializing in electric vehicles.",
    fullDescription: "Shree Motors required a modern digital presence to showcase their automotive services and electric vehicle offerings. We created a comprehensive website with service catalogs, vehicle showcases, and customer service portals.",
    image: "/portfolio/shreemoters.png",
    images: [
      "/portfolio/shreemoters.png",
      "/portfolio/shreemoters-1.png",
      "/portfolio/shreemoters-2.png",
      "/portfolio/shreemoters-3.png"
    ],
    tags: ["Logo Design", "Brand Guidelines", "Print Materials"],
    technologies: ["WordPress", "Vehicle Catalog", "Service Booking", "Inventory Management", "Customer Portal", "SEO"],
    link: "https://srirammotors.in/",
    featured: false,
    client: "Shree Motors",
    duration: "3 months",
    year: "2024",
    challenges: [
      "Vehicle inventory display",
      "Service appointment booking",
      "Electric vehicle information",
      "Customer service integration"
    ],
    solutions: [
      "Built dynamic vehicle catalog",
      "Integrated booking calendar",
      "Created EV information center",
      "Developed customer portal"
    ],
    results: [
      "250% increase in service bookings",
      "60% growth in EV inquiries",
      "80% improvement in customer engagement",
      "Recognition as leading EV dealer"
    ]
  }
];

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const [mounted, setMounted] = useState(false);
  
  // Find the project by ID
  const project = portfolioProjects.find(p => p.id === projectId);
  
  // If project not found, return 404
  if (!project) {
    notFound();
  }

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
    const mainContent = document.getElementById('__next') || document.querySelector('main');
    if (mainContent) {
      mainContent.style.transform = 'none';
    }
  }, [mounted]);

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  return (
    <>
      <ScrollFix />
      <Navbar />

      <main className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-teal-50 to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=" mx-auto"
            >
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-teal-600 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li>
                    <Link href="/portfolio" className="hover:text-teal-600 transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li className="text-teal-600 font-medium" aria-current="page">
                    {project.title}
                  </li>
                </ol>
              </nav>

              <div className="text-center">
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-teal-700 bg-teal-100 rounded-full">
                  {project.category}
                </span>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                  {project.title}
                </h1>
                
                <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="lg">
                        View Live Project
                      </Button>
                    </a>
                  )}
                  <Link href="/contact">
                    <Button variant="outline" size="lg">
                      Start Similar Project
                    </Button>
                  </Link>
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-semibold text-gray-900">{project.client}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Year</div>
                    <div className="font-semibold text-gray-900">{project.year}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-semibold text-gray-900">{project.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-semibold text-gray-900">{project.category}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Project Images */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images?.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Project Details */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-teal-100 text-teal-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges?.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    {project.solutions?.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project <span className="text-teal-600">Results</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results?.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-teal-50 to-purple-50 p-6 rounded-xl text-center"
                >
                  <div className="text-gray-800 font-semibold">{result}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-purple-50 to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ready to Start Your 
                <span className="text-teal-600"> Project?</span>
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can bring your vision to life with the same level of excellence and attention to detail.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg">
                    View More Projects
                  </Button>
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
