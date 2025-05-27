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
import { getServiceById } from "@/database/services";
import { CreateAppiontmentForm } from "../../components/forms";

export const metadata = {
  title: "إتمام الحجز | مركز ريري للتجميل",
  description: "صفحة إتمام الحجز لخدمات مركز ريري للتجميل.",
};

const CheckOutAppointmentPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) => {
  const serviceId = (await searchParams)?.id;
  const service = await getServiceById(serviceId || "");

  return (
    <div className="w-full bg-secondary">
      <main className="max-w-2xl mx-auto py-8 max-md:px-2 px-4" dir="rtl">
        <Breadcrumb dir="rtl">
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
        <h1 className="text-2xl font-bold my-6">إتمام الحجز</h1>
        {/* يمكنك إضافة نموذج أو تفاصيل الحجز هنا */}
        <div
          className="max-w-2xl max-md:max-w-full mx-auto py-8 md:px-4"
          dir="rtl"
        >
          {/* يمكنك إضافة نموذج حجز الموعد هنا */}
          <div className="bg-background rounded-lg px-8 py-6 shadow">
            <p className="mb-4">
              يرجى تعبئة النموذج التالي لحجز موعدك في مركز ريري للتجميل. سنقوم
              بالتواصل معك لتأكيد الحجز.
            </p>
            {/* نموذج الحجز */}
            <CreateAppiontmentForm service={service} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckOutAppointmentPage;
