import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/record/"],
      },
    ],
    sitemap: "https://cap.so/sitemap.xml",
  };
}