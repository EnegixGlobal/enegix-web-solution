"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Save, 
  X, 
  Upload, 
  Eye, 
  EyeOff, 
  Calendar,
  Hash,
  FileText,
  Image as ImageIcon,
  User,
  Clock,
  Tag,
  Globe,
  Star,
  Plus,
  Minus,
  ChevronDown
} from "lucide-react";
import toast from "react-hot-toast";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  keywords: string;
  image: string;
  author: string;
  readTime: string;
  status: "draft" | "published" | "archived";
  featured: boolean;
  views: number;
  likes: number;
  metaTitle?: string;
  metaDescription?: string;
  publishedAt?: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
  formattedDate: string;
}

interface BlogFormProps {
  blog?: Blog | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const categories = [
  "Web Development",
  "Digital Marketing", 
  "SEO",
  "Design",
  "Technology",
  "Business",
  "Tutorial",
  "Case Study",
  "Industry News",
  "Tips & Tricks"
];

const statusOptions = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" }
];

export default function BlogForm({ blog, onSuccess, onCancel }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Web Development",
    tags: [] as string[],
    keywords: "",
    image: "",
    author: "Enegix Team",
    readTime: "",
  status: "published" as "draft" | "published" | "archived",
    featured: false,
    metaTitle: "",
    metaDescription: ""
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [sections, setSections] = useState<Array<{ heading: string; body: string; level: 2 | 3 }>>([
    { heading: "", body: "", level: 3 },
  ]);

  const addSectionH3 = () => setSections((prev) => [...prev, { heading: "", body: "", level: 3 }]);
  const addSectionH2 = () => setSections((prev) => [...prev, { heading: "", body: "", level: 2 }]);
  const removeSection = (idx: number) =>
    setSections((prev) => prev.filter((_, i) => i !== idx));
  const updateSection = (idx: number, field: "heading" | "body", value: string) =>
    setSections((prev) => prev.map((s, i) => (i === idx ? { ...s, [field]: value } : s)));
  const buildContentFromSections = () => {
    const combined = sections
      .map((s) => {
        const prefix = s.heading ? `${s.level === 2 ? "##" : "###"} ${s.heading}\n` : "";
        return `${prefix}${s.body}`.trim();
      })
      .filter(Boolean)
      .join("\n\n");
    handleContentChange(combined);
  };

  // Initialize form data if editing
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        tags: blog.tags,
        keywords: blog.keywords,
        image: blog.image,
        author: blog.author,
        readTime: blog.readTime,
        status: blog.status,
        featured: blog.featured,
        metaTitle: blog.metaTitle || "",
        metaDescription: blog.metaDescription || ""
      });
    }
  }, [blog]);

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: !blog ? title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim() : prev.slug
    }));
  };

  // Calculate read time from content
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Handle content change and auto-calculate read time
  const handleContentChange = (content: string) => {
    setFormData(prev => ({
      ...prev,
      content,
      readTime: calculateReadTime(content)
    }));
  };

  // Handle image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size must be less than 5MB');
      return;
    }

    setImageFile(file);
    setIsUploading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('upload_preset', 'your_upload_preset'); // You'll need to set this

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const result = await response.json();
      if (result.url) {
        setFormData(prev => ({
          ...prev,
          image: result.url
        }));
        toast.success('Image uploaded successfully');
      } else {
        throw new Error(result.error || 'Upload failed');
      }
    } catch (error: unknown) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  // Add tag
  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput("");
    }
  };

  // Remove tag
  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Handle tag input key press
  const handleTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim()) {
      toast.error('Title is required');
      return;
    }
    
    if (!formData.excerpt.trim()) {
      toast.error('Excerpt is required');
      return;
    }
    
    if (!formData.content.trim()) {
      toast.error('Content is required');
      return;
    }
    
    if (!formData.image) {
      toast.error('Featured image is required');
      return;
    }

    setIsSubmitting(true);

    try {
      const url = blog ? `/api/blogs/${blog._id}` : '/api/blogs';
      const method = blog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to ${blog ? 'update' : 'create'} blog`);
      }

      const result = await response.json();
      toast.success(`Blog ${blog ? 'updated' : 'created'} successfully`);
      onSuccess();
    } catch (error: unknown) {
      console.error('Submit error:', error);
      const message = (error as { message?: string })?.message || 'Failed to submit';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <FileText className="text-teal-600" />
            {blog ? 'Edit Blog' : 'Create New Blog'}
          </h1>
          <p className="text-gray-600 mt-2">
            {blog ? 'Update your blog post' : 'Share your insights with the world'}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Basic Information
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Title */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter blog title..."
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="blog-url-slug"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
              title="Select Category"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Author name"
              />
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Read Time
              </label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="5 min read"
              />
              <p className="text-xs text-gray-500 mt-1">Auto-calculated from content length</p>
            </div>

            {/* Excerpt */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Brief description of the blog post..."
                required
              />
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Featured Image *
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <Upload className="w-4 h-4" />
                {isUploading ? 'Uploading...' : 'Upload Image'}
              </label>
              
              {formData.image && (
                <span className="text-sm text-green-600">✓ Image uploaded</span>
              )}
            </div>
            
            {formData.image && (
              <div className="w-full max-w-md">
                <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-300">
                  <Image src={formData.image} alt="Featured image preview" fill className="object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Content *
          </h2>

          {/* Content Sections Builder (Optional) */}
          <div className="mb-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <p className="text-sm font-medium text-gray-900">Content Sections (Optional)</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={addSectionH3}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-50"
                  title="Add H3 section (###)"
                >
                  <Plus className="w-4 h-4" /> Add H3
                </button>
                <button
                  type="button"
                  onClick={addSectionH2}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-50"
                  title="Add H2 section (##)"
                >
                  <Plus className="w-4 h-4" /> Add H2
                </button>
                <button
                  type="button"
                  onClick={buildContentFromSections}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-teal-600 text-white hover:bg-teal-700"
                  title="Build content from sections"
                >
                  Build content
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {sections.map((s, idx) => (
                <div key={idx} className="rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-700">Section {idx + 1} <span className="ml-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">H{sections[idx].level}</span></label>
                    {sections.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSection(idx)}
                        className="inline-flex items-center gap-1 text-sm text-red-600 hover:bg-red-50 px-2 py-1 rounded"
                        title="Remove section"
                      >
                        <Minus className="w-4 h-4" /> Remove
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <input
                      type="text"
                      value={s.heading}
                      onChange={(e) => updateSection(idx, "heading", e.target.value)}
                      placeholder="Section title (e.g., Introduction)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                    <textarea
                      value={s.body}
                      onChange={(e) => updateSection(idx, "body", e.target.value)}
                      rows={6}
                      placeholder="Section content..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <textarea
            value={formData.content}
            onChange={(e) => handleContentChange(e.target.value)}
            rows={20}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-mono text-sm"
            placeholder="Write your blog content here..."
            required
          />
          <p className="text-xs text-gray-500 mt-2">
            {formData.content.split(/\s+/).length} words
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Tips: Use section titles with <code>## Heading</code> (H2) or <code>### Heading</code> (H3). Add links like <code>[text](https://example.com)</code> or paste a full URL; they’ll be clickable on the blog page.
          </p>
        </div>

        {/* Tags */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Tags & Keywords
          </h2>
          
          <div className="space-y-4">
            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={handleTagKeyPress}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Add a tag..."
                />
                <button
                title="Add Tag"
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <button
                    title="Remove Tag"
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-teal-600 hover:text-teal-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Keywords
              </label>
              <input
                type="text"
                value={formData.keywords}
                onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="keyword1, keyword2, keyword3..."
              />
            </div>
          </div>
        </div>

        {/* Publication Settings */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Publication Settings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
              title="Select Status"
                value={formData.status}
                onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as "draft" | "published" | "archived" }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {statusOptions.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Featured */}
            <div className="flex items-center">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="text-sm font-medium text-gray-700">Featured Blog</span>
              </label>
            </div>
          </div>
        </div>

        {/* Advanced SEO Settings */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-between w-full text-left"
          >
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Hash className="w-5 h-5" />
              Advanced SEO Settings
            </h2>
            <ChevronDown className={`w-5 h-5 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
          </button>
          
          {showAdvanced && (
            <div className="mt-6 space-y-4">
              {/* Meta Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="SEO meta title (max 100 characters)"
                  maxLength={100}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.metaTitle.length}/100 characters
                </p>
              </div>

              {/* Meta Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={formData.metaDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="SEO meta description (max 200 characters)"
                  maxLength={200}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.metaDescription.length}/200 characters
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          
          <motion.button
            type="submit"
            disabled={isSubmitting || isUploading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                {blog ? 'Updating...' : 'Creating...'}
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                {blog ? 'Update Blog' : 'Create Blog'}
              </>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
