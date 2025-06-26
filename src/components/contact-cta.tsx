"use client";

import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";
import { AuroraText } from "./magicui/aurora-text";

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-700">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-emerald-700/90"></div>

      {/* Static decorative elements instead of animated meteors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-[20%] w-1 h-12 bg-white/20 rounded-full transform rotate-[25deg]"></div>
        <div className="absolute top-20 right-[40%] w-[2px] h-16 bg-white/20 rounded-full transform rotate-[25deg]"></div>
        <div className="absolute bottom-32 left-[25%] w-[1px] h-24 bg-white/20 rounded-full transform rotate-[25deg]"></div>
        <div className="absolute top-40 left-[10%] w-[2px] h-20 bg-white/20 rounded-full transform rotate-[25deg]"></div>
        <div className="absolute bottom-20 right-[15%] w-[1px] h-16 bg-white/20 rounded-full transform rotate-[25deg]"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center max-w-4xl mx-auto animate-fade-in">
          {" "}
          <h5 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your <span className="font-extrabold text-teal-300">Digital Presence</span>?
          </h5>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            No matter the size of your company, we're here to help you expand
            and reach new heights with our expertise and proven process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <RainbowButton size="lg">Get In Touch</RainbowButton>
            </Link>
            <a href="tel:+919608263050">
              <RainbowButton variant="outline" size="lg">
                Call Now: +91 96082 63050
              </RainbowButton>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactCTA;
