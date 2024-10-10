import { PageHero, ProjectInfo } from "@/components/layout";
import { PROJECTS } from "@/lib/Projects";
import { useTranslations } from "next-intl";
import Image from "next/image";

function SingleProjectPage({ params }: { params: { slang: string } }) {
  const slang = params.slang;
  const translations = useTranslations(`Project-${slang}`);

  const project = PROJECTS.filter((project) => project.slang === slang)[0];

  return (
    <main className="w-full overflow-hidden mb-24">
      <PageHero
        title={translations("title")}
        subtitle={translations("subtitle")}
      />
      <ProjectInfo project={project} />
      <div className="flex w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 items-center justify-between gap-3">
        <div className="flex items-end gap-2 md:gap-4">
          <Image
            src="/shapes/arrow-left.svg"
            alt="Previous"
            width={50}
            height={13}
            className="w-8 md:w-14"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <p className="font-semibold font-rubik text-sm md:text-lg text-foreground/90 uppercase">
            Previous work
          </p>
        </div>
        <div className="flex items-start gap-2 md:gap-4">
          <p className="font-semibold font-rubik text-sm md:text-lg text-foreground/90 uppercase">
            Next work
          </p>
          <Image
            src="/shapes/arrow-right.svg"
            alt="Next"
            width={50}
            height={13}
            className="w-8 md:w-14"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </div>
      </div>
    </main>
  );
}

export default SingleProjectPage;

export async function generateStaticParams() {
  const projects = PROJECTS;

  return projects.map((project) => ({
    slang: project.slang,
  }));
}
