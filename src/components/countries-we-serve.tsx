"use client";

import Image from "next/image";
import React from "react";

const CountriesWeServe = () => {
  // Function to convert country code to flag emoji
  const getFlagEmoji = (countryCode: string): string => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  // Array of countries with country codes (ISO 3166-1 alpha-2)
  const countries = [
    { name: "India", flag: "/flags/india.png" },
    { name: "Australia (Perth)", flag: "/flags/australia.webp" },
    { name: "Sri Lanka", flag: "/flags/srilanka.webp" },
    { name: "Nepal", flag: "/flags/nepal.webp" },
    { name: "Maldives", flag: "/flags/maldives.webp" },
    { name: "Uzbekistan", flag: "/flags/uzbekistan.webp" },
    { name: "Turkmenistan", flag: "/flags/turkmenistan.webp" },
    { name: "Kazakhstan (West)", flag: "/flags/kazakhstan.webp" },
    { name: "Afghanistan", flag: "/flags/afghanistan.webp" },
    { name: "Iran", flag: "/flags/iran.webp" },
    { name: "Bangladesh", flag: "/flags/bangladesh.webp" },
    { name: "Bhutan", flag: "/flags/bhutan.webp" },
    { name: "Kyrgyzstan", flag: "/flags/kyrgyzstan.webp" },
    { name: "Myanmar", flag: "/flags/myanmar.webp" },
    { name: "Thailand", flag: "/flags/thailand.webp" },
    { name: "Vietnam", flag: "/flags/vietnam.webp" },
    { name: "Cambodia", flag: "/flags/combodia.webp" },
    { name: "Laos", flag: "/flags/laos.webp" },
    { name: "Indonesia (Jakarta)", flag: "/flags/indonesia.webp" },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-teal-600 mb-4">
            Countries We Proudly Serve
          </h2>
          <p className="md:text-lg text-sm text-gray-600  mx-auto">
            Delivering exceptional digital solutions to clients across the globe
          </p>
        </div>

        {/* Scrolling Flags - auto-scroll and manual drag/scroll */}
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-6 md:space-x-12 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch" }}
            tabIndex={0}
            ref={(el) => {
              if (!el) return;
              if ((el as any)._infiniteScrollSetup) return;
              (el as any)._infiniteScrollSetup = true;
              // Set initial scroll position to the middle (start of second list)
              const setInitial = () => {
                el.scrollLeft = el.scrollWidth / 6;
              };
              setTimeout(setInitial, 50);
              // Infinite scroll logic
              const onScroll = () => {
                const totalWidth = el.scrollWidth / 2;
                if (el.scrollLeft < 1) {
                  el.scrollLeft = totalWidth + el.scrollLeft;
                } else if (
                  el.scrollLeft >=
                  totalWidth * 2 - el.offsetWidth - 1
                ) {
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
                    el.scrollLeft += 0.5; // slower speed
                  }
                }, 16); // ~60fps
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
            }}>
            {[...countries, ...countries].map((country, index) => (
              <div className="group text-center" key={`country-${index}`}>
                <div
                  key={`flag-${index}`}
                  className="flex-shrink-0 text-center group cursor-pointer w-16 h-12 md:w-28 md:h-20 flex flex-col items-center justify-center">
                  {/* ✅ ONLY CHANGE: Circle Image */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default CountriesWeServe;
