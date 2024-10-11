import Image from "next/image";
import FeaturesOneProject from "./Features";
import StatsOneProject from "./Stats";
import { useTranslations } from "next-intl";
import { IProject } from "@/lib/Projects";

function ExplorationOneProject({ project }: { project: IProject }) {
  const translations = useTranslations(`Projects`);
  const projectTranslations = useTranslations(`Project-${project.slug}`);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-[50%]">
          <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider">
            {translations("exploration")}
          </h2>
          <p className="text-lg mt-4 font-rubik">
            {projectTranslations("exploration")}
          </p>
        </div>
        <StatsOneProject project={project} />
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <FeaturesOneProject features={project.features} slug={project.slug} />
      </div>
      {project.images.length > 1 && (
        <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-xl relative group">
          <Image
            src={project.images[1].src}
            alt={project.images[1].alt}
            width={1920}
            height={1080}
            className=""
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-background/30 shadow-[inset_1px_1px_150px_12px_rgba(0,0,0,0.9)] group-hover:shadow-[inset_1px_1px_50px_12px_rgba(0,0,0,0.5)] transition duration-500 ease-in-out" />
        </div>
      )}
    </div>
  );
}

export default ExplorationOneProject;