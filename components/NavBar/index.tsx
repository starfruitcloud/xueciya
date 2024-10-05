/*
 * :file description:
 * :name: /xueciya/components/NavBar/index.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-05 22:19:33
 * :last editor: 张德志
 * :date last edited: 2024-10-06 04:55:33
 */
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { NAV_MENU } from "./constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="h-16 bg-blue-600 flex px-8 items-center">
      <div className="pr-6 flex items-center flex-1">
        <Image
          width={32}
          height={32}
          src="https://cdn.xiaozhi.shop/digitwin/assets/logo.svg"
          alt=""
        />
      </div>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {NAV_MENU.map((item) => {
              return (
                <NavigationMenuItem key={item.key} className="pr-6">
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink>{item.name}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <Button>登录 | 注册</Button>
      </div>
    </div>
  );
}
