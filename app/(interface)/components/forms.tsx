"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import RemoteImage from "@/components/remote-image";
import { DatetimePicker } from "@/components/datetime-picker";
import { Service } from "@/generated/prisma";
import React from "react";
import Form from "@/components/form";
import { createAppointmentAction } from "@/app/dashboard/appiontments/actions";

import { Textarea } from "@/components/ui/textarea";
import { newContactAction } from "../actions";
import { cn } from "@/lib/utils";

const translations = {
  ar: {
    submit: "ارسال",
    fullName: "الاسم",
    fullNamePlaceholder: "اسمك",
    fullNameHint: "ادخل اسمك هنا",
    phone: "رقم الهاتف",
    phonePlaceholder: "رقم هاتفك",
    phoneHint: "ادخل رقم هاتفك هنا",
    email: "البريد الإلكتروني",
    emailPlaceholder: "بريدك الإلكتروني",
    emailHint: "ادخل بريدك الإلكتروني هنا",
    content: "المحتوى",
    contentPlaceholder: "ادخل المحتوى الخاص بك",
    contentHint: "يمكنك إدخال أي ملاحظات أو تفاصيل هنا",
  },
  en: {
    submit: "Send",
    fullName: "Full Name",
    fullNamePlaceholder: "Your name",
    fullNameHint: "Enter your full name",
    phone: "Phone Number",
    phonePlaceholder: "Your phone number",
    phoneHint: "Enter your phone number",
    email: "Email",
    emailPlaceholder: "Your email address",
    emailHint: "Enter your email address",
    content: "Message",
    contentPlaceholder: "Enter your message",
    contentHint: "You can enter any notes or details here",
  },
};

const ContactUsForm = ({
  locale = "ar",
  className,
}: {
  locale?: "ar" | "en";
  className?: string;
}) => {
  const t = translations[locale];

  return (
    <Form
      action={newContactAction}
      submitClass="flex md:w-full lg:w-2/3 sm:w-full "
      dontReplace
      className="w-full"
      submit={t.submit}
    >
      <div className={cn("flex flex-col gap-4 text-start", className)}>
        <div>
          <Label htmlFor="fullName">{t.fullName}</Label>
          <Input
            required
            placeholder={t.fullNamePlaceholder}
            type="text"
            name="fullName"
            id="fullName"
            className="mt-2"
          />
          <span className="text-xs mt-1">{t.fullNameHint}</span>
        </div>

        <div>
          <Label htmlFor="phone">{t.phone}</Label>
          <Input
            dir={locale === "ar" ? "rtl" : "ltr"}
            required
            placeholder={t.phonePlaceholder}
            type="tel"
            name="phone"
            id="phone"
            className="mt-2"
          />
          <span className="text-xs mt-1">{t.phoneHint}</span>
        </div>

        <div>
          <Label htmlFor="email">{t.email}</Label>
          <Input
            required
            placeholder={t.emailPlaceholder}
            type="email"
            name="email"
            id="email"
            className="mt-2"
          />
          <span className="text-xs mt-1">{t.emailHint}</span>
        </div>

        <div>
          <Label htmlFor="content">{t.content}</Label>
          <Textarea
            name="content"
            required
            placeholder={t.contentPlaceholder}
            id="content"
            className="mt-2"
          />
          <span className="text-xs mt-1">{t.contentHint}</span>
        </div>
      </div>
    </Form>
  );
};

export default ContactUsForm;

export const CreateAppiontmentForm = ({ service }: { service?: Service }) => {
  const [date, setDate] = React.useState<Date>(new Date(Date.now()));
  return (
    <Form
      action={createAppointmentAction}
      dontReplace
      submit="إرسال الطلب"
      submitClass="w-full"
      className="w-full"
    >
      <div className="mb-4">
        <Label htmlFor="name" className="block mb-1 font-medium">
          الاسم الكامل
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="أدخل اسمك الكامل"
          required
          dir="rtl"
        />
      </div>
      <input type="hidden" name="website" /> {/* Honeypot */}
      <div className="mb-4">
        <Label htmlFor="phone" className="block mb-1 font-medium">
          رقم الهاتف
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          placeholder="أدخل رقم هاتفك"
          required
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
      {service && (
        <div className="my-6">
          <input type="hidden" name="serviceId" value={service.id} />
          <span className="block mb-1 font-medium">الخدمة المطلوبة</span>
          <div className="flex justify-between">
            <div
              className="overflow-hi
        dden rounded-md h-12 w-12 aspect-square"
            >
              <RemoteImage
                src={service.poster}
                alt={`${service.title}-image`}
                width={100}
                height={100}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div>
              <span className="block font-medium">{service.title}</span>
              <span className="text-muted-foreground">
                {service.price} دينار
              </span>
            </div>
          </div>
        </div>
      )}
    </Form>
  );
};
