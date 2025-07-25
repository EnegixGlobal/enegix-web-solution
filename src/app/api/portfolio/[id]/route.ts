import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio.models";
import jwt from "jsonwebtoken";



// GET - Fetch single portfolio by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();

    const portfolio = await Portfolio.findById(params.id)
      .populate("createdBy", "name email")
      .populate("updatedBy", "name email");

    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: portfolio,
    });
  } catch (error: any) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch portfolio",
        error: error.message 
      },
      { status: 500 }
    );
  }
}

// PUT - Update portfolio
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    
    await connectDb();

    const body = await request.json();
    
    // Find existing portfolio
    const existingPortfolio = await Portfolio.findById(params.id);
    if (!existingPortfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio not found" },
        { status: 404 }
      );
    }

    // Extract fields from JSON body
    const {
      title,
      category,
      type,
      description,
      link,
      featured,
      status,
      logo,
      image,
      technologiesUsed = [],
      tags = [],
      stats = { organicGrowth: 0, paidGrowth: 0 },
      metaTitle,
      metaDescription,
    } = body;

    // Prepare update data
    const updateData: any = {
      title,
      category,
      type,
      description,
      link,
      featured: Boolean(featured),
      status,
      technologiesUsed: Array.isArray(technologiesUsed) ? technologiesUsed : [],
      tags: Array.isArray(tags) ? tags : [],
      stats: {
        organicGrowth: Number(stats.organicGrowth) || 0,
        paidGrowth: Number(stats.paidGrowth) || 0,
      },
      metaTitle,
      metaDescription,
    };

    // Update logo and image if provided
    if (logo) {
      updateData.logo = logo;
    }
    if (image) {
      updateData.image = image;
    }

    // Update portfolio
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      message: "Portfolio updated successfully",
      data: updatedPortfolio,
    });
  } catch (error: any) {
    console.error("Error updating portfolio:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Failed to update portfolio" 
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete portfolio
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    
    await connectDb();

    const portfolio = await Portfolio.findById(params.id);
    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio not found" },
        { status: 404 }
      );
    }

    // Delete portfolio from database
    await Portfolio.findByIdAndDelete(params.id);

    return NextResponse.json({
      success: true,
      message: "Portfolio deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting portfolio:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Failed to delete portfolio" 
      },
      { status: 500 }
    );
  }
}
