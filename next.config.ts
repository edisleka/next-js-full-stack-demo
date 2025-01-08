import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https", // Match any HTTP/S protocol
        hostname: "*", // Match all domains and subdomains
      },
    ],
  },
};

export default nextConfig;
