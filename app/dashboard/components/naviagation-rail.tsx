"use client";
import { Sidebar, Menu, sidebarClasses } from "react-pro-sidebar";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaBars, FaFileInvoice } from "react-icons/fa6";
import {
  MdOutlineCategory,
  MdOutlineInventory2,
  MdDesignServices,
} from "react-icons/md";
import { IconType } from "react-icons/lib";
import { GoHome } from "react-icons/go";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMiniBars2 } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Navigation items array for sidebar and sheet
const navigationItems = [
  {
    href: "/dashboard",
    name: "لوحة التحكم",
    Icon: GoHome,
    home: true,
  },
  {
    href: "/dashboard/services",
    name: "الخدمات",
    Icon: MdDesignServices,
  },
  {
    href: "/dashboard/categories",
    name: "الأصناف",
    Icon: MdOutlineCategory,
  },
  {
    href: "/dashboard/inventory",
    name: "المخزون",
    Icon: MdOutlineInventory2,
  },
  {
    href: "/dashboard/orders",
    name: "الطلبيات",
    Icon: FaFileInvoice,
  },
  {
    href: "/dashboard/settings",
    name: "الإعدادات",
    Icon: IoSettingsOutline,
  },
];

// NavigationRailItem component
const NavigationRailItem = ({
  href,
  collapsed = false,
  Icon,
  name,
  onClick,
}: {
  href: string;
  collapsed?: boolean;
  Icon: IconType;
  name: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  const pathname = usePathname();
  return (
    <Link
      aria-label={name}
      onClick={onClick}
      className={cn(
        "flex justify-between hover:bg-primary/10 px-4 py-2 w-[80%] mx-auto items-center gap-1 sm:gap-2",
        "whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        collapsed && "justify-center w-full rounded-none",
        pathname === href && "text-primary bg-primary/20",
        pathname.startsWith(href) && "text-primary bg-primary/20"
      )}
      href={href}
    >
      {!collapsed && (
        <div>
          <span>{name}</span>
        </div>
      )}
      <div>
        <Icon size={20} />
      </div>
    </Link>
  );
};

// NavigationRailHomeItem component
const NavigationRailHomeItem = ({
  href,
  collapsed,
  Icon,
  name,
  onClick,
}: {
  href: string;
  collapsed: boolean;
  Icon: IconType;
  name: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={onClick}
      aria-label={name}
      className={cn(
        "flex justify-between hover:bg-primary/10 px-4 py-2 w-[80%] mx-auto items-center gap-1 sm:gap-2",
        "whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        collapsed && "justify-center w-full rounded-none",
        href === pathname && "text-primary bg-primary/20"
      )}
      href={href}
    >
      {!collapsed && (
        <div>
          <span>{name}</span>
        </div>
      )}
      <div>
        <Icon size={20} />
      </div>
    </Link>
  );
};

// Sidebar NavigationRail
const NavigationRail = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "hsl(var(--secondary))",
        },
      }}
      rtl
      className="fixed top-0 right-0 bg-secondary h-screen"
      collapsed={collapsed}
    >
      <div
        className={cn(
          "w-full flex items-center justify-between px-2 py-2",
          collapsed && "justify-center px-0 py-2"
        )}
      >
        <Button
          dir="rtl"
          size={"icon"}
          variant={"ghost"}
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars />
        </Button>
      </div>
      <Menu>
        {navigationItems.map((item) =>
          item.home ? (
            <li className="my-2" key={item.href}>
              <NavigationRailHomeItem
                collapsed={collapsed}
                href={item.href}
                Icon={item.Icon}
                name={item.name}
              />
            </li>
          ) : (
            <li className="my-2" key={item.href}>
              <NavigationRailItem
                collapsed={collapsed}
                href={item.href}
                Icon={item.Icon}
                name={item.name}
              />
            </li>
          )
        )}
      </Menu>
    </Sidebar>
  );
};

// Sheet Navigation for mobile
export const DashboardNavigation = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger className="block md:hidden">
        <Button asChild variant={"ghost"} size={"icon"}>
          <HiMiniBars2 size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="w-full mt-10">
          <ul className="flex items-center flex-col h-full text-center justify-center gap-5 w-full">
            {navigationItems.map((item) =>
              item.home ? (
                <li className="my-2 w-full" key={item.href}>
                  <NavigationRailHomeItem
                    href={item.href}
                    Icon={item.Icon}
                    name={item.name}
                    collapsed={false}
                    onClick={toggleOpen}
                  />
                </li>
              ) : (
                <li className="w-full" key={item.href}>
                  <NavigationRailItem
                    href={item.href}
                    Icon={item.Icon}
                    name={item.name}
                    onClick={toggleOpen}
                  />
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="flex justify-center items-center flex-col gap-1"></div>
      </SheetContent>
    </Sheet>
  );
};

export const DashboardHeader = () => {
  return (
    <header className="w-full max-sm:flex justify-between items-center hidden bg-background px-4 py-2">
      <DashboardNavigation />
      {/* <ToggleTheme /> */}
    </header>
  );
};

export default NavigationRail;
