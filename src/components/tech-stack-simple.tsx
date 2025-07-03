"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

const techStack = [
  {
    name: "React",
    icon: "⚛️",
    color: "text-cyan-400",
    description: "Component-based UI library",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "text-gray-300",
    description: "Full-stack React framework",
    category: "Framework",
  },
  {
    name: "React Native",
    icon: "📱",
    color: "text-blue-400",
    description: "Cross-platform mobile development",
    category: "Mobile",
  },
  {
    name: "Vue.js",
    icon: "🟢",
    color: "text-green-400",
    description: "Progressive JavaScript framework",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    color: "text-blue-600",
    description: "Typed JavaScript at scale",
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "text-yellow-400",
    description: "Dynamic programming language",
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "text-teal-400",
    description: "Utility-first CSS framework",
    category: "Styling",
  },
  {
    name: "WordPress",
    icon: "📝",
    color: "text-blue-500",
    description: "Content management system",
    category: "CMS",
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "text-green-500",
    description: "JavaScript runtime environment",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "text-green-600",
    description: "NoSQL database solution",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "text-blue-700",
    description: "Advanced relational database",
    category: "Database",
  },
  {
    name: "AWS",
    icon: "☁️",
    color: "text-orange-400",
    description: "Cloud computing platform",
    category: "Cloud",
  },
];

const TechStackSimple = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Frontend",
    "Framework",
    "Mobile",
    "Language",
    "Styling",
    "CMS",
    "Backend",
    "Database",
    "Cloud",
  ];

  const filteredTech =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <Container>
      <section className="py-20 bg-white mx-auto relative w-full">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Tech Stack
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern technologies and frameworks that power our solutions
            </p>
          </div>
          {/* Category Filter - Simplified */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
                  selectedCategory === category
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200"
                )}>
                {category}
              </button>
            ))}
          </div>

          {/* Tech Stack Grid - Ultra Simple */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-teal-50 transition-all duration-200 border border-green-600 hover:border-teal-200 hover:shadow-md">
                {/* Tech Icon */}
                <div className="text-3xl mb-2">{tech.icon}</div>

                {/* Tech Name */}
                <div
                  className={cn(
                    "text-sm font-semibold mb-1 text-center",
                    tech.color
                  )}>
                  {tech.name}
                </div>

                {/* Category Badge */}
                <span className="px-2 py-1 bg-teal-50 text-teal-600 text-xs rounded border border-teal-100">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TechStackSimple;
