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
import ClipPathImage from "@/components/ClipPathImage";
import { getServices } from "@/database/services";
import { CustomLink } from "@/components/custom-link";

export const metadata = {
  title: "حجز موعد | مركز ريري للتجميل",
  description: "احجز موعدك بسهولة في مركز ريري للتجميل.",
};

const MakeAppointmentPage = async () => {
  const services = await getServices();
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-6 text-start rounded-2xl shadow-md"
            >
              <ClipPathImage imageSrc={service.poster} />
              <div className="flex justify-between  items-end">
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <span className="text-foreground/70 text-sm">
                  {service.price} د.ل
                </span>
              </div>
              <p className="mt-2 text-foreground/70">{service.info}</p>
              <div className="flex justify-between gap-2 items-center">
                <CustomLink
                  href={`/services/${service.id}`}
                  variant={"outline"}
                  className="w-1/2"
                >
                  معرفة المزيد
                </CustomLink>
                <CustomLink
                  variant={"default"}
                  href={`/make-appointment/check-out?id=${service.id}`}
                  className="w-1/2"
                >
                  احجز الاَن
                </CustomLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MakeAppointmentPage;
