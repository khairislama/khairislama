import NotFound from "@/app/not-found";
import {
  PageHero,
  ProjectInfo,
  RecommendedProjects,
} from "@/components/layout";
import { PROJECTS } from "@/lib/Projects";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

// Dynamic metadata generation based on the project slug
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const { slug } = params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for does not exist.",
    };
  }

  return {
    title: `${project.name}`,
    description: project.description,
    keywords: `${project.name}, Web Development, ${project.languages
      .map((tech) => tech.name)
      .join(", ")}`,
    openGraph: {
      title: `${project.name} | Web Development Project`,
      description: project.description,
      url: `https://khairislama.vercel.app/projects/${project.slug}`, // Update the base URL accordingly
      images: [
        {
          url: `https://khairislama.vercel.app/${project.images[0]?.src}`, // Use the first image from the project
          width: 1200,
          height: 630,
          alt: project.images[0]?.alt || `${project.name} project image`,
        },
      ],
    },
  };
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const translations = useTranslations(`Project-${slug}`);

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
