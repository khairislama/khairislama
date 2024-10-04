import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Picture from "./Picture";
import PrefixedLink from "@/components/PrefixedLink";

interface Props {
  title: string;
  description: string;
  button?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  bottomFocused?: boolean;
}

function KnowAboutMe({
  title,
  description,
  button,
  src,
  alt,
  width,
  height,
  bottomFocused,
}: Props) {
  const translations = useTranslations("KnowMe");
  return (
    <section className="relative w-full mt-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-24 p-4 sm:p-6 xl:p-0">
        <div className="my-auto flex flex-col gap-4 lg:gap-14">
          <h2 className="font-syne font-bold text-5xl max-w-md text-balance">
            {title}
          </h2>
          <p className="font-rubik text-justify">{description}</p>
          {button && (
            <Button
              size={"lg"}
              className="h-12 bg-gradient-to-r from-primary to-secondary text-foreground/80 font-rubik w-full sm:w-1/2 rounded-3xl transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300"
            >
              <PrefixedLink href="/about">
                {translations("call-to-action")}
              </PrefixedLink>
            </Button>
          )}
        </div>
        <Picture
          src={src}
          alt={alt}
          width={width}
          height={height}
          bottomFocused={bottomFocused}
        />
      </div>
    </section>
  );
}

export default KnowAboutMe;
