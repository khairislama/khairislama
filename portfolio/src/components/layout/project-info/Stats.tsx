import { IProject } from "@/lib/Projects";
import { useTranslations } from "next-intl";

function StatsOneProject({ project }: { project: IProject }) {
  const translations = useTranslations(`Projects`);

  return (
    <div className="md:w-[50%] relative">
      {project?.performance ? (
        <div className="relative w-full h-full">
          {/* A text centered */}
          <p className="text-[350px] text-green-600 font-bold font-syne absolute inset-0 flex items-center justify-center z-10">
            A
          </p>
          <div className="flex flex-col h-full justify-center gap-2 max-w-[500px] mx-auto">
            <div className="flex items-center justify-between z-20">
              <div className="h-20 w-44 bg-background/60 flex flex-col items-center justify-center text-lg font-rubik tracking-wide py-3 px-1 rounded-[30px] border-2 border-foreground/80 text-foreground">
                <h3>LCP</h3>
                <p>{project.performance.lcp}</p>
              </div>
              <div className="h-20 w-44 bg-background/60 flex flex-col items-center justify-center text-lg font-rubik tracking-wide py-3 px-1 rounded-[30px] border-2 border-foreground/80 text-foreground">
                <h3> {translations("structure")} </h3>
                <p>{project.performance.structure}</p>
              </div>
            </div>
            <div className="flex items-center justify-center z-20">
              <div className="h-20 w-44 bg-background/60 flex flex-col items-center justify-center text-lg font-rubik tracking-wide py-3 px-1 rounded-[30px] border-2 border-foreground/80 text-foreground">
                <h3> {translations("performance")} </h3>
                <p>{project.performance.performance}</p>
              </div>
            </div>
            <div className="flex items-center justify-between z-20">
              <div className="h-20 w-44 bg-background/60 flex flex-col items-center justify-center text-lg font-rubik tracking-wide py-3 px-1 rounded-[30px] border-2 border-foreground/80 text-foreground">
                <h3>TBT</h3>
                <p>{project.performance.tbt}</p>
              </div>
              <div className="h-20 w-44 bg-background/60 flex flex-col items-center justify-center text-lg font-rubik tracking-wide py-3 px-1 rounded-[30px] border-2 border-foreground/80 text-foreground">
                <h3>CLS</h3>
                <p>{project.performance.cls}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-20 hidden md:flex items-center justify-center h-full">
          <p className="text-4xl xl:text-6xl font-syne text-center font-bold uppercase">
            {translations("no-performance")
              .split(" ")
              .map((word, i) => (
                <span key={i}>
                  {word} <br />
                </span>
              ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default StatsOneProject;
