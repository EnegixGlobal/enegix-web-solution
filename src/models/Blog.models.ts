import mongoose, { Schema, Document, Model } from "mongoose";

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
      maxlength: [200, "Title cannot exceed 200 characters"],
    },

    slug: {
      type: String,
      required: [true, "Blog slug is required"],
      trim: true,
      lowercase: true,
      match: [/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"],
      // ❌ REMOVED: unique: true (handled by schema index)
    },

    excerpt: {
      type: String,
      required: [true, "Blog excerpt is required"],
      trim: true,
      maxlength: [800, "Excerpt cannot exceed 800 characters"],
    },

    content: {
      type: String,
      required: [true, "Blog content is required"],
      trim: true,
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
        "Tips & Tricks",
      ],
    },

    tags: [
      {
        type: String,
        trim: true,
        maxlength: [100, "Tag cannot exceed 50 characters"],
      },
    ],

    keywords: {
      type: String,
      trim: true,
      maxlength: [300, "Keywords cannot exceed 300 characters"],
    },

    image: {
      type: String,
      required: [true, "Blog image is required"],
      trim: true,
    },

    author: {
      type: String,
      trim: true,
      default: "Enegix Team",
    },

    readTime: {
      type: String,
      trim: true,
      default: "5 min read",
    },

    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
      index: true,
    },

    featured: {
      type: Boolean,
      default: false,
      index: true,
    },

    views: {
      type: Number,
      default: 0,
      min: 0,
    },

    likes: {
      type: Number,
      default: 0,
      min: 0,
    },

    metaTitle: {
      type: String,
      trim: true,
      maxlength: [100, "Meta title cannot exceed 60 characters"],
    },

    metaDescription: {
      type: String,
      trim: true,
      maxlength: [200, "Meta description cannot exceed 160 characters"],
    },

    publishedAt: {
      type: Date,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

/* ----------------------------------------
   INDEXES (SINGLE SOURCE OF TRUTH)
---------------------------------------- */

// ✅ UNIQUE SLUG INDEX (ONLY HERE)
BlogSchema.index({ slug: 1 }, { unique: true });

// Performance indexes
BlogSchema.index({ status: 1, createdAt: -1 });
BlogSchema.index({ category: 1, status: 1 });
BlogSchema.index({ featured: 1, status: 1 });
BlogSchema.index({ tags: 1 });

// Text search index
BlogSchema.index({
  title: "text",
  content: "text",
  excerpt: "text",
});

/* ----------------------------------------
   VIRTUALS
---------------------------------------- */
BlogSchema.virtual("formattedDate").get(function () {
  const date = this.publishedAt || this.createdAt;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

/* ----------------------------------------
   MIDDLEWARE
---------------------------------------- */
BlogSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }

  if (this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date();
  }

  if (!this.metaTitle) {
    this.metaTitle = this.title.substring(0, 60);
  }

  if (!this.metaDescription) {
    this.metaDescription = this.excerpt.substring(0, 160);
  }

  next();
});

/* ----------------------------------------
   STATIC METHODS
---------------------------------------- */
BlogSchema.statics.calculateReadTime = function (content: string): string {
  const words = content.split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
