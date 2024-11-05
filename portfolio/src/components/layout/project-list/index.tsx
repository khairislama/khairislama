import { PROJECTS } from "@/lib/Projects";
import ProjectItem from "./Item";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Overview from "./Overview";
import { useTranslations } from "next-intl";

function ProjectsList() {
  const translations = useTranslations("Projects");
  return (
    <section
      aria-labelledby="projects-list"
      className="w-full max-w-7xl mx-auto my-10 font-rubik text-sm px-4 sm:px-6 xl:px-0 relative"
    >
      <h2
        id="projects-list"
        className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-secondary/70 inner-shadow my-4"
      >
        {translations("open-projects")}
      </h2>
      {PROJECTS.filter((project) => project.label === "current").map(
        (project, i) => (
          <TooltipProvider key={i}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger
                className="uppercase w-full flex py-4"
                aria-label={`project ${project.name} information`}
              >
                <ProjectItem project={project} />
              </TooltipTrigger>
              <TooltipContent
                followCursor={true}
                className="bg-foreground items-center gap-2 hidden md:flex"
              >
                <Overview image={project.images[0]} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}

      <h2 className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-secondary/70 inner-shadow my-4">
        {translations("worked-on")}
      </h2>
      {PROJECTS.filter((project) => project.label === "done").map(
        (project, i) => (
          <TooltipProvider key={i}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger
                className="uppercase w-full flex py-4"
                aria-label={`project ${project.name} information`}
              >
                <ProjectItem project={project} />
              </TooltipTrigger>
              <TooltipContent
                followCursor={true}
                className="bg-foreground items-center gap-2 hidden md:flex"
              >
                <Overview image={project.images[0]} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}

      <h2 className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-secondary/70 inner-shadow my-4">
        {translations("tutorial-projects")}
      </h2>
      {PROJECTS.filter((project) => project.label === "tuto").map(
        (project, i) => (
          <TooltipProvider key={i}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger
                className="uppercase w-full flex py-4"
                aria-label={`project ${project.name} information`}
              >
                <ProjectItem project={project} />
              </TooltipTrigger>
              <TooltipContent
                followCursor={true}
                className="bg-foreground items-center gap-2 hidden md:flex"
              >
                <Overview image={project.images[0]} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}
    </section>
  );
}

export default ProjectsList;
