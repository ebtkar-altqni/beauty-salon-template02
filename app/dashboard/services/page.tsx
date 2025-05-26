import FacultyTable from "@/components/reusable-table";
import { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { getServices } from "@/database/services";
import ServicesCols from "./components/services-cols";
import type { Metadata } from "next";
import { CustomLink } from "@/components/custom-link";

export const metadata: Metadata = {
  title: "إدارة الخدمات | لوحة التحكم",
  description: "صفحة إدارة الخدمات في لوحة تحكم مركز التجميل",
};

const page = async () => {
  const users = await getServices();

  return (
    <main className="max-sm:px-4">
      <div className=" flex md:justify-between  justify-start flex-col  md:flex-row md:items-center md:mx-2 my-2">
        <Breadcrumb className="my-2" dir="rtl">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/`}>الرئيسية</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/dashboard`}>لوحة التحكم</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>ادارة الخدمات</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CustomLink variant={"default"} href={"/dashboard/services/new"}>
          إضافة خدمة جديدة
        </CustomLink>
      </div>
      <div className=" my-4 md:container md:px-8">
        <Suspense fallback={"جاري التحميل"}>
          <FacultyTable
            searchPlaceholder="البحث بالاسم"
            data={users}
            columns={ServicesCols}
            searchQuery="fullName"
          />
        </Suspense>
      </div>
    </main>
  );
};

export default page;
