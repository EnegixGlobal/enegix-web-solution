"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import Link from "next/link";
import Image from "next/image";
import { enablePageScroll } from "@/utils/scroll-helper";
import Container from "@/components/Container";
import Button from "@/components/Button";

// Static founders/leaders data (not from API)
const foundersData = [
  {
    id: "Ehtesham Raghib",
    name: "Ehtesham Raghib",
    role: "Founder & CEO",
    bio: "Ehtesham Raghib, the founder of Enegix Web Solutions, is a passionate entrepreneur and digital strategist dedicated to transforming businesses through cutting-edge web solutions. With a deep understanding of web development, digital marketing, and brand growth, he has played a pivotal role in helping businesses establish a powerful online presence. Under his leadership, Enegix Web Solutions has evolved from a specialized web development firm into a full-service digital agency, offering innovative and results-driven solutions. Ehtesham's expertise in leveraging the latest technologies and data-driven strategies ensures that businesses stay ahead in the ever-evolving digital landscape.",
    image: "/team/raghib.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/Imthepatientwolf",
      instagram: "https://www.instagram.com/imthepatientwolf/",
      linkedin: "https://www.linkedin.com/in/ehtesham-raghib-9b5b6b201/",
    },
    featured: true,
  },
  {
    id: "Shreya Raj",
    name: "Shreya Raj",
    role: "Co-Founder & CTO",
    bio: "Shreya Raj, co-founder of Enegix Web Solutions, is a dynamic leader and creative strategist dedicated to crafting impactful digital experiences. With expertise in brand development and digital marketing, she brings a unique blend of creativity and technical acumen to the company. Her passion for innovation and eye for detail have played a crucial role in shaping Enegix Web Solutions into a full-service digital agency that delivers visually stunning and results-driven web solutions. Shreya believes in blending aesthetics with functionality, ensuring that every project not only looks exceptional but also achieves its intended impact.",
    image: "/team/shreya.jpg",
    socialLinks: {
      facebook:
        "https://www.facebook.com/profile.php?id=61574563300591&mibextid=wwXIfr&rdid=xtteN194F8ccVUqv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1F3jvQrKje%2F%3Fmibextid%3DwwXIfr#",
      instagram: "https://www.instagram.com/potaciumpandey",
      linkedin:
        "https://www.linkedin.com/in/shreya-raj-75569a34b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    featured: true,
  },
];

// Interface for team member from API
interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image?: string;
  status: "active" | "inactive";
  order: number;
  createdAt: string;
  updatedAt: string;
}

