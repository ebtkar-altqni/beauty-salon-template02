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
import { CreateAppointmentForm } from "../components/forms";

export const metadata = {
  title: "إضافة موعد جديد | لوحة التحكم",
  description: "صفحة إضافة موعد جديد في مركز ريري للتجميل.",
};

const NewAppointmentPage = () => {
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
              <Link href="/dashboard/appiontments">المواعيد</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>إضافة موعد جديد</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-6">إضافة موعد جديد</h1>
      <CreateAppointmentForm />
    </main>
  );
};

export default NewAppointmentPage;
