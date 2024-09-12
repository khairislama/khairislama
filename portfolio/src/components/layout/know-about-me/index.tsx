import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

function KnowAboutMe() {
  const translations = useTranslations("KnowMe");
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        <div className="my-auto">
          <h2> {translations("title")} </h2>
          <p> {translations("description")} </p>
          <Button> {translations("call-to-action")} </Button>
        </div>
        <div className="relative w-full overflow-hidden rounded-3xl h-[650px]">
          <Image
            src="/khairi SLAMA - graduation.webp"
            alt="instagram carthabot"
            width={705}
            height={969}
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default KnowAboutMe;
