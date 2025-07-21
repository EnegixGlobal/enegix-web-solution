"use client";

import { SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import Link from "next/link";
import { enablePageScroll } from "@/utils/scroll-helper";
import Button from "@/components/Button";

// Job positions data
const jobPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3-5 years",
    description: "Join our development team to build cutting-edge web applications using React, Node.js, and modern technologies.",
    requirements: [
      "3+ years experience with React.js and Node.js",
      "Strong knowledge of TypeScript and Next.js",
      "Experience with databases (MongoDB, PostgreSQL)",
      "Understanding of DevOps and cloud platforms",
      "Excellent problem-solving skills"
    ],
    skills: ["React.js", "Node.js", "TypeScript", "MongoDB", "AWS"]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2-4 years",
    description: "Create amazing user experiences and beautiful interfaces for our digital products and client projects.",
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user-centered design principles",
      "Knowledge of HTML/CSS is a plus"
    ],
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Prototyping"]
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2-3 years",
    description: "Drive growth and engagement through strategic digital marketing campaigns across various platforms.",
    requirements: [
      "2+ years in digital marketing",
      "Experience with Google Ads, Facebook Ads, LinkedIn Ads",
      "SEO and content marketing expertise",
      "Analytics and reporting skills",
      "Creative content creation abilities"
    ],
    skills: ["Google Ads", "SEO", "Social Media", "Analytics", "Content Marketing"]
  },
  {
    id: 4,
    title: "Business Development Executive",
    department: "Sales",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "1-3 years",
    description: "Build relationships with clients and drive business growth through strategic partnerships and sales.",
    requirements: [
      "1+ years in business development or sales",
      "Excellent communication and negotiation skills",
      "Understanding of tech services and solutions",
      "CRM experience (Salesforce, HubSpot)",
      "Results-driven mindset"
    ],
    skills: ["Sales", "CRM", "Lead Generation", "Client Relations", "Negotiation"]
  },
  {
    id: 5,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "1-3 years",
    description: "Build responsive and interactive user interfaces using modern frontend technologies.",
    requirements: [
      "1+ years experience with React.js",
      "Strong HTML, CSS, and JavaScript skills",
      "Experience with Tailwind CSS or similar",
      "Understanding of responsive design",
      "Git version control knowledge"
    ],
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    id: 6,
    title: "Project Manager",
    department: "Operations",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead and coordinate multiple projects, ensuring timely delivery and client satisfaction.",
    requirements: [
      "3+ years in project management",
      "PMP or Agile certification preferred",
      "Experience with project management tools",
      "Strong leadership and communication skills",
      "Tech industry experience preferred"
    ],
    skills: ["Project Management", "Agile", "Scrum", "Leadership", "Communication"]
  }
];

// Company benefits
const benefits = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with performance bonuses"
  },
  {
    icon: "🏠",
    title: "Remote Work",
    description: "Flexible work arrangements with hybrid options available"
  },
  {
    icon: "📚",
    title: "Learning & Development",
    description: "Continuous learning opportunities, certifications, and skill development"
  },
  {
    icon: "🏥",
    title: "Health Benefits",
    description: "Comprehensive health insurance coverage for you and your family"
  },
  {
    icon: "🌴",
    title: "Paid Time Off",
    description: "Generous vacation policy and flexible personal time off"
  },
  {
    icon: "🎯",
    title: "Career Growth",
    description: "Clear career progression paths and mentorship programs"
  },
  {
    icon: "🎉",
    title: "Team Events",
    description: "Regular team outings, celebrations, and company events"
  },
  {
    icon: "💻",
    title: "Latest Equipment",
    description: "Top-of-the-line laptops and equipment for optimal productivity"
  }
];

// Company culture values
const cultureValues = [
  {
    title: "Innovation First",
    description: "We embrace new technologies and creative solutions to solve complex problems.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Collaborative Spirit",
    description: "We believe in the power of teamwork and open communication.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Growth Mindset",
    description: "We invest in our people's growth and encourage continuous learning.",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Client Success",
    description: "We're committed to delivering exceptional value to our clients.",
    color: "from-orange-500 to-red-500"
  }
];

