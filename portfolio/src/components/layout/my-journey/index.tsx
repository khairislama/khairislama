import { shimmer, toBase64 } from "@/lib/image";
import { useTranslations } from "next-intl";
import Image from "next/image";

function MyJourney() {
  const translations = useTranslations("About.my-journey");
  return (
    <section aria-labelledby="journey" className="relative w-full my-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between w-full gap-8 z-10 px-4 sm:px-6 xl:px-0">
        <div className="flex flex-col gap-4 md:max-w-md lg:max-w-xl xl:max-w-3xl z-10">
          <h3
            id="journey"
            className="text-3xl lg:text-4xl font-semibold font-syne text-foreground tracking-wider"
          >
            {translations("title")}
          </h3>
          <p className="text-lg tracking-wide font-rubik text-justify">
            {translations("description")}
          </p>
        </div>
        <div className="w-full flex items-center justify-center z-10">
          <div className="w-80 rounded-t-full overflow-hidden bg-gradient-to-tr from-primary/30 to-secondary/30 backdrop-blur-sm">
            <Image
              src="/khairi-slama-face.webp"
              alt="khairi slama face"
              width={500}
              height={500}
              priority
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(500, 500)
              )}`}
            />
          </div>
        </div>
      </div>
      <Image
        src="/hero/background2.webp"
        alt="curvy lines"
        width={1200}
        height={635}
        className="hidden lg:block absolute -bottom-[80%] xl:-bottom-[110%] 2xl:-bottom-[170%] object-cover opacity-30 w-full pointer-events-none"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
    </section>
  );
}

export default MyJourney;
