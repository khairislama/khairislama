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
import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";

function ProjectInfo({ project }: { project: IProject }) {
  const translations = useTranslations(`Projects`);

  return (
    <section
      aria-labelledby="project-information"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-0"
    >
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between">
        <h2 id="project-information" className="sr-only">
          Project information
        </h2>
        <div className="overflow-hidden rounded-xl relative group">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            width={1920}
            height={1080}
            priority
            className={cn(
              "object-cover w-full",
              project.images[0]?.blur && "blur-sm"
            )}
            sizes="100vw"
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
      {project.vertical_images.length === 2 && (
        <ParallelImages project={project} />
      )}
      <ExplorationOneProject project={project} />
      <GithubStats project={project} />
      <Language languages={project.languages} />
      <div className="w-full mx-auto max-w-xl my-16 flex items-center justify-between">
        {project?.external_link ? (
          <Link
          aria-label="External demo link"
            href={project.external_link}
            className="h-20 w-[45%] sm:w-[40%] rounded-full bg-foreground/40 text-foreground/80 text-2xl hover:bg-foreground/20 hover:text-foreground uppercase flex items-center justify-center font-semibold"
            target="_blank"
          >
            {translations("demo")}
          </Link>
        ) : (
          <Button className="h-20 w-[45%] sm:w-[40%] rounded-full bg-foreground/40 text-foreground/80 text-2xl hover:bg-foreground/20 hover:text-foreground uppercase cursor-not-allowed">
            {translations("demo")}
          </Button>
        )}
        {project?.github_link ? (
          <Link
          aria-label="Github repository link"
            href={project.github_link}
            className="h-20 w-[45%] sm:w-[40%] rounded-full bg-foreground/40 text-foreground/80 text-2xl hover:bg-foreground/20 hover:text-foreground uppercase flex items-center justify-center font-semibold"
            target="_blank"
          >
            {translations("code")}
          </Link>
        ) : (
          <Button className="h-20 w-[45%] sm:w-[40%] rounded-full bg-foreground/40 text-foreground/80 text-2xl hover:bg-foreground/20 hover:text-foreground uppercase cursor-not-allowed">
            {translations("code")}
          </Button>
        )}
      </div>
    </section>
  );
}

export default ProjectInfo;
