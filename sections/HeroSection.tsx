import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen"
      dir="rtl"
    >
      <Image
        src={"/hero.jpg"}
        alt="مركز ريري للتجميل"
        fill
        priority
        className="z-0 object-cover"
      />
      <div className=" inset-0 bg-black/80 w-full h-full z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4 text-white">
          مرحباً بكم في مركز ريري للتجميل
        </h1>
        <p className="text-lg mb-8 text-white">
          جمالك هو شغفنا. اكتشفي خدماتنا ودعينا ندللك.
        </p>
        <Link
          href="#services"
          scroll
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition"
        >
          استكشفي الخدمات
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
