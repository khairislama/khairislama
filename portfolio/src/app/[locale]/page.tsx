import {
  ContactCard,
  Hero,
  KnowAboutMe,
  ProjectsOverview,
  Skills,
} from "@/components/layout";
import Services from "@/components/layout/services";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const runtime = "edge";
export const metadata: Metadata = {
  title: "Khairi Slama | Full-Stack Engineer | Web Development Portfolio",
  description:
    "Explore Khairi Slama's portfolio showcasing skills in web development, security, 3D Blender, and performance optimization. Available for freelance and full-time opportunities in Luxembourg and France.",
  keywords:
    "Khairi Slama, Full-Stack Engineer, Web Development, Next.js, Tailwind, Freelance, Luxembourg, France, Security, Performance, 3D Blender, Portfolio, Tunisian Engineer, Innovative Web Solutions, Job Seeking, Security Focus, High-Performance Applications",
  openGraph: {
    title: "Khairi Slama | Full-Stack Engineer",
    description:
      "Showcasing projects, skills, and services for web development.",
    url: "https://khairislama.vercel.app",
    images: [
      {
        url: "/icons/og-image.svg",
        width: 200,
        height: 200,
        alt: "Khairi Slama Portfolio",
      },
    ],
  },
};

export default function Home() {
  const translations = useTranslations("");
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <KnowAboutMe
        title={translations("KnowMe.title")}
        description={translations("KnowMe.description")}
        button={translations("KnowMe.call-to-action")}
        src="/khairi-slama-graduation.webp"
        alt="Khairi SLAMA"
        width={705}
        height={969}
      />
      <Skills />
      <ProjectsOverview />
      <Services />
      {/* <Testimonials /> */}
      <ContactCard />
    </main>
  );
}
