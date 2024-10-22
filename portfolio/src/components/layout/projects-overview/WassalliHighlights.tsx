import { useTranslations } from "next-intl";
import Image from "next/image";

export const runtime = "edge";

function WassalliHighlights() {
  const translations = useTranslations("ProjectsOverview");
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 sm:grid-cols-10 md:grid-cols-3 lg:grid-cols-10 w-full mt-2 gap-3">
        <p className="text-5xl text-green-500 font-bold text-center self-center">
          A
        </p>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <p className="text-sm xl:text-base">{translations("performance")}</p>
          <p className="text-2xl font-semibold text-green-500">96%</p>
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <p className="text-sm xl:text-base">{translations("structure")}</p>
          <p className="text-2xl font-semibold text-green-500">98%</p>
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <p className="text-sm xl:text-base">LCP</p>
          <p className="text-2xl font-semibold text-green-500">621ms</p>
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <p className="text-sm xl:text-base">TBT</p>
          <p className="text-2xl font-semibold text-green-500">0</p>
        </div>
        <div>
          <p className="text-sm xl:text-base">CLS</p>
          <p className="text-2xl font-semibold text-green-500">0.12</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-1 xl:gap-4 col-span-2">
        <p className="underline underline-offset-4">
          {translations("stack")}:{" "}
        </p>
        <div className="flex items-center gap-1 sm:gap-3 md:gap-1 xl:gap-3">
          <Image
            src="/skills/nextjs.webp"
            alt="Next js"
            width={20}
            height={20}
            className="w-8"
            sizes="30vw"
          />
          <Image
            src="/skills/tailwindcss.webp"
            alt="Tailwind css"
            width={20}
            height={20}
            className="w-8"
            sizes="30vw"
          />
          <Image
            src="/skills/nodejs.webp"
            alt="Node js"
            width={20}
            height={20}
            className="w-8"
            sizes="30vw"
          />
          <Image
            src="/skills/typescript.webp"
            alt="Typescript"
            width={20}
            height={20}
            className="w-8"
            sizes="30vw"
          />
          <Image
            src="/skills/git.webp"
            alt="Git"
            width={20}
            height={20}
            className="w-8"
            sizes="30vw"
          />
        </div>
      </div>
    </div>
  );
}

export default WassalliHighlights;
