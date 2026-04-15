import type { NextConfig } from "next";

// Static export is the deploy target (Cloudflare Pages). The `build`
// script in package.json stashes src/app/api/ out of the source tree
// before running `next build`, since API route handlers aren't
// supported in `output: 'export'`. `next dev` ignores this setting,
// so local dev still serves the /api/review and /api/candidates
// handlers for image-curation workflows.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ['192.168.1.163', '192.168.1.125', '192.0.0.2'],
  devIndicators: false,
};

export default nextConfig;
