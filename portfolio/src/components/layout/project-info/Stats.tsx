import { IProject } from "@/lib/Projects";
import { useTranslations } from "next-intl";

function StatsOneProject({ project }: { project: IProject }) {
  const translations = useTranslations(`Projects`);
  // const projectTranslations = useTranslations(`Project-${project.slang}`);

  return (
    <div className="md:w-[50%] relative">
      {project.performance ? (
        <div className="relative w-full h-full">
          {/* A text centered */}
          <p className="text-[250px] text-green-500 font-bold font-syne absolute inset-0 flex items-center justify-center z-10">
            A
          </p>
          <div className="flex flex-col h-full justify-center">
            <div className="flex items-center justify-between z-20">
              <div className="h-20 w-36 bg-red-200">hello</div>
              <div className="h-20 w-36 bg-red-200">hello</div>
            </div>
            <div className="flex items-center justify-center z-20">
              <div className="h-20 w-36 bg-red-200">hello</div>
            </div>
            <div className="flex items-center justify-between z-20">
              <div className="h-20 w-36 bg-red-200">hello</div>
              <div className="h-20 w-36 bg-red-200">hello</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-20 hidden md:flex items-center justify-center h-full">
          <span className="text-5xl xl:text-7xl font-syne text-center font-bold uppercase">
            {translations("no-performance")
              .split(" ")
              .map((word) => (
                <>
                  {word} <br />
                </>
              ))}
          </span>
        </div>
      )}
    </div>
  );
}

export default StatsOneProject;
