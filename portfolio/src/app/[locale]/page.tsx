import {
  ContactCard,
  Hero,
  KnowAboutMe,
  ProjectsOverview,
  Skills,
  Testimonials,
} from "@/components/layout";
import Services from "@/components/layout/services";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

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
        home
      />
      <Skills />
      <ProjectsOverview />
      <Services />
      <Testimonials />
      <ContactCard />
    </main>
  );
}
