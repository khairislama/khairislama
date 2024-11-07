import { useTranslations } from "next-intl";
import Image from "next/image";

function TestHighlights() {
  const translations = useTranslations("ProjectsOverview");

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 w-full mt-2 gap-4">
        <div>
          <p className="text-2xl font-semibold text-green-400">+sdfsdf</p>
          <p className="text-sm">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, hic itaque, unde quam repellat maxime libero ratione
            eius corrupti quia aspernatur corporis ducimus, ab dolores quisquam
            dignissimos tempore quos odio?{" "}
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-green-400">sdfsdf+</p>
          <p className="text-sm">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            delectus eligendi rerum et velit, harum in dolor doloribus aut
            aliquam reprehenderit blanditiis! Ex, minima ipsa. Aperiam accusamus
            quis blanditiis quo.{" "}
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-green-400">sdfsdf</p>
          <p className="text-sm">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vero
            cupiditate beatae nisi nobis in odit est excepturi fuga architecto.
            Dicta magnam sit est error sint! Alias delectus ipsa tempora?
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-1 xl:gap-4 col-span-2">
        <p className="underline underline-offset-4">
          {translations("backend-stack")}:{" "}
        </p>
        <div className="flex items-center gap-1 sm:gap-3 md:gap-1 xl:gap-3">
          <Image
            src="/skills/nestjs.webp"
            alt="Nest js"
            width={20}
            height={20}
            className="w-8"
            sizes="30vw"
          />
          <Image
            src="/skills/typeorm.png"
            alt="Typeorm"
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
            src="/skills/postgresql.webp"
            alt="Postgresql"
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
          <Image
            src="/skills/azure.webp"
            alt="Azure devops"
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

export default TestHighlights;
