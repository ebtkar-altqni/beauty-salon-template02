import ContactUsForm from "@/app/(interface)/components/forms";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactSection: React.FC = () => (
  <section id="contact" className="py-12 bg-secondary" dir="rtl">
    <div className="container md:px-14 px-2 mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">تواصل معنا</h2>
      <p className="mb-8">
        يسعدنا تواصلكم معنا! يرجى تعبئة النموذج أدناه أو التواصل عبر قنوات
        التواصل الاجتماعي.
      </p>
      <div className="flex max-lg:flex-col max-sm:gap-10 gap-5 justify-between w-full items-center">
        <div className="max-lg:w-full min-w-1/2 shadow-md bg-background rounded-2xl px-6 py-8">
          <ContactUsForm className="lg:w-2/3" locale="ar" />
        </div>
        <div className="bg-accent rounded-2xl px-6 py-8 h-full max-w-sm shadow-md">
          <div className="bg-accent block px-6 py-8  max-sm:w-full rounded-2xl mx-auto">
            <h3 className="font-semibold mt-4">عنوان الصالون:</h3>
            <p>سوق الجمعة, ليبيا</p>
            <h3 className="font-semibold mt-4">إتصل بنا:</h3>
            <p>
              الهاتف: <a href="tel:+218928666458">928666458</a> (218+)
            </p>
            <p>
              البريد الإلكتروني:{" "}
              <a href="mailto:contact@ebtkar.tech">contact@ebtkar.tech</a>
            </p>
            <h3 className="font-semibold mt-4">ساعات العمل:</h3>
            <p>الأحد - الخميس: 8.00 صباحاً إلى 2.00 مساءاً</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
