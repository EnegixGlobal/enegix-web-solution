import connectDb from "@/db/dbConfig";
import Admin from "@/models/Admin.models";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST() {
  try {
    await connectDb();
    
    // Check if any admin exists
    const existingAdmin = await Admin.findOne({});
    if (existingAdmin) {
      return NextResponse.json({
        success: false,
        message: "Admin already exists. Use the existing credentials or signup page.",
        existingEmail: existingAdmin.email
      });
    }
    
    // Create default admin
    const defaultEmail = "admin@enegixwebsolutions.com";
    const defaultPassword = "admin123";
    
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);
    
    const admin = await Admin.create({
      email: defaultEmail,
      password: hashedPassword,
    });
    
    return NextResponse.json({
      success: true,
      message: "Default admin created successfully",
      credentials: {
        email: defaultEmail,
        password: defaultPassword
      },
      adminId: admin._id
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to create admin" 
      },
      { status: 500 }
    );
  }
}
