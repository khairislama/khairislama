import { IProject } from "@/lib/Projects";
import Image from "next/image";
import GithubOneProject from "./Github";
import ExternalOneProject from "./External";
import StoryOneProject from "./Story";
import ParallelImages from "./Parallel";
import ExplorationOneProject from "./Exploration";
import GithubStats from "./GithubStats";
import Language from "./Language";
import { Button } from "@/components/ui/button";
import { shimmer, toBase64 } from "@/lib/image";

function ProjectInfo({ project }: { project: IProject }) {
  // const translations = useTranslations(`Project-${project.slang}`);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="overflow-hidden rounded-xl relative group">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            width={1920}
            height={1080}
            className="object-cover w-full"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1920, 1080)
            )}`}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-background/30 shadow-[inset_1px_1px_150px_12px_rgba(0,0,0,0.9)] group-hover:shadow-[inset_1px_1px_50px_12px_rgba(0,0,0,0.5)] transition duration-500 ease-in-out" />
        </div>
        <div className="flex gap-16 md:flex-col">
          <GithubOneProject github_link={project.github_link} />
          <ExternalOneProject external_link={project.external_link} />
        </div>
      </div>
      <StoryOneProject project={project} />
      <ParallelImages />
      <ExplorationOneProject project={project} />
      <GithubStats project={project} />
      <Language />
      <div className="w-full mx-auto max-w-xl my-16 flex items-center justify-between">
        <Button className="h-20 w-[45%] sm:w-[40%] rounded-full bg-foreground/40 text-foreground/80 text-2xl hover:bg-foreground/20 hover:text-foreground">
          DEMO
        </Button>
        <Button className="h-20 w-[45%] sm:w-[40%] rounded-full bg-foreground/40 text-foreground/80 text-2xl hover:bg-foreground/20 hover:text-foreground">
          CODE
        </Button>
      </div>
    </section>
  );
}

export default ProjectInfo;