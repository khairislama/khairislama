import { shimmer, toBase64 } from "@/lib/image";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const runtime = "edge";

function Overview({
  image,
}: {
  image: {
    src: string;
    alt: string;
  };
}) {
  const translations = useTranslations("Projects");
  return (
    <div className="w-96 rounded-xl overflow-hidden hidden md:block">
      <Image
        src={image.src}
        alt={image.alt}
        width={1920}
        height={1080}
        className="object-cover w-full"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1920, 1080)
        )}`}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-background/30 flex items-center justify-center shadow-[inset_1px_1px_150px_12px_rgba(0,0,0,0.9)]">
        <h4 className="text-white font-semibold text-2xl">
          {translations("click-for-details")}
        </h4>
      </div>
    </div>
  );
}

export default Overview;
