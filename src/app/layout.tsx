import type { Metadata } from "next";
import { Montserrat, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import "./scroll-fix.css";
import "./typography.css";

// Modern, premium heading font
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Distinctive, tech-forward body font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

// Clean, modern sans-serif for UI elements
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Top Web Design Company in Ranchi, Digital Marketing Agency in India",
  description:
    "Enegix Web Solutions Pvt. Ltd. builds top-ranking websites, delivers result-driven SEO, and powers growth with digital marketing strategies tailored for Indian businesses. Book a free consultation today!",
  keywords: [
    "web development",
    "logo design",
    "SEO services",
    "digital advertising",
    "web design",
    "professional website",
    "online marketing",
    "Ranchi web design",
    "digital marketing India",
    "SEO Ranchi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` font-montserrat antialiased overscroll-none`}>
        {/* The loading component is client-side only, so we don't include it directly in layout */}
        {children}
      </body>
    </html>
  );
}
