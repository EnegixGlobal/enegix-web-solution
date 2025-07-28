"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import Link from "next/link";
import { enablePageScroll } from "@/utils/scroll-helper";
import { DockDemo } from "@/components/dock-demo";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";

const faqs = [
  {
    question: "How long to website?",
    answer:
      "The timeline depends on your project complexity. A basic business website typically takes 1-2 weeks. Advanced e-commerce or custom portals may take 3-6 weeks. We always give you a realistic timeline before starting.",
  },
  {
    question: "Technologies we use?",
    answer:
      "We work with modern, scalable technologies like React.js, Next.js, Node.js, MongoDB, WordPress, Shopify, and more. Our tech stack is tailored to match your project's goals and future scalability.",
  },
  {
    question: "Challenges we completed?",
    answer:
      "From revamping slow websites into high-speed performers to building complex CRM, booking, and e-commerce systems from scratch — we've successfully delivered solutions across various industries with unique challenges.",
  },
  {
    question: "Mobile Friendly?",
    answer:
      "Absolutely! Every website we build is fully responsive and optimized for mobile devices, ensuring smooth user experience across phones, tablets, and desktops.",
  },
  {
    question: "Can I update my website after it is built?",
    answer:
      "Yes! We offer content management systems or admin panels that let you update text, images, and more — even if you're not tech-savvy. Or you can opt for our support plans for ongoing updates.",
  },
  {
    question: "Domain and hosting services too?",
    answer:
      "Yes, we offer domain registration and lightning-fast, secure hosting. Whether you need shared hosting, VPS, or cloud deployment — we’ve got you covered end-to-end.",
  },
  {
    question: "Cost?",
    answer:
      "Website pricing depends on the features, number of pages, and design complexity. Our packages start from budget-friendly options and scale up as per your need. Reach out for a free quote!",
  },
  {
    question: "Digital Marketing services included?",
    answer:
      "We provide complete digital marketing services including SEO, social media management, PPC advertising, content strategy, and email marketing. Everything you need to grow your digital presence.",
  },
  {
    question: "Results and ROI?",
    answer:
      "Our marketing strategies are data-driven. We focus on increasing traffic, generating qualified leads, and boosting conversions — so you see real business growth and return on investment (ROI).",
  },
  {
    question: "Lists of Social Media we can handle?",
    answer:
      "We handle Instagram, Facebook, LinkedIn, Twitter (X), and YouTube. From content creation to posting schedules and engagement — we manage it all professionally.",
  },
  {
    question: "Paid Ad services -> Insta, Facebook, LinkedIn, YouTube?",
    answer:
      "Yes, we run high-converting ad campaigns on Instagram, Facebook, LinkedIn, and YouTube. From ad design to targeting and analytics — we take care of everything for better ROI.",
  },
  {
    question: "SEO and Result?",
    answer:
      "We provide full-stack SEO services: keyword research, on-page optimization, technical SEO, backlinks, and performance tracking. You’ll see steady growth in rankings and organic traffic.",
  },
  {
    question: "Plans and Discounts?",
    answer:
      "We offer flexible monthly and one-time project plans. Discounts are available for long-term packages, startups, and bundle deals. Contact us to know what’s best for your budget.",
  },
  {
    question: "Our payment modes",
    answer:
      "We accept payments via UPI, bank transfer, credit/debit cards, and international methods like PayPal. EMI options available on select packages.",
  },
  {
    question: "Maintenance and Support services?",
    answer:
      "Yes, we offer ongoing support plans covering updates, bug fixes, security patches, performance checks, backups, and technical assistance. Peace of mind, guaranteed.",
  },
];

