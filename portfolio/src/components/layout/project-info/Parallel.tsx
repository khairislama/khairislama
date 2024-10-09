import { IProject } from "@/lib/Projects";
import Image from "next/image";

function ParallelImages({ project }: { project: IProject }) {
  return (
    <div className="flex gap-12 h-full my-10">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        className="object-cover w-[48%]"
      />
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        className="object-cover w-[48%]"
      />
    </div>
  );
}

export default ParallelImages;
