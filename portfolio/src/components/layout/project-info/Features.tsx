import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";

function FeaturesOneProject({
  features,
  slug,
}: {
  features: number;
  slug: string;
}) {
  const translations = useTranslations(`Project-${slug}`);

  return (
    <div className="relative h-10">
      <Marquee
        autoFill
        pauseOnHover
        direction="left"
        className="my-4 md:my-10"
        gradient
        gradientColor="#121120"
      >
        <ul className="flex space-x-3">
        {Array.from({ length: features }).map((_, i) => (
          <li
            className="py-1 px-4 bg-foreground/40 rounded-full mx-3 text-center text-foreground font-rubik"
            key={i}
          >
            {translations(`feature-${i + 1}`)}
          </li>
        ))}
        </ul>
      </Marquee>
    </div>
  );
}

export default FeaturesOneProject;
