import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ---------------------------------------------------
  // REACT STRICT MODE - catches bugs early, no perf cost in prod
  // ---------------------------------------------------
  reactStrictMode: true,

  // ---------------------------------------------------
  // COMPRESSION - gzip/brotli responses
  // ---------------------------------------------------
  compress: true,

  // ---------------------------------------------------
  // REMOVE "X-Powered-By: Next.js" HEADER (security + tiny payload save)
  // ---------------------------------------------------
  poweredByHeader: false,

  // ---------------------------------------------------
  // IMAGE OPTIMIZATION - biggest speed win for most sites
  // ---------------------------------------------------
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Set to false only if you use external unoptimized image CDNs
    // unoptimized: false,
  },

  // ---------------------------------------------------
  // EXPERIMENTAL PERFORMANCE FEATURES
  // ---------------------------------------------------
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "@radix-ui/react-icons",
      "date-fns",
      "lodash",
    ],
    scrollRestoration: true,
    optimisticClientCache: true,
  },

  // ---------------------------------------------------
  // TURBOPACK (Next.js 15/16 stable build/dev speed)
  // ---------------------------------------------------
  turbopack: {},

  // ---------------------------------------------------
  // PRODUCTION SOURCE MAPS - disable for smaller build & faster deploys
  // (enable temporarily only when debugging prod errors)
  // ---------------------------------------------------
  productionBrowserSourceMaps: false,

  // ---------------------------------------------------
  // STATIC ASSET / SECURITY / CACHE HEADERS
  // ---------------------------------------------------
  async headers() {
    return [
      {
        // Cache all static Next.js build assets aggressively (immutable)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache images/fonts folder aggressively
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Security + perf headers on every route
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // ---------------------------------------------------
  // REDIRECTS EXAMPLE (add real ones as needed - avoids extra client hops)
  // ---------------------------------------------------
  async redirects() {
    return [
      // {
      //   source: "/old-path",
      //   destination: "/new-path",
      //   permanent: true,
      // },
    ];
  },

  // ---------------------------------------------------
  // ESLINT / TYPESCRIPT - don't let lint block prod builds unnecessarily
  // (keep false in normal workflow; flip true only for emergency deploys)
  // ---------------------------------------------------
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;