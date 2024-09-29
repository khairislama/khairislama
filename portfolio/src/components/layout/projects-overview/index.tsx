import { useTranslations } from "next-intl";
import Image from "next/image";
import Overview from "./Overview";
import ProjectText from "./ProjectText";
import ProjectImage from "./ProjectImage";
import PrefixedLink from "@/components/PrefixedLink";
import CarthabotStack from "./CarthabotStack";

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
            viewMore="/project/1"
            demo="https://carthabot.vercel.app/"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-3 w-full mt-4">
              <div className="flex items-center justify-start gap-1 xl:gap-4">
                <p className="underline underline-offset-4">Performance: </p>
                <p className="text-4xl text-green-500 font-bold">A</p>
              </div>
              <div className="flex items-center justify-start gap-1 xl:gap-4 col-span-2">
                <p className="underline underline-offset-4">Stack: </p>
                <CarthabotStack />
              </div>
            </div>
          </ProjectText>
          <ProjectImage image={IMAGES[0]} />
        </Overview>
        <Overview reverse>
          <ProjectText projectNumber={2} reverse viewMore="/project/2">
            <div className="grid grid-cols-3 w-full mt-4 gap-1">
              <div>
                <p className="text-xl font-semibold">+3500h</p>
                <p className="text-xs">
                  Development time invested in this C4 security project
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">1600+</p>
                <p className="text-xs">
                  Tests performed ensuring quality and security
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">€220k</p>
                <p className="text-xs">
                  Product cost, including development and research
                </p>
              </div>
            </div>
          </ProjectText>
          <ProjectImage image={IMAGES[1]} reverse />
        </Overview>
        <Overview>
          <ProjectText
            projectNumber={3}
            viewMore="/project/3"
            demo="https://www.strong-cast.com/"
          >
            <div className="grid grid-cols-2 w-full mt-4">
              <div>
                <p className="text-xl font-semibold">Over 35k</p>
                <p className="text-sm">
                  Users gained within 6 months of launch
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">Over 35k</p>
                <p className="text-sm">
                  Users gained within 6 months of launch
                </p>
              </div>
            </div>
          </ProjectText>
          <ProjectImage image={IMAGES[2]} />
        </Overview>
        <Overview reverse>
          <ProjectText
            projectNumber={4}
            reverse
            viewMore="/project/4"
            github="https://github.com/khairislama/robot-playground"
            demo="https://robot-playground-three.vercel.app"
          >
            <div className="grid grid-cols-2 w-full mt-4">
              <div>
                <p className="text-xl font-semibold">Over 35k</p>
                <p className="text-sm">
                  Users gained within 6 months of launch
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">Over 35k</p>
                <p className="text-sm">
                  Users gained within 6 months of launch
                </p>
              </div>
            </div>
          </ProjectText>
          <ProjectImage image={IMAGES[3]} reverse />
        </Overview>
        <div className="flex w-full mx-auto max-w-7xl items-center justify-center mt-16">
          <div className="h-[1px] w-full bg-foreground/70" />
          <PrefixedLink href="/products" className="text-lg w-52 font-bold">
            View more
          </PrefixedLink>
          <div className="h-[1px] w-full bg-foreground/70" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsOverview;
