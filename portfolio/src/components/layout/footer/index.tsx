import Image from "next/image";
import Circle from "./Circle";
import { useTranslations } from "next-intl";

export const runtime = "edge";

function Footer() {
  const translations = useTranslations("Footer");
  return (
    <footer className="bg-gradient-to-b from-background via-primary/50 to-primary/70 w-full pb-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center overflow-hidden">
        <Circle />
        <div className="bg-background/50 mt-14 p-3 rounded-xl border-foreground/70 border shadow-xl">
          <h4 className="text-xs flex items-center justify-center gap-2">
            <span> {translations("cooked with love in")} </span>
            <Image
              src="/icons/tunisia.webp"
              alt="Tunisia"
              width={64}
              height={43}
              className="w-5"
            />
            <span> {translations("with")} </span>{" "}
            <Image
              src="/icons/social/figma.svg"
              alt="Figma"
              width={40}
              height={40}
              className="w-4"
            />
            <span>&</span>{" "}
            <Image
              src="/skills/nextjs.webp"
              alt="Next JS"
              width={62}
              height={62}
              className="w-4"
            />
          </h4>
        </div>
        <p className="text-xs mt-4 text-foreground/70">
          &copy; Khairi SLAMA 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
