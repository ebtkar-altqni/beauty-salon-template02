"use client";
import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMiniBars2 } from "react-icons/hi2";
import { navLinks } from "@/lib/constants";

const MobileNav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" type="button" className="md:hidden">
          <HiMiniBars2 size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%]" dir="rtl">
        <div className="flex justify-center items-center w-full h-full">
          <nav className="flex flex-col gap-6 px-4 text-center">
            {navLinks.map((link, i) => (
              <Link
                onClick={() => setOpen(!open)}
                key={i}
                href={link.href}
                scroll
                className="text-lg text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
