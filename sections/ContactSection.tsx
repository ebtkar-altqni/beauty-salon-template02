import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100" dir="rtl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">تواصل معنا</h2>
        <p className="mb-8">
          يسعدنا تواصلكم معنا! يرجى تعبئة النموذج أدناه أو التواصل عبر قنوات
          التواصل الاجتماعي.
        </p>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              الاسم
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              رسالتك
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
          >
            إرسال الرسالة
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
