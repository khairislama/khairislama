import { useTranslations } from "next-intl";
import Image from "next/image";

function FormulationHighlights() {
  const translations = useTranslations("ProjectsOverview");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 w-full mt-4 gap-1">
        <div>
          <p className="text-xl font-semibold text-green-500">+3500h</p>
          <p className="text-xs">{translations("formulation-highlight-1")}</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-green-500">1600+</p>
          <p className="text-xs">{translations("formulation-highlight-2")}</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-green-500">€220k</p>
          <p className="text-xs">{translations("formulation-highlight-3")}</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-1 xl:gap-4 col-span-2">
        <p className="underline underline-offset-4">
          {translations("backend-stack")}:{" "}
        </p>
        <div className="flex items-center gap-1 sm:gap-3 md:gap-1 xl:gap-3">
          <Image
            src="/skills/nestjs.png"
            alt="Nest js"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/typeorm.png"
            alt="Typeorm"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/nodejs.png"
            alt="Node js"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/typescript.png"
            alt="Typescript"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/postgresql.png"
            alt="Postgresql"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/git.png"
            alt="Git"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/azure.png"
            alt="Azure devops"
            width={20}
            height={20}
            className="w-8"
          />
        </div>
      </div>
    </div>
  );
}

export default FormulationHighlights;
