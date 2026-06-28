import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid dev-server hangs when optimising many local gallery photos
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
