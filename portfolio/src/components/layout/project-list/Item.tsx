import PrefixedLink from "@/components/PrefixedLink";
import { IProject } from "@/lib/Projects";
import { ChevronRight } from "lucide-react";

export const runtime = "edge";

function ProjectItem({ project }: { project: IProject }) {
  return (
    <PrefixedLink
      href={`/projects/${project.slug}`}
      className="w-full flex items-center justify-between border-b-2 border-foreground/70 group my-4 md:hover:scale-95 transition duration-300 ease-in-out"
    >
      <div className="flex flex-col gap-4 mb-5">
        <div className="flex items-center gap-3">
          <h3 className="text-xl md:text-4xl font-bold font-syne md:group-hover:scale-110 md:group-hover:translate-x-8 md:group-hover:translate-y-1 md:group-hover:text-foreground transform duration-300 ease-in-out delay-75">
            {project.name}
          </h3>
          <p className="border-2 border-foreground rounded-full py-[1px] px-3 text-xs md:group-hover:hidden transform duration-300 ease-in-out">
            {project.type}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: project.languages[0].color }}
            />
            <p className="capitalize"> {project.languages[0].name} </p>
          </div>
          <p>{project.updated_at}</p>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col items-end gap-4 mb-3 md:group-hover:text-foreground md:group-hover:-translate-x-4 transform duration-300 ease-in-out delay-75 max-w-lg">
        <p> {project.featured} </p>
        <p className="text-end"> {project.description} </p>
      </div>
      <ChevronRight className="h-4 w-4 group-hover:scale-150 transform duration-300 ease-in-out md:hidden" />
    </PrefixedLink>
  );
}

export default ProjectItem;
