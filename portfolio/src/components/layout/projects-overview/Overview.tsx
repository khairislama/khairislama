import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Overview() {
  const translations = useTranslations("ProjectsOverview");
  return (
    <div className="flex flex-col md:flex-row relative md:mt-24">
      <div className="flex flex-col gap-1 mt-10 xl:mt-28 md:text-start md:w-[calc(50%+4rem)] md:-mr-6">
        <p className="font-syne font-bold text-primary/80 text-sm">
          {" "}
          {translations("featured")}{" "}
        </p>
        <h3 className="font-rubik font-semibold text-2xl text-foreground/70">
          {" "}
          {translations("project-1-title")}{" "}
        </h3>
        <div className="p-4 bg-primary/10 backdrop-blur-2xl rounded-xl mt-8 relative z-20 md:pr-20 ">
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
          src="/projects/strong-cast-metrix.webp"
          alt="strong cast project metrix with A performance"
          width={1269}
          height={819}
          className="rounded-xl relative z-10"
        />
      </div>
    </div>
  );
}

export default Overview;
