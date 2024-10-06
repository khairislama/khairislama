import { useTranslations } from "next-intl";
import Image from "next/image";

function StrongCastHighlights() {
  const translations = useTranslations("ProjectsOverview");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 sm:grid-cols-10 md:grid-cols-3 lg:grid-cols-10 w-full mt-4 gap-1">
        <p className="text-4xl text-green-500 font-bold">A</p>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <p className="text-sm font-semibold xl:text-lg">
            {translations("performance")}
          </p>
          <p className="text-3xl font-bold text-green-500">98%</p>
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <p className="text-sm font-semibold xl:text-lg">
            {translations("structure")}
          </p>
          <p className="text-3xl font-bold text-green-500">100%</p>
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <p className="text-sm font-semibold xl:text-lg">LCP</p>
          <p className="text-3xl font-bold text-green-500">1.0s</p>
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <p className="text-sm font-semibold xl:text-lg">TBT</p>
          <p className="text-3xl font-bold text-green-500">65ms</p>
        </div>
        <div>
          <p className="text-sm font-semibold xl:text-lg">CLS</p>
          <p className="text-3xl font-bold text-green-500">0</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-1 xl:gap-4 col-span-2">
        <p className="underline underline-offset-4">
          {translations("stack")}:{" "}
        </p>
        <div className="flex items-center gap-1 sm:gap-3 md:gap-1 xl:gap-3">
          <Image
            src="/skills/nextjs.png"
            alt="Next js"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/tailwindcss.png"
            alt="Tailwind css"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/shopify.png"
            alt="Shopify"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/nodejs.png"
            alt="Node js"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/typescript.png"
            alt="Typescript"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/figma.png"
            alt="Figma"
            width={20}
            height={20}
            className="w-8"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <Image
            src="/skills/git.png"
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

export default StrongCastHighlights;
