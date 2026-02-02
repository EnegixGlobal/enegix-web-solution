import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog.models";
import Admin from "@/models/Admin.models";
import jwt, { JwtPayload } from "jsonwebtoken";

/* ----------------------------------------
   Utils
---------------------------------------- */
const calculateReadTime = (text: string): string => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / wordsPerMinute))} min read`;
};

type BlogFilter = {
  category?: string;
  status?: string;
  featured?: boolean;
  $or?: any[];
};

/* ----------------------------------------
   GET : Fetch Blogs (Public)
---------------------------------------- */
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);

    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const limit = Math.max(1, Number(searchParams.get("limit")) || 10);
    const skip = (page - 1) * limit;

    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort") || "-createdAt";

    /* -----------------------------
       FILTER (STABLE & CLEAN)
    ----------------------------- */
    const filter: BlogFilter = {
      status: "published", // ✅ ALWAYS published for public API
    };

    if (category && category !== "All") {
      filter.category = category;
    }

    if (featured === "true") {
      filter.featured = true;
    }

    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), "i");
      filter.$or = [
        { title: regex },
        { content: regex },
        { excerpt: regex },
        { tags: { $in: [regex] } },
      ];
    }

    /* -----------------------------
       DB Queries (Consistent)
    ----------------------------- */
    const [blogs, total, categoryStats] = await Promise.all([
      Blog.find(filter)
        .populate("createdBy", "name email")
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),

      Blog.countDocuments(filter),

      Blog.aggregate([
        { $match: { status: "published" } },
        { $group: { _id: "$category", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
    ]);

    const totalPages = Math.ceil(total / limit);

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
  } catch (error) {
    console.error("GET BLOGS ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

/* ----------------------------------------
   POST : Create Blog (Admin Only)
---------------------------------------- */
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    let adminId: string;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & { id: string };
      const admin = await Admin.findById(decoded.id).select("_id");
      if (!admin) throw new Error("Admin not found");
      adminId = admin._id.toString();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      category,
      tags = [],
      keywords = "",
      image,
      author = "Enegix Team",
      readTime,
      status = "draft",
      featured = false,
      metaTitle,
      metaDescription,
    } = body;

    if (!title || !excerpt || !content || !category || !image) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* -----------------------------
       SLUG GENERATION
    ----------------------------- */
    let finalSlug =
      slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

    if (await Blog.findOne({ slug: finalSlug })) {
      finalSlug = `${finalSlug}-${Date.now()}`;
    }

    const newBlog = await Blog.create({
      title,
      slug: finalSlug,
      excerpt,
      content,
      category,
      tags,
      keywords,
      image,
      author,
      readTime: readTime || calculateReadTime(content),
      status,
      featured,
      metaTitle,
      metaDescription,
      createdBy: adminId,
    });

    await newBlog.populate("createdBy", "name email");

    return NextResponse.json(
      { success: true, data: newBlog, message: "Blog created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("CREATE BLOG ERROR:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Blog with this slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
