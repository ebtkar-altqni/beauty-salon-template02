// "use client";

// import Image, { ImageProps } from "next/image";
// import { FC, useEffect, useState } from "react";
// import { Skeleton } from "@/components/ui/skeleton"; // Use ShadCN Skeleton

// interface RemoteImageProps extends Omit<ImageProps, "src"> {
//   src: string;
//   fallbackSrc?: string;
//   retryCount?: number;
//   blurPlaceholder?: boolean;
// }

// const RemoteImage: FC<RemoteImageProps> = ({
//   src,
//   fallbackSrc = "/fallback.jpg",
//   retryCount = 2,
//   blurPlaceholder = false,
//   ...props
// }) => {
//   const [currentSrc, setCurrentSrc] = useState(
//     `/api/image-proxy?url=${encodeURIComponent(src)}`
//   );
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [tries, setTries] = useState(0);

//   const handleError = () => {
//     if (tries < retryCount) {
//       setTries((prev) => prev + 1);
//       setCurrentSrc(
//         `/api/image-proxy?url=${encodeURIComponent(src)}&retry=${tries + 1}`
//       );
//     } else {
//       setError(true);
//       setLoading(false);
//     }
//   };

//   const handleLoad = () => {
//     setLoading(false);
//   };

//   // Reset state when `src` changes
//   useEffect(() => {
//     setCurrentSrc(`/api/image-proxy?url=${encodeURIComponent(src)}`);
//     setError(false);
//     setLoading(true);
//     setTries(0);
//   }, [src]);

//   if (loading) {
//     return <Skeleton className="w-full h-full aspect-[16/9] rounded-xl" />;
//   }

//   return (
//     <Image
//       {...props}
//       alt={props.alt || "Remote Image"}
//       src={error ? fallbackSrc : currentSrc}
//       onError={handleError}
//       onLoadingComplete={handleLoad}
//       placeholder={blurPlaceholder ? "blur" : undefined}
//       blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWUlEQVR4nKWQSwrAMAgFvf9N/SW5gUVJQG27KF3M5jmIPphz2hjDVDUQkRuqapBFD5m5IFuGLhFRgbdcxDNExICSHGLf9l/8fGP/+EiP9bz2uNayXnrGc+cC9HN4AAD2j2YAAAAASUVORK5CYII="
//       //   blurDataURL={blurPlaceholder ? "/blur-placeholder.png" : undefined}
//     />
//   );
// };

// export default RemoteImage;

// "use client";

import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface RemoteImageProps extends Omit<ImageProps, "src"> {
  src: string; // this will be the remote URL
}

const RemoteImage: FC<RemoteImageProps> = ({ src, ...props }) => {
  const proxiedSrc = `/api/image-proxy?url=${encodeURIComponent(src)}`;

  return <Image {...props} alt={props.alt} src={proxiedSrc} />;
};

export default RemoteImage;
