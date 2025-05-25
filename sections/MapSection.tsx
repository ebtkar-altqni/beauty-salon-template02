import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MapSection: React.FC = () => (
  <section id="gallery" className="" dir="rtl">
    <div className="co">
      <div className="mt-4 flex justify-center">
        <Suspense fallback={<Skeleton className="h-76 w-full"></Skeleton>}>
          <iframe
            title="موقع مركز ريري للتجميل"
            src="https://www.google.com/maps?q=Riri+Beauty+Center&output=embed"
            // width="300"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </Suspense>
      </div>
    </div>
  </section>
);

export default MapSection;