type JobPosition = typeof jobPositions[number];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [applicationJobId, setApplicationJobId] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    currentCompany: "",
    expectedSalary: "",
    noticePeriod: "",
    coverLetter: "",
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    enablePageScroll();
  }, []);

  const openJobModal = (job: SetStateAction<{ id: number; title: string; department: string; location: string; type: string; experience: string; description: string; requirements: string[]; skills: string[]; } | null>) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeJobModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  const openApplicationModal = (jobId: number) => {
    setApplicationJobId(jobId);
    setIsApplicationModalOpen(true);
  };

  const closeApplicationModal = () => {
    setApplicationJobId(null);
    setIsApplicationModalOpen(false);
    setApplicationData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      currentCompany: "",
      expectedSalary: "",
      noticePeriod: "",
      coverLetter: "",
      resume: null
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.type === "application/pdf") {
      setApplicationData(prev => ({
        ...prev,
        resume: file
      }));
    } else if (file) {
      alert("Please upload a PDF file for your resume.");
      e.target.value = "";
    }
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log("Application Data:", applicationData);
      console.log("Applied for Job ID:", applicationJobId);
      
      alert("Application submitted successfully! We'll get back to you soon.");
      closeApplicationModal();
    } catch (error) {
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getJobTitle = (jobId: number) => {
    const job = jobPositions.find(j => j.id === jobId);
    return job ? job.title : "Position";
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollFix />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our Amazing{" "}
                <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build the future of digital innovation with us. We're looking for passionate individuals 
                who want to make a difference in the tech world while growing their careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-3 text-lg">
                  View Open Positions
                </Button>
                <button className="px-8 py-3 text-lg border-2 border-gray-300 text-gray-700 rounded-full hover:border-teal-500 hover:text-teal-500 transition-all duration-300">
                  Learn About Our Culture
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-100 rounded-full opacity-50 animate-pulse"></div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Enegix?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just building websites and apps – we're building careers, 
              fostering innovation, and creating an environment where talent thrives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="h-full bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group-hover:scale-102">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} mb-4 flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded opacity-90"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Amazing Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits 
              that support both professional and personal growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to take the next step in your career? Explore our current openings 
              and find the perfect role that matches your skills and ambitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-102"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                      <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openJobModal(job)}
                    className="flex-1 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => openApplicationModal(job.id)}
                    className="px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition-colors duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Job Detail Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                      {selectedJob.department}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {selectedJob.location}
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      {selectedJob.type}
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      {selectedJob.experience}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeJobModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => openApplicationModal(selectedJob.id)}
                  className="flex-1 bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 font-semibold"
                >
                  Apply for This Position
                </button>
                <button
                  onClick={closeJobModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Application Form Modal */}
      {isApplicationModalOpen && applicationJobId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Apply for {getJobTitle(applicationJobId)}
                  </h2>
                  <p className="text-gray-600">
                    Please fill out the form below to submit your application
                  </p>
                </div>
                <button
                  onClick={closeApplicationModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <form onSubmit={handleApplicationSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={applicationData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={applicationData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="City, State/Country"
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Experience *
                    </label>
                    <select
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="2-3 years">2-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-7 years">5-7 years</option>
                      <option value="7-10 years">7-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Company
                    </label>
                    <input
                      type="text"
                      name="currentCompany"
                      value={applicationData.currentCompany}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your current company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Salary (Annual)
                    </label>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={applicationData.expectedSalary}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="e.g., $50,000 - $60,000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notice Period
                    </label>
                    <select
                      name="noticePeriod"
                      value={applicationData.noticePeriod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select notice period</option>
                      <option value="Immediate">Immediate</option>
                      <option value="1 week">1 week</option>
                      <option value="2 weeks">2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2 months">2 months</option>
                      <option value="3 months">3 months</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume & Documents</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume (PDF only) *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                    />
                  </div>
                  {applicationData.resume && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ {applicationData.resume.name} uploaded successfully
                    </p>
                  )}
                </div>
              </div>

              {/* Cover Letter */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Why do you want to join us?
                </label>
                <textarea
                  name="coverLetter"
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Submit Application"
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeApplicationModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>

              {/* Terms & Conditions */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  By submitting this application, you agree to our{" "}
                  <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a>{" "}
                  and{" "}
                  <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>.
                  Your personal information will be used solely for recruitment purposes.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
