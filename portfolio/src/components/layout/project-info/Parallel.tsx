import { IProject } from "@/lib/Projects";
import Image from "next/image";

function ParallelImages({ project }: { project: IProject }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 h-full my-10">
      <div className="w-full overflow-hidden rounded-xl">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="object-cover"
        />
      </div>

      <div className="w-full overflow-hidden rounded-xl">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default ParallelImages;
