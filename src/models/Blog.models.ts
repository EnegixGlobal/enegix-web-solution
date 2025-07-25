import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
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
  publishedAt?: Date;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"]
    },
    slug: {
      type: String,
      required: [true, "Blog slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"]
    },
    excerpt: {
      type: String,
      required: [true, "Blog excerpt is required"],
      trim: true,
      maxlength: [500, "Excerpt cannot exceed 500 characters"]
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
      trim: true
    },
    category: {
      type: String,
      required: [true, "Blog category is required"],
      enum: [
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
      ]
    },
    tags: [{
      type: String,
      trim: true,
      maxlength: [50, "Tag cannot exceed 50 characters"]
    }],
    keywords: {
      type: String,
      trim: true,
      maxlength: [300, "Keywords cannot exceed 300 characters"]
    },
    image: {
      type: String,
      required: [true, "Blog image is required"],
      trim: true
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
      default: "Enegix Team"
    },
    readTime: {
      type: String,
      required: [true, "Read time is required"],
      trim: true,
      default: "5 min read"
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft"
    },
    featured: {
      type: Boolean,
      default: false
    },
    views: {
      type: Number,
      default: 0,
      min: 0
    },
    likes: {
      type: Number,
      default: 0,
      min: 0
    },
    metaTitle: {
      type: String,
      trim: true,
      maxlength: [60, "Meta title cannot exceed 60 characters"]
    },
    metaDescription: {
      type: String,
      trim: true,
      maxlength: [160, "Meta description cannot exceed 160 characters"]
    },
    publishedAt: {
      type: Date
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Indexes for better performance
BlogSchema.index({ status: 1, createdAt: -1 });
BlogSchema.index({ category: 1, status: 1 });
BlogSchema.index({ featured: 1, status: 1 });
BlogSchema.index({ slug: 1 });
BlogSchema.index({ tags: 1 });
BlogSchema.index({ title: "text", content: "text", excerpt: "text" });

// Virtual for formatted date
BlogSchema.virtual("formattedDate").get(function() {
  return this.publishedAt ? 
    this.publishedAt.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }) : 
    this.createdAt.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
});

// Pre-save middleware to generate slug if not provided
BlogSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  
  // Set publishedAt when status changes to published
  if (this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  // Auto-generate meta fields if not provided
  if (!this.metaTitle) {
    this.metaTitle = this.title.substring(0, 60);
  }
  
  if (!this.metaDescription) {
    this.metaDescription = this.excerpt.substring(0, 160);
  }
  
  next();
});

// Static method to calculate read time
BlogSchema.statics.calculateReadTime = function(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

const Blog = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
