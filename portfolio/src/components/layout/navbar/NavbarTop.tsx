import { useTranslations } from "next-intl";
import NavLanguage from "./NavLanguage";
import Link from "next/link";

export const runtime = "edge";

export default function NavbarTop() {
  const translations = useTranslations("Navbar");

  return (
    <div className="h-6 lg:h-8 w-full">
      <div className="h-full flex items-center justify-center lg:justify-end gap-8 max-w-7xl mx-auto text-xs">
        <span className="cursor-default">+ 216 54 00 73 87</span>
        <Link href="/cv-francais.pdf" download className="cursor-pointer">
          {translations("cv")}
        </Link>
        <NavLanguage />
      </div>
    </div>
  );
}
