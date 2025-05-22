import type { Metadata } from 'next';

// Define service data for metadata generation
const services = {
  "web-development": {
    title: "Web Development Services | Enegix Web Solutions",
    description: "Professional web development services to create responsive, high-performance websites and applications tailored to your business needs.",
    keywords: "web development, website design, custom websites, responsive design, web applications, Enegix",
  },
  "logo-design": {
    title: "Logo Design Services | Enegix Web Solutions",
    description: "Professional logo design services to create distinctive, memorable brand identities that represent your business values.",
    keywords: "logo design, brand identity, visual branding, graphic design, brand logo, Enegix",
  },
  "seo-optimization": {
    title: "SEO Optimization Services | Enegix Web Solutions",
    description: "Comprehensive SEO optimization services to improve your website's visibility and drive organic traffic to your business.",
    keywords: "SEO, search engine optimization, organic traffic, keyword research, website ranking, Enegix",
  },
  "digital-marketing": {
    title: "Digital Marketing Services | Enegix Web Solutions",
    description: "Strategic digital marketing services to increase your online presence and connect with your target audience effectively.",
    keywords: "digital marketing, online marketing, social media marketing, content marketing, email marketing, Enegix",
  },
  "ecommerce-solutions": {
    title: "E-commerce Solutions | Enegix Web Solutions",
    description: "Custom e-commerce solutions to build and optimize online stores that provide seamless shopping experiences and drive sales.",
    keywords: "e-commerce, online store, e-commerce website, online shopping, e-commerce development, Enegix",
  },
  "ppc-advertising": {
    title: "PPC Advertising Services | Enegix Web Solutions",
    description: "Strategic PPC advertising campaigns to maximize your ROI and target your ideal customers with precision.",
    keywords: "PPC, pay-per-click, Google Ads, Meta Ads, digital advertising, ad campaigns, Enegix",
  },
};

// Dynamic metadata generation based on the serviceId parameter
export function generateMetadata({ params }: { params: { serviceId: string } }): Metadata {
  // Get the service data for the current serviceId
  const serviceData = services[params.serviceId as keyof typeof services];
  
  // If service doesn't exist, return default metadata
  if (!serviceData) {
    return {
      title: 'Service | Enegix Web Solutions',
      description: 'Learn more about our professional services at Enegix Web Solutions.',
    };
  }
  
  // Return the specific service metadata
  return {
    title: serviceData.title,
    description: serviceData.description,
    keywords: serviceData.keywords,
  };
}

// This is a metadata file for the dynamic service routes
// The default export is necessary for Next.js to recognize this file
export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
