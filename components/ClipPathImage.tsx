import Image from "next/legacy/image";
import React from "react";

function ClipPathImage({ imageSrc }: { imageSrc: string }) {
  return (
    <>
      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-mask6" clipPathUnits="objectBoundingBox">
            <path
              d="M0 1H0.152466C0.185351 0.960002 0.327354 0.884713 0.505232 0.884713C0.683109 0.884713 0.818635 0.968237 0.849028 1H1V0.347104C0.985052 0.222406 0.838565 0.00477544 0.497758 6.98837e-05C0.156951 -0.00463567 0.0239163 0.229466 0 0.347104V1Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Image with clip path applied */}
      <figure
        style={{ clipPath: "url(#clip-mask6)" }}
        className="overflow-hidden h-56"
      >
        <Image
          width={400}
          height={400}
          src={imageSrc ?? "/test.jpg"}
          alt="Description"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
    </>
  );
}

export default ClipPathImage;
