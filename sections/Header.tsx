import MobileNav from "@/app/(interface)/components/mobile-nav";
import { navLinks } from "@/lib/constants";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="bg-white shadow-sm" dir="rtl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="shrink-0">
          <h1 className="text-2xl font-bold text-gray-800">
            <Link href={"/"} className="text-primary">
              مركز ريري للتجميل
            </Link>{" "}
          </h1>
        </div>
        <nav className="hidden md:flex space-x-10  ml-10">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-gray-500 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </div>
  </header>
);

export default Header;
