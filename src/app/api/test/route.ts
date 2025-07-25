import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio.models";

export async function GET() {
  try {
    console.log("Test API called");
    
    // Test database connection
    await connectDb();
    console.log("Database connected successfully");

    // Test Portfolio model
    const count = await Portfolio.countDocuments();
    console.log("Portfolio count:", count);

    return NextResponse.json({
      success: true,
      message: "Test successful",
      data: {
        dbConnected: true,
        portfolioCount: count,
        mongoUri: process.env.MONGO_URI ? "Set" : "Not set",
        jwtSecret: process.env.JWT_SECRET ? "Set" : "Not set",
        cloudinaryName: process.env.CLOUDINARY_CLOUD_NAME ? "Set" : "Not set",
      }
    });
  } catch (error: any) {
    console.error("Test error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}
