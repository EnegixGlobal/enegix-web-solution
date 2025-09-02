import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog.models";
import mongoose from "mongoose";

// GET /api/blogs/[id] - Get single blog by ID or slug
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const { id } = params;
    const decoded = decodeURIComponent(id);
    const normalized = decoded.toLowerCase();
    const slugify = (s: string) => s
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    
    // Try to find by ID if valid, then by slug
  let blog: unknown | null = null;
    if (mongoose.Types.ObjectId.isValid(decoded)) {
      blog = await Blog.findById(decoded).populate("createdBy", "name email");
    }
    
    if (!blog) {
      blog = await Blog.findOne({ slug: normalized }).populate("createdBy", "name email");
    }

    if (!blog) {
      const fallback = slugify(decoded);
      blog = await Blog.findOne({ slug: fallback }).populate("createdBy", "name email");
    }

    if (!blog) {
      // Last resort: match by exact title case-insensitive
      const escaped = decoded.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      blog = await Blog.findOne({ title: { $regex: `^${escaped}$`, $options: "i" } }).populate("createdBy", "name email");
    }

  if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Increment view count for published blogs
    const { _id, status } = blog as { _id: string; status: string };
    if (status === "published") {
      await Blog.findByIdAndUpdate(_id, { $inc: { views: 1 } });
    }

    return NextResponse.json({
      success: true,
  data: blog
    });

  } catch (error: unknown) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[id] - Update blog (Admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin authentication


    await dbConnect();

  const { id } = params;
  const decoded = decodeURIComponent(id);
    const body = await request.json();

    // Find the blog
  const existingBlog = await Blog.findById(decoded);
    if (!existingBlog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // If slug is being changed, check for duplicates
    if (body.slug && body.slug !== existingBlog.slug) {
      const duplicateSlug = await Blog.findOne({ 
        slug: (body.slug as string).toLowerCase(), 
        _id: { $ne: decoded } 
      });
      
      if (duplicateSlug) {
        return NextResponse.json(
          { success: false, error: "Blog with this slug already exists" },
          { status: 409 }
        );
      }
    }

    // Calculate read time if content is updated
    if (body.content && body.content !== existingBlog.content) {
      // Keep existing readTime or recalc on server if needed (skipping here)
    }

    // Update the blog
    const updatedBlog = await Blog.findByIdAndUpdate(
  decoded,
      { ...body },
      { 
        new: true, 
        runValidators: true 
      }
    ).populate("createdBy", "name email");

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: "Blog updated successfully"
    });

  } catch (error: unknown) {
    const err = error as { code?: number; name?: string; errors?: Record<string, { message: string }>; message?: string };
    console.error("Error updating blog:", error);
    
    if (err.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Blog with this slug already exists" },
        { status: 409 }
      );
    }
    
    if (err.name === "ValidationError" && err.errors) {
      const validationErrors = Object.values(err.errors).map((e) => e.message);
      return NextResponse.json(
        { success: false, error: validationErrors.join(", ") },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id] - Delete blog (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {


    await dbConnect();

    const { id } = params;

    const deletedBlog = await Blog.findByIdAndDelete(id);
    
    if (!deletedBlog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully"
    });

  } catch (error: unknown) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
