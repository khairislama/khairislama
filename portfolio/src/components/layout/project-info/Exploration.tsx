import StatsOneProject from "./Stats";

function ExplorationOneProject() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-[50%]">
        <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider">
          Exploration
        </h2>
        <p className="text-lg mt-4 font-rubik">
          {" "}
          I’ve been involved in critical backend development, working with
          NestJS to build highly secure solutions for the industry. Over 1 year
          and 7 months, I’ve contributed in a projects, ensuring it meet the
          highest security standards while maintaining optimal performance.
          Every project I take on challenges me to improve both the security
          architecture and the performance of the systems, which is a key part
          of my role.
        </p>
      </div>
      <StatsOneProject />
    </div>
  );
}

export default ExplorationOneProject;
