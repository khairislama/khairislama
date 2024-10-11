import NotFound from "@/app/not-found";
import {
  PageHero,
  ProjectInfo,
  RecommendedProjects,
} from "@/components/layout";
import { PROJECTS } from "@/lib/Projects";
import { useTranslations } from "next-intl";

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const translations = useTranslations(`Project-${slug}`);

  // Set the locale for static rendering
  // unstable_setRequestLocale(locale);

  const project = PROJECTS.filter((project) => project.slug === slug)[0];

  if (!project) return <NotFound />;

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

// export async function generateStaticParams() {
//   const projects = PROJECTS;

//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }
