import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4" dir="rtl">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} مركز ريري للتجميل. جميع الحقوق
          محفوظة.
        </p>
        <div className="mt-2">
          <Link
            href="/privacy-policy"
            className="text-gray-400 hover:text-white mx-2"
          >
            سياسة الخصوصية
          </Link>
          <Link
            href="/terms-of-service"
            className="text-gray-400 hover:text-white mx-2"
          >
            الشروط والأحكام
          </Link>
        </div>
        <div className="mt-2 flex justify-center items-center space-x-4">
          <Link
            href="#"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="فيسبوك"
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="انستجرام"
          >
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="تيك توك"
          >
            <FaTiktok />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="سناب شات"
          >
            <FaSnapchatGhost />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="واتساب"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
