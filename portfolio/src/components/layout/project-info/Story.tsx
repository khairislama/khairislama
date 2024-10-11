import { useTranslations } from "next-intl";
import TagsOneProject from "./Tags";
import InfoOneProject from "./Info";
import { IProject } from "@/lib/Projects";
import { Suspense } from "react";

function StoryOneProject({ project }: { project: IProject }) {
  const translations = useTranslations(`Projects`);
  const projectTranslations = useTranslations(`Project-${project.slang}`);
  return (
    <div className="w-full my-12">
      <div className="mx-auto max-w-2xl w-full">
        <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider text-foreground/90">
          {translations("project-story")}
        </h2>
        {Array.from({ length: project.stories }).map((_, i) => (
          <p key={i} className="text-lg mt-8 font-rubik">
            {projectTranslations(`story-${i + 1}`)}
          </p>
        ))}
      </div>
      <Suspense fallback={<h1 className="text-5xl text-red-500">Hello</h1>}>
        <TagsOneProject tags={project.tags} slang={project.slang} />
      </Suspense>
      <InfoOneProject slang={project.slang} />
    </div>
  );
}

export default StoryOneProject;
