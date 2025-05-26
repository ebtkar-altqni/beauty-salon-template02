"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  createServiceAction,
  updateServiceAction,
  deleteServiceAction,
} from "../actions";
import { CustomDropzoneUploadImage } from "@/components/custom-dropzone";
import { Textarea } from "@/components/ui/textarea";
import Form from "@/components/form";
import { Service } from "@/generated/prisma";
import AccessibleDialogForm from "@/components/accible-dialog-form";
import { useState } from "react";

export const CreateServiceForm = () => {
  return (
    <Form
      submit="إنشاء"
      dontReplace
      action={createServiceAction}
      replaceLink="/dashboard/services"
      success="تم إنشاء الخدمة بنجاح"
    >
      <div className="grid gap-4">
        <CustomDropzoneUploadImage name="poster" title="صورة المنتج" />

        <div>
          <Label htmlFor="title">اسم الخدمة</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="أدخل اسم الخدمة"
            required
          />
        </div>
        <div>
          <Label htmlFor="price">سعر الخدمة</Label>
          <Input
            type="number"
            name="price"
            id="price"
            placeholder="أدخل سعر الخدمة"
            required
          />
        </div>
        <div>
          <Label htmlFor="info">معلومات اساسية</Label>
          <Input
            type="text"
            name="info"
            id="info"
            placeholder="أدخل معلومات اساسية"
            required
            dir="rtl"
            max={200}
          />
        </div>

        <div>
          <Label htmlFor="body">وصف الخدمة</Label>
          <Textarea
            name="body"
            id="body"
            placeholder="أدخل وصف الخدمة"
            required
            dir="rtl"
          />
        </div>
      </div>
    </Form>
  );
};
export const UpdateServiceForm = ({ data }: { data: Service }) => {
  return (
    <Form
      submit="تحديث"
      dontReplace
      action={updateServiceAction}
      replaceLink="/dashboard/services"
      success="تم تحديث الخدمة بنجاح"
      submitClass="md:w-1/2 mt-5"
    >
      <div className="grid gap-4">
        <Input type="hidden" name="id" value={data.id} />
        <CustomDropzoneUploadImage
          name="poster"
          title="صورة المنتج"
          defaultImage={data.poster}
        />

        <div>
          <Label htmlFor="title">اسم الخدمة</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="أدخل اسم الخدمة"
            required
            defaultValue={data.title}
          />
        </div>
        <div>
          <Label htmlFor="price">سعر الخدمة</Label>
          <Input
            type="number"
            name="price"
            id="price"
            placeholder="أدخل سعر الخدمة"
            required
            defaultValue={data.price}
          />
        </div>
        <div>
          <Label htmlFor="info">معلومات اساسية</Label>
          <Input
            type="text"
            name="info"
            id="info"
            placeholder="أدخل معلومات اساسية"
            required
            dir="rtl"
            max={200}
            defaultValue={data.info}
          />
        </div>

        <div>
          <Label htmlFor="body">وصف الخدمة</Label>
          <Textarea
            name="body"
            id="body"
            placeholder="أدخل وصف الخدمة"
            required
            dir="rtl"
            defaultValue={data.body || ""}
          />
        </div>
      </div>
    </Form>
  );
};
export const DeleteServiceForm = ({ id }: { id: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AccessibleDialogForm
      submit="حذف"
      open={open}
      setOpen={setOpen}
      dontReplace
      trigger={<button>حذف الخدمة</button>}
      action={deleteServiceAction}
      title="حذف الخدمة"
      description="هل أنت متأكد أنك تريد حذف هذه الخدمة؟ هذا الإجراء لا يمكن التراجع عنه."
      discardVariant={"default"}
      submitVariant={"outline"}
    >
      <Input type="hidden" name="id" value={id} />
    </AccessibleDialogForm>
  );
};
