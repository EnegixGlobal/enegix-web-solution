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
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaDocker,
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
  SiExpress,
} from "react-icons/si";
import { MdPhoneAndroid } from "react-icons/md";
import Button from "./Button";

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
    color: "text-teal-400",
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
    color: "text-teal-500",
    description: "JavaScript runtime environment",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-teal-600",
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
    color: "text-teal-800",
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

  const [noOfStackItems, setNoOfStackItems] = useState(7);

  const filteredTech = techStack.slice(0, noOfStackItems);

  return (
    <Container>
      <section
        className="py-10 mt-4 bg-white mx-auto relative w-full"
        style={{
          WebkitOverflowScrolling: "touch", // Enable momentum scrolling on iOS
          overflowX: "hidden", // Prevent horizontal scroll
        }}>
        <div className="container mx-auto md:px-4 ">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-4xl md:text-8xl lg:text-7xl font-bold mb-6 text-teal-600">
              Our Tech Stack
            </div>
            <p className="text-xl text-gray-800 font-bold max-w-3xl mx-auto leading-relaxed">
              Modern technologies and frameworks that power our solutions
            </p>
          </div>
          

          {/* Tech Stack Grid - iOS Compatible Design */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
              {filteredTech.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center p-3 md:p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg shadow-sm"
                  style={{
                    WebkitTransform: "translateZ(0)", // Force hardware acceleration for iOS
                    transform: "translateZ(0)",
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                  }}>
                  {/* Tech Icon */}
                  <div className="text-4xl mb-2 md:mb-3">
                    <tech.icon
                      className={cn("w-8 h-8 md:w-10 md:h-10", tech.color)}
                    />
                  </div>

                  {/* Tech Name - Clean & Prominent */}
                  <div className="text-center mb-2 md:mb-3">
                    <div
                      className={cn(
                        "text-sm md:text-lg font-bold text-center tracking-wide leading-tight",
                        tech.name === "React" && "text-cyan-600",
                        tech.name === "Next.js" && "text-gray-800",
                        tech.name === "React Native" && "text-blue-600",
                        tech.name === "Vue.js" && "text-teal-600",
                        tech.name === "TypeScript" && "text-blue-700",
                        tech.name === "JavaScript" && "text-yellow-600",
                        tech.name === "Tailwind CSS" && "text-teal-600",
                        tech.name === "WordPress" && "text-blue-600",
                        tech.name === "Node.js" && "text-teal-700",
                        tech.name === "MongoDB" && "text-teal-700",
                        tech.name === "PostgreSQL" && "text-blue-700",
                        tech.name === "AWS" && "text-orange-600",
                        tech.name === "PHP" && "text-purple-600",
                        tech.name === "MySQL" && "text-blue-600",
                        tech.name === "HTML" && "text-orange-500",
                        tech.name === "CSS" && "text-blue-500",
                        tech.name === "Django" && "text-teal-800",
                        tech.name === "Angular" && "text-red-600",
                        tech.name === "Electron.js" && "text-cyan-500",
                        tech.name === "Express.js" && "text-gray-700",
                        tech.name === "Docker" && "text-blue-500"
                      )}>
                      {tech.name}
                    </div>
                  </div>

                  {/* Simple Category Badge */}
                  <span className="px-2 md:px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
              <div className=" mt-8 md:w-md  mx-auto">
                <Button onClick={() => setNoOfStackItems(noOfStackItems === techStack.length ? 7 : techStack.length)}>{noOfStackItems === techStack.length ? "See Less" : "See All"}</Button>
              </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TechStackSimple;
