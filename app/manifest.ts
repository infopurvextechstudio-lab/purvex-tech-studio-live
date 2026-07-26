import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Purvex Tech Studio",
    short_name: "Purvex",
    description:
      "AI-Powered Websites, Automation & Business Growth.",

    start_url: "/",

    display: "standalone",

    background_color: "#050816",

    theme_color: "#050816",

    icons: [
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}