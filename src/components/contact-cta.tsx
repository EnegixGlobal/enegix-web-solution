"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";
import { AuroraText } from "./magicui/aurora-text";
import { Meteors } from "./magicui/meteors";

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
      <Meteors number={10} />
      
      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0c1220]/90 to-[#0a192f]/90 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your <AuroraText>Digital Presence</AuroraText>?
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            No matter the size of your company, we're here to help you expand and reach new heights with our expertise and proven process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <RainbowButton size="lg">
                Get In Touch
              </RainbowButton>
            </Link>
            <a href="tel:+919608263050">
              <RainbowButton variant="outline" size="lg">
                Call Now: +91 96082 63050
              </RainbowButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
