import { z } from "zod";
import {
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "@/database/appointments";
import { getClientIP } from "@/lib/get-ip";

// Simple in-memory rate limit (good enough for small sites)
const ipSubmissions = new Map<string, number>();

// Create Appointment Action
export async function createAppointmentAction(
  _: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const schema = z.object({
      name: z.string().min(2, "الاسم مطلوب"),
      phone: z.string().min(7, "رقم الهاتف مطلوب"),
      website: z.string().optional(), // Honeypot
      date: z.string().min(1, "تاريخ الموعد مطلوب"),
      notes: z.string().optional(),
      serviceId: z.string().min(1, "الخدمة مطلوبة"),
    });

    const data = schema.safeParse({
      name: formData.get("name") || "",
      phone: formData.get("phone") || "",
      website: formData.get("website") || "",
      date: formData.get("date") || "",
      notes: formData.get("notes") || "",
      serviceId: formData.get("serviceId") || "",
    });

    if (!data.success) {
      console.log(data);
      return {
        message: data.error.errors.map((err) => err.message).join(", "),
      };
    }

    const { name, phone, date, notes, serviceId, website } = data.data;
    if (website) {
      // Honeypot check
      return { message: "تم اكتشاف محاولة غير صالحة" };
    }

    // 🛡️ Rate limit based on IP
    const ip = (await getClientIP()) || "unknown";
    const now = Date.now();
    const lastSubmission = ipSubmissions.get(ip);
    if (lastSubmission && now - lastSubmission < 30_000) {
      return { message: "يرجى الانتظار قبل إرسال طلب آخر" };
    }
    ipSubmissions.set(ip, now);

    const res = await createAppointment({
      name,
      phone,
      // email: email || undefined,
      date: new Date(date),
      notes,
      serviceId,
    });
    return { message: res.message };
  } catch (error) {
    console.error("خطأ أثناء إنشاء الموعد:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}

// Update Appointment Action
export async function updateAppointmentAction(
  _: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const schema = z.object({
      id: z.string().min(1, "معرف الموعد مطلوب"),
      name: z.string().min(2, "الاسم مطلوب"),
      phone: z.string().min(7, "رقم الهاتف مطلوب"),
      // email: z.string().email("البريد الإلكتروني غير صالح").optional(),
      date: z.string().min(1, "تاريخ الموعد مطلوب"),
      notes: z.string().optional(),
      serviceId: z.string().min(1, "الخدمة مطلوبة"),
    });

    const data = schema.safeParse({
      id: formData.get("id") || "",
      name: formData.get("name") || "",
      phone: formData.get("phone") || "",
      // email: formData.get("email") || "",
      date: formData.get("date") || "",
      notes: formData.get("notes") || "",
      serviceId: formData.get("serviceId") || "",
    });

    if (!data.success) {
      return {
        message: data.error.errors.map((err) => err.message).join(", "),
      };
    }

    const { id, name, phone, date, notes, serviceId } = data.data;
    const res = await updateAppointment(id, {
      name,
      phone,
      // email: email || undefined,
      date: new Date(date),
      notes,
      serviceId,
    });
    return { message: res.message };
  } catch (error) {
    console.error("خطأ أثناء تحديث الموعد:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}

// Delete Appointment Action
export async function deleteAppointmentAction(
  _: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const schema = z.object({
      id: z.string().min(1, "معرف الموعد مطلوب"),
    });

    const data = schema.safeParse({
      id: formData.get("id") || "",
    });

    if (!data.success) {
      return {
        message: data.error.errors.map((err) => err.message).join(", "),
      };
    }

    const { id } = data.data;
    const res = await deleteAppointment(id);
    return { message: res.message };
  } catch (error) {
    console.error("خطأ أثناء حذف الموعد:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}

// 'use server';

// import { z } from 'zod';
// import { saveFormToDB } from './db';
