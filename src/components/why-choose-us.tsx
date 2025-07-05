"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Button from "./Button";





const WhyChooseUsSection = () => {
  return (
    <section
      className="relative my-10  mx-auto overflow-hidden"
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
        <div className="text-center mb-10 animate-fade-in">
          <div className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-clip-text text-teal-600">
              Enegix Web Solutions?
            </span>
          </div>
         
        </div>

        {/* Features Grid */}


        {/* Process Section */}
        <div className="  -mx-8 px-8  rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center ">
              <p className="text-2xl  text-gray-900 mb-6">
                Get Started in Six Easy Steps
              </p>
            </div>

            {/* Timeline */}
            <div className="relative mb-16">
              {/* Desktop Timeline */}
              <div className="hidden lg:block">
                {/* Dotted Line */}
                <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500" 
                     style={{background: 'repeating-linear-gradient(to right, #0d9488 0px, #0d9488 10px, transparent 10px, transparent 20px)'}}>
                </div>
                
                {/* Step Circles */}
                <div className="flex justify-between items-start relative">
                  {[
                    {
                      step: "1",
                      title: "Discovery",
                      description: "We delve deep to fully understand your business and its goals. This includes analyzing your industry, competitors, and your target audience's preferences and behaviors.",
                      icon: "💡",
                    },
                    {
                      step: "2",
                      title: "Planning",
                      description: "Next, we tailor our strategy to align with your business objectives, beginning with a comprehensive analysis of user needs and market requirements.",
                      icon: "📋",
                    },
                    {
                      step: "3",
                      title: "Preparation",
                      description: "Using the strategy as a roadmap, we assess both your current setup and external elements to ensure they align with the strategic plan.",
                      icon: "📝",
                    },
                    {
                      step: "4",
                      title: "Implementation",
                      description: "Our development framework is designed to provide a consistent flow of optimizations, creating an action plan that respects your internal resources.",
                      icon: "🚀",
                    },
                    {
                      step: "5",
                      title: "Growth",
                      description: "As your project gains momentum, we focus on tracking progress towards your goals and ensuring continued, sustainable success.",
                      icon: "⚙️",
                    },
                    {
                      step: "6",
                      title: "Refinement",
                      description: "We continuously analyze performance data to identify new opportunities and adapt to feedback. This ongoing optimization ensures your strategy evolves with your business.",
                      icon: "📦",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center relative z-10"
                      style={{ width: `${100/6}%` }}>
                      
                      {/* Circle */}
                      <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-8 shadow-lg">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-4xl mb-4">
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed px-2">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="lg:hidden space-y-8">
                {[
                  {
                    step: "1",
                    title: "Discovery",
                    description: "We delve deep to fully understand your business and its goals. This includes analyzing your industry, competitors, and your target audience's preferences and behaviors.",
                    icon: "💡",
                  },
                  {
                    step: "2",
                    title: "Planning",
                    description: "Next, we tailor our strategy to align with your business objectives, beginning with a comprehensive analysis of user needs and market requirements.",
                    icon: "📋",
                  },
                  {
                    step: "3",
                    title: "Preparation",
                    description: "Using the strategy as a roadmap, we assess both your current setup and external elements to ensure they align with the strategic plan.",
                    icon: "📝",
                  },
                  {
                    step: "4",
                    title: "Implementation",
                    description: "Our development framework is designed to provide a consistent flow of optimizations, creating an action plan that respects your internal resources.",
                    icon: "🚀",
                  },
                  {
                    step: "5",
                    title: "Growth",
                    description: "As your project gains momentum, we focus on tracking progress towards your goals and ensuring continued, sustainable success.",
                    icon: "⚙️",
                  },
                  {
                    step: "6",
                    title: "Refinement",
                    description: "We continuously analyze performance data to identify new opportunities and adapt to feedback. This ongoing optimization ensures your strategy evolves with your business.",
                    icon: "📦",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6">
                    
                    {/* Circle */}
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Icon */}
                      <div className="text-3xl mb-2">
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mx-auto">
              <Button className="md:w-sm py-3 mx-auto">
                Start your project →
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
   
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
