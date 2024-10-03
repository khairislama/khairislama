import { useTranslations } from "next-intl";

function AboutCurrentWork() {
  const translations = useTranslations("About.current-work");
  return (
    <section className="relative w-full px-4 sm:px-6 xl:px-0 my-20 md:my-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 w-full gap-4 md:gap-y-20">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold font-syne text-foreground tracking-wider md:col-span-3">
          {translations("title")}
        </h2>
        <p className="font-rubik text-lg md:col-span-3 lg:mt-8 text-justify md:text-left lg:text-xl">
          {translations("description")}
        </p>
        <div className="hidden md:block h-96 w-full md:col-span-2 bg-foreground rounded-xl"></div>
        <div className="h-96 w-full md:col-span-4 bg-foreground rounded-xl"></div>
      </div>
    </section>
  );
}

export default AboutCurrentWork;
