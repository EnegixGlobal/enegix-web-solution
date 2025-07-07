import React, { useRef, useState, useEffect } from "react";
import Container from "./Container";
import Link from "next/link";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  work: string;
  verified: boolean;
}

function ReviewSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Reviews data array
  const reviews: Review[] = [
    {
      id: 1,
      rating: 5.0,
      text: "Enegix Global ka social media management service bhot hi zabardast hai.. Mere account pe proper themes, reels aur stories ka use hua.. aur brand image bhi kafi grow hua mera.",
      author: "Eram Ejaz",
      work: "Social Media Management",
      verified: true,
    },
    {
      id: 2,
      rating: 5.0,
      text: "Mera ek chhota business hai par Enegix Global ne mujhe brand banane mein help kiya. Graphics, post SEO - har service top quality ki thi.",
      author: "Md Sameer",
      work: "Branding, Graphics and SEO",
      verified: true,
    },
    {
      id: 3,
      rating: 5.0,
      text: "I highly recommend Enegix Web Solutions to anyone seeking a reliable and skilled website development partner. Their commitment to delivering high-quality solutions on time is evident in every aspect of their work.Services: Website Development, App Development, Digital Marketing, Logo Designing Etc.",
      author: "Muskan Dastgir",
      work: "Website and App Development",
      verified: true,
    },
    {
      id: 4,
      rating: 5.0,
      text: "Exceptional work by the web developer! Agent Muskan's professionalism and expertise made the experience seamless. Highly recommended for their dedication, creativity, and outstanding results.",
      author: "Mohammed Asiff",
      work: "Web Development",
      verified: true,
    },
    {
      id: 5,
      rating: 5.0,
      text: "Fantastic experience with Enegix Web Solutions! They transformed our online presence with a sleek, modern website. The team is super helpful and always available for support. Couldn't be happier!",
      author: "Yash Sinha",
      work: "Website Design and Development",
      verified: true,
    },
    {
      id: 6,
      rating: 5.0,
      text: "SEO service li thi aur 3 month ke andar hi keywords top 5 mein aane lage.. Bahut hi dedicated team hai jo result ke liye kaam karti hai bahut hi jyada effective bhi hai..💯👍 …",
      author: "Sayyed Sana",
      work: "SEO Services",
      verified: true,
    },
    {
      id: 7,
      rating: 5.0,
      text: "Beyond impressed with EnegiX Global's innovative solutions and exceptional customer service. They're the perfect partner for taking your business to the next level",
      author: "Rajiv",
      work: "Business Management",
      verified: true,
    },
    {
      id: 8,
      rating: 5.0,
      text: "I was impressed by Enegix web solutions, websites  and Marketing prices. Specially for the project that I wanted to do and in comparison to the quotes I received from a lot of other companies.",
      author: "Veronica Verma",
      work: "Web Development and Marketing",
      verified: true,
    },
    {
      id: 9,
      rating: 5.0,
      text: "Awesome experience with enegix web solution their team work is awesome and according to me services are very affordable you have to try this ❤️❤️❤️i like it",
      author: "Stn commerce Classes",
      work: "Web Development and Marketing",
      verified: true,
    },
    {
      id: 10,
      rating: 4.0,
      text: "Really happy with the website they built for me—clean design and exactly what I wanted. Great service and communication throughout! 😄 …",
      author: "Nikhil Kumar",
      work: "Web Development",
      verified: true,
    },
    {
      id: 11,
      rating: 5.0,
      text: "One of best website development company in ranchi, with better pricing and service.Enjoyed working with you guys.",
      author: "Erwin",
      work: "Web Development",
      verified: true,
    },
    {
      id: 12,
      rating: 5.0,
      text: "Very well designed website and works beautifully, listens patiently and works in the same manner.",
      author: "Adil Ahmed",
      work: "Web Development",
      verified: true,
    },
  ];

  // Function to render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span className="text-yellow-500 text-xl">
        {"★".repeat(fullStars)}
        {hasHalfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  // Navigation functions
  const scrollLeft = () => {
    setIsAutoScrolling(false); // Stop auto scroll when manually navigating
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350, // Scroll by one card width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    setIsAutoScrolling(false); // Stop auto scroll when manually navigating
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350, // Scroll by one card width
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const currentScroll = container.scrollLeft;
          const maxScroll = container.scrollWidth - container.clientWidth;

          // If we've reached the end, scroll back to the beginning
          if (currentScroll >= maxScroll) {
            container.scrollLeft = 0;
          } else {
            // Scroll right by a small amount for smooth animation
            container.scrollBy({
              left: 1,
              behavior: "auto",
            });
          }
        }
      }, 30); // Adjust speed by changing this interval
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoScrolling]);

  // Resume auto-scroll after manual navigation stops
  useEffect(() => {
    if (!isAutoScrolling) {
      const timer = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 3000); // Resume auto-scroll after 3 seconds of inactivity

      return () => clearTimeout(timer);
    }
  }, [isAutoScrolling]);

  return (
    <div className="bg-blue-100  py-10 md:py-2  shadow-md">
      <Container>
        <h2 className="text-teal-600 text-center text-3xl md:text-6xl md:my-10 font-medium">
          What our Client Says.
        </h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="md:text-2xl py-6 font-bold text-teal-800">
              A stellar rating of 4.9 out of 5
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 text-xl">★★★★★</span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-gray-700 text-lg font-semibold">
            New Digital Solutions Reviews
          </h3>
          <span className=" font-medium">
            <span className="text-yellow-500">4.9 ★★★★★</span> {reviews.length}{" "}
            REVIEWS
          </span>
        </div>
        <div className="relative overflow-hidden group ">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            aria-label="Scroll left">
            <svg
              className="w-5 h-5 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            aria-label="Scroll right">
            <svg
              className="w-5 h-5 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 lg:space-x-8 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}>
            {/* Render reviews twice for infinite scroll effect */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200 min-w-[280px] w-[280px] h-[280px] md:min-w-[350px] md:w-[350px] md:h-[300px] lg:min-w-[380px]  flex flex-col justify-between">
                <div>
                  <div className="flex text-yellow-500 items-center mb-3">
                    {renderStars(review.rating)}
                    <span className="text-gray-600 ml-2 text-sm">
                      {review.rating}
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs md:text-sm mb-3 leading-relaxed overflow-hidden">
                    <span
                      className="block md:hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                      "{review.text}"
                    </span>
                   
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    - {review.author}
                  </p>
                  <p className="text-gray-500 text-xs mb-2">{review.work}</p>
                  {review.verified && (
                    <p className="text-gray-400 text-xs">✔ Verified Review</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center flex my-8">
          <Link
          className="flex items-center justify-center text-teal-500 hover:text-teal-700 mx-auto gap-3"
            href="https://wa.me/919608263050?text=Hi%20I%20am%20interested%20in%20your%20services.%20Can%20you%20share%20more%20details%20about%20your%20offerings?"
            target="_blank">
             <Button className="gap-4 py-2">  View all Reviews <FaArrowRight/></Button>
          </Link>
        </div>
      </Container>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default ReviewSection;
