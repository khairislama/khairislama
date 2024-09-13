import { useTranslations } from "next-intl";
import Image from "next/image";
import Overview from "./Overview";

function ProjectsOverview() {
  const translations = useTranslations("ProjectsOverview");
  return (
    <section className="relative w-full my-0 lg:my-24">
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none -top-[0%] xl:-top-[100%] 2xl:-top-[170%] 2k:-top-[200%] -z-10 brightness-125"
      />
      <div className="max-w-7xl mx-auto flex flex-col p-10 xl:p-0 text-center">
        <h2 className="relative text-5xl sm:text-6xl lg:text-7xl font-syne font-bold text-primary/50 mt-0 md:mt-10">
          {translations("title")}
        </h2>
        <Overview />
      </div>
    </section>
  );
}

export default ProjectsOverview;