// Contact form component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "Select a service",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.service === "Select a service") {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please select a service",
      });
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: "Select a service",
    });

    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Your message has been sent successfully! We'll get back to you soon.",
    });

    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };


  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-xl hover:border-teal-500/30 transition-all duration-300">
      <h3 className="text-2xl font-semibold mb-6 text-black">
        Send Us A Message
      </h3>

      {formStatus && (
        <div
          className={`p-4 mb-6 rounded-lg ${
            formStatus.success
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}>
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Your Phone Number"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-2">
              Service <span className="text-red-600">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option value="Select a service" disabled>
                Select a service
              </option>
              <option value="Web Development">Web Development</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Logo Design">Logo Design</option>
              <option value="E-commerce Solutions">E-commerce Solutions</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Subject of your message"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="How can we help you?"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="py-3 px-8 rounded-lg bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] tracking-wide text-sm">
            Send Message
          </button>

          <Link
            href="https://wa.me/919608263050?text=Hi%20I%20Need%20Digital%20Marketing%20services%20for%20My%20Business"
            target="_blank">
            <div className="flex items-center text-green-700 hover:text-green-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 mr-2 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>Quick Chat</span>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

// Contact information component
const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-xl hover:border-teal-500/30 transition-all duration-300">
        <h4 className="text-black text-xl font-semibold mb-6">
          Contact Information
        </h4>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-teal-100/20 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div>
              <h4 className="text-black font-semibold mb-2">Address</h4>
              <p className="text-gray-700 mb-1">House No.2, Old AG More</p>
              <p className="text-gray-700 mb-1">
                near Bharat Kitchen, above Saryu Son's Jwellers
              </p>
              <p className="text-gray-700 mb-1">Kadru, Ranchi, Jharkhand</p>
              <a
                href="https://maps.app.goo.gl/ccd5SSKteK4MpUnx8"
                target="_blank"
                className="inline-block mt-2 text-teal-600 hover:text-teal-500 transition-colors">
                View on map →
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-teal-100/20 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div>
              <h4 className="text-black font-semibold mb-2">Email</h4>
              <a
                href="mailto:contact@enegixwebsolutions.com"
                className="block text-gray-700 hover:text-teal-600 transition-colors">
                contact@enegixwebsolutions.com
              </a>
              <a
                href="mailto:support@enegixwebsolutions.com"
                className="block text-gray-700 hover:text-teal-600 transition-colors">
                support@enegixwebsolutions.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-teal-100/20 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>

            <div>
              <h4 className="text-black font-semibold mb-2">Call Us</h4>
              <a
                href="tel:+919608263050"
                className="block text-gray-700 hover:text-teal-600 transition-colors">
                +91 96082 63050
              </a>
              <a
                href="tel:+9905953677"
                className="block text-gray-700 hover:text-teal-600 transition-colors">
                +91 99059 53677
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-xl hover:border-teal-500/30 transition-all duration-300">
        <h4 className="text-black text-xl font-semibold mb-6">
          Business Hours
        </h4>

        <ul className="space-y-4">
          <li className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-700">Monday - Friday:</span>
            <span className="text-black bg-teal-100 px-3 py-1 rounded-full text-sm">
              10:00 AM - 7:00 PM
            </span>
          </li>
          <li className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-700">Saturday (odd):</span>
            <span className="text-black bg-teal-100 px-3 py-1 rounded-full text-sm">
              10:00 AM - 7:00 PM
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-700">Sunday, Saturday (even):</span>
            <span className="text-red-700 bg-red-100 px-3 py-1 rounded-full text-sm">
              Closed
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-xl hover:border-teal-500/30 transition-all duration-300">
        <h4 className="text-black text-xl font-semibold">Connect With Us</h4>

        <div className="flex justify-normal">
          <DockDemo />
        </div>
      </div>
    </div>
  );
};

// FAQ section component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-1 shadow-2xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100">
          <div className="space-y-1 p-1">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative rounded-xl overflow-hidden ${
                  openIndex === index ? "bg-teal-50/50" : "hover:bg-gray-50/70"
                } transition-colors duration-200`}>
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none group"
                  onClick={() => toggleFAQ(index)}>
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center ml-4"
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      backgroundColor:
                        openIndex === index ? "#3b82f6" : "#eff6ff",
                    }}
                    transition={{ duration: 0.3 }}>
                    <svg
                      className={`w-5 h-5 ${
                        openIndex === index ? "text-white" : "text-teal-500"
                      } transition-colors`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0 text-gray-600 text-base leading-relaxed">
                    <div className="border-t border-gray-200/80 pt-5">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Search FAQ component
type FAQ = { question: string; answer: string };

const FAQSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([]);

  const handleSearch = (e: { target: { value: string } }) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
    );
    setFilteredFAQs(filtered);
  };

  return (
    <div className="mt-8">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search FAQs..."
        className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder-gray-500 bg-white shadow-md transition-all duration-300"
      />
      {searchTerm && filteredFAQs.length > 0 && (
        <div className="mt-4 bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Search Results
          </h4>
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{faq.question}</p>
              <p className="text-sm text-gray-600 mt-1">
                {faq.answer.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    enablePageScroll();
  }, []);

  return (
    <>
      {mounted && <ScrollFix />}
      <Navbar />

      <main className="bg-white text-black overflow-x-hidden">
        {/* Hero Section - Simple Design */}
        <section
          className="relative pt-34  pb-16 px-6 lg:px-8 bg-white"
          role="banner">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Let's Start <br />
                  <span className="text-teal-600">Building Together</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Ready to transform your digital presence? We're here to help
                  you achieve your business goals with innovative web solutions
                  and digital marketing strategies.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/919608263050?text=Hey%2C%20I%20need%20services%2C%20can%20you%20please%20help%20me%20with%20that."
                    target="_blank"
                    className="group">
                    <Button
                      className="py-4 px-8 text-lg font-semibold bg-teal-600 hover:bg-teal-700 transition-colors duration-300"
                      size="lg">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
                      </svg>
                      Chat with us Now
                    </Button>
                  </a>
                </motion.div>
              </div>

              {/* Right Image - Simplified */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative">
                <div className="">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_1280.jpg"
                    alt="Contact Us - Professional team ready to help"
                    className="w-full h-[300px] rounded-bl-3xl rounded-tr-3xl object-cover aspect-square"
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section id="form" className="py-20 px-4">
          <Container>
            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/5">
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-2/5">
                <ContactInfo />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Find Us <span className="text-teal-600">Here</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our office is conveniently located in Kadru, Ranchi. Feel free
                to stop by during business hours!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-xl h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1926.5374816433716!2d85.3162779!3d23.351633000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1c173830ab7%3A0x9cd58d1bf17ff0de!2sEnegix%20Web%20Solutions!5e1!3m2!1sen!2sin!4v1753696847167!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="text-teal-600">Questions</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Find answers to the most common questions about our services and
                process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto">
              <FAQ />
              <FAQSearch />
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
      {mounted && <ScrollToTopButton />}
    </>
  );
}
