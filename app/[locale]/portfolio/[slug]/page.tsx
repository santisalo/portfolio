import { notFound } from "next/navigation";

import { getPortfolioPosts } from "../utils";
import { baseUrl } from "../../sitemap";

import ProjectPageContent from "@/components/ProjectPageContent";

export async function generateStaticParams({ params }: any) {
  let posts = getPortfolioPosts(params.locale);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: any) {
  let post = getPortfolioPosts(params.locale).find(
    (post) => post.slug === params.slug,
  );

  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime } = post.metadata;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      publishedTime,
      url: `${baseUrl}/portfolio/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  };
}

export default function Portfolio({ params }: any) {
  let post = getPortfolioPosts(params.locale).find(
    (post) => post.slug === params.slug,
  );

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PortfolioPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            url: `${baseUrl}/portfolio/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
        suppressHydrationWarning
        type="application/ld+json"
      />
      <ProjectPageContent
        imageUrl={post.metadata.imageUrl}
        projectType={post.metadata.projectType}
        slug={post.slug}
        technology={post.metadata.technology}
        title={post.metadata.title}
      />
    </section>
  );
}
