import { useTranslations } from "next-intl";
import NavbarTop from "./NavbarTop";
import Image from "next/image";

function Navbar() {
  const translations = useTranslations("Navbar");

  return (
    <header className="sticky top-0 z-50 w-full drop-shadow-xl">
      <NavbarTop />
      <nav className="h-10 md:h-12 lg:h-14 border-b-2 border-border bg-opacity-70 hover:bg-opacity-100 focus-within:bg-opacity-100 transition-all ease-in-out duration-300">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-10">
            <p>{translations("home")}</p>
            <p>{translations("about")}</p>
            <p>{translations("play")}</p>
            <p>{translations("projects")}</p>
            <p>{translations("contact")}</p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <Image
              src="/icons/social/instagram.svg"
              alt="instagram carthabot"
              width={20}
              height={20}
              className="w-8"
            />
            <Image
              src="/icons/social/github.svg"
              alt="github carthabot"
              width={20}
              height={20}
              className="w-8"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
