import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.163', '192.168.1.125', '192.0.0.2'],
  devIndicators: false,
};

export default nextConfig;
