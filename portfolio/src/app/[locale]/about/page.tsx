import { AboutCurrentWork, MyJourney, PageHero } from "@/components/layout";
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
    </main>
  );
}

export default AboutMePage;