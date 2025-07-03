import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'i.pinimg.com', "enegixwebsolutions.com", "avatars.githubusercontent.com", "cdn-icons-png.flaticon.com" , "www.pexels.com", "imgs.search.brave.com"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
