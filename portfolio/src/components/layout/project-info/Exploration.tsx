import Image from "next/image";
import FeaturesOneProject from "./Features";
import StatsOneProject from "./Stats";

function ExplorationOneProject() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-[50%]">
          <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider">
            Exploration
          </h2>
          <p className="text-lg mt-4 font-rubik">
            {" "}
            I’ve been involved in critical backend development, working with
            NestJS to build highly secure solutions for the industry. Over 1
            year and 7 months, I’ve contributed in a projects, ensuring it meet
            the highest security standards while maintaining optimal
            performance. Every project I take on challenges me to improve both
            the security architecture and the performance of the systems, which
            is a key part of my role.
          </p>
        </div>
        <StatsOneProject />
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <FeaturesOneProject />
      </div>
      <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-xl relative">
        <Image
          src="/1920-1080.png"
          alt="cool shape"
          width={1920}
          height={1080}
          className=""
          sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-background/30 shadow-[inset_1px_1px_150px_12px_rgba(0,0,0,0.9)]" />
      </div>
    </div>
  );
}

export default ExplorationOneProject;
