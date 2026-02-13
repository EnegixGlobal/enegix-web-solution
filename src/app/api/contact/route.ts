import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, phone, subject, message, service } = body;

        if (!name || !email || !subject || !message || !service) {
            return NextResponse.json(
                { success: false, message: "Missing fields" },
                { status: 400 }
            );
        }

        // Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });


        const mailOptions = {
            from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email, 
            subject: `Enquiry for ${service} | ${name}`,
            html: `
    <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; padding:20px; border-radius:6px;">
        
        <h2 style="color:#333; border-bottom:1px solid #eee; padding-bottom:10px;">
          Website Enquiry
        </h2>

        <table style="width:100%; border-collapse:collapse; margin-top:15px;">
          <tr>
            <td style="padding:8px; font-weight:bold;">Name</td>
            <td style="padding:8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Email</td>
            <td style="padding:8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Phone</td>
            <td style="padding:8px;">${phone || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Service</td>
            <td style="padding:8px;">${service}</td>
          </tr>
        </table>

        <div style="margin-top:20px;">
          <p style="font-weight:bold;">Message:</p>
          <p style="background:#f4f4f4; padding:12px; border-radius:4px;">
            ${message}
          </p>
        </div>

        <p style="margin-top:30px; font-size:12px; color:#777;">
          This enquiry was submitted from your website contact form.
        </p>
      </div>
    </div>
  `,
        };


        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error("Mail Error:", error);

        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}
