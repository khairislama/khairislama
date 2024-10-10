import {
  PageHero,
  ProjectInfo,
  RecommendedProjects,
} from "@/components/layout";
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
      <RecommendedProjects />
    </main>
  );
}

export default SingleProjectPage;

export async function generateStaticParams() {
  const projects = PROJECTS;

  return projects.map((project) => ({
    slang: project.slang,
  }));
}
