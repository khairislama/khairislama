import CustomLink from "@/components/CustomLink";
import { PROJECTS } from "@/lib/Projects";
import { useTranslations } from "next-intl";
import Image from "next/image";

function getRandomProjects(excludeIndex: number, count: number) {
  const filteredProjects = PROJECTS.filter(
    (_, index) => index !== excludeIndex
  );
  const shuffled = filteredProjects.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function RecommendedProjects({
  projectIndex,
  nextProjectSlug,
  previousProjectSlug,
}: {
  projectIndex: number;
  nextProjectSlug: string;
  previousProjectSlug: string;
}) {
  const translations = useTranslations(`Projects`);

  const randomProjects = getRandomProjects(projectIndex, 3);

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between gap-3">
        <CustomLink
          href={`/projects/${nextProjectSlug}`}
          className="flex items-end gap-2 md:gap-4"
        >
          <Image
            src="/shapes/arrow-left.svg"
            alt="Previous"
            width={50}
            height={13}
            className="w-8 md:w-14"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <p className="font-semibold font-rubik text-sm md:text-lg text-foreground/90 uppercase">
            {translations("previous-work")}
          </p>
        </CustomLink>
        <CustomLink
          href={`/projects/${previousProjectSlug}`}
          className="flex items-start gap-2 md:gap-4"
        >
          <p className="font-semibold font-rubik text-sm md:text-lg text-foreground/90 uppercase">
            {translations("next-work")}
          </p>
          <Image
            src="/shapes/arrow-right.svg"
            alt="Next"
            width={50}
            height={13}
            className="w-8 md:w-14"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </CustomLink>
      </div>
      <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider text-center mt-4">
        {translations("other-projects")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mt-10">
        {randomProjects.map((project, index) => (
          <CustomLink
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`flex flex-col overflow-hidden relative ${
              index === randomProjects.length - 1 ? "hidden md:block" : ""
            }`}
          >
            <Image
              src={project.vertical_images[0].src}
              alt={project.name}
              width={600}
              height={650}
              className="rounded-xl w-full"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            />
            <div className="w-full mt-4 ml-2">
              <h3 className="font-semibold font-syne text-foreground/90">
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base">
                {project.description}
              </p>
            </div>
          </CustomLink>
        ))}
      </div>
    </div>
  );
}

export default RecommendedProjects;
