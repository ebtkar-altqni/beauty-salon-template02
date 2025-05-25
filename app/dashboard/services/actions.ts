import { z } from "zod";
import {
  createService,
  updateService,
  deleteService,
} from "@/database/services";

// Create Service Action
export async function createServiceAction(
  _: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const schema = z.object({
      title: z.string().min(3, "عنوان الخدمة مطلوب"),
      info: z.string().min(3, "معلومات الخدمة مطلوبة"),
      body: z.string().optional(),
      poster: z.string().min(1, "رابط صورة الخدمة مطلوب"),
    });

    const data = schema.safeParse({
      title: formData.get("title") || "",
      info: formData.get("info") || "",
      body: formData.get("body") || "",
      poster: formData.get("poster") || "",
    });

    if (!data.success) {
      return {
        message: data.error.errors.map((err) => err.message).join(", "),
      };
    }

    const { title, info, body, poster } = data.data;
    const res = await createService({ title, info, body, poster });
    return { message: res.message };
  } catch (error) {
    console.error("خطأ أثناء إنشاء الخدمة:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}

// Update Service Action
export async function updateServiceAction(
  _: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const schema = z.object({
      id: z.string().min(1, "معرف الخدمة مطلوب"),
      title: z.string().min(3, "عنوان الخدمة مطلوب"),
      info: z.string().min(3, "معلومات الخدمة مطلوبة"),
      body: z.string().optional(),
      poster: z.string().min(1, "رابط صورة الخدمة مطلوب"),
      slug: z.string().min(1, "عنوان الخدمة المميز مطلوب"),
    });

    const data = schema.safeParse({
      id: formData.get("id") || "",
      title: formData.get("title") || "",
      info: formData.get("info") || "",
      body: formData.get("body") || "",
      poster: formData.get("poster") || "",
      slug: formData.get("slug") || "",
    });

    if (!data.success) {
      return {
        message: data.error.errors.map((err) => err.message).join(", "),
      };
    }

    const { id, title, info, body, poster, slug } = data.data;
    const res = await updateService(id, { title, info, body, poster, slug });
    return { message: res.message };
  } catch (error) {
    console.error("خطأ أثناء تحديث الخدمة:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}

// Delete Service Action
export async function deleteServiceAction(
  _: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const schema = z.object({
      id: z.string().min(1, "معرف الخدمة مطلوب"),
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
    const res = await deleteService(id);
    return { message: res.message };
  } catch (error) {
    console.error("خطأ أثناء حذف الخدمة:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}
