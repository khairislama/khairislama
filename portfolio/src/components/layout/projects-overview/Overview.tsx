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
      className={`flex flex-col relative md:mt-24 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <ProjectText projectNumber={projectNumber} reverse={reverse} />
      <ProjectImage image={image} reverse={reverse} />
    </div>
  );
}

export default Overview;
