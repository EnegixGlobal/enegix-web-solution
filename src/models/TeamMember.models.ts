import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    trim: true,
  },
  bio: {
    type: String,
    required: [true, "Bio is required"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Image URL is required"],
    default: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&faceindex=1",
  },
  socialLinks: {
    facebook: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "",
    },
    linkedin: {
      type: String,
      default: "",
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
  experience: {
    type: Number,
    default: 0,
  },
  skills: [{
    type: String,
    trim: true,
  }],
  department: {
    type: String,
    enum: ['leadership', 'development', 'sales', 'marketing', 'design', 'other'],
    default: 'other',
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'archived'],
    default: 'active',
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Create indexes for better query performance
teamMemberSchema.index({ featured: 1, order: 1 });
teamMemberSchema.index({ department: 1, status: 1 });
teamMemberSchema.index({ name: 'text', role: 'text', bio: 'text' });

const TeamMember = mongoose.models.TeamMember || mongoose.model("TeamMember", teamMemberSchema);

export default TeamMember;
