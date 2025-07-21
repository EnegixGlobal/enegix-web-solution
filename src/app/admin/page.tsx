"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Eye,
  TrendingUp,
  Activity,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

interface DashboardStats {
  totalTeamMembers: number;
  activeMembers: number;
  featuredMembers: number;
  totalBlogs: number;
  recentActivity: Array<{
    id: string;
    type: "team" | "blog" | "view";
    message: string;
    timestamp: string;
  }>;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalTeamMembers: 0,
    activeMembers: 0,
    featuredMembers: 0,
    totalBlogs: 0,
    recentActivity: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      // Fetch team stats
      const teamResponse = await fetch("/api/team?status=active");
      if (teamResponse.ok) {
        const teamData = await teamResponse.json();
        if (teamData.success) {
          const totalTeamMembers = teamData.pagination.total;
          const activeMembers = teamData.data.length;
          const featuredMembers = teamData.data.filter(
            (member: any) => member.featured
          ).length;

          setStats((prev) => ({
            ...prev,
            totalTeamMembers,
            activeMembers,
            featuredMembers,
          }));
        }
      }

      // Mock recent activity for now
      setStats((prev) => ({
        ...prev,
        recentActivity: [
          {
            id: "1",
            type: "team",
            message: "New team member John Doe added",
            timestamp: new Date().toISOString(),
          },
          {
            id: "2",
            type: "blog",
            message: 'Blog post "Web Development Trends" published',
            timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
          },
          {
            id: "3",
            type: "team",
            message: "Sarah Smith profile updated",
            timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          },
        ],
      }));
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Team Members",
      value: stats.totalTeamMembers,
      icon: Users,
      color: "bg-blue-500",
      change: "+2 this month",
    },
    {
      title: "Active Members",
      value: stats.activeMembers,
      icon: Activity,
      color: "bg-green-500",
      change: "+1 this week",
    },
    {
      title: "Featured Members",
      value: stats.featuredMembers,
      icon: TrendingUp,
      color: "bg-yellow-500",
      change: "No change",
    },
    {
      title: "Total Blog Posts",
      value: stats.totalBlogs,
      icon: FileText,
      color: "bg-purple-500",
      change: "+3 this month",
    },
  ];

  const quickActions = [
    {
      title: "Add Team Member",
      description: "Add a new team member to your organization",
      href: "/admin/team",
      icon: Users,
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    },
    {
      title: "Create Blog Post",
      description: "Write and publish a new blog post",
      href: "/admin/blogs",
      icon: FileText,
      color: "bg-green-50 text-green-600 hover:bg-green-100",
    },
    {
      title: "View Analytics",
      description: "Check website performance and statistics",
      href: "/admin/analytics",
      icon: BarChart3,
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
    },
  ];

  if (loading) {
    return (
      <div className="p-6 pt-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 pt-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your admin dashboard. Here's what's happening with your
          website.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}>
                  <Link
                    href={action.href}
                    className={`block p-4 rounded-lg border border-gray-200 transition-colors ${action.color}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <action.icon className="h-5 w-5" />
                      <h3 className="font-medium">{action.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {action.description}
                    </p>
                  </Link>
                </motion.div>
              ))}

              {/* Website Preview Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="md:col-span-2">
                <Link
                  href="/"
                  target="_blank"
                  className="block p-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="h-5 w-5" />
                    <h3 className="font-medium">View Website</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Preview your live website in a new tab
                  </p>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {stats.recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      activity.type === "team"
                        ? "bg-blue-100"
                        : activity.type === "blog"
                        ? "bg-green-100"
                        : "bg-purple-100"
                    }`}>
                    {activity.type === "team" ? (
                      <Users
                        className={`h-4 w-4 ${
                          activity.type === "team"
                            ? "text-blue-600"
                            : activity.type === "blog"
                            ? "text-green-600"
                            : "text-purple-600"
                        }`}
                      />
                    ) : activity.type === "blog" ? (
                      <FileText className="h-4 w-4 text-green-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              System Status
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Services</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">CDN</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
