"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PortfolioList from "@/components/admin/PortfolioList";
import PortfolioForm from "@/components/admin/PortfolioForm";

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

export default function AdminPortfolioPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingPortfolio, setEditingPortfolio] = useState<Portfolio | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleAdd = () => {
    setEditingPortfolio(null);
    setShowForm(true);
  };

  const handleEdit = (portfolio: Portfolio) => {
    setEditingPortfolio(portfolio);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setEditingPortfolio(null);
  };

  const handleSubmit = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleDelete = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PortfolioList
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          refreshTrigger={refreshTrigger}
        />

        <AnimatePresence>
          {showForm && (
            <PortfolioForm
              portfolio={editingPortfolio}
              onClose={handleClose}
              onSubmit={handleSubmit}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
