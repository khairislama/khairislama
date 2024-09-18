import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Services() {
  const translations = useTranslations("Services");
  return (
    <section className="relative w-full">
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none -top-[0%] xl:-top-[100%] 2xl:-top-[170%] 2k:-top-[200%] -z-10 brightness-125"
      />
      <div className="max-w-4xl mx-auto flex flex-col p-10 xl:p-0 text-center">
        <h2 className="text-header">{translations("title")}</h2>
        <div className="grid grid-cols-5 gap-2 mt-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="py-3 bg-foreground/5 flex items-center justify-center rounded-2xl gap-1 shadow-xl border border-foreground/10"
            >
              <Check className="h-5 w-6 text-[#B084FF]" />{" "}
              <span className="text-xs">
                {" "}
                {translations(`service-${i + 1}`)}{" "}
              </span>
            </div>
          ))}
        </div>
        <h3 className="text-xl mt-20">
          Product, Website or Brand Design, I ve got you covered!
        </h3>
        <p className="text-lg mt-2 text-foreground/40">
          Let s elevate your vision and achieve your design goals together!
        </p>
      </div>
    </section>
  );
}

export default Services;
