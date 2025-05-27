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
import { UpdateAppointmentForm } from "../../components/forms";
import { getAppointmentById, getAppointments } from "@/database/appointments";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const appointments = await getAppointments();
  return appointments.map((appointment: { id: string }) => ({
    id: appointment.id,
  }));
}

// Generate metadata for each appointment edit page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const appointment = await getAppointmentById((await params).id);
  return {
    title: appointment
      ? `تعديل الموعد: ${appointment.name} | لوحة التحكم`
      : "تعديل الموعد | لوحة التحكم",
    description: appointment
      ? `صفحة تعديل الموعد للعميل "${appointment.name}" في مركز ريري للتجميل.`
      : "صفحة تعديل الموعد في مركز ريري للتجميل.",
  };
}

const EditAppointmentPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const appointment = await getAppointmentById(id);
  if (!appointment) {
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
              <Link href="/dashboard/appiontments">المواعيد</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>تعديل الموعد</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-6">تعديل الموعد</h1>
      <UpdateAppointmentForm data={appointment} />
    </main>
  );
};

export default EditAppointmentPage;
