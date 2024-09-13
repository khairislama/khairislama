import { SKILLS } from "@/lib/Skills";
import Image from "next/image";

function SkillsGroup() {
  return (
    <div className="mx-auto mt-16 flex flex-col items-center justify-center">
      {/* First row: 7 icons */}
      <div className="flex items-center justify-center gap-8 mb-8">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="w-28 h-28 bg-foreground/10 drop-shadow-md rounded-full flex items-center justify-center"
          >
            <Image
              src={`/skills/${SKILLS[i].name}.png`}
              alt={SKILLS[i].name}
              width={SKILLS[i].width}
              height={SKILLS[i].height}
              className="w-16"
            />
          </div>
        ))}
      </div>

      {/* Second row: 6 icons */}
      <div className="flex items-center justify-center gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i + 7} // Offset by 7 for the second row
            className="w-28 h-28 bg-foreground/10 drop-shadow-md rounded-full flex items-center justify-center"
          >
            <Image
              src={`/skills/${SKILLS[i + 7].name}.png`}
              alt={SKILLS[i + 7].name}
              width={SKILLS[i + 7].width}
              height={SKILLS[i + 7].height}
              className="w-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsGroup;
