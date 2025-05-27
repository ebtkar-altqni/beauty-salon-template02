"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  createAppointmentAction,
  updateAppointmentAction,
  deleteAppointmentAction,
} from "../actions";
import { Textarea } from "@/components/ui/textarea";
import Form from "@/components/form";
import AccessibleDialogForm from "@/components/accible-dialog-form";
import { useState } from "react";
import { Appointment } from "@/generated/prisma";
import { DatetimePicker } from "@/components/datetime-picker";
import React from "react";

export const CreateAppointmentForm = () => {
  return (
    <Form
      submit="إنشاء"
      dontReplace
      action={createAppointmentAction}
      replaceLink="/dashboard/appiontments"
      success="تم إنشاء الموعد بنجاح"
    >
      <div className="grid gap-4">
        <div>
          <Label htmlFor="name">اسم العميل</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="أدخل اسم العميل"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="أدخل رقم الهاتف"
            required
            dir="rtl"
          />
        </div>
        <div>
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="أدخل البريد الإلكتروني"
          />
        </div>
        <div>
          <Label htmlFor="date">تاريخ ووقت الموعد</Label>
          <Input type="datetime-local" name="date" id="date" required />
        </div>
        <div>
          <Label htmlFor="serviceId">معرف الخدمة</Label>
          <Input
            type="text"
            name="serviceId"
            id="serviceId"
            placeholder="أدخل معرف الخدمة"
            required
          />
        </div>
        <div>
          <Label htmlFor="notes">ملاحظات</Label>
          <Textarea
            name="notes"
            id="notes"
            placeholder="أدخل ملاحظات (اختياري)"
          />
        </div>
      </div>
    </Form>
  );
};

export const UpdateAppointmentForm = ({ data }: { data: Appointment }) => {
  const [date, setDate] = React.useState<Date>(new Date(data.date));

  return (
    <Form
      submit="تحديث"
      dontReplace
      action={updateAppointmentAction}
      replaceLink="/dashboard/appiontments"
      success="تم تحديث الموعد بنجاح"
      submitClass="md:w-1/2 mt-5"
    >
      <div className="grid gap-4">
        <Input type="hidden" name="id" value={data.id} />
        <div>
          <Label htmlFor="name">اسم العميل</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="أدخل اسم العميل"
            required
            defaultValue={data.name}
          />
        </div>
        <div>
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="أدخل رقم الهاتف"
            required
            defaultValue={data.phone}
            dir="rtl"
          />
        </div>

        <div className="mb-4">
          <input type="hidden" name="date" value={date.toISOString()} />

          <span className="block mb-1 font-medium">التاريخ والوقت</span>
          <DatetimePicker
            className="w-full flex justify-between"
            value={date}
            onChange={(newDate) => {
              if (newDate) {
                setDate(newDate);
              }
            }}
            placeholders={{
              days: "اليوم",
              months: "الشهر",
              years: "السنة",
              hours: "الساعة",
              "am/pm": "ص/م",
              minutes: "الدقائق",
              seconds: "الثواني",
            }}
            dtOptions={{
              maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
              minDate: new Date(Date.now()),
            }}
            //   onChange={(date) => console.log(date)}
            format={[["days", "months", "years"], []]}
          />
        </div>
        {/* <div>
          <Label htmlFor="serviceId">معرف الخدمة</Label>
          <Input
            type="text"
            name="serviceId"
            id="serviceId"
            placeholder="أدخل معرف الخدمة"
            required
            defaultValue={data.serviceId}
          />
        </div> */}
        <div>
          <Label htmlFor="notes">ملاحظات</Label>
          <Textarea
            name="notes"
            id="notes"
            placeholder="أدخل ملاحظات (اختياري)"
            defaultValue={data?.notes ?? ""}
          />
        </div>
      </div>
    </Form>
  );
};

export const DeleteAppointmentForm = ({ id }: { id: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AccessibleDialogForm
      submit="حذف"
      open={open}
      setOpen={setOpen}
      dontReplace
      trigger={<button>حذف الموعد</button>}
      action={deleteAppointmentAction}
      title="حذف الموعد"
      description="هل أنت متأكد أنك تريد حذف هذا الموعد؟ هذا الإجراء لا يمكن التراجع عنه."
      discardVariant={"default"}
      submitVariant={"outline"}
    >
      <Input type="hidden" name="id" value={id} />
    </AccessibleDialogForm>
  );
};
