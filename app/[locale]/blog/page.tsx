import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { title } from "@/components/primitives";

const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default function BlogPage({ params }: any) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Blog");

  return (
    <div>
      <h1 className={title()}>{t("comingSoon")}</h1>
    </div>
  );
}
