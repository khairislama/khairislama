import HireMe from "@/components/HireMe";
import Hero from "@/components/layout/hero";
import KnowAboutMe from "@/components/layout/know-about-me";
import { useTranslations } from "next-intl";

export default function Home() {
  const translations = useTranslations("Navbar");
  return (
    <main className="">
      <Hero />
      <KnowAboutMe />
      <div className="h-96 w-full"> {translations("home")} </div>
      <div className="h-96 w-full"> {translations("home")} </div>
      <div className="h-96 bg-red-200 w-full"> {translations("home")} </div>
      <div className="h-96 bg-green-200 w-full text-black">
        <h1 className="text-3xl font-bold">HELLLOOO there how are YOU gg</h1>
        <h1 className="text-3xl font-bold font-rubik">
          HELLLOOO there how are YOU gg
        </h1>
        <h1 className="text-3xl font-bold font-syne">
          HELLLOOO there how are YOU gg
        </h1>
      </div>
      <HireMe />
    </main>
  );
}
