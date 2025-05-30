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
  title: "سياسة الخصوصية | مركز ريري للتجميل",
  description:
    "تعرف على كيفية جمع واستخدام وحماية بياناتك في مركز ريري للتجميل.",
};

const PrivacyPolicy: React.FC = () => (
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
          <BreadcrumbPage>سياسة الخصوصية</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <h1 className="text-3xl font-bold mb-4">سياسة الخصوصية</h1>
    <p className="mb-4">
      في مركز ريري للتجميل، خصوصيتك مهمة لنا. توضح سياسة الخصوصية هذه كيف نجمع
      ونستخدم ونحمي معلوماتك الشخصية عند زيارتك لمركزنا أو استخدامك لموقعنا
      الإلكتروني.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">المعلومات التي نجمعها</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>
        البيانات الشخصية التي تقدمها عند حجز المواعيد (مثل الاسم، رقم الهاتف،
        وعنوان البريد الإلكتروني).
      </li>
      <li>المعلومات التي تقدمها من خلال نماذج التواصل أو التعليقات.</li>
      <li>
        بيانات الاستخدام الأساسية من موقعنا (مثل الصفحات التي تمت زيارتها ومدة
        البقاء).
      </li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">كيف نستخدم معلوماتك</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>لتأكيد وإدارة مواعيدك.</li>
      <li>للرد على استفساراتك وتعليقاتك.</li>
      <li>لتحسين خدماتنا وتجربة الموقع.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">مشاركة معلوماتك</h2>
    <p className="mb-4">
      لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا إذا كان ذلك مطلوبًا بموجب
      القانون أو لتقديم خدماتنا (مثل تأكيد المواعيد).
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">حقوقك</h2>
    <p className="mb-4">
      لديك الحق في طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. يرجى
      التواصل معنا إذا كان لديك أي استفسار.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">تواصل معنا</h2>
    <p>
      إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا في المركز
      أو من خلال نموذج التواصل على موقعنا.
    </p>
  </div>
);

export default PrivacyPolicy;
