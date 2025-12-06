"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <NavigationMenu className="w-full max-w-none justify-between my-4">
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button variant={"link"} size={"icon-lg"} asChild>
              <Link href="/">
                <Logo />
              </Link>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Events</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/markets">Markets</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <WalletMultiButton />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
