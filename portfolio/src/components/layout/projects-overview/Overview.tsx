import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";

interface Props {
  reverse?: boolean;
  projectNumber: number;
  image: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };
}

function Overview({ reverse, projectNumber, image }: Props) {
  return (
    <div
      className={`flex flex-col relative md:mt-24 md:hover:scale-105 duration-300 ease-in-out transition-all ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <ProjectText projectNumber={projectNumber} reverse={reverse} />
      <ProjectImage image={image} reverse={reverse} />
    </div>
  );
}

export default Overview;
