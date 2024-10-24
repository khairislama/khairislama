import { useTranslations } from "next-intl";
import CustomLink from "./CustomLink";

export const runtime = "edge";

function Navigation() {
  const translations = useTranslations("Navbar");
  return (
    <nav className="flex items-center justify-center gap-6 uppercase ">
      <CustomLink href="/" title={translations("home")} />
      <CustomLink href="/about" title={translations("about")} />
      {/* <CustomLink href="/play" title={translations("play")} disabled /> */}
      <CustomLink href="/projects" title={translations("projects")} />
    </nav>
  );
}

export default Navigation;
