import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog.models";

// GET /api/blogs/[id] - Get single blog by ID or slug
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const { id } = params;
    
    // Try to find by ID first, then by slug
    let blog = await Blog.findById(id).populate("createdBy", "name email");
    
    if (!blog) {
      blog = await Blog.findOne({ slug: id }).populate("createdBy", "name email");
    }

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Increment view count for published blogs
    if (blog.status === "published") {
      await Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } });
    }

    return NextResponse.json({
      success: true,
      data: blog
    });

  } catch (error: any) {
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
    const body = await request.json();

    // Find the blog
    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // If slug is being changed, check for duplicates
    if (body.slug && body.slug !== existingBlog.slug) {
      const duplicateSlug = await Blog.findOne({ 
        slug: body.slug, 
        _id: { $ne: id } 
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
      body.readTime = body.readTime ;
    }

    // Update the blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
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

  } catch (error: any) {
    console.error("Error updating blog:", error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Blog with this slug already exists" },
        { status: 409 }
      );
    }
    
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
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

  } catch (error: any) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
