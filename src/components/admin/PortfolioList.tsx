"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "react-hot-toast";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/Button";

interface Portfolio {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
  createdBy?: {
    name: string;
    email: string;
  };
}

interface PortfolioListProps {
  onEdit: (portfolio: Portfolio) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  refreshTrigger: number;
}

const PortfolioList = ({ onEdit, onDelete, onAdd, refreshTrigger }: PortfolioListProps) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("all");
  const [featuredFilter, setFeaturedFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });

  const categories = [
    "All",
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

  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "10",
        ...(categoryFilter !== "All" && { category: categoryFilter }),
        ...(statusFilter !== "all" && { status: statusFilter }),
        ...(featuredFilter && { featured: featuredFilter }),
        ...(searchQuery && { search: searchQuery }),
      });

      const response = await fetch(`/api/portfolio?${params}`);
      const data = await response.json();

      if (data.success) {
        setPortfolios(data.data);
        setPagination(data.pagination);
      } else {
        toast.error(data.message || "Failed to fetch portfolios");
      }
    } catch (error) {
      console.error("Error fetching portfolios:", error);
      toast.error("Failed to fetch portfolios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, [currentPage, categoryFilter, statusFilter, featuredFilter, searchQuery, refreshTrigger]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this portfolio?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`/api/portfolio/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Portfolio deleted successfully");
        fetchPortfolios();
        onDelete(id);
      } else {
        toast.error(data.message || "Failed to delete portfolio");
      }
    } catch (error) {
      console.error("Error deleting portfolio:", error);
      toast.error("Failed to delete portfolio");
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Portfolio Management</h2>
        <Button onClick={onAdd} className="bg-teal-600 hover:bg-teal-700 text-white">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Portfolio
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search portfolios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
          title="Select Category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            title="Select Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="draft">Draft</option>
          </select>

          {/* Featured Filter */}
          <select
          title="Select Featured Filter"
            value={featuredFilter}
            onChange={(e) => setFeaturedFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">All Projects</option>
            <option value="true">Featured Only</option>
            <option value="false">Non-Featured</option>
          </select>
        </div>
      </div>

      {/* Portfolio Grid */}
      {portfolios.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No portfolios found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio) => (
            <motion.div
              key={portfolio._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Project Image */}
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover"
                />
                {portfolio.featured && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                  portfolio.status === 'active' ? 'bg-green-500 text-white' :
                  portfolio.status === 'inactive' ? 'bg-red-500 text-white' :
                  'bg-yellow-500 text-white'
                }`}>
                  {portfolio.status.charAt(0).toUpperCase() + portfolio.status.slice(1)}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Logo and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={portfolio.logo}
                      alt={portfolio.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {portfolio.title}
                    </h3>
                    <p className="text-xs text-gray-500">{portfolio.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {truncateText(portfolio.description, 100)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {portfolio.technologiesUsed.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {portfolio.technologiesUsed.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{portfolio.technologiesUsed.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-500">Organic</p>
                    <p className="text-sm font-semibold text-teal-600">
                      {portfolio.stats.organicGrowth}%
                    </p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-500">Paid</p>
                    <p className="text-sm font-semibold text-teal-600">
                      {portfolio.stats.paidGrowth}%
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {portfolio.link && (
                    <button
                      onClick={() => window.open(portfolio.link, "_blank")}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors"
                    >
                      <EyeIcon className="w-3 h-3" />
                      View
                    </button>
                  )}
                  <button
                    onClick={() => onEdit(portfolio)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs bg-teal-100 hover:bg-teal-200 text-teal-700 rounded transition-colors"
                  >
                    <PencilIcon className="w-3 h-3" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(portfolio._id)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors"
                  >
                    <TrashIcon className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
          title="Previous Page"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          
          {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 rounded-md text-sm ${
                currentPage === page
                  ? "bg-teal-600 text-white"
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
          title="Next Page"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pagination.pages}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioList;
