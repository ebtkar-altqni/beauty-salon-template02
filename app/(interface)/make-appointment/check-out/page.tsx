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

export const metadata = {
  title: "إتمام الحجز | مركز ريري للتجميل",
  description: "صفحة إتمام الحجز لخدمات مركز ريري للتجميل.",
};

const CheckOutAppointmentPage = () => {
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
              <Link href="/make-appointment">حجز موعد</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>إتمام الحجز</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-6">إتمام الحجز</h1>
      {/* يمكنك إضافة نموذج أو تفاصيل الحجز هنا */}
      <div className="bg-muted rounded-lg p-6 shadow">
        <p className="mb-4">
          يرجى مراجعة تفاصيل الحجز الخاصة بك قبل تأكيد الموعد. سيتم التواصل معك
          لتأكيد الحجز.
        </p>
        {/* مثال على عرض تفاصيل الحجز */}
        <ul className="mb-4 list-disc pr-5">
          <li>اسم الخدمة: ...</li>
          <li>التاريخ والوقت: ...</li>
          <li>الاسم: ...</li>
          <li>رقم الهاتف: ...</li>
        </ul>
        <button className="btn btn-primary w-full">تأكيد الحجز</button>
      </div>
    </main>
  );
};

export default CheckOutAppointmentPage;
