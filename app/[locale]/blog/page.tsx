import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";

export default function BlogPage() {
  const t = useTranslations("Blog");

  return (
    <div>
      <h1 className={title()}>{t("comingSoon")}</h1>
    </div>
  );
}
