import { useTranslations } from "next-intl";
import Image from "next/image";
import Overview from "./Overview";
import ProjectText from "./ProjectText";
import ProjectImage from "./ProjectImage";
import PrefixedLink from "@/components/PrefixedLink";
import CarthabotHighlights from "./CarthabotHighlights";
import FormulationHighlights from "./FormulationHighlights";
import StrongCastHighlights from "./StrongCastHighlights";
import WassalliHighlights from "./WassalliHighlights";
import { BOOKMARKED_PROJECTS } from "@/lib/Projects";

export const runtime = "edge";

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
      <div className="max-w-7xl mx-auto flex flex-col p-4 sm:p-6 xl:p-0 text-center relative">
        <h2 id="projects-overview" className="text-header">
          {translations("title")}
        </h2>
        <article>
          <Overview>
            <ProjectText
              projectNumber={1}
              viewMore={`/projects/${BOOKMARKED_PROJECTS[0].slug}`}
              demo={BOOKMARKED_PROJECTS[0].external_link!}
            >
              <CarthabotHighlights />
            </ProjectText>
            <ProjectImage image={BOOKMARKED_PROJECTS[0].images![0]} />
          </Overview>
          <Overview reverse>
            <div className="w-full max-w-7xl h-1 bg-gradient-to-r from-primary/80 via-background to-secondary/80 md:hidden mb-10 blur-sm" />
            <ProjectText
              projectNumber={2}
              reverse
              viewMore={`/projects/${BOOKMARKED_PROJECTS[1].slug}`}
            >
              <FormulationHighlights />
            </ProjectText>
            <ProjectImage image={BOOKMARKED_PROJECTS[1].images![0]} reverse />
          </Overview>
          <Overview>
            <div className="w-full max-w-7xl h-1 bg-gradient-to-r from-primary/80 via-background to-secondary/80 md:hidden mb-10 blur-sm" />
            <ProjectText
              projectNumber={3}
              viewMore={`/projects/${BOOKMARKED_PROJECTS[2].slug}`}
              demo={BOOKMARKED_PROJECTS[2].external_link!}
              github={BOOKMARKED_PROJECTS[2].github_link!}
            >
              <StrongCastHighlights />
            </ProjectText>
            <ProjectImage image={BOOKMARKED_PROJECTS[2].images![0]} />
          </Overview>
          <Overview reverse>
            <div className="w-full max-w-7xl h-1 bg-gradient-to-r from-primary/80 via-background to-secondary/80 md:hidden mb-10 blur-sm" />
            <ProjectText
              projectNumber={4}
              reverse
              viewMore={`/projects/${BOOKMARKED_PROJECTS[3].slug}`}
              demo={BOOKMARKED_PROJECTS[3].external_link!}
            >
              <WassalliHighlights />
            </ProjectText>
            <ProjectImage image={BOOKMARKED_PROJECTS[3].images![0]} reverse />
          </Overview>
        </article>
        <div className="flex w-full mx-auto max-w-7xl items-center justify-center mt-16">
          <div className="h-[1px] w-full bg-foreground/70" />
          <PrefixedLink href="/projects" className="text-lg w-80 font-bold">
            {translations("view-more")}
          </PrefixedLink>
          <div className="h-[1px] w-full bg-foreground/70" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsOverview;
