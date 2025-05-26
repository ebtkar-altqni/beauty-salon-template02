import { getServiceById, getServices } from "@/database/services";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import type { Metadata } from "next";

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service: { id: string }) => ({
    id: service.id,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const service = await getServiceById((await params).id);
  return {
    title: service
      ? `${service.title} | مركز ريري للتجميل`
      : "الخدمة غير موجودة | مركز ريري للتجميل",
    description: service
      ? service.info
      : "صفحة خدمة غير موجودة في مركز ريري للتجميل.",
  };
}

const ServicePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const service = await getServiceById(id);
  if (!service) {
    return notFound();
  }
  return (
    <main>
      <div
        className="max-w-3xl mx-auto py-10 px-4 min-h-[75vh]"
        dir="rtl"
        lang="ar"
      >
        <Breadcrumb className="my-2" dir="rtl">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/`}>الرئيسية</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{service.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="mb-4">{service.info}</p>
        <div className="mb-4">
          <span className="font-semibold">السعر:</span> {service.price} د.ل
        </div>
        {service.body && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mt-6 mb-2">تفاصيل الخدمة</h2>
            <p>{service.body}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ServicePage;
