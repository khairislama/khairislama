import { Binary, Blocks, Check, ShoppingCart, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const cards = [
  {
    border:
      "bg-gradient-to-tr from-[#B58E31] via-white to-[#E9A503] shadow-[0_4px_20px_-5px_rgba(181,142,49,0.9)]",
    icon: <Binary className="w-full h-auto" />,
  },
  {
    border:
      "bg-gradient-to-l from-[#2662FC] via-white to-[#0DA8FF] shadow-[0_4px_20px_-5px_rgba(13,168,255,0.9)]",
    icon: <Wrench className="w-full h-auto" />,
  },
  {
    border:
      "bg-gradient-to-tl from-[#E54D21] via-white to-[#FF6737] shadow-[0_4px_20px_-5px_rgba(255,103,55,0.9)]",
    icon: <ShoppingCart className="w-full h-auto" />,
  },
  {
    border:
      "bg-gradient-to-bl from-[#F24E1E] via-[#E8FFF6] to-[#1ABCFE] shadow-[0_4px_20px_-5px_rgba(232,255,246,0.9)]",
    icon: <Blocks className="w-full h-auto" />,
  },
];

function Services() {
  const translations = useTranslations("Services");
  return (
    <section className="relative w-full">
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none top-0 2xl:-top-[15%] -z-10 brightness-125"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <div className="max-w-4xl mx-auto flex flex-col p-4 sm:p-6 xl:p-0 text-center">
        <h2 className="text-header">{translations("title")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-12">
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
        <h3 className="text-2xl mt-16">{translations("services-title")}</h3>
        <p className="text-lg mt-2 text-foreground/40">
          {translations("services-subtitle")}
        </p>
        <div className="w-full max-w-xl mx-auto flex flex-col mt-16 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-full bg-[#373646] border-2 border-foreground/5 p-4 flex flex-col items-center justify-center gap-6 sm:p-12 sm:grid sm:grid-cols-4 rounded-xl lg:hover:scale-105 duration-300 transition-all ease-in-out"
            >
              <div
                className={`h-16 w-16 rounded-lg p-[2px] ${cards[i].border}`}
              >
                <div className="w-full h-full bg-[#373646] rounded-lg p-1">
                  <div className="w-full h-full bg-background/30 rounded-full p-3">
                    {cards[i].icon}
                  </div>
                </div>
              </div>
              <div className="col-span-3 text-justify">
                <h4 className="text-lg font-semibold text-center sm:text-start">
                  {" "}
                  {translations(`card-${i + 1}-title`)}{" "}
                </h4>
                <p className="text-sm mt-2 text-center sm:text-start">
                  {" "}
                  {translations(`card-${i + 1}-description`)}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
