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

export const metadata: Metadata = {
  title: "شروط الخدمة | مركز ريري للتجميل",
  description: "تعرف على شروط وأحكام استخدام خدمات مركز ريري للتجميل.",
};

const TermsOfService: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4" dir="rtl" lang="ar">
    <Breadcrumb className="my-2" dir="rtl">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/`}>الرئيسية</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>شروط الخدمة</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <h1 className="text-3xl font-bold mb-4">شروط الخدمة</h1>
    <p className="mb-4">
      مرحبًا بكم في مركز ريري للتجميل. عند زيارتك لمركزنا أو استخدامك لموقعنا
      الإلكتروني، فإنك توافق على الشروط والأحكام التالية.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">المواعيد</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>
        يرجى الحضور في الوقت المحدد لموعدك. إذا تأخرت، قد يتم تقصير جلستك.
      </li>
      <li>يمكنك إعادة جدولة أو إلغاء المواعيد بالتواصل معنا مسبقًا.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">الخدمات</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>جميع الخدمات مقدمة من قبل مختصين مدربين.</li>
      <li>نحتفظ بالحق في رفض تقديم الخدمة لأي شخص بسبب سلوك غير لائق.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">الدفع</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>يجب دفع قيمة الخدمة عند تقديمها.</li>
      <li>نقبل الدفع نقدًا وطرق الدفع المحلية الأخرى.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">المسؤولية</h2>
    <p className="mb-4">
      مركز ريري للتجميل غير مسؤول عن أي ردود فعل تحسسية أو آثار جانبية ناتجة عن
      العلاجات. يرجى إبلاغنا بأي حساسية أو حالة طبية قبل الجلسة.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">تغييرات الشروط</h2>
    <p className="mb-4">
      قد نقوم بتحديث هذه الشروط من وقت لآخر. يرجى مراجعة موقعنا للاطلاع على أحدث
      نسخة.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">تواصل معنا</h2>
    <p>
      إذا كان لديك أي استفسار حول شروط الخدمة هذه، يرجى التواصل معنا في المركز
      أو من خلال نموذج التواصل على موقعنا.
    </p>
  </div>
);

export default TermsOfService;
