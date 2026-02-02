import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog.models";
import mongoose from "mongoose";

/* ----------------------------------------
   GET : Single Blog (Public)
---------------------------------------- */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const param = decodeURIComponent(params.id).trim();

    let blog = null;

    // 1️⃣ If valid Mongo ID → fetch by ID
    if (mongoose.Types.ObjectId.isValid(param)) {
      blog = await Blog.findOneAndUpdate(
        { _id: param, status: "published" },
        { $inc: { views: 1 } },
        { new: true }
      ).populate("createdBy", "name email");
    } 
    // 2️⃣ Else → fetch by slug ONLY
    else {
      blog = await Blog.findOneAndUpdate(
        { slug: param.toLowerCase(), status: "published" },
        { $inc: { views: 1 } },
        { new: true }
      ).populate("createdBy", "name email");
    }

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("GET BLOG ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

/* ----------------------------------------
   PUT : Update Blog (Admin Only)
---------------------------------------- */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const blogId = decodeURIComponent(params.id);
    const body = await request.json();

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return NextResponse.json(
        { success: false, error: "Invalid blog ID" },
        { status: 400 }
      );
    }

    const existingBlog = await Blog.findById(blogId);
    if (!existingBlog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Slug uniqueness check
    if (body.slug && body.slug !== existingBlog.slug) {
      const slugExists = await Blog.findOne({
        slug: body.slug.toLowerCase(),
        _id: { $ne: blogId },
      });

      if (slugExists) {
        return NextResponse.json(
          { success: false, error: "Slug already exists" },
          { status: 409 }
        );
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      body,
      { new: true, runValidators: true }
    ).populate("createdBy", "name email");

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: "Blog updated successfully",
    });
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

/* ----------------------------------------
   DELETE : Delete Blog (Admin Only)
---------------------------------------- */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const blogId = decodeURIComponent(params.id);

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return NextResponse.json(
        { success: false, error: "Invalid blog ID" },
        { status: 400 }
      );
    }

    const deleted = await Blog.findByIdAndDelete(blogId);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
