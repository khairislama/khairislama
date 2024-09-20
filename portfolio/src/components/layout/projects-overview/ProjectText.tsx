import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  reverse?: boolean;
  projectNumber: number;
  children?: React.ReactNode;
}

function ProjectText({ projectNumber, reverse, children }: Props) {
  const translations = useTranslations("ProjectsOverview");
  return (
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
        {translations(`featured-${projectNumber}`)}{" "}
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
        {children}
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
  );
}

export default ProjectText;
