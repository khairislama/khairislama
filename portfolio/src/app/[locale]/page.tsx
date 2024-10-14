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
    "Explore Khairi Slama's web development portfolio, with a focus on security, 3D web, and performance optimization. Available for opportunities in Luxembourg and France.",
  keywords:
    "Khairi Slama, Full-Stack Engineer, Web Development, Next.js, Tailwind, Freelance, Luxembourg, France, Security, 3D Blender, Tunisian Engineer, Performance, Web Solutions",
  openGraph: {
    title: "Khairi Slama | Full-Stack Engineer",
    description:
      "Showcasing Khairi's web development projects, security-focused solutions, and 3D web experiences.",
    url: "https://khairislama.vercel.app", // Ensure the domain is accurate
    // images: [
    //   {
    //     url: "https://khairislama.vercel.app/icons/og-image.svg", // Full URL for better sharing
    //     width: 1200,
    //     height: 630,
    //     alt: "Khairi Slama Portfolio",
    //   },
    // ],
    siteName: "Khairi Slama Portfolio",
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
