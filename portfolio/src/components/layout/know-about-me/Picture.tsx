import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";

export const runtime = "edge";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  bottomFocused?: boolean;
}

function Picture({ src, alt, width, height, bottomFocused }: Props) {
  return (
    <div className="relative w-full h-[450px] sm:h-[650px]">
      {/* OUTER WRAPPER - handles overall height and responsiveness */}
      <div className="w-full h-full rounded-3xl overflow-hidden relative">
        {/* INNER WRAPPER - ensures image scaling and overflow control */}
        {bottomFocused ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`brightness-105 w-full h-full object-cover object-bottom`}
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(width, height)
            )}`}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`brightness-105 w-full h-full object-cover object-top`}
            priority
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(width, height)
            )}`}
          />
        )}
      </div>

      {/* ADDITIONAL SHAPES */}
      <Image
        src="/shapes/rectangle-horizontal.svg"
        alt="Horizontal rectangle"
        width={120}
        height={36}
        className="absolute -top-5 right-1 z-20"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <Image
        src="/shapes/rectangle-vertical.svg"
        alt="vertical rectangle"
        width={61}
        height={193}
        className="absolute -bottom-10 lg:bottom-8 left-0 lg:-left-10 z-20"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
    </div>
  );
}

export default Picture;
