import { IProject } from "@/lib/Projects";
import Image from "next/image";
import GithubOneProject from "./Github";
import ExternalOneProject from "./External";
import TagsOneProject from "./Tags";
import StoryOneProject from "./Story";
import InfoOneProject from "./Info";
import ParallelImages from "./Parallel";
import ExplorationOneProject from "./Exploration";
import GithubStats from "./GithubStats";

function ProjectInfo({ project }: { project: IProject }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="overflow-hidden rounded-xl relative">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="object-cover w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-background/30 shadow-[inset_1px_1px_150px_12px_rgba(0,0,0,0.9)]" />
        </div>
        <div className="flex gap-16 md:flex-col">
          <GithubOneProject github_link={project.github_link} />
          <ExternalOneProject external_link={project.external_link} />
        </div>
      </div>
      <StoryOneProject />
      <TagsOneProject />
      <InfoOneProject />
      <ParallelImages project={project} />
      <ExplorationOneProject />
      <GithubStats />
      {/* <div className="flex">
        <Button>DEMO</Button>
        <Button>CODE</Button>
      </div> */}
    </section>
  );
}

export default ProjectInfo;
