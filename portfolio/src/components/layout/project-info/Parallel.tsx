import { shimmer, toBase64 } from "@/lib/image";
import { IProject } from "@/lib/Projects";
import { cn } from "@/lib/utils";
import Image from "next/image";

function ParallelImages({ project }: { project: IProject }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-10">
      <div className="w-full overflow-hidden rounded-xl relative group">
        <Image
          src={project.vertical_images[0].src}
          alt={project.vertical_images[0].alt}
          width={600}
          height={650}
          className={cn(
            "object-cover w-full",
            project.vertical_images[0]?.blur && "blur-sm"
          )}
          sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(600, 650)
          )}`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-background/30 shadow-[inset_1px_1px_50px_12px_rgba(0,0,0,0.9)] group-hover:shadow-[inset_1px_1px_20px_12px_rgba(0,0,0,0.5)] transition duration-500 ease-in-out" />
      </div>

      <div className="w-full overflow-hidden rounded-xl relative group">
        <Image
          src={project.vertical_images[1].src}
          alt={project.vertical_images[1].alt}
          width={600}
          height={650}
          className={cn(
            "object-cover w-full",
            project.vertical_images[1]?.blur && "blur-sm"
          )}
          sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(600, 650)
          )}`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-background/30 shadow-[inset_1px_1px_50px_12px_rgba(0,0,0,0.9)] group-hover:shadow-[inset_1px_1px_20px_12px_rgba(0,0,0,0.5)] transition duration-500 ease-in-out" />
      </div>
    </div>
  );
}

export default ParallelImages;
