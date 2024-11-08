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
  home?: boolean;
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
  home,
}: Props) {
  const translations = useTranslations("KnowMe");
  return (
    <section aria-labelledby="about-me" className="relative w-full mt-16">
      <div
        className={`max-w-7xl mx-auto flex lg:grid lg:grid-cols-2 gap-12 lg:gap-24 p-4 sm:p-6 xl:p-0 ${
          bottomFocused ? "flex-col" : "flex-col-reverse"
        }`}
      >
        <div className="my-auto flex flex-col gap-4 lg:gap-14">
          {home ? (
            <h2
              id="about-me"
              className="font-syne font-bold text-5xl max-w-md text-balance"
            >
              {title}
            </h2>
          ) : (
            <h3
              id="about-me"
              className="font-syne font-bold text-5xl max-w-md text-balance"
            >
              {title}
            </h3>
          )}
          <p className="font-rubik text-justify">{description}</p>
          {button && (
            <Button
              size={"lg"}
              className="mt-4 h-12 bg-gradient-to-r from-primary to-secondary text-foreground/80 font-rubik w-full sm:w-1/2 rounded-3xl transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300 min-w-fit"
              aria-label="discover more about Khairi Slama"
            >
              <PrefixedLink
                className="h-full w-full flex items-center justify-center"
                href="/about"
              >
                <h3>{translations("call-to-action")}</h3>
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
