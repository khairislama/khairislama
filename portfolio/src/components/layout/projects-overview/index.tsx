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
    src: "/projects/carthabot/hero.webp",
    alt: "Carthabot hero section",
    width: 1866,
    height: 912,
  },
  {
    src: "/projects/formulation/recipe.webp",
    alt: "Formulation recipe page",
    width: 1920,
    height: 924,
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
        <Overview>
          <ProjectText
            projectNumber={1}
            viewMore="/projects/1"
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
            viewMore="/projects/3"
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
            viewMore="/projects/4"
            github="https://github.com/khairislama/robot-playground"
            demo="https://robot-playground-three.vercel.app"
          >
            <PlaygroundHighlights />
          </ProjectText>
          <ProjectImage image={IMAGES[3]} reverse />
        </Overview>
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
