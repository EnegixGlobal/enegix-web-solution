"use client";

import { cn } from "@/lib/utils";
import Container from "./Container";
import { useState } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaWordpress, 
  FaAws,
  FaJs,
  FaDatabase,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaAngular,
  FaDocker
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiVuedotjs,
  SiMysql,
  SiDjango,
  SiElectron,
  SiExpress
} from "react-icons/si";
import { MdPhoneAndroid } from "react-icons/md";

const techStack = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
    description: "Component-based UI library",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-300",
    description: "Full-stack React framework",
    category: "Framework",
  },
  {
    name: "React Native",
    icon: MdPhoneAndroid,
    color: "text-blue-400",
    description: "Cross-platform mobile development",
    category: "Mobile",
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
    color: "text-green-400",
    description: "Progressive JavaScript framework",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    description: "Typed JavaScript at scale",
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
    description: "Dynamic programming language",
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-teal-400",
    description: "Utility-first CSS framework",
    category: "Styling",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    color: "text-blue-500",
    description: "Content management system",
    category: "CMS",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    description: "JavaScript runtime environment",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
    description: "NoSQL database solution",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-700",
    description: "Advanced relational database",
    category: "Database",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-orange-400",
    description: "Cloud computing platform",
    category: "Cloud",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "text-purple-600",
    description: "Server-side scripting language",
    category: "Language",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-600",
    description: "Relational database management",
    category: "Database",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "text-orange-500",
    description: "Markup language for web",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
    description: "Styling language for web",
    category: "Styling",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "text-green-800",
    description: "Python web framework",
    category: "Framework",
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "text-red-600",
    description: "TypeScript frontend framework",
    category: "Frontend",
  },
  {
    name: "Electron.js",
    icon: SiElectron,
    color: "text-cyan-500",
    description: "Desktop app development",
    category: "Framework",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-700",
    description: "Node.js web framework",
    category: "Backend",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-500",
    description: "Containerization platform",
    category: "Cloud",
  },
];

const TechStackSimple = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
      <section className="py-10 bg-white mx-auto relative w-full">
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

          {/* Tech Stack Grid - Clean & Modern Design */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex flex-col items-center p-5 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl shadow-md">
                
                {/* Simple hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Tech Icon */}
                <div className="relative z-20 text-4xl mb-3 group-hover:scale-105 transition-transform duration-300">
                  <tech.icon className={cn("w-12 h-12", tech.color)} />
                </div>

                {/* Tech Name - Clean & Prominent */}
                <div className="relative z-20 text-center mb-3">
                  <div
                    className={cn(
                      "text-lg font-bold text-center tracking-wide leading-tight",
                      tech.name === "React" && "text-cyan-600",
                      tech.name === "Next.js" && "text-gray-800",
                      tech.name === "React Native" && "text-blue-600",
                      tech.name === "Vue.js" && "text-green-600",
                      tech.name === "TypeScript" && "text-blue-700",
                      tech.name === "JavaScript" && "text-yellow-600",
                      tech.name === "Tailwind CSS" && "text-teal-600",
                      tech.name === "WordPress" && "text-blue-600",
                      tech.name === "Node.js" && "text-green-700",
                      tech.name === "MongoDB" && "text-green-700",
                      tech.name === "PostgreSQL" && "text-blue-700",
                      tech.name === "AWS" && "text-orange-600",
                      tech.name === "PHP" && "text-purple-600",
                      tech.name === "MySQL" && "text-blue-600",
                      tech.name === "HTML" && "text-orange-500",
                      tech.name === "CSS" && "text-blue-500",
                      tech.name === "Django" && "text-green-800",
                      tech.name === "Angular" && "text-red-600",
                      tech.name === "Electron.js" && "text-cyan-500",
                      tech.name === "Express.js" && "text-gray-700",
                      tech.name === "Docker" && "text-blue-500",
                      "group-hover:text-emerald-700 transition-colors duration-300"
                    )}
                    style={{
                      textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
                    }}>
                    {tech.name}
                  </div>
                </div>

                {/* Simple Category Badge */}
                <span className="relative z-20 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
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
