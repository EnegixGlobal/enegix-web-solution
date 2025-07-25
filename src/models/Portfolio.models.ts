import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    logo: {
      type: String,
      required: [true, "Logo is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
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
      ],
    },
    type: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
      required: [true, "Project image is required"],
    },
    technologiesUsed: [{
      type: String,
      trim: true,
    }],
    tags: [{
      type: String,
      trim: true,
    }],
    link: {
      type: String,
      validate: {
        validator: function(v: string) {
          if (!v) return true; // Allow empty links
          return /^https?:\/\/.+/.test(v);
        },
        message: "Please enter a valid URL starting with http:// or https://"
      }
    },
    featured: {
      type: Boolean,
      default: false,
    },
    stats: {
      organicGrowth: {
        type: Number,
        default: 0,
      },
      paidGrowth: {
        type: Number,
        default: 0,
      },
    },
    status: {
      type: String,
      enum: ["active", "inactive", "draft"],
      default: "active",
    },
    order: {
      type: Number,
      default: 0,
    },
    metaTitle: {
      type: String,
      trim: true,
    },
    metaDescription: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    }
  },
  {
    timestamps: true,
  }
);

// Add indexes for better query performance
portfolioSchema.index({ category: 1 });
portfolioSchema.index({ featured: 1 });
portfolioSchema.index({ status: 1 });
portfolioSchema.index({ order: 1 });
portfolioSchema.index({ createdAt: -1 });

// Pre-save middleware to handle slug generation if needed
portfolioSchema.pre('save', function(next) {
  if (this.isNew && !this.order) {
    this.order = Date.now();
  }
  next();
});

const Portfolio = mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
