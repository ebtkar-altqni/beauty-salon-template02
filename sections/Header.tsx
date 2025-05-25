import React from "react";
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
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            الرئيسية
          </Link>
          <Link
            href="/make-appointment"
            className="text-gray-500 hover:text-gray-900"
          >
            احجز الاَن
          </Link>
          <Link href="#services" className="text-gray-500 hover:text-gray-900">
            الخدمات
          </Link>
          <Link href="#about" className="text-gray-500 hover:text-gray-900">
            من نحن
          </Link>

          {/* <Link href="#gallery" className="text-gray-500 hover:text-gray-900">
            المعرض
          </Link> */}
          <Link href="#contact" className="text-gray-500 hover:text-gray-900">
            تواصل معنا
          </Link>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
