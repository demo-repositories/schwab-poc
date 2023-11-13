"use client";
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import SchwabLogo from "./SchwabLogo";
import Link from "next/link";
import SanityLogo from "./SanityLogo";
import { Plus } from "lucide-react";

export default function Navbar({}) {
  const links = [
    {
      text: "Stories",
      to: {
        slug: {
          current: "/story",
        },
        _type: "landingPage",
      },
      _id: "1",
    },
    {
      text: "Landing Pages",
      to: {
        slug: {
          current: "/landing-pages",
        },
        _type: "landingPage",
      },
      _id: "2",
    },
  ];
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-7 xl:px-0">
      <Link
        href="/"
        className="flex h-[24px] items-center justify-between lg:h-[36px]"
      >
        <SchwabLogo />
        <Plus className="ml-3 mr-1" />
        <SanityLogo />
      </Link>
      <div className="flex items-center justify-between gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            {links &&
              links.map(({ text, to, _id }) => {
                return (
                  <NavigationMenuItem key={_id}>
                    <Link href={to.slug.current} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {text}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
