import { PageHero } from "@/components/layout";
import { useTranslations } from "next-intl";

function AboutMePage() {
  const translations = useTranslations("About");
  return (
    <main className="w-full overflow-hidden h-screen">
      <PageHero
        title={translations("title")}
        subtitle={translations("subtitle")}
      />
    </main>
  );
}

export default AboutMePage;
