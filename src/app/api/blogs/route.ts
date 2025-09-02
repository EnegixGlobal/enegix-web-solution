import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog.models";
import jwt, { JwtPayload } from "jsonwebtoken";
import Admin from "@/models/Admin.models";

const calculateReadTime = (text: string): string => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

// GET /api/blogs - Get all blogs with filtering, pagination, and search
type BlogFilter = {
  category?: string;
  status?: string;
  featured?: boolean;
  $or?: Array<
    | { title: { $regex: string; $options: string } }
    | { content: { $regex: string; $options: string } }
    | { excerpt: { $regex: string; $options: string } }
    | { tags: { $in: RegExp[] } }
  >;
};

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");
    const status = searchParams.get("status");
    const featured = searchParams.get("featured");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort") || "-createdAt";

  // Build filter object
  const filter: BlogFilter = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    if (status) {
      if (status !== "all") {
        filter.status = status;
      }
    } else {
      // Default to published for public API calls
      filter.status = "published";
    }

    if (featured === "true") {
      filter.featured = true;
    }

    if (search) {
  filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { tags: { $in: [new RegExp(search, "i")] } },
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get blogs with pagination
    const blogs = await Blog.find(filter)
      .populate("createdBy", "name email")
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Blog.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    // Get category counts
    const categoryStats = await Blog.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    return NextResponse.json({
      success: true,
      data: {
        blogs,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
        categoryStats,
      },
    });
  } catch (error: unknown) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create new blog (Admin only)
export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication via cookie token
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    let adminId: string | null = null;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & { id: string };
      const admin = await Admin.findById(decoded.id).select("_id");
      if (!admin) {
        return NextResponse.json(
          { success: false, error: "Unauthorized" },
          { status: 401 }
        );
      }
      adminId = admin._id.toString();
    } catch (e) {
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 401 }
      );
    }

    await dbConnect();

    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      category,
      tags,
      keywords,
      image,
      author,
      readTime,
      status,
      featured,
      metaTitle,
      metaDescription,
    } = body;

    // Validate required fields
    if (!title || !excerpt || !content || !category || !image) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for duplicate slug
    let finalSlug = slug;
    if (!finalSlug) {
      finalSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
    }

    const existingBlog = await Blog.findOne({ slug: finalSlug });
    if (existingBlog) {
      finalSlug = `${finalSlug}-${Date.now()}`;
    }

  const calculatedReadTime = readTime || calculateReadTime(content);
    // Create new blog
    const newBlog = new Blog({
      title,
      slug: finalSlug,
      excerpt,
      content,
      category,
      tags: tags || [],
      keywords: keywords || "",
      image,
      author: author || "Enegix Team",
      readTime: calculatedReadTime,
      status: status || "draft",
      featured: featured || false,
      metaTitle,
      metaDescription,
      createdBy: adminId,
    });

    const savedBlog = await newBlog.save();

    // Populate creator info
    await savedBlog.populate("createdBy", "name email");

    return NextResponse.json(
      {
        success: true,
        data: savedBlog,
        message: "Blog created successfully",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const err = error as { code?: number; name?: string; errors?: Record<string, { message: string }>; message?: string };
    console.error("Error creating blog:", error);

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
      { success: false, error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
