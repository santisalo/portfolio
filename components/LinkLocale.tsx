"use client";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";
export default function LinkLocale(props: any) {
  //get pathname from window
  const [locale, setLocale] = useState("es");

  useEffect(() => {
    const pathname = window.location.pathname;

    setLocale(pathname?.split("/")[1] || "es");
  }, []);

  return <Link {...props} href={"/" + locale + props.href} />;
}
