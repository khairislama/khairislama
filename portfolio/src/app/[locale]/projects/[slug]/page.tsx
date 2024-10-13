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

  /// Find the index of the project
  const projectIndex = PROJECTS.findIndex((project) => project.slug === slug);

  // Handle case where project is not found
  if (projectIndex === -1) return <NotFound />;

  // Get the previous project index (wrap around to the last project if at the first project)
  const previousIndex =
    projectIndex - 1 >= 0 ? projectIndex - 1 : PROJECTS.length - 1;
  const previousProjectSlug = PROJECTS[previousIndex].slug;

  // Get the next project index (wrap around to the first project if at the last project)
  const nextIndex = projectIndex + 1 >= PROJECTS.length ? 0 : projectIndex + 1;
  const nextProjectSlug = PROJECTS[nextIndex].slug;

  // Retrieve the project using the index
  const project = PROJECTS[projectIndex];
  return (
    <main className="w-full overflow-hidden mb-24">
      <PageHero
        title={translations("title")}
        subtitle={translations("subtitle")}
      />
      <ProjectInfo project={project} />
      <RecommendedProjects
        projectIndex={projectIndex}
        previousProjectSlug={previousProjectSlug}
        nextProjectSlug={nextProjectSlug}
      />
    </main>
  );
}

// export async function generateStaticParams() {
//   const projects = PROJECTS;

//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }
