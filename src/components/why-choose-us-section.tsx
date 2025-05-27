"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const achievements = [
  {
    icon: "🏆",
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries"
  },
  {
    icon: "⭐",
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations"
  },
  {
    icon: "🚀",
    number: "5+",
    label: "Years Experience",
    description: "Building digital solutions since 2019"
  },
  {
    icon: "🌍",
    number: "2+",
    label: "Countries Served",
    description: "Global reach with local expertise"
  }
];

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Development",
    description: "Rapid prototyping and delivery without compromising quality. We use modern frameworks and agile methodologies.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: "🎯",
    title: "Precision & Attention to Detail",
    description: "Every pixel matters. We craft pixel-perfect designs that translate into flawless user experiences.",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description: "Your data and applications are protected with industry-leading security practices and protocols.",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: "📱",
    title: "Mobile-First Approach",
    description: "Every solution is optimized for mobile devices, ensuring seamless experiences across all platforms.",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: "🎨",
    title: "Custom Design Solutions",
    description: "Unique designs tailored to your brand identity. No templates, no compromises, just pure creativity.",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    icon: "⚙️",
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business. Built for scale from day one.",
    gradient: "from-teal-400 to-blue-500"
  }
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Floating Orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Enegix Web Solutions?
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We don't just build websites and apps—we craft digital experiences that drive results. 
            Here's what sets us apart from the competition.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {achievement.label}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1.4 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform-gpu">
                {/* Gradient Background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-500",
                  feature.gradient
                )} />
                
                {/* Animated Border */}
                <motion.div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                    `bg-gradient-to-r ${feature.gradient}`
                  )}
                  style={{ padding: '1px' }}
                  whileHover={{ scale: 1.02 }}
                />

                <div className="relative z-10">
                  {/* Feature Icon */}
                  <motion.div 
                    className="text-5xl mb-6"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  {/* Feature Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ skewX: '-20deg' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
