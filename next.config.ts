import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // Ensures the app directory is enabled
  },
};

export default nextConfig;
