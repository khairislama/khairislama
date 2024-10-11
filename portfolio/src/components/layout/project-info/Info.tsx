import { useTranslations } from "next-intl";

function InfoOneProject({ slang }: { slang: string }) {
  const translations = useTranslations(`Projects`);
  const projectTranslations = useTranslations(`Project-${slang}`);
  return (
    <div className="w-full mx-auto max-w-4xl grid grid-cols-3 gap-4 sm:gap-24 mt-10 font-syne">
      <div className="flex flex-col items-center justify-center text-center sm:text-lg">
        <h4 className="text-foreground font-semibold">
          {translations("start-date")}
        </h4>
        <p className=""> {projectTranslations("start-date")} </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center sm:text-lg">
        <h4 className="text-foreground font-semibold">
          {translations("client")}
        </h4>
        <p className="">{projectTranslations("client")}</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center sm:text-lg">
        <h4 className="text-foreground font-semibold">
          {translations("role")}
        </h4>
        <p className="">{projectTranslations("role")}</p>
      </div>
    </div>
  );
}

export default InfoOneProject;
