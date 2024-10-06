import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";

interface Props {
  reverse?: boolean;
  image: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };
}

function ProjectImage({ image, reverse }: Props) {
  return (
    <div className="relative w-full bg-black p-2 rounded-xl shadow-lg md:mt-20 md:w-1/2">
      <Image
        src="/projects/gradient.svg"
        alt="gradient"
        width={659}
        height={739}
        className="absolute object-cover w-full pointer-events-none z-0 -right-[30%] -bottom-36"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <Image
        src="/projects/gradient2.svg"
        alt="gradient"
        width={678}
        height={760}
        className="absolute object-cover w-full pointer-events-none z-0 -bottom-[30%] -left-[40%]"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={`relative z-10 h-full object-cover ${
          reverse
            ? "md:rounded-bl-3xl md:rounded-tr-3xl"
            : "md:rounded-br-3xl md:rounded-tl-3xl"
        }`}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200, 35))}`}
      />
    </div>
  );
}

export default ProjectImage;
