import { useTranslations } from "next-intl";
import Image from "next/image";
import SkillsGroup from "./SkillsGroup";

function Skills() {
  const translations = useTranslations("Skills");
  return (
    <section className="relative w-full my-0 lg:my-24">
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none top-0 2xl:-top-[20%] 2k:-top-[150%] -z-10 brightness-125"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <div className="max-w-7xl mx-auto flex flex-col p-4 sm:p-6 xl:p-0 text-center">
        <h2 className="text-header">{translations("title")}</h2>
        <h3 className="text-2xl mt-4">{translations("header")}</h3>
        <p className="text-lg mt-2">{translations("subtitle")}</p>
        <SkillsGroup />
      </div>
    </section>
  );
}

export default Skills;
