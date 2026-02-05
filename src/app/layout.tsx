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
    "Enegix Web Solutions is a full-service digital marketing agency based in Kadru, Ranchi, Jharkhand. We specialize in SEO, website development, social media marketing, content writing, Google Ads, and local SEO. Trusted by startups, businesses, and institutions across Ranchi, Jamshedpur, Dhanbad, and Bokaro, we deliver affordable, ROI-driven digital strategies. Our services include multilingual content, rural marketing, and digital branding. We also offer web solutions for MSMEs, government projects, and e-commerce businesses. Let us help you grow your online presence and connect with your customers effectively, ✔Website Designer ✔Marketing Consultant ✔Advertising Agency ✔Software Company & thanks for visiting our Google Business page.",
  icons: {
    icon: "/favicon.ico", // path relative to /public
  },
  verification: {
    google: "DiZ0PwZbLtanrpwgGJUCu7q35tKMPnDaQwcmN1nR2GY",
  },

  keywords: [
    "With google verification consoling",
    "Best digital marketing",
    "digital agency",
    "SEO company",
    "Web design",
    "Social media marketing",
    "online marketing company",
    "Internet marketing",
    "Digital agency",
    "Website development",
    "Digital promotion in Jharkhand",
    "Digital marketing in Ranchi",
    "SEO agency in Ranchi",
    "Web services in Ranchi",
    "Digital marketing in Jamshedpur",
    "SEO in Jamshedpur",
    "Website design Jamshedpur",
    "Digital marketing in Dhanbad",
    "Digital marketing in Bokaro",
    "Web design in Bokaro",
    "SEO services",
    "Social media",
    "Google Ads agency",
    "Facebook Ads expert",
    "Content writing",
    "App development",
    "E-commerce website",
    "Local SEO",
    "Performance marketing",
    "Digital branding Jharkhand",
    "Real estate",
    "Hotel digital",
    "Education",
    "NGO",
    "Political campaign",
    "B2B",
    "Startup promotion",
    "Healthcare digital services",
    "Local shop promotion",
    "Restaurant marketing Jharkhand",
    "Government project website",
    "MSME digital",
    "Local vendor",
    "Digital India",
    "Skill development branding",
    "e-Governance web services",
    "Jharkhand startup ecosystem",
    "Small business digital tools",
    "IT support for local businesses",
    "Jharkhand state-level branding marketing",
    "Santhali website development",
    "Nagpuri content promotion",
    "Bhojpuri social media ads",
    "Jharkhandi audience targeting",
    "Multilingual website Jharkhand",
    "Local dialect video marketing",
    "Vernacular ads Jharkhand",
    "Tribal outreach campaign",
    "Digital reach rural Jharkhand",
    "Custom content for Jharkhand",
    "Enegix Web Solutions",
    "Jharkhand digital marketing companies",
    "Best SEO freelancers Jharkhand",
    "Jharkhand web dev agencies",
    "Google certified partner Jharkhand",
    "Jharkhand-based tech startups",
    "Local IT services Jharkhand",
    "Ranchi vs Jamshedpur SEO",
    "Jharkhand PPC specialists",
    "Jharkhand tech consulting",
    "CRM software setup Jharkhand",
    "Best marketing company in Jharkhand",
    "Where to build website in Jharkhand",
    "Who does SEO in Ranchi",
    "Which company offers digital marketing in Jamshedpur",
    "Affordable website design Jharkhand",
    "Promote business in Jharkhand",
    "How to reach customers in Jharkhand",
    "Help me grow my business online Jharkhand",
    "How to start digital marketing in Jharkhand",
    "Create Google Business profile Jharkhand",
    "Trusted digital agency Jharkhand",
    "Result-oriented marketing Jharkhand",
    "High-converting websites Jharkhand",
    "ROI-driven campaigns Jharkhand",
    "Full-service marketing Jharkhand",
    "Affordable packages Jharkhand",
    "Local SEO experts Jharkhand",
    "Jharkhand digital success stories",
    "Lead generation experts Jharkhand",
    "Grow online presence Jharkhand",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="DiZ0PwZbLtanrpwgGJUCu7q35tKMPnDaQwcmN1nR2GY"
        />
      </head>
      <body
        className={` font-montserrat antialiased ${montserrat.variable}`}
      >
        {/* The loading component is client-side only, so we don't include it directly in layout */}
        {children}
      </body>
    </html>
  );
}
