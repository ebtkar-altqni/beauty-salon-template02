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
import { UpdateServiceForm } from "../../components/forms";
import { getServiceById, getServices } from "@/database/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service: { id: string }) => ({
    id: service.id,
  }));
}

// Generate metadata for each service edit page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const service = await getServiceById((await params).id);
  return {
    title: service
      ? `تعديل الخدمة: ${service.title} | لوحة التحكم`
      : "تعديل الخدمة | لوحة التحكم",
    description: service
      ? `صفحة تعديل الخدمة "${service.title}" في مركز ريري للتجميل.`
      : "صفحة تعديل الخدمة في مركز ريري للتجميل.",
  };
}

const EditServicePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const service = await getServiceById(id);
  if (!service) {
    return notFound();
  }
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
            <BreadcrumbPage>تعديل الخدمة</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-6">تعديل الخدمة</h1>
      <UpdateServiceForm data={service} />
    </main>
  );
};

export default EditServicePage;
