import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { getPortfolioPosts } from "../utils";

import ProjectPageContent from "@/components/ProjectPageContent";

export async function generateStaticParams() {
  let locales = ["en", "es"];
  let postsLocales = [];

  locales.forEach((locale) => {
    postsLocales = [
      ...postsLocales,
      ...getPortfolioPosts(locale).map((post) => ({
        slug: post.slug,
        locale: locale,
      })),
    ];
  });

  return postsLocales;
}

export default function Portfolio({ params }: any) {
  unstable_setRequestLocale(params.locale);
  let post = getPortfolioPosts(params.locale).find(
    (post) => post.slug === params.slug,
  );

  if (!post) {
    notFound();
  }

  return (
    <section>
      <ProjectPageContent post={post} />
    </section>
  );
}
