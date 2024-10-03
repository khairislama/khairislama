import {
  AboutCurrentWork,
  KnowAboutMe,
  MyJourney,
  PageHero,
} from "@/components/layout";
import { useTranslations } from "next-intl";

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
    </main>
  );
}

export default AboutMePage;
