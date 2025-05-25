import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        pathname: "/**",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        port: "",
        pathname: "/**",
        hostname: "unsplash.com",
      },
    ],
  },
};

export default nextConfig;
