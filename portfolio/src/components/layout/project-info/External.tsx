import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, Slash } from "lucide-react";
import Link from "next/link";

function ExternalOneProject({
  external_link,
}: {
  external_link: string | undefined;
}) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger className="uppercase w-full flex">
          {external_link ? (
            <Link
              className="h-20 w-20 bg-foreground/40 rounded-full p-4"
              href={external_link}
            >
              <ExternalLink className="w-full h-auto" />
            </Link>
          ) : (
            <div className="h-20 w-20 bg-foreground/40 rounded-full p-4 relative cursor-not-allowed">
              <ExternalLink className="w-full h-auto" />
              <Slash className="absolute top-0 left-0 w-full h-full" />
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent className="bg-foreground flex items-center gap-2">
          {external_link ? (
            <p className="hidden md:block text-lg">Demo</p>
          ) : (
            <p className="hidden md:block text-lg">
              No Demo available for this project
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ExternalOneProject;
