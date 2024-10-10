import { IProject } from "@/lib/Projects";
import Image from "next/image";

function ParallelImages({ project }: { project: IProject }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-10">
      <div className="w-full overflow-hidden rounded-xl">
        <Image
          src="/600-650.png"
          alt={project.image.alt}
          width={600}
          height={650}
          className="object-cover w-full"
        />
      </div>

      <div className="w-full overflow-hidden rounded-xl">
        <Image
          src="/600-650.png"
          alt={project.image.alt}
          width={600}
          height={650}
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}

export default ParallelImages;
