import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Overview() {
  const translations = useTranslations("ProjectsOverview");
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-col gap-1 mt-10 md:text-start">
        <p className="font-syne font-bold text-primary/80 text-sm">
          {" "}
          {translations("featured")}{" "}
        </p>
        <h3 className="font-rubik font-semibold text-2xl text-foreground/70">
          {" "}
          {translations("project-1-title")}{" "}
        </h3>
        <div className="p-4 bg-foreground/10 backdrop-blur-sm rounded-xl mt-8">
          <p className="text-justify font-rubik text-sm">
            {translations("project-1-description")}
          </p>
        </div>
        <div className="flex gap-6 p-2 items-center justify-center md:justify-start mt-4">
          <Link href="" target="_blank">
            <GitHubLogoIcon className="w-8 h-8" />
          </Link>
          <Link href="" target="_blank">
            <ExternalLink className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div>
        <h2>fihezoufh</h2>
      </div>
    </div>
  );
}

export default Overview;
