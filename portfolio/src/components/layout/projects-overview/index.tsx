import { useTranslations } from "next-intl";
import Image from "next/image";
import Overview from "./Overview";

const IMAGES = [
  {
    src: "/projects/strong-cast-metrix.webp",
    alt: "strong cast project metrix with A performance",
    width: 1269,
    height: 819,
  },
  {
    src: "/projects/strong-cast-metrix.webp",
    alt: "strong cast project metrix with A performance",
    width: 1269,
    height: 819,
  },
  {
    src: "/projects/strong-cast-metrix.webp",
    alt: "strong cast project metrix with A performance",
    width: 1269,
    height: 819,
  },
];

function ProjectsOverview() {
  const translations = useTranslations("ProjectsOverview");

  return (
    <section className="relative w-full my-0 lg:my-24">
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none -top-[0%] xl:-top-[15%] 2xl:-top-[35%] 2k:-top-[200%] -z-10 brightness-125"
      />
      <div className="max-w-7xl mx-auto flex flex-col p-10 xl:p-0 text-center">
        <h2 className="text-header">{translations("title")}</h2>
        <Overview projectNumber={1} image={IMAGES[0]} />
        <Overview reverse projectNumber={2} image={IMAGES[1]} />
        <Overview projectNumber={3} image={IMAGES[2]} />
      </div>
    </section>
  );
}

export default ProjectsOverview;
