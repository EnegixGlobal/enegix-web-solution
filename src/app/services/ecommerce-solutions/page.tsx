'use client';

import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  CreditCard, 
  Package, 
  BarChart3, 
  Shield, 
  Smartphone,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

// No metadata export needed in file

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const features = [
  {
    icon: ShoppingCart,
    title: "Custom Shopping Cart",
    description: "Intuitive and secure shopping cart experience with advanced features"
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Multiple payment gateways including PayPal, Stripe, and local options"
  },
  {
    icon: Package,
    title: "Inventory Management", 
    description: "Real-time stock tracking and automated inventory updates"
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Comprehensive reporting and analytics for business insights"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "SSL encryption, PCI compliance, and secure data handling"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Responsive design optimized for mobile shopping experience"
  }
];

const platforms = [
  {
    name: "WooCommerce",
    description: "Flexible WordPress-based e-commerce solution",
    features: ["WordPress Integration", "Extensive Plugins", "SEO Friendly"]
  },
  {
    name: "Shopify",
    description: "All-in-one hosted e-commerce platform",
    features: ["Easy Setup", "Built-in Payments", "App Ecosystem"]
  },
  {
    name: "Magento",
    description: "Enterprise-level e-commerce platform",
    features: ["Advanced Features", "Multi-store", "B2B Capabilities"]
  },
  {
    name: "Custom Solution",
    description: "Tailored e-commerce built from scratch",
    features: ["Full Control", "Unique Features", "Scalable Architecture"]
  }
];

const stats = [
  { number: "250+", label: "Online Stores Built" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "40%", label: "Average Sales Increase" },
  { number: "24/7", label: "Support Available" }
];

const relatedServices = [
  {
    title: "Digital Marketing",
    description: "Drive traffic and increase conversions for your online store",
    href: "/services/digital-marketing",
    icon: Target
  },
  {
    title: "Web Development", 
    description: "Custom web applications and business solutions",
    href: "/services/web-development",
    icon: Globe
  }
];

export default function EcommerceSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>              <span className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 rounded-full text-sm font-medium inline-block">
                E-Commerce Solutions
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build Powerful Online Stores That 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Convert</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with our comprehensive e-commerce solutions. From custom online stores to payment integration and mobile optimization - we deliver results that drive sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Store
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={floatVariants}
              initial="initial"
              animate="animate"
            >
              <div className="relative z-10">                <Image 
                  src="/ecommerce-solutions.jpg" 
                  alt="E-Commerce Solutions" 
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete E-Commerce Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to launch and grow your online business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              E-Commerce Platform Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading e-commerce platforms to deliver the best solution for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our E-Commerce Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your online store succeeds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your business needs and target audience"
              },
              {
                step: "02", 
                title: "Design & UX",
                description: "Creating intuitive and conversion-focused designs"
              },
              {
                step: "03",
                title: "Development & Integration",
                description: "Building your store with all necessary integrations"
              },
              {
                step: "04",
                title: "Testing & Launch",
                description: "Thorough testing and successful store launch"
              }
            ].map((process, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complement your e-commerce store with our other services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div 
          className="container mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's build an e-commerce solution that drives sales and grows your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-Commerce Solutions",
            "description": "Professional e-commerce development services including custom online stores, payment integration, and mobile optimization",
            "provider": {
              "@type": "Organization",
              "name": "Enegix Web Solutions",
              "url": "https://enegix.com"
            },
            "serviceType": "E-Commerce Development",
            "offers": {
              "@type": "Offer",
              "description": "Custom e-commerce solutions for businesses of all sizes"
            }
          })
        }}
      />
    </div>
  );
}
