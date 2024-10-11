import { IProject } from "@/lib/Projects";
import { useTranslations } from "next-intl";
import Image from "next/image";

function GithubStats({ project }: { project: IProject }) {
  const { stats } = project;
  const translations = useTranslations(`Projects`);
  return (
    <section className="w-full mx-auto max-w-4xl my-10">
      <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider md:text-center">
        {translations("github-stats")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 md:mt-10">
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">{translations("total-star-earned")}</p>
          <p className="font-syne font-bold text-3xl"> {stats.stars} </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">{translations("total-commits")}</p>
          <p className="font-syne font-bold text-3xl">{stats.commits}</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">{translations("total-prs")}</p>
          <p className="font-syne font-bold text-3xl">{stats.prs}</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">{translations("total-issues")}</p>
          <p className="font-syne font-bold text-3xl">{stats.issues}</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">{translations("total-tests")}</p>
          <p className="font-syne font-bold text-3xl">{stats.tests}</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">{translations("technologies")}</p>
          <div className="w-full h-full flex items-center justify-center gap-4">
            {stats.technologies.map((tech, i) => (
              <Image
                key={i}
                src={tech.src}
                alt={tech.alt}
                width={50}
                height={50}
                className="w-8"
                sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GithubStats;
