import type { Metadata } from 'next';

// Portfolio project data for metadata generation
const portfolioProjects = {
  "healthier-you": {
    title: "Healthier You Case Study | Enegix Web Solutions",
    description: "See how we built a dynamic health and wellness platform with personalized nutrition plans, workout routines, and health tracking tools.",
    keywords: "health platform, fitness app, nutrition website, web development, React, Node.js, Enegix",
  },
  "urban-taste": {
    title: "Urban Taste Case Study | Enegix Web Solutions",
    description: "Discover how we created an elegant food delivery platform connecting users with local restaurants offering gourmet dining experiences.",
    keywords: "food delivery, e-commerce, Next.js, Stripe, restaurant platform, Enegix",
  },
  "echo-studios": {
    title: "Echo Studios Branding Case Study | Enegix Web Solutions",
    description: "Explore our comprehensive brand identity work for Echo Studios, including logo design, color palette, and marketing materials.",
    keywords: "branding, logo design, brand identity, typography, recording studio, Enegix",
  },
  "terra-realty": {
    title: "Terra Realty Web Development | Enegix Web Solutions",
    description: "Learn how we built a real estate platform with property listings, virtual tours, and agent profiles for a premium realty company.",
    keywords: "real estate website, property listings, WordPress, Google Maps, virtual tours, Enegix",
  },
  "fit-gear": {
    title: "FitGear E-commerce Case Study | Enegix Web Solutions",
    description: "See how we created an online store for premium fitness equipment with detailed product specifications and personalized recommendations.",
    keywords: "e-commerce, Shopify, online store, fitness equipment, payment gateway, Enegix",
  },
  "pulse-marketing": {
    title: "Pulse Marketing Case Study | Enegix Web Solutions",
    description: "Learn about our comprehensive digital marketing campaign that increased client's online visibility and lead generation.",
    keywords: "digital marketing, SEO, PPC, content marketing, analytics, Enegix",
  },
  "nova-coffee": {
    title: "Nova Coffee Branding Case Study | Enegix Web Solutions",
    description: "Explore our brand identity and packaging design for a specialty coffee roaster, emphasizing sustainability and artisanal quality.",
    keywords: "branding, packaging design, logo design, visual identity, coffee branding, Enegix",
  },
  "tech-summit": {
    title: "Tech Summit 2023 Case Study | Enegix Web Solutions",
    description: "Discover how we built an event website with registration system, speaker profiles, and real-time schedule updates for a major tech conference.",
    keywords: "event website, tech conference, React, Stripe, Firebase, Enegix",
  },
  "green-planet": {
    title: "Green Planet Branding Case Study | Enegix Web Solutions",
    description: "See our visual identity work for an environmental non-profit organization focused on conservation and sustainability.",
    keywords: "branding, non-profit, logo design, brand guidelines, print materials, Enegix",
  },
};

// Dynamic metadata generation based on the projectId parameter
export function generateMetadata({ params }: { params: { projectId: string } }): Metadata {
  // Get the project data for the current projectId
  const projectData = portfolioProjects[params.projectId as keyof typeof portfolioProjects];
  
  // If project doesn't exist, return default metadata
  if (!projectData) {
    return {
      title: 'Project Case Study | Enegix Web Solutions',
      description: 'Explore our portfolio of creative and effective digital solutions at Enegix Web Solutions.',
    };
  }
  
  // Return the specific project metadata
  return {
    title: projectData.title,
    description: projectData.description,
    keywords: projectData.keywords,
  };
}

// This is a metadata file for the dynamic project routes
// The default export is necessary for Next.js to recognize this file
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
