import {
  ContactCard,
  Hero,
  KnowAboutMe,
  ProjectsOverview,
  Skills,
} from "@/components/layout";
import Services from "@/components/layout/services";
import { useTranslations } from "next-intl";

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
