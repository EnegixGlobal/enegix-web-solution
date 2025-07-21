import { NextRequest, NextResponse } from "next/server";
import TeamMember from "@/models/TeamMember.models";
import { isValidObjectId } from "mongoose";
import connectDb from "@/db/dbConfig";

// Helper function for error responses
const errorResponse = (message: string, status: number = 400) => {
  return NextResponse.json({ success: false, message }, { status });
};

// Helper function for success responses
const successResponse = (data: any, message: string = "Success") => {
  return NextResponse.json({ success: true, message, data });
};

// GET - Fetch all team members or a specific one
export async function GET(request: NextRequest) {
  try {
    await connectDb();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const featured = searchParams.get('featured');
    const department = searchParams.get('department');
    const status = searchParams.get('status') || 'active';
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    
    // If ID is provided, fetch specific team member
    if (id) {
      if (!isValidObjectId(id)) {
        return errorResponse("Invalid team member ID");
      }
      
      const teamMember = await TeamMember.findById(id);
      if (!teamMember) {
        return errorResponse("Team member not found", 404);
      }
      
      return successResponse(teamMember);
    }
    
    // Build query object
    const query: any = { status };
    
    if (featured !== null && featured !== undefined) {
      query.featured = featured === 'true';
    }
    
    if (department && department !== 'all') {
      query.department = department;
    }
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Fetch team members with pagination and sorting
    const teamMembers = await TeamMember.find(query)
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean();
    
    // Get total count for pagination
    const total = await TeamMember.countDocuments(query);
    
    return NextResponse.json({
      success: true,
      data: teamMembers,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
    
  } catch (error: any) {
    console.error("GET team members error:", error);
    return errorResponse("Failed to fetch team members", 500);
  }
}

// POST - Create a new team member
export async function POST(request: NextRequest) {
  try {
    await connectDb();
    
    const body = await request.json();
    const {
      name,
      role,
      bio,
      image,
      socialLinks,
      featured,
      experience,
      skills,
      department,
      status,
      order,
    } = body;
    
    // Validation
    if (!name || !role || !bio) {
      return errorResponse("Name, role, and bio are required");
    }
    
    // Validate image URL if provided
    if (image && !image.startsWith('http')) {
      return errorResponse("Image must be a valid URL");
    }
    
    // Check if name already exists
    const existingMember = await TeamMember.findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') } 
    });
    
    if (existingMember) {
      return errorResponse("Team member with this name already exists");
    }
    
    // Create new team member
    const newTeamMember = new TeamMember({
      name,
      role,
      bio,
      image: image || undefined,
      socialLinks: socialLinks || {},
      featured: featured || false,
      experience: experience || 0,
      skills: skills || [],
      department: department || 'other',
      status: status || 'active',
      order: order || 0,
    });
    
    const savedMember = await newTeamMember.save();
    
    return successResponse(savedMember, "Team member created successfully");
    
  } catch (error: any) {
    console.error("POST team member error:", error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return errorResponse(`Validation error: ${validationErrors.join(', ')}`);
    }
    
    return errorResponse("Failed to create team member", 500);
  }
}

// PUT - Update a team member
export async function PUT(request: NextRequest) {
  try {
    await connectDb();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id || !isValidObjectId(id)) {
      return errorResponse("Valid team member ID is required");
    }
    
    const body = await request.json();
    const {
      name,
      role,
      bio,
      image,
      socialLinks,
      featured,
      experience,
      skills,
      department,
      status,
      order,
    } = body;
    
    // Check if team member exists
    const existingMember = await TeamMember.findById(id);
    if (!existingMember) {
      return errorResponse("Team member not found", 404);
    }
    
    // Check if new name conflicts with another member
    if (name && name !== existingMember.name) {
      const nameConflict = await TeamMember.findOne({ 
        name: { $regex: new RegExp(`^${name}$`, 'i') },
        _id: { $ne: id }
      });
      
      if (nameConflict) {
        return errorResponse("Team member with this name already exists");
      }
    }
    
    // Update fields
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (role !== undefined) updateData.role = role;
    if (bio !== undefined) updateData.bio = bio;
    if (image !== undefined) updateData.image = image;
    if (socialLinks !== undefined) updateData.socialLinks = socialLinks;
    if (featured !== undefined) updateData.featured = featured;
    if (experience !== undefined) updateData.experience = experience;
    if (skills !== undefined) updateData.skills = skills;
    if (department !== undefined) updateData.department = department;
    if (status !== undefined) updateData.status = status;
    if (order !== undefined) updateData.order = order;
    
    const updatedMember = await TeamMember.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    return successResponse(updatedMember, "Team member updated successfully");
    
  } catch (error: any) {
    console.error("PUT team member error:", error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return errorResponse(`Validation error: ${validationErrors.join(', ')}`);
    }
    
    return errorResponse("Failed to update team member", 500);
  }
}

// DELETE - Delete a team member
export async function DELETE(request: NextRequest) {
  try {
    await connectDb();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id || !isValidObjectId(id)) {
      return errorResponse("Valid team member ID is required");
    }
    
    const deletedMember = await TeamMember.findByIdAndDelete(id);
    
    if (!deletedMember) {
      return errorResponse("Team member not found", 404);
    }
    
    return successResponse(deletedMember, "Team member deleted successfully");
    
  } catch (error: any) {
    console.error("DELETE team member error:", error);
    return errorResponse("Failed to delete team member", 500);
  }
}
