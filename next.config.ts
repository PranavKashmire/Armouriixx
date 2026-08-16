import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // unoptimized bypasses the Next.js image proxy entirely so external images
    // load directly from the CDN without going through the server.
    unoptimized: true,
    // Also permit private/NAT64 IP resolution (required in some network setups)
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
