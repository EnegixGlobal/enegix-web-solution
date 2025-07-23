import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Admin from "@/models/Admin.models";
import connectDb from "@/db/dbConfig";

export async function GET(request: NextRequest) {
  try {
    await connectDb();

    // Get token from cookies
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "No token provided" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    // Check if admin exists
    const admin = await Admin.findById(decoded.id).select("-password");
    
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Authentication verified",
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    });

  } catch (error: any) {
    console.error("Token verification error:", error);
    
    return NextResponse.json(
      { success: false, message: "Invalid token" },
      { status: 401 }
    );
  }
}
