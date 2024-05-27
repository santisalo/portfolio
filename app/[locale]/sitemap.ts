import { getPortfolioPosts } from "./portfolio/utils";

export const baseUrl = "https://portfolio-portfolio-starter.vercel.app";

export default async function sitemap() {
  let portfolios = getPortfolioPosts().map((post) => ({
    url: `${baseUrl}/portfolio/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/portfolio"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...portfolios];
}
