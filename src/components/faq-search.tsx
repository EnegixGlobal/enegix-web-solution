"use client";

import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Default FAQ data
  const faqs = [
    {
      question: "What services does Enegix Web Solutions offer?",
      answer:
        "We offer a full suite of digital marketing and web services, including website design and development, SEO, social media marketing, PPC campaigns, branding, and content marketing.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Typically, website development takes 2 to 6 weeks depending on the complexity, features, and feedback cycle. We ensure timely delivery without compromising on quality.",
    },
    {
      question: "Do you offer SEO services?",
      answer:
        "Yes, we provide comprehensive SEO services, including keyword research, on-page and off-page optimization, technical SEO, and monthly performance tracking.",
    },
    {
      question: "Can you manage our social media accounts?",
      answer:
        "Absolutely! We handle content creation, scheduling, engagement, and growth strategies for platforms like Instagram, Facebook, LinkedIn, and more.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "You can reach out to us via our contact form, call us directly, or schedule a free consultation. We’ll understand your needs and recommend the best solution.",
    },
    {
      question: "Do you work with startups or only big companies?",
      answer:
        "We work with businesses of all sizes — from early-stage startups to large enterprises. Our strategies are tailored to fit your goals and budget.",
    },
    {
      question: "Will my website be mobile-friendly and SEO-optimized?",
      answer:
        "Yes. All websites we build are fully responsive and developed with SEO best practices in mind for optimal performance on search engines and mobile devices.",
    },
    {
      question: "Do you offer ongoing support after the website is launched?",
      answer:
        "Yes, we provide maintenance and support packages to keep your website updated, secure, and running smoothly.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We’ve worked across various industries, including e-commerce, education, healthcare, real estate, hospitality, and professional services.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "We use key performance indicators (KPIs) such as ROI, traffic growth, conversion rates, engagement, and more—paired with regular performance reports.",
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
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
            Find quick answers to common questions about our services, process,
            and more
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
              Found {filteredFAQs.length} result
              {filteredFAQs.length !== 1 ? "s" : ""}
            </div>
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border overflow-hidden transition-all duration-200 ${
                  openIndex === index
                    ? "border-teal-200 shadow-md"
                    : "border-gray-200"
                }`}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none transition-colors duration-200 ${
                    openIndex === index
                      ? "bg-teal-50"
                      : "hover:bg-gray-50 focus:bg-gray-50"
                  }`}
                  aria-expanded={openIndex === index ? "true" : "false"}>
                  <div className="flex-1">
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

                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
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
                Popular searches: pricing, support, development time, mobile
                responsive, SEO
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
              Our team is here to help! Contact us directly for personalized
              assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200">
                Contact Us
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 py-3 border border-teal-600 text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 transition-colors duration-200">
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
