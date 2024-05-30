import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { ViewTransitions } from "next-view-transitions";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: no-preference)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  unstable_setRequestLocale(locale);

  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang={locale}>
        <head />
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <NextIntlClientProvider messages={messages}>
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "dark" }}
            >
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-4 px-6 flex-grow">
                  {children}
                </main>
                <footer className="w-full flex items-center justify-center py-3">
                  <span className="text-default-600">Desarrollado con</span>
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://nextjs.org/"
                    title="Nextjs homepage"
                  >
                    <p className="text-primary">&nbsp;NextJS</p>
                  </Link>
                  <p>&nbsp;y&nbsp;</p>
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://nextui.org/"
                    title="NextUI homepage"
                  >
                    <p className="text-primary">NextUI</p>
                  </Link>
                </footer>
              </div>
            </Providers>
          </NextIntlClientProvider>
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
