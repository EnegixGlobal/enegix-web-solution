"use client";

import Image from 'next/image';
import React from 'react';

const CountriesWeServe = () => {
  // Function to convert country code to flag emoji
  const getFlagEmoji = (countryCode: string): string => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  // Array of countries with country codes (ISO 3166-1 alpha-2)
const countries = [
  { name: 'India', flag: '/flags/india.png' },
  { name: 'Australia (Perth)', flag: '/flags/australia.webp' },
  { name: 'Sri Lanka', flag: '/flags/srilanka.webp' },
  { name: 'Nepal', flag: '/flags/nepal.webp' },
  { name: 'Maldives', flag: '/flags/maldives.webp' },
  { name: 'Uzbekistan', flag: '/flags/uzbekistan.webp' },
  { name: 'Turkmenistan', flag: '/flags/turkmenistan.webp' },
  { name: 'Kazakhstan (West)', flag: '/flags/kazakhstan.webp' },
  { name: 'Afghanistan', flag: '/flags/afghanistan.webp' },
  { name: 'Iran', flag: '/flags/iran.webp' },
  { name: 'Bangladesh', flag: '/flags/bangladesh.webp' },
  { name: 'Bhutan', flag: '/flags/bhutan.webp' },
  { name: 'Kyrgyzstan', flag: '/flags/kyrgyzstan.webp' },
  { name: 'Myanmar', flag: '/flags/myanmar.webp' },
  { name: 'Thailand', flag: '/flags/thailand.webp' },
  { name: 'Vietnam', flag: '/flags/vietnam.webp' },
  { name: 'Cambodia', flag: '/flags/cambodia.webp' },
  { name: 'Laos', flag: '/flags/laos.webp' },
  { name: 'Indonesia (Jakarta)', flag: '/flags/indonesia.webp' },
];


  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-teal-600 mb-4">
            Countries We Proudly Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional digital solutions to clients across the globe
          </p>
        </div>

        {/* Scrolling Flags */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 md:space-x-12">
            {/* First set of flags */}
            {countries.map((country, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 text-center group cursor-pointer"
              >
                
                <Image
                  src={country.flag}
                  alt={`${country.name}`}
                  width={84}
                  height={84}
                  className="mx-auto md:h-18 md:w-30 w-14 h-10 object-cover mb-2"
                />
                <p className="text-sm text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {country.name}
                </p>
              </div>
            ))}
            
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CountriesWeServe;
