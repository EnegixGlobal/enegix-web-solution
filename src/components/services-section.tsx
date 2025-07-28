"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  ExternalLink,
  Search,
} from "lucide-react";
import Container from "./Container";

const services = [
  {
    icon: Code,
    title: "Web Development & Designing",
    shortDescription: "Stunning, Responsive, and Performance-Driven Websites that load fast, are mobile-friendly, and SEO-ready.",

    subServices: [
      {
        title: "UI/UX Design",
        description: "User-centered design for optimal user experience and engagement.",
        href:"/services/ui-ux-designing"
      },
      {
        title: "Web Development",
        description: "Custom web applications, e-commerce platforms, and CMS solutions.",
        href:"/services/website-development"  
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        href:"/services/mobile-application"
      },
      {
        title: "CRM/MLM",
        description: "Custom CRM and MLM solutions to streamline business processes and enhance customer relationships.",
        href:"/services/crm-mlm"
      }

    ],

  },
  {
    icon: Search,
    title: "Digital Marketing",
    shortDescription: "From building your brand presence to driving measurable traffic and leads, we tailor every campaign to meet your unique goals.",

    subServices: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Optimizing your website to rank higher in search engine results and attract organic traffic.",
        href:"/services/search-engine-optimization"
      },
      {
        title: "Google My Business",
        description: "Optimize your Google My Business listing to improve local search visibility.",
        href:"/services/google-my-business"
      },
      {
        title: "Paid Advertising",
        description: "Targeted advertising campaigns to reach your ideal customers and drive conversions.",
        href:"/services/paid-advertising"
      },
      {
        title: "Social Media Marketing",
        description: "Strategic social media campaigns to enhance brand awareness and engagement.",
        href:"/services/social-media-marketing"
      }

    ],

  },
  {
    icon: Search,
    title: "Branding & Graphic Design",
    shortDescription: "Build your Brand Identity by creating eye-catching graphics, visuals that speak your brand language and leave a lasting impression. Stand out with bold branding and impactful visual design.",

    subServices: [
      {
        title: "Blog and Articles",
        description: "Creating high-quality blog posts and articles to establish your brand as a thought leader.",
        href:"/services/blog-and-articles"
      },
      {
        title: "Content Writing",
        description: "Crafting compelling content that resonates with your audience and drives engagement.",
        href:"/services/content-writing"
      },
      {
        title: "Branding & Logo Design",
        description: "Creating unique and memorable logos that capture your brand's essence.",
        href:"/services/logo-design"
      },
      {
        title: "Landing Page Design",
        description: "Creating high-converting landing pages that drive user action and engagement.",
        href:"/services/landing-page-design"
      }

    ],

  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of professional services designed
            to meet your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-visible bg-white rounded-3xl border border-gray-200 hover:border-teal-400 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-teal-400/20 hover:-translate-y-3 hover:scale-[1] hover:bg-gradient-to-br hover:from-white hover:to-teal-50">
              {/* Decorative Accent */}
              <svg className="absolute -top-8 -right-8 w-32 h-32 opacity-30 group-hover:opacity-60 transition-all duration-500" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="40" fill="url(#accentGradient)" />
                <defs>
                  <linearGradient id="accentGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5eead4" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-white/80 to-teal-50/60 group-hover:opacity-95 transition-all duration-500 ease-out rounded-3xl overflow-hidden">
                {/* Collapsed Content */}
                <div className="p-8 min-h-[370px] flex flex-col group-hover:pb-4 transition-all duration-500">
                  {/* Icon with Gradient Ring */}
                  <div className="relative flex items-center justify-center mb-8">
                    <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-teal-200 via-teal-200 to-white blur-xl opacity-70 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-4 border-white">
                      <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short Description - Always Visible */}
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-800 transition-all duration-300">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Expanded Content - Glassmorphism effect */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t-2 border-teal-200/60 px-8 pt-12 pb-6 min-h-[260px] transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out rounded-b-3xl shadow-2xl mt-2">
                  {/* Spacer line for visual separation */}
                  <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto mb-6"></div>

                  {/* Read More Buttons for Each SubService */}
                  <div className="space-y-2">
                    {service.subServices.map((item, idx) => (
                      <Link href={`https://wa.me/919905953677?text=Hi! I'm interested in your ${encodeURIComponent(item.title)} service. Could you share pricing and timeline details? Thanks!`} key={idx + '-btn'} target="_blank" rel="noopener noreferrer">
                        <button className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-xl mb-2">
                          <span> {item.title}</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Gradient Overlay for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-teal-100/40 via-teal-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
