"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";

import { routes } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const Navbar = () => {
  const { isScrolled } = useScrollTop(300);

  return (
    <div
      className={cn(
        "fixed top-0 z-20 bg-background w-full h-16 flex justify-between items-center transition-all",
        isScrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex items-center justify-between container">
        <Logo className="w-32" />
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {routes.map(({ label, href, pathname: path }, index) => (
              <NavigationMenuItem key={index}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn("capitalize", navigationMenuTriggerStyle())}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            {/* <Button size="sm" asChild>
              <Link href="/auth/login">Login</Link>
            </Button> */}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <Button size="icon" variant="outline" asChild>
            <SheetTrigger className="block md:hidden">
              <span className="sr-only">Menu</span>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
          </Button>
          <SheetContent>
            <NavigationMenu className="flex flex-col justify-between h-full items-start">
              <NavigationMenuList className="flex-col space-x-0 items-start space-y-2">
                {routes.map(({ label, href, pathname: path }, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "capitalize",
                          navigationMenuTriggerStyle()
                        )}
                      >
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <div className="flex flex-col gap-y-5">
                {/* <Button size="sm" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button> */}
                <ModeToggle />
              </div>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
