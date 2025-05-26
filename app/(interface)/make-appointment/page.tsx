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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "حجز موعد | مركز ريري للتجميل",
  description: "احجز موعدك بسهولة في مركز ريري للتجميل.",
};

const MakeAppointmentPage = () => {
  return (
    <main className="bg-secondary">
      <div className="max-w-2xl mx-auto py-8 px-4" dir="rtl">
        <Breadcrumb className="mb-6" dir="rtl">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">الرئيسية</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>حجز موعد</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold mb-6">حجز موعد</h1>
        {/* يمكنك إضافة نموذج حجز الموعد هنا */}
        <div className="bg-background rounded-lg p-6 shadow">
          <p className="mb-4">
            يرجى تعبئة النموذج التالي لحجز موعدك في مركز ريري للتجميل. سنقوم
            بالتواصل معك لتأكيد الحجز.
          </p>
          {/* نموذج الحجز */}
          <form>
            <div className="mb-4">
              <Label htmlFor="name" className="block mb-1 font-medium">
                الاسم الكامل
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="أدخل اسمك الكامل"
                required
                dir="rtl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="phone" className="block mb-1 font-medium">
                رقم الهاتف
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="أدخل رقم هاتفك"
                required
                dir="rtl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="service" className="block mb-1 font-medium">
                الخدمة المطلوبة
              </Label>
              <Input
                type="text"
                id="service"
                name="service"
                placeholder="أدخل اسم الخدمة"
                required
                dir="rtl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="date" className="block mb-1 font-medium">
                التاريخ والوقت
              </Label>
              <Input
                type="datetime-local"
                id="date"
                name="date"
                required
                dir="rtl"
              />
            </div>
            <Button type="submit" className="w-full">
              إرسال الطلب
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default MakeAppointmentPage;
