import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/en"],
      },
      {
        userAgent: "*",
        disallow: ["/fr", "/de", "/nl", "/lu"], // Interdire l'indexation des autres langues (à ajuster si nécessaire)
      },
    ],
    sitemap: "https://www.khairislama.com/sitemap.xml",
  };
}
