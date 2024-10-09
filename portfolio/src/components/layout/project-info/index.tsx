import { IProject } from "@/lib/Projects";
import Image from "next/image";
import GithubOneProject from "./Github";
import ExternalOneProject from "./External";
import TagsOneProject from "./Tags";

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
      <div className="w-full mx-auto max-w-2xl my-12">
        <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider">
          Project Story
        </h2>
        <p className="text-lg mt-8 font-rubik">
          The fact that photography has different meanings to different people
          is one of the many components of its appeal. Photography is such an
          important part of our life that it is now very difficult to imagine
          the world without it.
        </p>
        <p className="text-lg mt-8 font-rubik">
          We cannot imagine a wedding without the opportunity to capture it on
          film, we would not be able to remember the growing up of children or
          the holidays if we did not have pictures.
        </p>
        {/* <FeaturesOneProject /> */}
        {/* <div className="flex flex-col gap-8">
          <InfiniteScroll orientation="left" />
          <InfiniteScroll orientation="right" />
          <InfiniteScroll orientation="top" />
          <InfiniteScroll orientation="bottom" />
        </div> */}
      </div>
      <TagsOneProject />
      <div className="w-full mx-auto max-w-4xl grid grid-cols-3 gap-24 mt-10 font-syne">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-foreground text-lg font-semibold">Start date</h4>
          <p className="text-lg">6 September 2024</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-foreground text-lg font-semibold">Client</h4>
          <p className="text-lg">Hutchinson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-foreground text-lg font-semibold">Role</h4>
          <p className="text-lg">Backend developer</p>
        </div>
      </div>
      <div className="flex gap-12 h-full my-10">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="object-cover w-[48%]"
        />
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="object-cover w-[48%]"
        />
      </div>
    </section>
  );
}

export default ProjectInfo;
