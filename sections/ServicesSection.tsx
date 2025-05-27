import React from "react";
import ClipPathImage from "@/components/ClipPathImage";
import { getServices } from "@/database/services";
import { CustomLink } from "@/components/custom-link";

const ServicesSection: React.FC = async () => {
  const services = await getServices();
  return (
    <section
      id="services"
      className="py-16 bg-background max-w-3xl mx-auto"
      dir="rtl"
    >
      <div className="md:px-14 px-2 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-6 text-start rounded-t-[36px] rounded-b-md shadow-md"
            >
              <ClipPathImage imageSrc={service.poster} />
              <div className="flex justify-between  items-end">
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <span className="text-foreground/70 text-sm">
                  {service.price} د.ل
                </span>
              </div>
              <p className="mt-2 text-foreground/70">{service.info}</p>
              <div className="flex justify-between gap-2 items-center">
                <CustomLink
                  href={`/services/${service.id}`}
                  variant={"outline"}
                  className="w-1/2"
                >
                  معرفة المزيد
                </CustomLink>
                <CustomLink
                  variant={"default"}
                  href={`/make-appointment/check-out?id=${service.id}`}
                  className="w-1/2"
                >
                  احجز الاَن
                </CustomLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
