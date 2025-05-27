"use server";

import prisma from "@/lib/db";
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";

// Tag for cache revalidation
const SERVICES_TAG = "services";

// Get all services with unstable_cache
export const getServices = unstable_cache(
  async () => {
    try {
      return await prisma.service.findMany();
    } catch (error) {
      console.error("خطأ أثناء جلب الخدمات:", error);
      return [];
    }
  },
  [SERVICES_TAG],
  { tags: [SERVICES_TAG] }
);

// Get a single service by ID
export async function getServiceById(id: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { id },
    });
    return service ?? undefined;
  } catch (error) {
    console.error("خطأ أثناء جلب الخدمة:", error);
    return undefined;
  }
}

// Create a new service
export async function createService(data: {
  title: string;
  info: string;
  body?: string;
  poster: string;
  price: number;
}): Promise<{ message: string }> {
  try {
    const service = await prisma.service.create({
      data: {
        ...data,
      },
    });
    if (!service) {
      return { message: "فشل في إنشاء الخدمة" };
    }
    revalidateTag(SERVICES_TAG);
    return { message: "تم إنشاء الخدمة بنجاح" };
  } catch (error) {
    console.error("خطأ أثناء إنشاء الخدمة:", error);
    return { message: "فشل في إنشاء الخدمة" };
  }
}

// Update a service
export async function updateService(
  id: string,
  data: {
    title: string;
    info: string;
    body?: string;
    poster: string;
    price: number;
  }
): Promise<{ message: string }> {
  try {
    const service = await prisma.service.update({
      where: { id },
      data,
    });
    if (!service) {
      return { message: "فشل في تحديث الخدمة" };
    }
    revalidateTag(SERVICES_TAG);
    return { message: "تم تحديث الخدمة بنجاح" };
  } catch (error) {
    console.error("خطأ أثناء تحديث الخدمة:", error);
    return { message: "فشل في تحديث الخدمة" };
  }
}

// Delete a service
export async function deleteService(id: string): Promise<{ message: string }> {
  try {
    const service = await prisma.service.delete({
      where: { id },
    });
    if (!service) {
      return { message: "فشل في حذف الخدمة" };
    }
    revalidateTag(SERVICES_TAG);
    return { message: "تم حذف الخدمة بنجاح" };
  } catch (error) {
    console.error("خطأ أثناء حذف الخدمة:", error);
    return { message: "فشل في حذف الخدمة" };
  }
}

// Example array of real services data
// const services = [
//   {
//     id: "1",
//     title: "تنظيف البشرة العميق",
//     info: "جلسة تنظيف عميق للبشرة باستخدام منتجات طبيعية.",
//     body: "تتضمن الجلسة تنظيف المسام، إزالة الرؤوس السوداء، تقشير لطيف، وترطيب مكثف.",
//     poster: "/images/services/skin-cleaning.jpg",
//     price: 150,
//   },
//   {
//     id: "2",
//     title: "مساج استرخائي",
//     info: "جلسة مساج استرخائي لمدة 60 دقيقة.",
//     body: "يعمل المساج على تخفيف التوتر وتحسين الدورة الدموية باستخدام زيوت عطرية.",
//     poster: "/images/services/relax-massage.jpg",
//     price: 200,
//   },
//   {
//     id: "3",
//     title: "عناية بالأظافر (مانيكير وباديكير)",
//     info: "جلسة عناية كاملة بالأظافر والجلد المحيط بها.",
//     body: "تشمل تنظيف، تقليم، تلميع، وترطيب اليدين والقدمين.",
//     poster: "/images/services/nail-care.jpg",
//     price: 120,
//   },
//   {
//     id: "4",
//     title: "تسريح وصبغ الشعر",
//     info: "خدمة تسريح وصبغ الشعر بأحدث الصيحات.",
//     body: "يتم استخدام منتجات عالية الجودة للحفاظ على صحة الشعر ولمعانه.",
//     poster: "/images/services/hair-styling.jpg",
//     price: 250,
//   },
//   {
//     id: "5",
//     title: "إزالة الشعر بالشمع",
//     info: "إزالة الشعر غير المرغوب فيه باستخدام الشمع الطبيعي.",
//     body: "خدمة سريعة وفعالة مع عناية بالبشرة بعد الإزالة.",
//     poster: "/images/services/waxing.jpg",
//     price: 80,
//   },
// ];
