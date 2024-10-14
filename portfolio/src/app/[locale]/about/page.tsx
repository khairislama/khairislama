import {
  AboutCurrentWork,
  ContactWrapper,
  KnowAboutMe,
  MyJourney,
  PageHero,
} from "@/components/layout";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const runtime = "edge";
export const metadata: Metadata = {
  title: "About Khairi Slama | Full-Stack Engineer & Security Specialist",
  description:
    "Learn about Khairi Slama, a passionate full-stack engineer specializing in secure, high-performance web solutions. Discover his journey, current work, and life beyond code.",
  keywords:
    "Khairi Slama, Full-Stack Engineer, Web Development, Security, Performance, NestJS, Hutchinson, Freelance, Tunisia, Luxembourg, France, Software Engineer, Outdoor Enthusiast, Belgian Malinois, EUR-ACE Engineer",
  openGraph: {
    title: "Khairi Slama | About Me",
    description:
      "Discover Khairi Slama's journey as a full-stack engineer, his passion for security, and his life beyond coding.",
    url: "https://khairislama.vercel.app/about", // Ensure accurate URL
    images: [
      {
        url: "https://khairislama.vercel.app/khairi-slama-eva.webp", // Full URL for the image
        width: 1200,
        height: 1600,
        alt: "Khairi Slama with his Belgian Malinois",
      },
    ],
  },
};

function AboutMePage() {
  const translations = useTranslations("About");
  return (
    <main className="w-full overflow-hidden">
      <PageHero
        title={translations("title")}
        subtitle={translations("subtitle")}
      />
      <MyJourney />
      <AboutCurrentWork />
      <KnowAboutMe
        title={translations("know-me.title")}
        description={translations("know-me.description")}
        src="/khairi-slama-eva.webp"
        alt="Khairi SLAMA with his dog"
        width={1200}
        height={1600}
        bottomFocused
      />
      <ContactWrapper />
    </main>
  );
}

export default AboutMePage;
