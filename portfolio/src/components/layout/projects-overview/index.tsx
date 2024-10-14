import { useTranslations } from "next-intl";
import Image from "next/image";
import Overview from "./Overview";
import ProjectText from "./ProjectText";
import ProjectImage from "./ProjectImage";
import PrefixedLink from "@/components/PrefixedLink";
import CarthabotHighlights from "./CarthabotHighlights";
import FormulationHighlights from "./FormulationHighlights";
import StrongCastHighlights from "./StrongCastHighlights";
import PlaygroundHighlights from "./PlaygroundHighlights";

const IMAGES = [
  {
    src: "/projects/carthabot/image-1.webp",
    alt: "Carthabot project",
    width: 1920,
    height: 1080,
  },
  {
    src: "/projects/formulation/image-1.webp",
    alt: "Formulation recipe page",
    width: 1920,
    height: 1080,
  },
  {
    src: "/projects/strong-cast/product.webp",
    alt: "strong cast project metrix with A performance",
    width: 1269,
    height: 819,
  },
  {
    src: "/projects/robot-playground/home.webp",
    alt: "robot playground personal project",
    width: 1842,
    height: 936,
  },
];

function ProjectsOverview() {
  const translations = useTranslations("ProjectsOverview");

  return (
    <section
      aria-labelledby="projects-overview"
      className="relative w-full my-0 lg:my-24"
    >
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none -top-8 sm:-top-16 lg:-top-24 xl:-top-[12%] 2xl:-top-[15%] -z-10 brightness-125"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <div className="max-w-7xl mx-auto flex flex-col p-4 sm:p-6 xl:p-0 text-center">
        <h2 id="projects-overview" className="text-header">
          {translations("title")}
        </h2>
        <article>
          <Overview>
            <ProjectText
              projectNumber={1}
              viewMore="/projects/carthabot"
              demo="https://carthabot.vercel.app/"
            >
              <CarthabotHighlights />
            </ProjectText>
            <ProjectImage image={IMAGES[0]} />
          </Overview>
          <Overview reverse>
            <ProjectText projectNumber={2} reverse viewMore="/projects/2">
              <FormulationHighlights />
            </ProjectText>
            <ProjectImage image={IMAGES[1]} reverse />
          </Overview>
          <Overview>
            <ProjectText
              projectNumber={3}
              viewMore="/projects/strong-cast"
              demo="https://www.strong-cast.com/"
            >
              <StrongCastHighlights />
            </ProjectText>
            <ProjectImage image={IMAGES[2]} />
          </Overview>
          <Overview reverse>
            <ProjectText
              projectNumber={4}
              reverse
              viewMore="/projects/robot-playground"
              github="https://github.com/khairislama/robot-playground"
              demo="https://robot-playground-three.vercel.app"
            >
              <PlaygroundHighlights />
            </ProjectText>
            <ProjectImage image={IMAGES[3]} reverse />
          </Overview>
        </article>
        <div className="flex w-full mx-auto max-w-7xl items-center justify-center mt-16">
          <div className="h-[1px] w-full bg-foreground/70" />
          <PrefixedLink href="/products" className="text-lg w-52 font-bold">
            {translations("view-more")}
          </PrefixedLink>
          <div className="h-[1px] w-full bg-foreground/70" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsOverview;
