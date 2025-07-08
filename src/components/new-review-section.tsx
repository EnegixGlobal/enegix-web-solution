import React, { useRef, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";
import Container from "./Container";

type Review = {
  id: number;
  rating: number;
  text: string;
  author: string;
  work: string;
  verified: boolean;
};

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
    text: "I was impressed by Enegix web solutions, websites and Marketing prices. Specially for the project that I wanted to do and in comparison to the quotes I received from a lot of other companies.",
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

const NewReviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Infinite auto-scroll logic
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if ((el as any)._reviewScrollSetup) return;
    (el as any)._reviewScrollSetup = true;
    // Set initial scroll position to middle
    const setInitial = () => {
      el.scrollLeft = el.scrollWidth / 4;
    };
    setTimeout(setInitial, 50);
    // Infinite scroll logic
    const onScroll = () => {
      const totalWidth = el.scrollWidth / 2;
      if (el.scrollLeft < 1) {
        el.scrollLeft = totalWidth + el.scrollLeft;
      } else if (el.scrollLeft >= totalWidth * 2 - el.offsetWidth - 1) {
        el.scrollLeft = el.scrollLeft - totalWidth;
      }
    };
    el.addEventListener("scroll", onScroll);
    // Auto-scroll
    let autoScrollId: any = null;
    let isUserInteracting = false;
    const startAutoScroll = () => {
      if (autoScrollId) clearInterval(autoScrollId);
      autoScrollId = setInterval(() => {
        if (!isUserInteracting) {
          el.scrollLeft += 0.7;
        }
      }, 16);
    };
    startAutoScroll();
    // Pause auto-scroll on user interaction
    el.addEventListener("mousedown", () => {
      isUserInteracting = true;
    });
    el.addEventListener("touchstart", () => {
      isUserInteracting = true;
    });
    el.addEventListener("mouseup", () => {
      isUserInteracting = false;
    });
    el.addEventListener("mouseleave", () => {
      isUserInteracting = false;
    });
    el.addEventListener("touchend", () => {
      isUserInteracting = false;
    });
    // Manual drag (mouse)
    el.addEventListener("mousedown", (e) => {
      let startX = e.pageX - el.offsetLeft;
      let scrollLeft = el.scrollLeft;
      let isDown = true;
      el.classList.add("dragging");
      const onMouseMove = (ev: MouseEvent) => {
        if (!isDown) return;
        ev.preventDefault();
        const x = ev.pageX - el.offsetLeft;
        const walk = x - startX;
        el.scrollLeft = scrollLeft - walk;
      };
      const onMouseUp = () => {
        isDown = false;
        el.classList.remove("dragging");
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    });
    // Manual drag (touch)
    el.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      let startX = touch.pageX - el.offsetLeft;
      let scrollLeft = el.scrollLeft;
      let isDown = true;
      el.classList.add("dragging");
      const onTouchMove = (ev: TouchEvent) => {
        if (!isDown) return;
        const t = ev.touches[0];
        const x = t.pageX - el.offsetLeft;
        const walk = x - startX;
        el.scrollLeft = scrollLeft - walk;
      };
      const onTouchEnd = () => {
        isDown = false;
        el.classList.remove("dragging");
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
      };
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onTouchEnd);
    });
  }, []);

  return (
    <section className="py-16 bg-blue-50">
      <Container>
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl md:text-6xl font-bold text-center text-teal-600 mb-8">
            What Our Clients Say
          </h2>
          <div className="relative ">
            <div
              ref={containerRef}
              className="flex space-x-6 md:space-x-10 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing py-4"
              style={{ WebkitOverflowScrolling: "touch" }}
              tabIndex={0}>
              {[...reviews, ...reviews].map((review, idx) => (
                <div
                  key={`review-${idx}`}
                  className="flex-shrink-0 w-72 md:w-96 bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-h-[220px]">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-400 text-lg mr-2">
                        {"★".repeat(Math.round(review.rating))}
                      </span>
                      <span className="text-gray-400 text-sm">
                        ({review.rating.toFixed(1)})
                      </span>
                    </div>
                    <p className="text-gray-700 text-base mb-4 line-clamp-5">
                      {review.text}
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold mr-3 text-lg">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">
                        {review.author}
                      </div>
                      <div className="text-xs text-gray-500">
                        {review.work}{" "}
                        {review.verified && (
                          <span className="ml-1 text-green-500">✔</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="https://www.google.com/maps/place/Enegix+Web+Solutions/@23.3516379,85.313703,610m/data=!3m1!1e3!4m8!3m7!1s0x39f4e1c173830ab7:0x9cd58d1bf17ff0de!8m2!3d23.351633!4d85.3162779!9m1!1b1!16s%2Fg%2F11x7cxdq8r?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="">
              <Button className="py-3 w-sm mx-auto mt-8">
                View All Reviews
              </Button>
            </Link>
          </div>
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
        .dragging {
          cursor: grabbing !important;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default NewReviewSection;
