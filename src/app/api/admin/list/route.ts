import connectDb from "@/db/dbConfig";
import Admin from "@/models/Admin.models";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    
    const admins = await Admin.find({}, { password: 0 }); // Exclude password field
    
    return NextResponse.json({
      success: true,
      count: admins.length,
      admins: admins.map(admin => ({
        id: admin._id,
        email: admin.email,
        createdAt: admin.createdAt || 'N/A'
      }))
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to fetch admins" 
      },
      { status: 500 }
    );
  }
}
