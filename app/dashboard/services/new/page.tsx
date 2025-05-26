import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { CreateServiceForm } from "../components/forms"; // تأكد من وجود هذا المكون أو أنشئه

export const metadata = {
  title: "إضافة خدمة جديدة | لوحة التحكم",
  description: "صفحة إضافة خدمة جديدة في مركز ريري للتجميل.",
};

const NewServicePage = () => {
  return (
    <main className="max-w-2xl mx-auto py-8 px-4" dir="rtl">
      <Breadcrumb className="mb-6" dir="rtl">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">الرئيسية</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">لوحة التحكم</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard/services">الخدمات</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>إضافة خدمة جديدة</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-6">إضافة خدمة جديدة</h1>
      <CreateServiceForm />
    </main>
  );
};

export default NewServicePage;
