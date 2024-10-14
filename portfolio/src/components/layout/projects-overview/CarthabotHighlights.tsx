import { useTranslations } from "next-intl";
import Image from "next/image";

export const runtime = "edge";

function CarthabotHighlights() {
  const translations = useTranslations("ProjectsOverview");

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 w-full mt-4">
      <div className="flex items-center justify-start gap-1 xl:gap-4">
        <p className="underline underline-offset-4">
          {translations("performance")}:{" "}
        </p>
        <p className="text-4xl text-green-500 font-bold">A</p>
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
            src="/skills/figma.webp"
            alt="Figma"
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
          <Image
            src="/skills/firebase.webp"
            alt="Firebase"
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

export default CarthabotHighlights;
