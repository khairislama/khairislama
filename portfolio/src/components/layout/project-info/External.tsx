import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, Slash } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

function ExternalOneProject({
  external_link,
}: {
  external_link: string | undefined;
}) {
  const translations = useTranslations(`Projects`);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger className="uppercase w-full flex">
          {external_link ? (
            <Link
              className="h-20 w-20 bg-foreground/40 rounded-full p-4 hover:bg-foreground/20 transition duration-300 ease-in-out"
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
        <TooltipContent className="hidden bg-foreground md:flex items-center gap-2 text-lg">
          {external_link ? (
            <p> {translations("demo")} </p>
          ) : (
            <p>{translations("no-demo")}</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ExternalOneProject;
