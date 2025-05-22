"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import { enablePageScroll } from "@/utils/scroll-helper";
import Navbar from "@/components/navbar";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (!mounted) return;
    
    // Enable page scrolling and fix scroll issues
    enablePageScroll();
      // Clear any transform styles that might be affecting scroll
    const mainContent = document.getElementById('__next') || document.querySelector('main');
    if (mainContent) {
      mainContent.style.transform = 'none';
    }
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.body.addEventListener('click', handleAnchorClick);
    return () => document.body.removeEventListener('click', handleAnchorClick);
  }, [mounted]);  return (
    <div className="bg-[#0a192f] text-white">
      {mounted && <LoadingScreen />}
      {mounted && <ScrollFix />}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
      {mounted && <ScrollToTopButton />}
    </div>
  );
}
