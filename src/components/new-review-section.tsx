"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import Container from "./Container";

type Review = {
  id: number;
  text: string;
  author: string;
  work: string;
};

const reviews: Review[] = [
  {
    id: 1,
    text:
      "Exceptional work by the team at Enegix Global. From consultation to final delivery, everything was handled professionally. The website is fast, responsive, and performance optimized.",
    author: "Mohammed Asiff",
    work: "Web Development",
  },
  {
    id: 2,
    text:
      "Branding aur SEO strategy structured aur result-oriented tha. Online presence improve hua aur business growth visible hai.",
    author: "Md Sameer",
    work: "Branding, Graphics and SEO",
  },
  {
    id: 3,
    text:
      "SEO service ke baad 3–4 months mein keywords top positions mein aaye. Organic traffic increase hua aur genuine leads generate hone lage.",
    author: "Sayyed Sana",
    work: "SEO Services",
  },
  {
    id: 4,
    text:
      "Website design clean, modern aur fully responsive hai. Clients se positive feedback mil raha hai aur user experience smooth hai.",
    author: "Nikhil Kumar",
    work: "Website Development",
  },
  {
    id: 5,
    text:
      "Digital marketing campaigns effective rahe. Social media engagement improve hua aur conversion rate better hua.",
    author: "Puja Kumari",
    work: "Digital Marketing",
  },
];

export default function NewReviewSection() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const total = reviews.length;
  const extendedReviews = [...reviews, ...reviews];

  // 🔹 Responsive cards count
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // 🔹 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= total) {
      setTimeout(() => setIndex(0), 500);
    }
  }, [index, total]);

  const slideLeft = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const slideRight = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <section className="py-16 bg-blue-50 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-2">
              Wise Words
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-teal-600 max-w-xl">
              Read our customers reactions
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl">
              Real feedback from our happy clients.
            </p>
          </div>

          <Link href="https://www.google.com/maps/place/Enegix+Web+Solutions/@23.3516379,85.313703,610m/data=!3m1!1e3!4m8!3m7!1s0x39f4e1c173830ab7:0x9cd58d1bf17ff0de!8m2!3d23.351633!4d85.3162779!9m1!1b1!16s%2Fg%2F11x7cxdq8r" 
          target="_blank" rel="noopener noreferrer" > 
          <Button className="px-8 py-3 rounded-full"> Read All Testimonials </Button> 
          </Link>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Arrows */}
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center"
          >
            ›
          </button>

          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            }}
          >
            {extendedReviews.map((review, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
              >
                <div className="bg-white border rounded-2xl p-8 shadow-sm h-full">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    “{review.text}”
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.work}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}