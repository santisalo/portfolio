import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Link as LinkVT } from "next-view-transitions";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import LinkLocale from "./LinkLocale";
import LangSwitcher from "./LangSwitcher";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  GraduateIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <LinkVT className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">SANTIAGO SALOMON</p>
          </LinkVT>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <LinkLocale
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </LinkLocale>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Github"
            className="text-default-500"
            href={siteConfig.links.github}
          >
            <GithubIcon height={24} width={24} />
          </Link>
          <Link
            isExternal
            aria-label="Instagram"
            className="text-default-500"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon height={20} width={20} />
          </Link>
          <Link
            isExternal
            aria-label="Linkedin"
            className="text-default-500"
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon height={20} width={20} />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            download={"cv.pdf"}
            href="/pdf/cv.pdf"
            startContent={<GraduateIcon height={24} width={24} />}
            variant="flat"
          >
            Mi CV
          </Button>
        </NavbarItem>
        <LangSwitcher />
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          aria-label="Linkedin"
          className="text-default-500"
          href={siteConfig.links.linkedin}
        >
          <LinkedInIcon height={20} width={20} />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <LangSwitcher />
      </NavbarMenu>
    </NextUINavbar>
  );
};
