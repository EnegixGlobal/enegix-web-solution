"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WorkSampleSection() {
  const videos = [
    { id: 1, src: "/worksamples/ae-demo.mp4" },
    { id: 2, src: "/worksamples/Zohashow.mp4" },
    { id: 3, src: "/worksamples/royal-oak.mp4" },
    { id: 4, src: "/worksamples/nexus.mp4" },
    { id: 5, src: "/worksamples/rectify-jawed.mp4" },
  ];

  const [active, setActive] = useState(2);

  const prev = () =>
    setActive((p) => (p === 0 ? videos.length - 1 : p - 1));

  const next = () =>
    setActive((p) => (p === videos.length - 1 ? 0 : p + 1));

  const getVisibleVideos = () => [
    (active - 2 + videos.length) % videos.length,
    (active - 1 + videos.length) % videos.length,
    active,
    (active + 1) % videos.length,
    (active + 2) % videos.length,
  ];

  return (
    <section className="w-full bg-[#EEEEEE] py-24 px-4 md:px-20 lg:px-40 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        
        <h2 className="text-3xl md:text-5xl font-semibold mt-3 text-teal-600">
          Explore Our Work Samples
        </h2>
      </div>

      {/* Desktop */}
      <div className="relative hidden md:flex items-center justify-center">
        <button
          type="button"
          aria-label="Previous video"
          onClick={prev}
          className="absolute left-[30%] z-20 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"
        >
          ←
        </button>

        <div className="flex items-center">
          {getVisibleVideos().map((videoIndex, idx) => {
            const isCenter = idx === 2;

            return (
              <motion.div
                key={`${videoIndex}-${active}`}
                animate={{
                  opacity: isCenter ? 1 : 0.45,
                  scale: isCenter ? 1 : 0.88,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 22,
                }}
                className={`relative rounded-2xl overflow-hidden shadow-xl
                  ${
                    isCenter
                      ? "w-96 h-[520px] mx-4"
                      : "w-72 h-[480px] mx-2 blur-[1.5px]"
                  }`}
              >
                <video
                  key={active}
                  src={videos[videoIndex].src}
                  muted
                  playsInline
                  autoPlay={isCenter}
                  onEnded={isCenter ? next : undefined}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next video"
          onClick={next}
          className="absolute right-[30%] z-20 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"
        >
          →
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative flex items-center justify-center">
        <button
          type="button"
          aria-label="Previous video"
          onClick={prev}
          className="absolute left-3 z-20 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center"
        >
          ←
        </button>

        <motion.div
          key={active}
          className="relative w-72 h-[460px] rounded-2xl overflow-hidden shadow-xl"
        >
          <video
            src={videos[active].src}
            muted
            playsInline
            autoPlay
            onEnded={next}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <button
          type="button"
          aria-label="Next video"
          onClick={next}
          className="absolute right-3 z-20 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center"
        >
          →
        </button>
      </div>
    </section>
  );
}
