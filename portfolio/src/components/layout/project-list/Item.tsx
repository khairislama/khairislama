import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function ProjectItem() {
  return (
    <div className="w-full flex items-center justify-between border-b-2 border-foreground/70 group">
      <div className="flex flex-col gap-4 mb-5">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-4xl font-bold font-syne md:group-hover:scale-110 md:group-hover:translate-x-8 md:group-hover:translate-y-1 md:group-hover:text-foreground transform duration-300 ease-in-out delay-75">
            Robot playground
          </h2>
          <p className="border-2 border-foreground rounded-full py-[1px] px-3 text-xs md:group-hover:hidden transform duration-300 ease-in-out">
            Public
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full" />
            <p>Typescript</p>
          </div>
          <p>Updated on Jul 9</p>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col items-end gap-4 mb-3 md:group-hover:text-foreground md:group-hover:-translate-x-4 transform duration-300 ease-in-out delay-75">
        <p>Featured project</p>
        <p>description</p>
      </div>
      <Button className="md:hidden" variant={"ghost"}>
        <ChevronRight className="h-4 w-4 group-hover:scale-150 transform duration-300 ease-in-out" />
      </Button>
    </div>
  );
}

export default ProjectItem;
