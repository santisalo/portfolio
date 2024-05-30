import { getPortfolioPosts } from "./[locale]/portfolio/utils";
const langs = ["en", "es"];

export const baseUrl = "https://portfolio-one-eta-37.vercel.app";

export default async function sitemap() {
  let routes = [
    ...["", "/portfolio", "/blog"].map((route) => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      alternates: {
        languages: {
          ...langs.reduce(
            (a, v) => ({ ...a, [v]: `${baseUrl}/${v}${route}` }),
            {},
          ),
        },
      },
    })),
  ];

  let portfolios = [
    ...getPortfolioPosts().map((post) => ({
      url: `${baseUrl}/portfolio/${post.slug}`,
      lastModified: post.metadata.publishedAt,
      alternates: {
        languages: {
          ...langs.reduce(
            (a, v) => ({ ...a, [v]: `${baseUrl}/${v}/portfolio/${post.slug}` }),
            {},
          ),
        },
      },
    })),
  ];

  return [...routes, ...portfolios];
}
