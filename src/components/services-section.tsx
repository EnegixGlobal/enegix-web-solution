"use client";

import React from "react";
import { motion } from "framer-motion";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";

const services = [
  {
    id: "web-development",
    title: "Website Design and Development",
    description:
      "Websites that load fast, are mobile-friendly, and SEO-ready. Custom-made for your brand.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    id: "seo-optimization",
    title: "Search Engine Optimization",
    description:
      "Organic practices that take your website higher on the ranks of Google.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    id: "ppc-advertising",
    title: "PPC & Google Ad Management",
    description:
      "Creating and managing campaigns with high conversions and best possible return on investment.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
  },
  {
    id: "digital-marketing",
    title: "Social Media Marketing",
    description:
      "Maintaining consistent branding and audience engagement across all platforms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
        />
      </svg>
    ),
  },
  {
    id: "ecommerce-solutions",
    title: "Content Marketing & Blogging",
    description: "Sharing to clicks, shares, and search for valuable content.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
  },
  {
    id: "logo-design",
    title: "Branding & Graphic Design",
    description:
      "A memorable logo, visual identity, and awesomely creative marketing creatives.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent group transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 overflow-hidden">
      
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100/20 to-emerald-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100/20 to-teal-100/20 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700" />
      
      <div className="relative z-10">
        {/* Icon with enhanced styling */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 w-fit text-white shadow-lg shadow-teal-500/25 group-hover:shadow-xl group-hover:shadow-teal-500/40 group-hover:scale-110 transition-all duration-300">
          {React.cloneElement(service.icon, { className: "w-7 h-7" })}
        </div>
        
        {/* Title with better typography */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300 font-inter leading-tight">
          {service.title}
        </h3>
        
        {/* Description with improved readability */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-inter">
          {service.description}
        </p>
        
        {/* Enhanced CTA */}
        <Link href={`/services/${service.id}`} className="inline-block">
          <div className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-all duration-300 group-hover:gap-3">
            <span>Learn More</span>
            <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:text-white transition-colors duration-300">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section
      className="relative w-full py-24 bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/50 overflow-hidden"
      id="services-section">
      
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-teal-100/30 to-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-100/30 to-teal-200/30 blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          {/* Subtitle badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            Our Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-inter tracking-tight">
            <span className="text-gray-900">Complete Solutions With</span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Digital Marketing
            </span>
            <br />
            <span className="text-gray-700 text-2xl md:text-3xl lg:text-4xl">Agency in India</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto font-inter leading-relaxed">
            Being a{" "}
            <span className="font-semibold text-teal-600">
              Digital Marketing Agency in India
            </span>{" "}
            provides you with everything that earns your business the famous
            digital presence and real results. We tailor the service to your
            business goals while infusing a creative strategy for its
            implementation backed by data.
          </motion.p>
          
          {/* Additional engaging text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500 text-base mt-4 max-w-3xl mx-auto font-inter">
            With us, search visibility, online branding, and sales are all taken care of digitally.
          </motion.p>
        </div>
        
        {/* Services grid with enhanced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        {/* Enhanced CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl shadow-teal-500/5 inline-block">
            <p className="text-gray-600 mb-6 font-inter">
              Ready to transform your digital presence?
            </p>
            <Link href="/services">
              <button className="relative inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">View All Services</span>
                <div className="relative z-10 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
