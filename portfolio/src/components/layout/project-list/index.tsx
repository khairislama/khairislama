import {
  CURRENT_PROJECTS,
  LEARNING_PROJECTS,
  WORK_PROJECTS,
} from "@/lib/Projects";
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
      <h2 className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-primary/30 inner-shadow">
        Open Projects
      </h2>
      {CURRENT_PROJECTS.map((project, i) => (
        <TooltipProvider key={i}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger className="uppercase w-full flex">
              <ProjectItem project={project} />
            </TooltipTrigger>
            <TooltipContent
              followCursor={true}
              className="bg-foreground flex items-center gap-2"
            >
              <Overview />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}

      <h2 className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-primary/30 inner-shadow">
        Worked on
      </h2>
      {WORK_PROJECTS.map((project, i) => (
        <ProjectItem key={i} project={project} />
      ))}

      <h2 className="text-3xl md:text-4xl text-center underline font-syne font-semibold tracking-wider text-primary/30 inner-shadow">
        Learning Bucket
      </h2>
      {LEARNING_PROJECTS.map((project, i) => (
        <ProjectItem key={i} project={project} />
      ))}
    </section>
  );
}

export default ProjectsList;
