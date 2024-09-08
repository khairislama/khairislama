import { useTranslations } from "next-intl";
import NavLanguage from "./NavLanguage";

export const runtime = "edge";

export default function NavbarTop() {
  const translations = useTranslations("Navbar");

  return (
    <div className="h-6 lg:h-8 border-b-2 border-border w-full">
      <div className="h-full flex items-center justify-center lg:justify-end lg:pr-6 gap-8 max-w-7xl mx-auto text-xs">
        <span className="cursor-default">54 007 387</span>
        <span className="cursor-pointer"> {translations("cv")} </span>
        <NavLanguage />
      </div>
    </div>
  );
}
