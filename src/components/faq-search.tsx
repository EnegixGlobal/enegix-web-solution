"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FAQSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Default FAQ data
  const faqs: FAQ[] = [
    {
      question: "What services does Enegix Web Solutions offer?",
      answer: "We offer comprehensive digital services including web development, mobile app development, e-commerce solutions, digital marketing, SEO optimization, logo design, and PPC advertising. Our team specializes in creating modern, responsive websites and applications tailored to your business needs.",
      category: "Services"
    },
    {
      question: "How long does it take to develop a website?",
      answer: "The timeline depends on the complexity and scope of your project. A basic website typically takes 2-4 weeks, while complex e-commerce or custom applications may take 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
      category: "Development"
    },
    {
      question: "Do you provide ongoing support after the website launch?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, security monitoring, and technical assistance. We provide different support packages to suit your needs and ensure your website continues to perform optimally.",
      category: "Support"
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Next.js, Node.js, PHP, Python, MongoDB, MySQL, and cloud platforms like AWS and Google Cloud. Our tech stack is chosen based on your project requirements to ensure optimal performance and scalability.",
      category: "Technology"
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We provide comprehensive SEO services including on-page optimization, keyword research, content strategy, and technical SEO. Our digital marketing services cover social media marketing, PPC advertising, email marketing, and content marketing to help grow your online presence.",
      category: "Marketing"
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we proudly serve clients across multiple countries including India, Australia, Sri Lanka, Nepal, Bangladesh, and many others. We provide 24/7 support and have completed 100+ international projects across 5 continents.",
      category: "Global"
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and timeline. We provide transparent quotes with no hidden costs. Contact us for a free consultation and customized quote based on your specific requirements.",
      category: "Pricing"
    },
    {
      question: "Do you create mobile-responsive websites?",
      answer: "Yes, all our websites are mobile-responsive and optimized for all devices including smartphones, tablets, and desktops. We follow mobile-first design principles to ensure your website looks and performs great on every screen size.",
      category: "Development"
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Certainly! We specialize in website redesigns to improve user experience, modernize design, enhance performance, and implement new features. We can work with your existing content or help create new content as needed.",
      category: "Services"
    },
    {
      question: "How do I get started with my project?",
      answer: "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your requirements, provide recommendations, and create a customized proposal for your project.",
      category: "Getting Started"
    }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term) ||
        faq.category.toLowerCase().includes(term)
    );
    setFilteredFAQs(filtered);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have Questions? Search Our FAQ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our services, process, and more
          </p>
        </div>

        {/* Search Box */}
        <div className="relative mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers... (e.g., pricing, support, development time)"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400 text-lg"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchTerm && filteredFAQs.length > 0 && (
          <div className="space-y-4 mb-8">
            <div className="text-sm text-gray-600 mb-4">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
            </div>
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'border-teal-200 shadow-md' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none transition-colors duration-200 ${
                    openIndex === index ? 'bg-teal-50' : 'hover:bg-gray-50 focus:bg-gray-50'
                  }`}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-medium">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {searchTerm && filteredFAQs.length === 0 && (
          <div className="text-center py-8 mb-8">
            <div className="text-gray-500 mb-2">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No results found</p>
              <p className="text-sm">Try searching with different keywords</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Popular searches: pricing, support, development time, mobile responsive, SEO
              </p>
            </div>
          </div>
        )}

        {/* Call to Action - shown when no search is active */}
        {!searchTerm && (
          <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help! Contact us directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 py-3 border border-teal-600 text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSearch;
