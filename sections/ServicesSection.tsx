import React from "react";
// import Image from "next/image";
import ClipPathImage from "@/components/ClipPathImage";

const services = [
  {
    title: "تصفيف الشعر",
    description: "خدمات تصفيف شعر احترافية لجميع المناسبات.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", // hair styling
  },
  {
    title: "العناية بالبشرة",
    description: "علاجات وجه منعشة لتعزيز إشراقتك الطبيعية.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", // facial/skin care
  },
  {
    title: "العناية بالأظافر",
    description: "جلسات مانيكير وباديكير للحفاظ على جمال أظافرك.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // nails
  },
  {
    title: "المكياج",
    description: "تطبيق مكياج احترافي للمناسبات الخاصة.",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80", // makeup
  },
  {
    title: "البلازما الجلسه",
    description: "جلسات البلازما لتحفيز نمو الشعر وتجديد البشرة.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80", // plasma therapy
  },
  {
    title: "الميزو",
    description: "جلسات الميزوثيرابي لتحسين نضارة البشرة والشعر.",
    image:
      "https://images.unsplash.com/photo-1512255967900-c1c1b0b0a0b9?auto=format&fit=crop&w=600&q=80", // mesotherapy
  },
  {
    title: "البوستر الجلسه",
    description: "جلسات البوستر لتعزيز صحة البشرة والشعر.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80", // booster session
  },
  {
    title: "خيوط شعر",
    description: "علاج خيوط الشعر لتحسين كثافة الشعر ومظهره.",
    image:
      "https://images.unsplash.com/photo-1519415943484-cfbdfb6086d4?auto=format&fit=crop&w=600&q=80", // hair threads
  },
  {
    title: "جلسة الاكسزوم",
    description: "جلسات الاكسزوم لتجديد خلايا البشرة والشعر.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80", // exosome session
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-background container" dir="rtl">
      <div className="container md:px-14 px-2 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
              <ClipPathImage imageSrc={service.image} />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
