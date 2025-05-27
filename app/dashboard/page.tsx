import { getServices } from "@/database/services";
import InfoCard from "./components/info-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  MdDesignServices,
  MdOutlineBookOnline,
  MdOutlineMessage,
} from "react-icons/md";
import { getAppointments } from "@/database/appointments";
import { getMsgs } from "@/database/contact";

const dashboardPage = async () => {
  const services = await getServices();
  const appiontments = await getAppointments();
  const messages = await getMsgs();
  return (
    <main className=" my-4 md:container md:px-8 px-2">
      <Breadcrumb className="my-2" dir="rtl">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/`}>الرئيسية</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>لوحة التحكم</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="font-bold text-right text-2xl">لوحة التحكم</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-3 md:gap-2 gap-1 lg:gap-4 my-4 sm:grid-cols-2">
        <InfoCard
          className="bg-red-500"
          title="الخدمات"
          icon={<MdDesignServices size={24} />}
          content={`${services.length}`}
          href="/dashboard/trainers"
        >
          كل الخدمات
        </InfoCard>
        <InfoCard
          href="/dashboard/orders"
          className=" bg-sky-500"
          title="الطلبات اونلاين"
          icon={<MdOutlineBookOnline size={24} />}
          content={`${appiontments.length}`}
        >
          كل الطلبات اونلاين
        </InfoCard>
        <InfoCard
          href="/dashboard/contacts"
          className=" bg-green-500"
          title="
        طلبات المراسلة"
          icon={<MdOutlineMessage size={24} />}
          content={`${messages.length}`}
        >
          كل طلبات المراسلة
        </InfoCard>
      </div>
    </main>
  );
};

export default dashboardPage;
