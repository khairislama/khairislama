import {
  Hero,
  KnowAboutMe,
  ProjectsOverview,
  Skills,
} from "@/components/layout";
import Services from "@/components/layout/services";
import { useTranslations } from "next-intl";

export default function Home() {
  const translations = useTranslations("Navbar");
  return (
    <main className="">
      <Hero />
      <KnowAboutMe />
      <Skills />
      <ProjectsOverview />
      <Services />
      <div className="h-96 w-full"> {translations("home")} </div>
      <div className="h-96 w-full"> {translations("home")} </div>
      <div className="h-96 w-full"> {translations("home")} </div>
    </main>
  );
}
