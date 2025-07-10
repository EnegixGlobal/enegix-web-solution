"use client";

import React, { useState } from "react";
import {
  Check,
  CheckCircle,
  Smartphone,
  Mail,
  User,
  DollarSign,
  MapPin,
  Briefcase,
} from "lucide-react";
import Container from "@/components/Container";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function EnquiryForm() {
  type FormData = {
    name: string;
    age: string;
    phone: string;
    whatsapp: string;
    whatsappSame: boolean;
    email: string;
    monthlyRevenue: string;
    location: string;
    monthlySpend: string;
    businessType: string;
    services: string[];
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    phone: "",
    whatsapp: "",
    whatsappSame: false,
    email: "",
    monthlyRevenue: "",
    location: "",
    monthlySpend: "",
    businessType: "",
    services: [],
  });

  const allServices = [
    "Web Development",
    "UI/UX Design",
    "Mobile App Development",
    "Digital Marketing",
    "SEO Services",
    "Content Writing",
    "Branding",
    "CRM Solutions",
  ];

  const businessTypes = [
    "Startup",
    "Small Business",
    "Medium Enterprise",
    "Large Corporation",
    "E-commerce",
    "Agency",
    "Freelancer",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      if (prev.services.includes(service)) {
        return {
          ...prev,
          services: prev.services.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, service],
        };
      }
    });
  };

  const selectAllServices = () => {
    setFormData((prev) => ({
      ...prev,
      services:
        prev.services.length === allServices.length ? [] : [...allServices],
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  const [numberSameAsWhatsApp, setNumberSameAsWhatsApp] = useState(false);


  return (
    <>
      <div className="min-h-screen bg-gradient-to-b bg-teal-100 py-12 pt-28 to-teal-50 ">
        <Navbar />
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-teal-600">Connect</span> With Us
            </h2>
            <p className="text-lg font-bold max-w-2xl mx-auto">
              Fill this form to discuss how we can help grow your business
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left side - Image */}
              <div className="md:w-1/3 bg-gradient-to-br from-teal-500 to-teal-700 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                      alt="Business consultation"
                      className="rounded-lg shadow-md mx-auto w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Let's Build Something Amazing
                  </h3>
                  <p className="text-teal-100">
                    Our team will get back to you within 24 hours to discuss
                    your requirements
                  </p>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="md:w-2/3 p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-teal-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-teal-500" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Age */}
                    <div className="relative">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4"
                        placeholder="30"
                        min="18"
                        max="100"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-teal-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Smartphone className="h-5 w-5 text-teal-500" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="relative ">
                      <label
                        htmlFor="whatsapp"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={numberSameAsWhatsApp ? formData.phone : formData.whatsapp}
                        onChange={handleChange}
                        className="pl-10  w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4"
                        placeholder="+1 234 567 890"
                      />
                      <div>
                        <input type="checkbox"
                        id="whatsappSame"
                        name="whatsappSame"
                        checked={numberSameAsWhatsApp}
                        onChange={()=> setNumberSameAsWhatsApp(!numberSameAsWhatsApp)}
                        />
                        <label
                          htmlFor="whatsappSame"
                          className="ml-2 text-sm text-gray-600">
                          Same as Phone Number
                        </label>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative md:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Email ID <span className="text-teal-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-teal-500" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Monthly Revenue */}
                    <div className="relative">
                      <label
                        htmlFor="monthlyRevenue"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Revenue
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-5 w-5 text-teal-500" />
                        </div>
                        <select
                          id="monthlyRevenue"
                          name="monthlyRevenue"
                          value={formData.monthlyRevenue}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4">
                          <option value="">Select range</option>
                          <option value="0-1k">$0 - $1,000</option>
                          <option value="1k-5k">$1,000 - $5,000</option>
                          <option value="5k-20k">$5,000 - $20,000</option>
                          <option value="20k-100k">$20,000 - $100,000</option>
                          <option value="100k+">$100,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="relative">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        City/Country
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-teal-500" />
                        </div>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4"
                          placeholder="New York, USA"
                        />
                      </div>
                    </div>

                    {/* Monthly Spend Capacity */}
                    <div className="relative">
                      <label
                        htmlFor="monthlySpend"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Spend Capacity
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-5 w-5 text-teal-500" />
                        </div>
                        <select
                          id="monthlySpend"
                          name="monthlySpend"
                          value={formData.monthlySpend}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4">
                          <option value="">Select range</option>
                          <option value="0-500">$0 - $500</option>
                          <option value="500-2k">$500 - $2,000</option>
                          <option value="2k-5k">$2,000 - $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k+">$10,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Business Type */}
                    <div className="relative md:col-span-2">
                      <label
                        htmlFor="businessType"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Business Type
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Briefcase className="h-5 w-5 text-teal-500" />
                        </div>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-teal-500 focus:border-teal-500 py-2 px-4">
                          <option value="">Select your business type</option>
                          {businessTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="relative md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Services Interested In
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={selectAllServices}
                            className="flex items-center text-sm text-teal-600 hover:text-teal-800">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            {formData.services.length === allServices.length
                              ? "Deselect all"
                              : "Select all"}
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {allServices.map((service, index) => (
                            <div key={index} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`service-${index}`}
                                checked={formData.services.includes(service)}
                                onChange={() => handleServiceChange(service)}
                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                              />
                              <label
                                htmlFor={`service-${index}`}
                                className="ml-2 block text-sm text-gray-700">
                                {service}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                      Submit Enquiry
                      <Check className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default EnquiryForm;
