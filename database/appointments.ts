"use server";

import prisma from "@/lib/db";
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";

// Tag for cache revalidation
const APPOINTMENTS_TAG = "appointments";

// Get all appointments with unstable_cache
export const getAppointments = unstable_cache(
  async () => {
    try {
      return await prisma.appointment.findMany();
    } catch (error) {
      console.error("خطأ أثناء جلب المواعيد:", error);
      return [];
    }
  },
  [APPOINTMENTS_TAG],
  { tags: [APPOINTMENTS_TAG] }
);

// Get a single appointment by ID
export async function getAppointmentById(id: string) {
  try {
    const appointment = await prisma.appointment.findUnique({
      where: { id },
    });
    return appointment ?? undefined;
  } catch (error) {
    console.error("خطأ أثناء جلب الموعد:", error);
    return undefined;
  }
}

// Create a new appointment
export async function createAppointment(data: {
  name: string;
  phone: string;
  // email?: string;
  date: Date;
  notes?: string;
  serviceId: string;
}): Promise<{ message: string }> {
  try {
    const appointment = await prisma.appointment.create({
      data: {
        ...data,
      },
    });
    if (!appointment) {
      return { message: "فشل في إنشاء الموعد" };
    }
    revalidateTag(APPOINTMENTS_TAG);
    return { message: "تم إنشاء الموعد بنجاح" };
  } catch (error) {
    console.error("خطأ أثناء إنشاء الموعد:", error);
    return { message: "فشل في إنشاء الموعد" };
  }
}

// Update an appointment
export async function updateAppointment(
  id: string,
  data: {
    name: string;
    phone: string;
    // email?: string;
    date: Date;
    notes?: string;
    serviceId: string;
  }
): Promise<{ message: string }> {
  try {
    const appointment = await prisma.appointment.update({
      where: { id },
      data,
    });
    if (!appointment) {
      return { message: "فشل في تحديث الموعد" };
    }
    revalidateTag(APPOINTMENTS_TAG);
    return { message: "تم تحديث الموعد بنجاح" };
  } catch (error) {
    console.error("خطأ أثناء تحديث الموعد:", error);
    return { message: "فشل في تحديث الموعد" };
  }
}

// Delete an appointment
export async function deleteAppointment(
  id: string
): Promise<{ message: string }> {
  try {
    const appointment = await prisma.appointment.delete({
      where: { id },
    });
    if (!appointment) {
      return { message: "فشل في حذف الموعد" };
    }
    revalidateTag(APPOINTMENTS_TAG);
    return { message: "تم حذف الموعد بنجاح" };
  } catch (error) {
    console.error("خطأ أثناء حذف الموعد:", error);
    return { message: "فشل في حذف الموعد" };
  }
}
