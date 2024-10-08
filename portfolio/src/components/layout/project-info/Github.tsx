import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function GithubOneProject({
  github_link,
}: {
  github_link: string | undefined;
}) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger className="uppercase w-full flex">
          {github_link ? (
            <Link
              className="h-20 w-20 bg-foreground/40 rounded-full p-4"
              href={github_link}
            >
              <Image
                src="/icons/social/github.svg"
                alt="github"
                width={48}
                height={48}
                className="object-cover w-full"
              />
            </Link>
          ) : (
            <div className="h-20 w-20 bg-foreground/40 rounded-full p-4 relative cursor-not-allowed">
              <Image
                src="/icons/social/github.svg"
                alt="github"
                width={48}
                height={48}
                className="object-cover w-full"
              />
              <Slash className="absolute top-0 left-0 w-full h-full" />
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent className="bg-foreground flex items-center gap-2">
          {github_link ? (
            <p className="hidden md:block text-lg">Github link</p>
          ) : (
            <p className="hidden md:block text-lg">
              No github link for this project
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default GithubOneProject;
