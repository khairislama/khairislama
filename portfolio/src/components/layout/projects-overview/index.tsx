import { useTranslations } from "next-intl";
import Image from "next/image";
import Overview from "./Overview";
import ProjectText from "./ProjectText";
import ProjectImage from "./ProjectImage";

const IMAGES = [
  {
    src: "/projects/carthabot/hero.webp",
    alt: "strong cast project metrix with A performance",
    width: 1866,
    height: 912,
  },
  {
    src: "/projects/formulation/recipe.webp",
    alt: "strong cast project metrix with A performance",
    width: 1269,
    height: 819,
  },
  {
    src: "/projects/strong-cast/product.webp",
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
        <Overview>
          <ProjectText
            projectNumber={1}
            viewMore="/project/1"
            demo="https://carthabot.vercel.app/"
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
          <ProjectImage image={IMAGES[0]} />
        </Overview>
        <Overview reverse>
          <ProjectText projectNumber={2} reverse viewMore="/project/2">
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
      </div>
    </section>
  );
}

export default ProjectsOverview;
