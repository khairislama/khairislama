import { useTranslations } from "next-intl";
import CustomLink from "./CustomLink";

function Navigation() {
  const translations = useTranslations("Navbar");
  return (
    <nav className="flex items-center justify-center gap-6 uppercase ">
      <CustomLink href="/" title={translations("home")} />
      <CustomLink href="/" title={translations("about")} />
      <CustomLink href="/" title={translations("play")} />
      <CustomLink href="/" title={translations("projects")} />
      <CustomLink href="/" title={translations("contact")} />
    </nav>
  );
}

export default Navigation;
