import { PageHero, ProjectsList } from "@/components/layout";
import { useTranslations } from "next-intl";

function ProjectsPage() {
  const translations = useTranslations("Projects");
  return (
    <main className="w-full overflow-hidden mb-24">
      <PageHero
        title={translations("title")}
        subtitle={translations("subtitle")}
      />
      <ProjectsList />
    </main>
  );
}

export default ProjectsPage;
