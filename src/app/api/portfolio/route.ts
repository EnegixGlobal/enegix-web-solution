import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio.models";
import jwt from "jsonwebtoken";



// GET - Fetch all portfolios with filtering and pagination
export async function GET(request: NextRequest) {
  try {
    await connectDb();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");
    const status = searchParams.get("status") || "active";
    const featured = searchParams.get("featured");
    const search = searchParams.get("search");

    const skip = (page - 1) * limit;

    // Build query
    const query: any = {};
    
    if (category && category !== "All") {
      query.category = category;
    }
    
    if (status !== "all") {
      query.status = status;
    }
    
    if (featured !== null && featured !== undefined) {
      query.featured = featured === "true";
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { technologiesUsed: { $in: [new RegExp(search, "i")] } },
        { tags: { $in: [new RegExp(search, "i")] } }
      ];
    }

    // Fetch portfolios with pagination
    const portfolios = await Portfolio.find(query)
      .populate("createdBy", "name email")
      .populate("updatedBy", "name email")
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for pagination
    const total = await Portfolio.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: portfolios,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error("Error fetching portfolios:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch portfolios",
        error: error.message 
      },
      { status: 500 }
    );
  }
}

// POST - Create new portfolio
export async function POST(request: NextRequest) {
  try {
    
    
    await connectDb();
    console.log("Database connected");

    const body = await request.json();
    console.log("Request body:", body);
    
    // Extract fields from JSON body
    const {
      title,
      category,
      type,
      description,
      link,
      featured,
      status = "active",
      logo,
      image,
      technologiesUsed = [],
      tags = [],
      stats = { organicGrowth: 0, paidGrowth: 0 },
      metaTitle,
      metaDescription,
    } = body;

    // Validation
    if (!title || !description || !category || !logo || !image) {
      console.log("Validation failed:", { title, description, category, logo: !!logo, image: !!image });
      return NextResponse.json(
        { success: false, message: "Title, description, category, logo, and image are required" },
        { status: 400 }
      );
    }

    console.log("Creating portfolio with data:", {
      title,
      category,
      type,
      featured,
      status,
      technologiesUsed,
      tags,
      stats
    });

    // Create portfolio
    const portfolio = new Portfolio({
      title,
      logo,
      category,
      type,
      description,
      image,
      technologiesUsed: Array.isArray(technologiesUsed) ? technologiesUsed : [],
      tags: Array.isArray(tags) ? tags : [],
      link,
      featured: Boolean(featured),
      status,
      stats: {
        organicGrowth: Number(stats.organicGrowth) || 0,
        paidGrowth: Number(stats.paidGrowth) || 0,
      },
      metaTitle,
      metaDescription,
    });

    const savedPortfolio = await portfolio.save();
    console.log("Portfolio saved successfully:", savedPortfolio._id);

    return NextResponse.json({
      success: true,
      message: "Portfolio created successfully",
      data: savedPortfolio,
    });
  } catch (error: any) {
    console.error("Error creating portfolio:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Failed to create portfolio" 
      },
      { status: 500 }
    );
  }
}
