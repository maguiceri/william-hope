import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.whope.com.ar",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
