import { SKILLS } from "@/lib/Skills";
import Image from "next/image";

function SkillsGroup() {
  return (
    <div className="max-w-4xl mx-auto flex mt-16 items-center justify-center">
      <div className="w-24 h-24 bg-foreground/5 drop-shadow-md rounded-full flex items-center justify-center">
        <Image
          src={`/skills/${SKILLS[3].name}.png`}
          alt="next js"
          width={SKILLS[3].width}
          height={SKILLS[3].height}
          className=""
        />
      </div>
    </div>
  );
}

export default SkillsGroup;
