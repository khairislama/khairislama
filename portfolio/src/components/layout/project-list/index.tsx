import { PROJECTS } from "@/lib/Projects";
import ProjectItem from "./Item";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Overview from "./Overview";

function ProjectsList() {
  return (
    <section className="w-full max-w-7xl mx-auto my-10 font-rubik text-sm px-4 sm:px-6 xl:px-0 relative">
      <h2 className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-primary/30 inner-shadow my-4">
        Open Projects
      </h2>
      {PROJECTS.filter((project) => project.label === "current").map(
        (project, i) => (
          <TooltipProvider key={i}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger className="uppercase w-full flex">
                <ProjectItem project={project} />
              </TooltipTrigger>
              <TooltipContent
                followCursor={true}
                className="bg-foreground flex items-center gap-2"
              >
                <Overview image={project.image} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}

      <h2 className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-primary/30 inner-shadow my-4">
        Worked on
      </h2>
      {PROJECTS.filter((project) => project.label === "done").map(
        (project, i) => (
          <TooltipProvider key={i}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger className="uppercase w-full flex">
                <ProjectItem project={project} />
              </TooltipTrigger>
              <TooltipContent
                followCursor={true}
                className="bg-foreground flex items-center gap-2"
              >
                <Overview image={project.image} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}

      <h2 className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-primary/30 inner-shadow my-4">
        Learning Bucket
      </h2>
      {PROJECTS.filter((project) => project.label === "tuto").map(
        (project, i) => (
          <TooltipProvider key={i}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger className="uppercase w-full flex">
                <ProjectItem project={project} />
              </TooltipTrigger>
              <TooltipContent
                followCursor={true}
                className="bg-foreground flex items-center gap-2"
              >
                <Overview image={project.image} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}
    </section>
  );
}

export default ProjectsList;
