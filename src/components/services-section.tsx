"use client";

import React from "react";
import { motion } from "framer-motion";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";

import { Inter } from "next/font/google";
import Container from "./Container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // optional
  display: "swap",
});

const services = [
  {
    id: "web-development",
    title: "Web Development & Designing",
    description:
      "Stunning, Responsive, and Performance-Driven Websites that load fast, are mobile-friendly, and SEO-ready.",
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
    id: "seo-digital-marketing",
    title: "Digital Marketing",
    description:
      "From building your brand presence to driving measurable traffic and leads, we tailor every campaign to meet your unique goals.",
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
    id: "branding-graphic-design",
    title: "Branding & Graphic Design",
    description:
      "Build your Brand Identity by creating eye-catching graphics, visuals that speak your brand language and leave a lasting impression. Stand out with bold branding and impactful visual design.",
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
      className="relative bg-white rounded-2xl p-8 border border-gray-300 hover:border-transparent group transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 overflow-hidden">
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
      className=" w-full py-10 bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/50 overflow-hidden"
      id="services-section">
      <Container>
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large decorative circles */}
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-teal-100/30 to-emerald-200/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-100/30 to-teal-200/30 blur-3xl" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>

        <div className=" mx-auto relative z-10">
          {/* Enhanced header section */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 font-inter tracking-tight">
              <span className="text-gray-900">Crafting </span>

              <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              <br />
              <span className="text-gray-900"> That Drive Real Results</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-900 text-sm md:text-lg max-w-4xl mx-auto font-inter leading-relaxed">
              As a passionate{" "}
              <span className="text-teal-600 font-extrabold">
                {" "}
                Designing and Marketing agency in India
              </span>
              , we deliver custom-crafted solutions that align with your goals,
              backed by creative strategy and data-driven execution.
            </motion.p>

            {/* Additional engaging text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className={`text-black mt-4 max-w-3xl font-extrabold text-2xl mx-auto ${inter.className}`}>
              Your success is not just our goal, it's our commitment.
            </motion.p>
          </div>

          {/* Services grid with enhanced spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* <motion.div
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
        </motion.div> */}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
