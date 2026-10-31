
export default function sitemap() {
  const baseUrl = "https://rbearthing.com";

  const routes = [
    "",
    "/about",
    "/contact",
    "/products",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
