import { useTranslations } from "next-intl";
import Image from "next/image";

function MyJourney() {
  const translations = useTranslations("About.my-journey");
  return (
    <section className="relative w-full my-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between w-full gap-8 z-10 px-4 sm:px-6 xl:px-0">
        <div className="flex flex-col gap-4 md:max-w-md lg:max-w-xl xl:max-w-3xl z-10">
          <h2 className="text-3xl lg:text-4xl font-semibold font-syne text-foreground tracking-wider">
            {translations("title")}
          </h2>
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
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Image
        src="/hero/background2.webp"
        alt="curvy lines"
        width={1200}
        height={1200}
        className="hidden lg:block absolute -bottom-[80%] xl:-bottom-[110%] 2xl:-bottom-[170%] object-cover opacity-30 w-full pointer-events-none"
      />
    </section>
  );
}

export default MyJourney;
