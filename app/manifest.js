import { siteConfig } from "@/lib/siteConfig";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00a2e8",
    icons: [
      {
        src: "/logo-1.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-1.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

