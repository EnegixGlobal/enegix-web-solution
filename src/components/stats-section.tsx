"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { IconCloud } from "@/components/magicui/icon-cloud";

const stats = [
  { id: 1, value: "500+", label: "Projects Completed" },
  { id: 2, value: "98%", label: "Client Satisfaction" },
  { id: 3, value: "5+", label: "Years of Experience" },
  { id: 4, value: "24/7", label: "Customer Support" },
];

const testimonials = [
  {
    id: 1,
    content: "Enegix Websolution transformed our online presence completely. Our website now attracts more visitors and converts more customers than ever before.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    content: "The team at Enegix is incredibly talented and professional. They delivered our new e-commerce platform ahead of schedule and the results have exceeded our expectations.",
    author: "Michael Chen",
    role: "Marketing Director, Retail Plus",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    content: "Their SEO strategy has put us on the first page of Google for our key search terms. Our organic traffic has increased by 200% in just three months.",
    author: "Emma Rodriguez",
    role: "Owner, Wellness Retreat",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
];

const StatsSection = () => {
  return (
    <div className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1e293b] z-0" />
      
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-[#0f172a] to-transparent" />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0f172a] to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center"
            >              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 font-poppins tracking-tight">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-outfit">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}              className="text-3xl md:text-5xl font-bold mb-4 font-poppins tracking-tight"
            >
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Clients Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-xl mx-auto font-outfit font-light leading-relaxed"
            >
              Hear from businesses that have experienced growth and success with our solutions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>                <div>
                    <div className="font-semibold text-white font-poppins">{testimonial.author}</div>
                    <div className="text-sm text-gray-400 font-outfit">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic font-outfit leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400">            <button className="px-8 py-3 rounded-full bg-[#1e293b] text-white font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 font-poppins text-sm tracking-wider">
              Start Your Project
            </button>
          </div>        </motion.div>
        
        {/* Technology Icons Cloud */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Technology Stack</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-outfit font-light leading-relaxed">
              We work with cutting-edge technologies to deliver the best solutions for your business.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] w-full mx-auto"
          >
            {/* The IconCloud component is populated with icon URLs in the parent page component */}
            <IconCloud 
              images={Array.from({ length: 30 }).map((_, i) => 
                `https://cdn.simpleicons.org/${
                  ["typescript", "javascript", "react", "nextdotjs", "html5", "css3", "tailwindcss", 
                   "nodejs", "express", "mongodb", "postgresql", "firebase", "git", "github", 
                   "vscode", "figma", "docker", "aws", "vercel", "netlify"][i % 20]
                }`
              )}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
