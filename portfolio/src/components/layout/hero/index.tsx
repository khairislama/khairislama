import React from "react";
import Picture from "./Picture";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Hero() {
  const translations = useTranslations("Hero");

  return (
    <section className="relative w-full font-syne">
      <div className="flex flex-col items-center justify-between max-w-3xl mx-auto mt-10 md:mt-14 lg:mt-16 pb-16 z-20">
        <h1 className="text-3xl"> {translations("welcome")} </h1>
        <Picture />
        <h2 className="text-center text-5xl sm:text-6xl lg:text-7xl uppercase font-bold text-foreground/70 mt-10 text-balance">
          {translations("title")}
        </h2>
      </div>
      {/* Eclipse SVG positioned under h2 */}
      <Image
        src="/hero/eclipse3.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none bottom-[7%] sm:bottom-0 xl:inset-0"
      />
      <Image
        src="/hero/background2.webp"
        alt="curvy lines"
        width={1200}
        height={1200}
        className="hidden lg:block absolute -bottom-[90%] object-cover opacity-30 w-full pointer-events-none"
      />
    </section>
  );
}

export default Hero;
