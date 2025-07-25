"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "react-hot-toast";
import {
  XMarkIcon,
  CloudArrowUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/Button";

interface Portfolio {
  _id?: string;
  title: string;
  logo: string;
  category: string;
  type?: string;
  description: string;
  image: string;
  technologiesUsed: string[];
  tags: string[];
  link?: string;
  featured: boolean;
  status: string;
  stats: {
    organicGrowth: number;
    paidGrowth: number;
  };
  metaTitle?: string;
  metaDescription?: string;
}

interface PortfolioFormProps {
  portfolio?: Portfolio | null;
  onClose: () => void;
  onSubmit: () => void;
}

const PortfolioForm = ({ portfolio, onClose, onSubmit }: PortfolioFormProps) => {
  const [formData, setFormData] = useState<Portfolio>({
    title: "",
    logo: "",
    category: "E-commerce",
    type: "",
    description: "",
    image: "",
    technologiesUsed: [],
    tags: [],
    link: "",
    featured: false,
    status: "active",
    stats: {
      organicGrowth: 0,
      paidGrowth: 0,
    },
    metaTitle: "",
    metaDescription: "",
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [newTech, setNewTech] = useState("");
  const [newTag, setNewTag] = useState("");

  const logoInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    "E-commerce",
    "Web Development",
    "Travel",
    "Interior Design",
    "Automotive",
    "Clothing",
    "Chemicals",
    "Food & Beverage",
    "Healthcare",
    "Education",
    "Technology",
    "Finance",
    "Real Estate",
    "Entertainment",
    "Other"
  ];

  useEffect(() => {
    if (portfolio) {
      setFormData(portfolio);
      setLogoPreview(portfolio.logo);
      setImagePreview(portfolio.image);
    }
  }, [portfolio]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name.includes("stats.")) {
      const statKey = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          [statKey]: parseInt(value) || 0,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "logo" | "image") => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }

    if (type === "logo") {
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const addTechnology = () => {
    if (newTech.trim() && !formData.technologiesUsed.includes(newTech.trim())) {
      setFormData(prev => ({
        ...prev,
        technologiesUsed: [...prev.technologiesUsed, newTech.trim()],
      }));
      setNewTech("");
    }
  };

  const removeTechnology = (index: number) => {
    setFormData(prev => ({
      ...prev,
      technologiesUsed: prev.technologiesUsed.filter((_, i) => i !== index),
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted!"); // Debug log
    
    // Validation
    if (!formData.title || !formData.description || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!portfolio && (!logoFile || !imageFile)) {
      toast.error("Please upload both logo and project image");
      return;
    }

    setLoading(true);
    console.log("Starting submission process..."); // Debug log

    try {
      console.log("Submitting portfolio data:", formData);
      
      let logoUrl = formData.logo;
      let imageUrl = formData.image;

      // Upload logo if new file is selected
      if (logoFile) {
        console.log("Uploading logo..."); // Debug log
        const logoFormData = new FormData();
        logoFormData.append('file', logoFile);
        
        const logoResponse = await fetch('/api/upload', {
          method: 'POST',
          body: logoFormData,
        });
        
        const logoData = await logoResponse.json();
        console.log("Logo upload response:", logoData); // Debug log
        
        if (logoData.url) {
          logoUrl = logoData.url;
        } else {
          toast.error('Failed to upload logo');
          setLoading(false);
          return;
        }
      }

      // Upload project image if new file is selected
      if (imageFile) {
        console.log("Uploading image..."); // Debug log
        const imageFormData = new FormData();
        imageFormData.append('file', imageFile);
        
        const imageResponse = await fetch('/api/upload', {
          method: 'POST',
          body: imageFormData,
        });
        
        const imageData = await imageResponse.json();
        console.log("Image upload response:", imageData); // Debug log
        
        if (imageData.url) {
          imageUrl = imageData.url;
        } else {
          toast.error('Failed to upload project image');
          setLoading(false);
          return;
        }
      }

      // Prepare portfolio data
      const portfolioData = {
        ...formData,
        logo: logoUrl,
        image: imageUrl,
      };

      console.log("Final portfolio data:", portfolioData); // Debug log

      const token = localStorage.getItem("adminToken");
      console.log("Admin token:", token ? "Token exists" : "No token found"); // Debug log
      
      const url = portfolio 
        ? `/api/portfolio/${portfolio._id}` 
        : "/api/portfolio";
      const method = portfolio ? "PUT" : "POST";

      console.log("Making API request to:", url, "Method:", method); // Debug log

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(portfolioData),
      });

      console.log("API response status:", response.status); // Debug log
      const data = await response.json();
      console.log("API response data:", data); // Debug log

      if (data.success) {
        toast.success(
          portfolio 
            ? "Portfolio updated successfully" 
            : "Portfolio created successfully"
        );
        onSubmit();
        onClose();
      } else {
        console.error('Portfolio save error:', data);
        toast.error(data.message || "Failed to save portfolio");
      }
    } catch (error) {
      console.error("Error saving portfolio:", error);
      toast.error("Failed to save portfolio");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {portfolio ? "Edit Portfolio" : "Add New Portfolio"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter project title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="E.g., E-commerce, Portfolio, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Link
              </label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter project description"
            />
          </div>

          {/* Image Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Logo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo * {portfolio && "(Leave empty to keep current)"}
              </label>
              <div
                onClick={() => logoInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-teal-500 cursor-pointer transition-colors"
              >
                {logoPreview ? (
                  <div className="relative">
                    <Image
                      src={logoPreview}
                      alt="Logo preview"
                      width={120}
                      height={120}
                      className="mx-auto object-contain rounded"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLogoFile(null);
                        setLogoPreview(portfolio?.logo || "");
                      }}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <CloudArrowUpIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Click to upload logo
                    </p>
                  </div>
                )}
              </div>
              <input
                ref={logoInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "logo")}
                className="hidden"
              />
            </div>

            {/* Project Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Image * {portfolio && "(Leave empty to keep current)"}
              </label>
              <div
                onClick={() => imageInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-teal-500 cursor-pointer transition-colors"
              >
                {imagePreview ? (
                  <div className="relative">
                    <Image
                      src={imagePreview}
                      alt="Project preview"
                      width={200}
                      height={120}
                      className="mx-auto object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImageFile(null);
                        setImagePreview(portfolio?.image || "");
                      }}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <CloudArrowUpIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Click to upload project image
                    </p>
                  </div>
                )}
              </div>
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "image")}
                className="hidden"
              />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology())}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Add technology (e.g., React, Node.js)"
              />
              <Button
                type="button"
                onClick={addTechnology}
                variant="outline"
                size="sm"
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.technologiesUsed.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechnology(index)}
                    className="text-teal-600 hover:text-teal-800"
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Add tag (e.g., Responsive, SEO Optimized)"
              />
              <Button
                type="button"
                onClick={addTag}
                variant="outline"
                size="sm"
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organic Growth (%)
              </label>
              <input
                type="number"
                name="stats.organicGrowth"
                value={formData.stats.organicGrowth}
                onChange={handleInputChange}
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paid Growth (%)
              </label>
              <input
                type="number"
                name="stats.paidGrowth"
                value={formData.stats.paidGrowth}
                onChange={handleInputChange}
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 pt-8">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                Featured Project
              </label>
            </div>
          </div>

          {/* SEO Fields */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Title
              </label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="SEO meta title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="SEO meta description"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <button
              type="submit"
              disabled={loading}
              className="bg-teal-600 hover:bg-teal-700 text-white px-3 rounded-2xl"
            >
              {loading
                ? "Saving..."
                : portfolio
                ? "Update Portfolio"
                : "Create Portfolio"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioForm;
