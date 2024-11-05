import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";

function TagsOneProject({ tags, slug }: { tags: number; slug: string }) {
  const translations = useTranslations(`Project-${slug}`);

  return (
    <div className="w-full max-w-3xl mx-auto relative h-10">
      <Marquee
        autoFill
        pauseOnHover
        direction="right"
        className="my-10"
        gradient
        gradientColor="#121120"
      >
        <ul className="flex space-x-3"> {/* Flex to keep items in a row */}
        {Array.from({ length: tags }).map((_, i) => (
          <li
            className="py-1 px-4 bg-foreground/40 rounded-full mx-3 text-center text-foreground font-rubik"
            key={i}
          >
            {translations(`tag-${i + 1}`)}
          </li>
        ))}
        </ul>
      </Marquee>
    </div>
  );
}

export default TagsOneProject;
