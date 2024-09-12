import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Picture from "./Picture";

function KnowAboutMe() {
  const translations = useTranslations("KnowMe");
  return (
    <section className="relative w-full my-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-24">
        <div className="my-auto flex flex-col gap-14">
          <h2 className="font-syne font-bold text-5xl max-w-md">
            {" "}
            {translations("title")}{" "}
          </h2>
          <p className="font-rubik text-justify">
            {" "}
            {translations("description")}{" "}
          </p>
          <Button
            size={"lg"}
            className="h-12 bg-gradient-to-r from-primary to-secondary text-foreground/80 font-rubik w-1/2 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            {" "}
            {translations("call-to-action")}{" "}
          </Button>
        </div>
        <Picture />
      </div>
    </section>
  );
}

export default KnowAboutMe;
