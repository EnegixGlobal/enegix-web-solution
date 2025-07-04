"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

const achievements = [
  {
    icon: "🏆",
    number: "500+",
    label: "Projects Completed",
    description: "delivered across industries"
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
    title: "Result-Oriented Strategies",
    description: "We convert traffic into conversions and clicks into customers",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: "🎯",
    title: "Custom-Fitted Strategy for Every Client",
    description: " No templates, no shortcuts, just personalized solutions ",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: "🔒",
    title: "An Expert and Certified Team",
    description: " They bring their insight and experience in every project.",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: "📱",
    title: "Transparent Communication & Reports",
    description: " You always stay in the loop",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: "🎨",
    title: "Tactics for Sustainable Growth",
    description: " We compete for the long-term digital sustainability, not a short-term buzz.",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    icon: "⚙️",
    title: "Client-First Attitude",
    description: " Your objectives are what we consider in all our actions.",
    gradient: "from-teal-400 to-blue-500"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section
      className="relative py-8  mx-auto overflow-hidden"
    >
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Static Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-teal-500/5 to-emerald-500/5 backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/5 to-teal-500/5 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <Container>
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">
              Enegix Web Solutions?
            </span>
          </div>
          <p className="text-md text-black max-w-3xl mx-auto leading-relaxed">
            We don't just build websites and apps—we craft digital experiences that drive results.
            Here's what sets us apart from the competition.
          </p>
        </div>
        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in-up">
          {achievements.map((achievement) => (
            <div
              key={achievement.label}
              className="text-center group transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden group-hover:border-teal-300 transition-all duration-300">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Features Grid */}

        
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }
      `}</style>

      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
