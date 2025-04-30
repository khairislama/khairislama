import { useTranslations } from "next-intl";
import InfoOneProject from "./Info";
import { IProject } from "@/lib/Projects";
import TagsOneProject from "./Tags";

function StoryOneProject({ project }: { project: IProject }) {
  const translations = useTranslations(`Projects`);
  const projectTranslations = useTranslations(`Project-${project.slug}`);

  return (
    <section aria-labelledby="project-story" className="w-full my-12">
      <div className="mx-auto max-w-2xl w-full">
        <h2
          id="project-story"
          className="text-3xl md:text-4xl font-syne font-semibold tracking-wider text-foreground/90"
        >
          {translations("project-story")}
        </h2>
        <article className="w-full">
          {Array.from({ length: project.stories }).map((_, i) => (
            <p key={i} className="text-lg mt-8 font-rubik">
              {projectTranslations(`story-${i + 1}`)}
            </p>
          ))}
        </article>
      </div>
      <TagsOneProject tags={project.tags} slug={project.slug} />
      <InfoOneProject slug={project.slug} />
    </section>
  );
}

export default StoryOneProject;
