import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
  reverse?: boolean;
  projectNumber: number;
  image: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };
}

function Overview({ reverse, projectNumber, image }: Props) {
  const translations = useTranslations("ProjectsOverview");
  return (
    <div
      className={`flex flex-col relative md:mt-24 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`flex flex-col gap-1 mt-10 xl:mt-28 md:text-start md:w-[calc(50%+4rem)] ${
          reverse ? "md:-ml-6" : "md:-mr-6"
        }`}
      >
        <p
          className={`font-syne font-bold text-primary/80 text-sm ${
            reverse && "md:text-end"
          }`}
        >
          {" "}
          {translations("featured")}{" "}
        </p>
        <h3
          className={`font-rubik font-semibold text-2xl text-foreground/70 ${
            reverse && "md:text-end"
          }`}
        >
          {" "}
          {translations(`project-${projectNumber}-title`)}{" "}
        </h3>
        <div
          className={`p-4 bg-primary/10 backdrop-blur-2xl rounded-xl mt-8 relative z-20 ${
            reverse ? "md:pl-10" : "md:pr-20"
          }`}
        >
          <p className="text-justify font-rubik text-sm">
            {translations(`project-${projectNumber}-description`)}
          </p>
        </div>
        <div
          className={`flex gap-6 p-2 items-center justify-center md:justify-start mt-4 ${
            reverse && "flex-row-reverse"
          }`}
        >
          <Link href="" target="_blank">
            <GitHubLogoIcon className="w-8 h-8" />
          </Link>
          <Link href="" target="_blank">
            <ExternalLink className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div className="relative w-full bg-black p-2 rounded-xl shadow-lg h-fit md:mt-20 md:w-1/2">
        <Image
          src="/projects/gradient.svg"
          alt="gradient"
          width={659}
          height={739}
          className="absolute object-cover w-full pointer-events-none z-0 -right-[30%] -bottom-36"
        />
        <Image
          src="/projects/gradient2.svg"
          alt="gradient"
          width={678}
          height={760}
          className="absolute object-cover w-full pointer-events-none z-0 -bottom-[30%] -left-[40%]"
        />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`relative z-10 ${
            reverse
              ? "md:rounded-bl-3xl md:rounded-tr-3xl"
              : "md:rounded-br-3xl md:rounded-tl-3xl"
          }`}
        />
      </div>
    </div>
  );
}

export default Overview;
