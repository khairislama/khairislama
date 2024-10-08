import { PageHero, ProjectInfo } from "@/components/layout";
import { PROJECTS } from "@/lib/Projects";
import { useTranslations } from "next-intl";

function SingleProjectPage({ params }: { params: { slang: string } }) {
  const slang = params.slang;
  const translations = useTranslations(`Project-${slang}`);

  const project = PROJECTS.filter((project) => project.slang === slang)[0];

  return (
    <main className="w-full overflow-hidden mb-24">
      <PageHero
        title={translations("title")}
        subtitle={translations("subtitle")}
      />
      <ProjectInfo project={project} />
    </main>
  );
}

export default SingleProjectPage;

export async function generateStaticParams() {
  const projects = PROJECTS;

  // Explanation: We need to return an array of objects with the id property set to the story id. This will generate a static page for each story.
  // Example: [{id: "story-1"}, { id: "story2" }, ...]
  const paths = projects.map((project) => {
    slang: project.slang;
  });

  return paths;
}
