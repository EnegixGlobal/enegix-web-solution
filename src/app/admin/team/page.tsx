"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  Filter,
  Star,
  Eye,
  ChevronLeft,
  ChevronRight,
  X,
  Save,
  Upload,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  featured: boolean;
  experience: number;
  skills: string[];
  department: 'development' | 'design' | 'marketing' | 'sales' | 'management' | 'other';
  status: 'active' | 'inactive';
  order: number;
  joinDate: string;
  createdAt: string;
  updatedAt: string;
}

interface Filters {
  search: string;
  department: string;
  featured: string;
  status: string;
}

const departmentOptions = [
  { value: 'all', label: 'All Departments' },
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'management', label: 'Management' },
  { value: 'other', label: 'Other' }
];

const AdminTeamDashboard = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [filters, setFilters] = useState<Filters>({
    search: '',
    department: 'all',
    featured: 'all',
    status: 'active'
  });
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });

  // Fetch team members
  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        status: filters.status,
      });

      if (filters.department !== 'all') params.append('department', filters.department);
      if (filters.featured !== 'all') params.append('featured', filters.featured);

      const response = await fetch(`/api/team?${params}`);
      const data = await response.json();

      if (data.success) {
        let members = data.data;
        
        // Apply search filter on frontend for better UX
        if (filters.search) {
          const searchLower = filters.search.toLowerCase();
          members = members.filter((member: TeamMember) =>
            member.name.toLowerCase().includes(searchLower) ||
            member.role.toLowerCase().includes(searchLower) ||
            member.bio.toLowerCase().includes(searchLower)
          );
        }

        setTeamMembers(members);
        setPagination(data.pagination);
      } else {
        showNotification('error', data.message || 'Failed to fetch team members');
      }
    } catch (error) {
      showNotification('error', 'Network error while fetching team members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, [pagination.page, filters.department, filters.featured, filters.status]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (pagination.page === 1) {
        fetchTeamMembers();
      } else {
        setPagination(prev => ({ ...prev, page: 1 }));
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [filters.search]);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleAddMember = () => {
    setEditingMember(null);
    setIsModalOpen(true);
  };

  const handleEditMember = (member: TeamMember) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleDeleteMember = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;

    try {
      const response = await fetch(`/api/team?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        showNotification('success', 'Team member deleted successfully');
        fetchTeamMembers();
      } else {
        showNotification('error', data.message || 'Failed to delete team member');
      }
    } catch (error) {
      showNotification('error', 'Network error while deleting team member');
    }
  };

  const handleSubmitMember = async (memberData: Partial<TeamMember>) => {
    try {
      const url = editingMember ? `/api/team?id=${editingMember._id}` : '/api/team';
      const method = editingMember ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      });

      const data = await response.json();

      if (data.success) {
        showNotification('success', `Team member ${editingMember ? 'updated' : 'created'} successfully`);
        setIsModalOpen(false);
        setEditingMember(null);
        fetchTeamMembers();
      } else {
        showNotification('error', data.message || `Failed to ${editingMember ? 'update' : 'create'} team member`);
      }
    } catch (error) {
      showNotification('error', 'Network error while saving team member');
    }
  };

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="text-blue-600" />
              Team Management
            </h1>
            <p className="text-gray-600 mt-2">Manage your team members and their information</p>
          </div>
          <button
            onClick={handleAddMember}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Add Team Member
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search team members..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={filters.department}
            onChange={(e) => setFilters(prev => ({ ...prev, department: e.target.value }))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {departmentOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={filters.featured}
            onChange={(e) => setFilters(prev => ({ ...prev, featured: e.target.value }))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Members</option>
            <option value="true">Featured Only</option>
            <option value="false">Non-Featured</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Team Members List */}
      <div className="bg-white rounded-lg shadow-sm">
        {loading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading team members...</p>
          </div>
        ) : teamMembers.length === 0 ? (
          <div className="p-12 text-center">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No team members found</p>
          </div>
        ) : (
          <>
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 font-semibold text-gray-700">
              <div className="col-span-3">Member</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Department</div>
              <div className="col-span-1">Experience</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1">Featured</div>
              <div className="col-span-2">Actions</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {teamMembers.map((member) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-sm font-medium text-gray-600">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-500 truncate max-w-32">{member.bio}</p>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <span className="text-gray-900">{member.role}</span>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm capitalize">
                      {member.department}
                    </span>
                  </div>

                  <div className="col-span-1 flex items-center">
                    <span className="text-gray-600">{member.experience}y</span>
                  </div>

                  <div className="col-span-1 flex items-center">
                    <span className={`px-2 py-1 rounded-md text-sm ${
                      member.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {member.status}
                    </span>
                  </div>

                  <div className="col-span-1 flex items-center">
                    {member.featured && (
                      <Star className="text-yellow-500 fill-current" size={16} />
                    )}
                  </div>

                  <div className="col-span-2 flex items-center gap-2">
                    <button
                      onClick={() => handleEditMember(member)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteMember(member._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="flex items-center justify-between p-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} members
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={pagination.page <= 1}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 rounded-lg ${
                        page === pagination.page 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={pagination.page >= pagination.pages}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal for Add/Edit */}
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        member={editingMember}
        onSubmit={handleSubmitMember}
      />

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
              notification.type === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}>
              {notification.type === 'success' ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span>{notification.message}</span>
              <button
                onClick={() => setNotification(null)}
                className="ml-2 hover:bg-black/20 rounded p-1"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Team Member Modal Component
interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
  onSubmit: (data: Partial<TeamMember>) => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ isOpen, onClose, member, onSubmit }) => {
  const [formData, setFormData] = useState<{
    name: string;
    role: string;
    bio: string;
    image: string;
    socialLinks: {
      linkedin: string;
      twitter: string;
      github: string;
      website: string;
    };
    featured: boolean;
    experience: number;
    skills: string[];
    department: 'development' | 'design' | 'marketing' | 'sales' | 'management' | 'other';
    status: 'active' | 'inactive';
    order: number;
  }>({
    name: '',
    role: '',
    bio: '',
    image: '',
    socialLinks: {
      linkedin: '',
      twitter: '',
      github: '',
      website: ''
    },
    featured: false,
    experience: 0,
    skills: [],
    department: 'other',
    status: 'active',
    order: 0
  });
  const [skillInput, setSkillInput] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        role: member.role,
        bio: member.bio,
        image: member.image || '',
        socialLinks: {
          linkedin: member.socialLinks.linkedin || '',
          twitter: member.socialLinks.twitter || '',
          github: member.socialLinks.github || '',
          website: member.socialLinks.website || ''
        },
        featured: member.featured,
        experience: member.experience,
        skills: member.skills,
        department: member.department,
        status: member.status,
        order: member.order
      });
    } else {
      setFormData({
        name: '',
        role: '',
        bio: '',
        image: '',
        socialLinks: {
          linkedin: '',
          twitter: '',
          github: '',
          website: ''
        },
        featured: false,
        experience: 0,
        skills: [],
        department: 'other',
        status: 'active',
        order: 0
      });
    }
  }, [member]);

  // Reset file upload states when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedFile(null);
      setImagePreview(null);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let imageUrl = formData.image;
    
    // Upload image if a new file is selected
    if (selectedFile) {
      try {
        imageUrl = await uploadImage();
      } catch (error) {
        alert('Failed to upload image. Please try again.');
        return;
      }
    }
    
    onSubmit({
      ...formData,
      image: imageUrl
    });
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) return null;
    
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      
      const result = await response.json();
      return result.imageUrl;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {member ? 'Edit Team Member' : 'Add Team Member'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role *
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio *
            </label>
            <textarea
              required
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>
            
            {/* Current Image or Preview */}
            {(imagePreview || formData.image) && (
              <div className="mb-3">
                <img
                  src={imagePreview || formData.image}
                  alt="Profile preview"
                  className="w-24 h-24 object-cover rounded-lg border"
                />
              </div>
            )}
            
            {/* File Upload */}
            <div className="flex gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors"
              >
                <Upload className="w-4 h-4" />
                {selectedFile ? 'Change Image' : 'Upload Image'}
              </label>
              
              {selectedFile && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{selectedFile.name}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      setImagePreview(null);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            
            {/* URL Input as fallback */}
            <div className="mt-3">
              <label className="block text-xs text-gray-500 mb-1">
                Or enter image URL:
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          {/* Department and Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value as any }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departmentOptions.slice(1).map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience (years)
              </label>
              <input
                type="number"
                min="0"
                value={formData.experience}
                onChange={(e) => setFormData(prev => ({ ...prev, experience: parseInt(e.target.value) || 0 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Order
              </label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData(prev => ({ ...prev, order: parseInt(e.target.value) || 0 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                placeholder="Add a skill..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Social Links
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="url"
                placeholder="LinkedIn URL"
                value={formData.socialLinks.linkedin}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialLinks: { ...prev.socialLinks, linkedin: e.target.value }
                }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Twitter URL"
                value={formData.socialLinks.twitter}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialLinks: { ...prev.socialLinks, twitter: e.target.value }
                }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="GitHub URL"
                value={formData.socialLinks.github}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialLinks: { ...prev.socialLinks, github: e.target.value }
                }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Website URL"
                value={formData.socialLinks.website}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialLinks: { ...prev.socialLinks, website: e.target.value }
                }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                Featured Member
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="status"
                checked={formData.status === 'active'}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  status: e.target.checked ? 'active' : 'inactive' 
                }))}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="status" className="text-sm font-medium text-gray-700">
                Active Status
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={uploading}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              {uploading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Save size={20} />
                  {member ? 'Update' : 'Create'} Member
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminTeamDashboard;
