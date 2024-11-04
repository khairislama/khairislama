import React from "react";
import Picture from "./Picture";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimatedText from "@/components/AnimatedText";

function Hero() {
  const translations = useTranslations("Hero");

  return (
    <section aria-labelledby="welcome" className="relative w-full font-syne">
      <div className="flex flex-col items-center justify-between max-w-3xl mx-auto mt-10 md:mt-14 lg:mt-16 pb-16 z-20">
        <h1 id="welcome" className="text-3xl">
          {" "}
          {translations("welcome")}{" "}
        </h1>
        <Picture />
        <AnimatedText
          text={translations("title")}
          className="text-center text-5xl sm:text-6xl lg:text-7xl uppercase font-bold text-foreground/70 mt-10 text-balance"
        />
      </div>
      {/* Eclipse SVG positioned under h2 */}
      <Image
        src="/hero/eclipse3.svg"
        alt="eclipse"
        width={1440}
        height={688}
        className="absolute object-cover w-full pointer-events-none bottom-[7%] sm:bottom-0 md:-bottom-24 xl:inset-32"
        sizes="30vw"
      />
      <Image
        src="/hero/background2.webp"
        alt="curvy lines"
        width={1200}
        height={635}
        priority
        loading={"eager"}
        className="hidden lg:block absolute -bottom-[50%] object-cover opacity-30 w-full pointer-events-none"
        sizes="50vw,(max-width: 768px) 30vw"
      />
    </section>
  );
}

export default Hero;
