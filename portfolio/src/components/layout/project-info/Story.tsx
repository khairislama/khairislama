import { useTranslations } from "next-intl";

function StoryOneProject({
  stories,
  slang,
}: {
  stories: number;
  slang: string;
}) {
  const translations = useTranslations(`Projects`);
  const projectTranslations = useTranslations(`Project-${slang}`);
  return (
    <div className="w-full mx-auto max-w-2xl my-12">
      <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider text-foreground/90">
        {translations("project-story")}
      </h2>
      {Array.from({ length: stories }).map((_, i) => (
        <p key={i} className="text-lg mt-8 font-rubik">
          {projectTranslations(`story-${i + 1}`)}
        </p>
      ))}
    </div>
  );
}

export default StoryOneProject;
