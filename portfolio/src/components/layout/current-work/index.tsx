import { useTranslations } from "next-intl";
import Image from "next/image";

function AboutCurrentWork() {
  const translations = useTranslations("About.current-work");
  return (
    <section className="relative w-full px-4 sm:px-6 xl:px-0 my-20 md:my-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 w-full gap-4 md:gap-y-20 relative">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold font-syne text-foreground tracking-wider md:col-span-3 z-10">
          {translations("title")}
        </h2>
        <p className="font-rubik text-lg md:col-span-3 lg:mt-8 text-justify md:text-left lg:text-xl z-10">
          {translations("description")}
        </p>
        <div className="hidden md:block w-full md:col-span-2 relative z-10">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/khairi-slama-suite.webp"
              alt="khairi slama in suite"
              width={960}
              height={1280}
              className="object-cover w-full h-full"
            />
          </div>
          <Image
            src="/shapes/rectangle-vertical.svg"
            alt="vertical rectangle"
            width={61}
            height={193}
            className="absolute top-2 -left-4 xl:-left-8 z-20"
          />
        </div>
        <div className="w-full md:col-span-4 relative z-10">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/khairi-slama-hutchinson.webp"
              alt="khairi slama in suite"
              width={5892}
              height={3808}
              className="object-cover w-full h-full"
            />
          </div>
          <Image
            src="/shapes/rectangle-horizontal.svg"
            alt="Horizontal rectangle"
            width={120}
            height={36}
            className="absolute -bottom-3 right-1 z-20"
          />
        </div>
        <Image
          src="/projects/gradient2.svg"
          alt="gradient"
          width={678}
          height={760}
          className="absolute object-cover w-full sm:w-[70%] pointer-events-none z-0 -bottom-20 sm:-bottom-[20%] "
        />
      </div>
    </section>
  );
}

export default AboutCurrentWork;
