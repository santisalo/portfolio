"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { EnglishIcon, SpanishIcon } from "./icons";

import { usePathname, useRouter } from "@/navigation";

export default function LangSwitcher() {
  const [locale, setLocale] = useState("es");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const pathname = window.location.pathname;

    setLocale(pathname?.split("/")[1] || "es");
  }, []);

  const handleChangeLocale = (val) => {
    if (pathname.endsWith(".es") || pathname.endsWith(".en")) {
      let newPathname = pathname.slice(0, -2);

      newPathname += val;

      router.replace(newPathname, { locale: val });

      return;
    }
    setLocale(val);
    router.replace(pathname, { locale: val });
  };

  return (
    <div>
      <Tabs
        aria-label="Opciones de Idioma"
        color="primary"
        selectedKey={locale}
        variant="bordered"
        onSelectionChange={handleChangeLocale}
      >
        <Tab
          key="es"
          title={
            <div className="flex items-center space-x-2">
              <SpanishIcon height={24} width={24} />
              <span>ES</span>
            </div>
          }
        />
        <Tab
          key="en"
          title={
            <div className="flex items-center space-x-2">
              <EnglishIcon height={24} width={24} />
              <span>EN</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
