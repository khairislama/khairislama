import { IProject } from "@/lib/Projects";
import Image from "next/image";
import GithubOneProject from "./Github";
import ExternalOneProject from "./External";

function ProjectInfo({ project }: { project: IProject }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="object-cover w-full"
          />
        </div>
        <div className="flex gap-16 md:flex-col">
          <GithubOneProject github_link={project.github_link} />

          <ExternalOneProject />
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
