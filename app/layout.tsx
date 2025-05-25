import "./globals.css";
import { ReactNode } from "react";
import { Cairo } from "next/font/google";
import { cn } from "@/lib/utils";
const cairo = Cairo({
  weight: "400",
  subsets: ["arabic"],
  display: "auto",
});

// Example in a page file
export const metadata = {
  title: "مركز ريري للتجميل",
  description: "أفضل مركز تجميل في مدينتك.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // ...existing code...
    // ...existing code...
    <html lang="ar" dir="rtl">
      <body className={cn(cairo.className, cairo.style)}>{children}</body>
    </html>
  );
}
