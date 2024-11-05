import PrefixedLink from "@/components/PrefixedLink";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink, Link2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  reverse?: boolean;
  projectNumber: number;
  viewMore: string;
  children?: React.ReactNode;
  github?: string;
  demo?: string;
}

function ProjectText({
  projectNumber,
  reverse,
  viewMore,
  children,
  github,
  demo,
}: Props) {
  const translations = useTranslations("ProjectsOverview");
  return (
    <div
      className={`flex flex-col gap-1 xl:mt-28 md:text-start md:w-[calc(50%+4rem)] ${
        reverse ? "md:-ml-6" : "md:-mr-6"
      }`}
    >
      <p
        className={`font-syne font-bold text-primary text-sm ${
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
        className={`p-4 bg-primary/10 backdrop-blur-2xl rounded-xl mt-2 relative z-20 ${
          reverse ? "md:pl-10" : "md:pr-20"
        }`}
      >
        <p className="text-justify font-rubik">
          {translations(`project-${projectNumber}-description`)}
        </p>
        {children}
      </div>
      <div
        className={`mt-4 flex gap-6 p-2 items-center justify-center md:justify-start md:group-hover:translate-y-4 duration-300 ease-in-out transition-all z-20 ${
          reverse && "flex-row-reverse"
        }`}
      >
        {github && (
          <Link href={github} target="_blank" className="h-full w-full flex items-center justify-center" >
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger className="uppercase" aria-label="github link">
                  <GitHubLogoIcon className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent className="bg-foreground flex items-center gap-2">
                  {translations(`github-link`)}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        )}
        <PrefixedLink href={viewMore} label="read more about this project" className="h-full w-full flex items-center justify-center">
          <Button variant={"ghost"}>
            <ExternalLink className="w-8 h-8 mr-4" />{" "}
            {translations(`read-more`)}{" "}
          </Button>
        </PrefixedLink>
        {demo && (
          <Link href={demo} target="_blank" className="h-full w-full flex items-center justify-center">
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger className="uppercase" aria-label="demo link">
                  <Link2 className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent className="bg-foreground flex items-center gap-2">
                  {translations(`demo-link`)}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectText;
