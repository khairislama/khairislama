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
          <div className="p-2 bg-background/40 flex items-center justify-center rounded-2xl gap-1 shadow-lg">
            <Check className="h-5 w-6 text-[#B084FF]" />{" "}
            <span>Design System</span>
          </div>
          <div className="p-2 bg-background/40 flex items-center justify-center rounded-2xl gap-1 shadow-lg">
            <Check className="h-5 w-6 text-[#B084FF]" />{" "}
            <span>Design System</span>
          </div>
          <div className="p-2 bg-background/40 flex items-center justify-center rounded-2xl gap-1 shadow-lg">
            <Check className="h-5 w-6 text-[#B084FF]" />{" "}
            <span>Design System</span>
          </div>
          <div className="p-2 bg-background/40 flex items-center justify-center rounded-2xl gap-1 shadow-lg">
            <Check className="h-5 w-6 text-[#B084FF]" />{" "}
            <span>Design System</span>
          </div>
          <div className="p-2 bg-background/40 flex items-center justify-center rounded-2xl gap-1 shadow-lg">
            <Check className="h-5 w-6 text-[#B084FF]" />{" "}
            <span>Design System</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
