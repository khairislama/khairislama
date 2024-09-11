import { useTranslations } from "next-intl";

function Navigation() {
  const translations = useTranslations("Navbar");
  return (
    <nav className="flex items-center justify-center gap-6 uppercase">
      <p>{translations("home")}</p>
      <p>{translations("about")}</p>
      <p>{translations("play")}</p>
      <p>{translations("projects")}</p>
      <p>{translations("contact")}</p>
    </nav>
  );
}

export default Navigation;