// Team Member Card Component
const TeamMemberCard = ({
  member,
}: {
  member: TeamMember | (typeof foundersData)[0];
}) => {
  const isTeamMember = "_id" in member; // Check if it's from API (TeamMember) or static (founder)

  return (
    <>
      {
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-120px" }}
          className="group relative overflow-hidden rounded-2xl  h-[320px] cursor-pointer transform transition-all duration-500 hover:scale-102 hover:shadow-2xl">
          {/* Background Image */}
          <div className="absolute  inset-0 rounded-2xl overflow-hidden">
            <Image
              src={member.image || "/team/placeholder.jpg"}
              alt={member.name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-102 group-hover:brightness-45"
            />
          </div>

          {/* Content overlay - hidden by default, shown on hover */}
          <div className="absolute inset-0 flex flex-col justify-end text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            {/* Name */}
            <h3 className="text-2xl md:text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-gray-300 text-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200">
              {member.role}
            </p>
          </div>
        </motion.div>
      }
    </>
  );
};

// Featured Team Member Card
const FeaturedTeamMemberCard = ({
  member,
}: {
  member: (typeof foundersData)[0];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-xl hover:shadow-2xl hover:border-teal-300 transition-all duration-300 p-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100/30 to-teal-100/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-100/30 to-teal-100/30 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/3 aspect-square relative rounded-2xl overflow-hidden border-4 border-teal-200 group-hover:border-teal-400 transition-colors duration-300">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-teal-600 text-xl font-semibold mb-4">
            {member.role}
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

          <div className="flex justify-center lg:justify-start space-x-4">
            {member.socialLinks.linkedin && (
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social p-3 bg-teal-50 hover:bg-teal-600 rounded-full transition-all duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-teal-600 group-hover/social:text-white transition-colors">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            )}
            {member.socialLinks.facebook && (
              <a
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social p-3 bg-teal-50 hover:bg-teal-600 rounded-full transition-all duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-teal-600 group-hover/social:text-white transition-colors">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            )}
            {member.socialLinks.instagram && (
              <a
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social p-3 bg-teal-50 hover:bg-teal-600 rounded-full transition-all duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-teal-600 group-hover/social:text-white transition-colors">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Team Filters
const filters = [
  { id: "all", label: "All Team" },
  { id: "leadership", label: "Leadership" },
  { id: "development", label: "Development" },
  { id: "sales", label: "Sales & Business" },
];

export default function TeamPage() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [employees, setEmployees] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch employees from API
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all active employees with simplified data (name, role, image only)
      const response = await fetch(
        "/api/team?status=active&limit=50&sort=order,name"
      );
      const data = await response.json();

      if (data.success) {
        setEmployees(data.data || []);
      } else {
        setError(data.message || "Failed to fetch team members");
      }
    } catch (error) {
      console.error("Error fetching team members:", error);
      setError("Failed to load team members. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // Filter members based on active filter (simplified)
  const filteredEmployees = employees.filter((member) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "leadership") return false; // Leadership is handled separately (founders)
    if (activeFilter === "development")
      return (
        member.role.toLowerCase().includes("developer") ||
        member.role.toLowerCase().includes("development") ||
        member.role.toLowerCase().includes("engineer")
      );
    if (activeFilter === "sales")
      return (
        member.role.toLowerCase().includes("sales") ||
        member.role.toLowerCase().includes("business") ||
        member.role.toLowerCase().includes("account") ||
        member.role.toLowerCase().includes("marketing")
      );
    return true;
  });

  // Leaders are always the founders (shown when leadership filter is active or all)
  const shouldShowFounders =
    activeFilter === "all" || activeFilter === "leadership";
  const featuredMembers = shouldShowFounders ? foundersData : [];
  const regularMembers = activeFilter === "leadership" ? [] : filteredEmployees;

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    fetchEmployees();
  }, []);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (!mounted) return;

    // Enable page scrolling and fix scroll issues
    enablePageScroll();

    // Clear any transform styles that might be affecting scroll
    const mainContent =
      document.getElementById("__next") || document.querySelector("main");
    if (mainContent) {
      mainContent.style.transform = "none";
    }
  }, [mounted]);

  return (
    <>
      <ScrollFix />
      <Navbar />
      <main className=" text-gray-900 min-h-screen relative overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden pt-28 pb-10 bg-gradient-to-br from-teal-50 via-white to-white">
          {/* Decorative Aurora/Meteors */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* <Meteors number={18} /> */}
          </div>
          <Container>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4 md:mt-5 relative z-10">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/"
                    className="hover:text-teal-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-teal-600 font-medium" aria-current="page">
                  Our Team
                </li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative pt-10 md:pt-0 z-10 flex flex-col lg:flex-row items-center gap-12  mx-auto">
              {/* Left: Text */}
              <div className="flex-1 text-center md:-mt-30 lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                  <span className="inline-block bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 text-transparent bg-clip-text animate-gradient-x">
                    Meet the Minds
                  </span>
                  <br />
                  <span className="inline-block">
                    Behind <span className="text-teal-600">Enegix</span>
                  </span>
                </h1>
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
                  Our team is a blend of creative thinkers, tech innovators, and
                  digital strategists. Together, we turn ideas into impactful
                  digital experiences for brands that want to lead.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link href="#leadership">
                    <Button
                      size="lg"
                      className="bg-teal-500 py-2 text-white hover:bg-teal-700 shadow-lg shadow-teal-200/30">
                      Meet Our Leaders
                    </Button>
                  </Link>
                  <Link href="#team">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-teal-600! hover:bg-teal-500! bg-white py-2 border-teal-600  hover:text-white! shadow-sm">
                      View Full Team
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Right: Hero Image/Collage */}
              <div className="flex-1 flex items-center justify-center relative min-w-[280px] py-8 md:py-4">
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                  {/* Main central image */}
                  <div className="absolute md:left-[340px] left-[220px]  md:top-1/2 top-60 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64  rounded-full border-4 border-teal-500 bg-gradient-to-br from-teal-50 to-white shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={foundersData[0].image}
                      alt={foundersData[0].name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Secondary image - top left */}
                  <div className="absolute top-10 left-5 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-teal-500 bg-white shadow-lg overflow-hidden transform -translate-x-1/4 -translate-y-1/4 transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                    <Image
                      src={foundersData[1].image}
                      alt={foundersData[1].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div
                    className="absolute left-1/2 top-[165px] -z-10 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] border-5 rounded-full border-teal-200/50 bg-gradient-to-r from-teal-100/20 to-blue-100/20 animate-pulse pointer-events-none"
                    style={{ animationDuration: "8s" }}
                  />

                  {/* Subtle glow effect */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-teal-100/10 blur-3xl pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
        {/* Featured Members Section */}
        <section id="leadership" className=" bg-white mt-10">
          <Container >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center  mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-600">
                  Leadership
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Meet the visionaries who drive our mission and shape our company
                culture
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredMembers.map((member) => (
                <FeaturedTeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </Container>
        </section>
        {/* Team Members Section */}
        <section
          id="team"
          className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-600">
                  Talented Team
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Each member of our team brings unique expertise and passion to
                every project
              </p>
            </motion.div>

            {/* Filters */}
            <div className="flex justify-center flex-wrap gap-3 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-teal-600 text-white shadow-lg shadow-teal-600/25"
                      : "bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200 hover:border-teal-200"
                  }`}>
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Team Members Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl aspect-square">
                    <div className="h-full w-full bg-gray-200/30 rounded-2xl"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 rounded-full bg-red-100 text-red-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <p className="text-red-600 text-lg mb-2">
                  Error loading team members
                </p>
                <p className="text-gray-600">{error}</p>
                <button
                  onClick={fetchEmployees}
                  className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                  Try Again
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {regularMembers.map((member) => (
                  <TeamMemberCard
                    key={member._id || member.name}
                    member={member}
                  />
                ))}
              </div>
            )}

            {!loading && !error && regularMembers.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex p-4 rounded-full bg-gray-100 text-gray-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">
                  {activeFilter === "all"
                    ? "No employees found."
                    : "No team members match the selected filter."}
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
