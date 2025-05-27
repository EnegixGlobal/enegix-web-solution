"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const techStack = [
  {
    name: "React",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
    description: "Component-based UI library",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "from-black to-gray-700",
    description: "Full-stack React framework",
    category: "Framework"
  },
  {
    name: "React Native",
    icon: "📱",
    color: "from-blue-500 to-cyan-400",
    description: "Cross-platform mobile development",
    category: "Mobile"
  },
  {
    name: "Vue.js",
    icon: "🟢",
    color: "from-green-400 to-green-600",
    description: "Progressive JavaScript framework",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    icon: "🔷",
    color: "from-blue-600 to-blue-800",
    description: "Typed JavaScript at scale",
    category: "Language"
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    description: "Dynamic programming language",
    category: "Language"
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "from-teal-400 to-blue-500",
    description: "Utility-first CSS framework",
    category: "Styling"
  },
  {
    name: "WordPress",
    icon: "📝",
    color: "from-blue-600 to-indigo-600",
    description: "Content management system",
    category: "CMS"
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "from-green-500 to-green-700",
    description: "JavaScript runtime environment",
    category: "Backend"
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "from-green-600 to-green-800",
    description: "NoSQL database solution",
    category: "Database"
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "from-blue-700 to-indigo-800",
    description: "Advanced relational database",
    category: "Database"
  },
  {
    name: "AWS",
    icon: "☁️",
    color: "from-orange-400 to-yellow-500",
    description: "Cloud computing platform",
    category: "Cloud"
  }
];

const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = ["All", "Frontend", "Framework", "Mobile", "Language", "Styling", "CMS", "Backend", "Database", "Cloud"];

  const filteredTech = selectedCategory === "All" 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);
    const handleEnded = () => setIsVideoPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (    <section 
      ref={sectionRef}
      className="relative py-20 px-4 bg-[#0a192f] overflow-hidden"
    >
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-20 cursor-pointer transition-opacity duration-500 hover:opacity-30"
            autoPlay
            muted
            loop
            playsInline
            onClick={handleVideoClick}
          >
            <source src="/header.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            {/* Video Overlay */}
          <div className="absolute inset-0 bg-[#0a192f]/70 backdrop-blur-[1px]" />
          
          {/* Video Controls Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoPlaying ? 0.7 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto"
              onClick={handleVideoClick}
            >
              {isVideoPlaying ? (
                <div className="w-6 h-6 bg-white rounded-sm" />
              ) : (
                <div className="w-0 h-0 border-l-[15px] border-l-white border-y-[10px] border-y-transparent ml-1" />
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300">
              Our Tech Arsenal
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cutting-edge technologies and frameworks that power our innovative solutions. 
            We stay ahead of the curve to deliver exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white"
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Tech Card */}
              <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Gradient Background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300",
                  tech.color
                )} />
                
                {/* Glow Effect */}
                <div className={cn(
                  "absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500",
                  tech.color
                )} />
                
                <div className="relative z-10">
                  {/* Tech Icon */}
                  <div className="text-4xl mb-4 text-center">
                    <motion.span
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      {tech.icon}
                    </motion.span>
                  </div>
                  
                  {/* Tech Name */}
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                    {tech.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 text-center mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {tech.description}
                  </p>
                  
                  {/* Category Badge */}
                  <div className="flex justify-center">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r text-white shadow-lg",
                      tech.color
                    )}>
                      {tech.category}
                    </span>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${tech.color.includes('cyan') ? '#00d4ff' : tech.color.includes('green') ? '#00ff88' : tech.color.includes('yellow') ? '#ffdd00' : '#6366f1'}, transparent)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
