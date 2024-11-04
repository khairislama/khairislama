import { SKILLS } from "@/lib/Skills";
import Image from "next/image";

function SkillsGroup() {
  return (
    <article className="relative mx-auto mt-16 flex flex-col items-center justify-center mb-44 md:mb-[72%]">
      {/* Grid layout for screens smaller than md */}
      <div className="grid grid-cols-3 auto-rows-auto gap-4 lg:gap-8 md:hidden">
        {SKILLS.map((skill, i) => (
          <div
            key={i}
            className={`w-20 h-20 lg:w-28 lg:h-28 bg-foreground/10 drop-shadow-md rounded-full flex items-center justify-center mx-auto ${
              SKILLS.length % 3 !== 0 && i === SKILLS.length - 1
                ? "col-span-3 justify-self-center"
                : ""
            }`}
          >
            <Image
              src={`/skills/${skill.name}.webp`}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="w-10 lg:w-16"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            />
          </div>
        ))}
      </div>

      {/* Flex layout for md+ screens */}
      <div className="hidden md:flex flex-col items-center justify-center">
        {/* First row: 7 icons */}
        <div className="relative flex items-center justify-center gap-4 lg:gap-8 mb-8 z-10">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="w-20 h-20 lg:w-28 lg:h-28 bg-foreground/10 drop-shadow-md rounded-full flex items-center justify-center lg:hover:scale-125 duration-300 transition-all ease-in-out"
            >
              <Image
                src={`/skills/${SKILLS[i].name}.webp`}
                alt={SKILLS[i].name}
                width={SKILLS[i].width}
                height={SKILLS[i].height}
                className="w-10 lg:w-16"
                sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
              />
            </div>
          ))}
        </div>

        {/* Second row: 6 icons */}
        <div className="relative flex items-center justify-center gap-4 lg:gap-8 z-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i + 7} // Offset by 7 for the second row
              className="relative w-20 h-20 lg:w-28 lg:h-28 bg-foreground/10 drop-shadow-md rounded-full flex items-center justify-center lg:hover:scale-125 duration-300 transition-all ease-in-out"
            >
              <Image
                src={`/skills/${SKILLS[i + 7].name}.webp`}
                alt={SKILLS[i + 7].name}
                width={SKILLS[i + 7].width}
                height={SKILLS[i + 7].height}
                className="w-10 lg:w-16"
                sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
              />
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/skills/vectors.svg"
        alt="lines from skills bulls to the KS world"
        width={388}
        height={451}
        className="absolute top-[80%] w-[70%] pointer-events-none hidden md:block z-0"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <Image
        src="/skills/world.svg"
        alt="The KS world"
        width={1240}
        height={511}
        className="absolute -bottom-44 md:top-[250%] w-full brightness-150"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
    </article>
  );
}

export default SkillsGroup;
