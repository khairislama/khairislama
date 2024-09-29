import {
  ContactCard,
  Hero,
  KnowAboutMe,
  ProjectsOverview,
  Skills,
} from "@/components/layout";
import Services from "@/components/layout/services";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <KnowAboutMe />
      <Skills />
      <ProjectsOverview />
      <Services />
      {/* <Testimonials /> */}
      <ContactCard />
    </main>
  );
}
