import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { getPortfolioPosts } from "./utils";

import { PostList } from "@/components/porfolio/components/PostList";
import { title } from "@/components/primitives";

export const metadata = {
  title: "Mi Portfolio",
  description: "Son mis clientes.",
};
const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Page({ params }: any) {
  unstable_setRequestLocale(params.locale);
  const { locale } = params;
  const t = useTranslations("Portfolio");

  return (
    <section>
      <div className="mb-6">
        <h1 className={title({ size: "md" })}>{t("title")}</h1>
      </div>
      <PostList limit={99} posts={getPortfolioPosts(locale)} />
    </section>
  );
}
