import { useTranslations } from "next-intl";
import Image from "next/image";

export const runtime = "edge";

function PlaygroundHighlights() {
  const translations = useTranslations("ProjectsOverview");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 w-full mt-4 gap-1">
        <div>
          <p className="text-xl font-semibold">
            {translations("playground-highlight-1-title")}
          </p>
          <p className="text-xs">{translations("playground-highlight-1")}</p>
        </div>
        <div>
          <p className="text-xl font-semibold">
            {translations("playground-highlight-2-title")}
          </p>
          <p className="text-xs">{translations("playground-highlight-2")}</p>
        </div>
        <div>
          <p className="text-xl font-semibold">
            {translations("playground-highlight-3-title")}
          </p>
          <p className="text-xs">{translations("playground-highlight-3")}</p>
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
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/tailwindcss.webp"
            alt="Tailwind css"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/blender.webp"
            alt="Blender"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/nodejs.webp"
            alt="Node js"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/typescript.webp"
            alt="Typescript"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/git.webp"
            alt="Git"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </div>
      </div>
    </div>
  );
}

export default PlaygroundHighlights;
