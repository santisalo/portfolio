import createMiddleware from "next-intl/middleware";

import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  localePrefix,
  locales,
  defaultLocale: "es",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|en)/:path*"],
};
