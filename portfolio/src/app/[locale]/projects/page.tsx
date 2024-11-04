import { PageHero, ProjectsList } from "@/components/layout";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Explore Khairi Slama’s diverse web development projects, focusing on performance, security, and innovation. Featuring Next.js, Blender 3D, and full-stack solutions, these projects showcase cutting-edge technologies and impactful digital experiences.",
  keywords:
    "Khairi Slama, Web Development Projects, Full-Stack Platforms, 3D Blender Integration, Performance, Security, Next.js, Freelance Developer, Digital Innovation, Open Source Projects, Tunisian Engineer, Portfolio",
  openGraph: {
    title: "Khairi Slama | My Projects",
    description:
      "Discover the range of projects developed by Khairi Slama, from full-stack applications to 3D web experiences, focusing on security and high-performance solutions.",
    url: "https://khairislama.vercel.app/projects", // Ensure accurate URL
    images: [
      {
        url: "https://khairislama.vercel.app/icons/og-projects-image.svg", // Replace with the relevant project image URL
        width: 1200,
        height: 630,
        alt: "Khairi Slama Projects Overview",
      },
    ],
  },
};

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
