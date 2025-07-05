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
    id: "healthier-you",
    title: "Healthier You",
    category: "Web Development",
    description: "A dynamic health and wellness platform featuring personalized nutrition plans, workout routines, and health tracking tools.",
    fullDescription: "Healthier You is a comprehensive wellness platform that combines modern web technologies with personalized health solutions. The platform features advanced user profiling, AI-powered nutrition recommendations, interactive workout planning, and detailed progress tracking. Built with a mobile-first approach, it provides seamless experiences across all devices while maintaining high performance and user engagement.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    images: [
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65"
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT Auth", "Stripe API", "Chart.js"],
    link: "https://healthier-you.com",
    featured: true,
    client: "Wellness Corp",
    duration: "3 months",
    year: "2023",
    challenges: [
      "Creating personalized user experiences at scale",
      "Integrating complex nutrition databases",
      "Building real-time progress tracking",
      "Ensuring data privacy and security"
    ],
    solutions: [
      "Implemented AI-powered recommendation engine",
      "Designed scalable microservices architecture",
      "Created interactive data visualization components",
      "Implemented comprehensive security measures"
    ],
    results: [
      "85% user retention rate after 3 months",
      "40% increase in user engagement",
      "99.9% uptime since launch",
      "Featured in top wellness apps"
    ]
  },
  {
    id: "urban-taste",
    title: "Urban Taste",
    category: "E-commerce",
    description: "An elegant food delivery platform connecting users with local restaurants offering gourmet dining experiences.",
    fullDescription: "Urban Taste revolutionizes the food delivery experience by focusing on premium dining options and seamless user interactions. The platform features advanced restaurant discovery, real-time order tracking, integrated payment systems, and a sophisticated recommendation engine that learns from user preferences.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445"
    ],
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Firebase"],
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Firebase", "Google Maps API", "Socket.io"],
    link: "https://urban-taste.com",
    featured: true,
    client: "Urban Dining Group",
    duration: "4 months",
    year: "2023",
    challenges: [
      "Real-time order tracking and updates",
      "Complex payment processing",
      "Restaurant management dashboard",
      "Mobile-responsive design"
    ],
    solutions: [
      "Implemented WebSocket connections for live updates",
      "Integrated Stripe for secure payments",
      "Built comprehensive admin panel",
      "Used responsive design principles"
    ],
    results: [
      "200+ restaurant partnerships",
      "50,000+ orders processed",
      "4.8/5 average user rating",
      "30% month-over-month growth"
    ]
  },
  {
    id: "echo-studios",
    title: "Echo Studios",
    category: "Branding",
    description: "Complete brand identity for a recording studio, including logo design, color palette, typography, and marketing materials.",
    fullDescription: "Echo Studios required a complete brand overhaul to reflect their modern approach to music production. We created a comprehensive visual identity that captures the essence of sound waves and musical creativity while maintaining professional appeal for both artists and corporate clients.",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    images: [
      "https://images.unsplash.com/photo-1511376777868-611b54f68947",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    ],
    tags: ["Logo Design", "Brand Identity", "Typography"],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Adobe InDesign"],
    link: "https://echo-studios.com",
    featured: true,
    client: "Echo Recording Studios",
    duration: "2 months",
    year: "2023",
    challenges: [
      "Creating versatile logo for various applications",
      "Balancing modern and timeless design",
      "Developing cohesive marketing materials",
      "Ensuring brand consistency across platforms"
    ],
    solutions: [
      "Designed modular logo system",
      "Created comprehensive brand guidelines",
      "Developed template library",
      "Established clear usage protocols"
    ],
    results: [
      "40% increase in brand recognition",
      "Successful rebrand launch",
      "Consistent brand application",
      "Positive client feedback"
    ]
  },
  // Add other projects as needed...
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
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-blue-600 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li>
                    <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li className="text-blue-600 font-medium" aria-current="page">
                    {project.title}
                  </li>
                </ol>
              </nav>

              <div className="text-center">
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
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
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
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
                Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Results</span>
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
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center"
                >
                  <div className="text-gray-800 font-semibold">{result}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Project?</span>
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
