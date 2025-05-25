import React from "react";

const AboutSection: React.FC = () => {
  return (
    // <section className="py-16">
    // </section>
    <div className="relative  bg-white w-full h-full">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#c84ed533_1px,#fff_1px)] bg-[size:16px_16px] "></div>
      <div className=" relative py-16">
        <div className="container  w-fit text-justify bg-secondary py-8 rounded-3xl shadow-xs mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            عن مركز ريري للتجميل
          </h2>
          <p className="text-lg mb-4">
            في مركز ريري للتجميل، نؤمن بإبراز جمالك الطبيعي. مهمتنا هي تقديم
            خدمات تجميلية عالية الجودة تلبي احتياجاتك الفردية.
          </p>
          <p className="text-lg mb-4">
            فريقنا من المحترفين ذوي الخبرة ملتزم بضمان شعورك بالراحة والتجدد.
            نستخدم أفضل المنتجات والتقنيات لتحقيق نتائج استثنائية.
          </p>
          <p className="text-lg">
            انضم إلينا في رحلة لاكتشاف جمالك الحقيقي ودعنا نساعدك على التألق!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
