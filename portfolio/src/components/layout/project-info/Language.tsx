import { useTranslations } from "next-intl";

interface Language {
  name: string;
  color: string;
  value: number; // percentage value, should add up to 100%
}

function Language({ languages }: { languages: Language[] }) {
  const translations = useTranslations(`Projects`);

  return (
    <section className="w-full mx-auto max-w-xl my-10">
      <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider md:text-center">
        {translations("language")}
      </h2>
      <div className="w-full h-4 flex mt-6 rounded-full overflow-hidden">
        {languages.map((lang, index) => (
          <div
            key={index}
            style={{
              width: `${lang.value}%`,
              backgroundColor: lang.color,
              opacity: "70%",
            }}
            className="h-full"
            title={`${lang.name} - ${lang.value}%`}
          />
        ))}
      </div>
      <div className="w-full grid grid-cols-2 mt-4">
        {languages.map((lang, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: lang.color }}
            />
            <p className="capitalize">
              {" "}
              {lang.name} - {lang.value}
              {"%"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Language;
