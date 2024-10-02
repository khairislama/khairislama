import Image from "next/image";

function MyJourney() {
  return (
    <section className="relative w-full my-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between w-full gap-8 z-10 px-4 xl:px-0">
        <div className="flex flex-col gap-4 md:max-w-md lg:max-w-xl xl:max-w-3xl z-10">
          <h2 className="text-3xl lg:text-4xl font-semibold font-syne text-foreground tracking-wider">
            My Journey
          </h2>
          <p className="text-sm tracking-wide font-rubik text-justify">
            I graduated with a full-stack engineering degree, marked by the
            prestigious EUR-ACE label, making it equivalent to a European
            degree. My educational journey culminated in an exciting
            end-of-study project in Paris, where I had the opportunity to design
            a comprehensive web platform. This project not only honed my skills
            in cutting-edge web technologies but also deepened my passion for
            problem-solving and innovation in the tech world.
          </p>
        </div>
        <div className="w-full flex items-center justify-center z-10">
          <div className="w-72 h-80 lg:w-80 lg:h-96 bg-foreground rounded-t-full"></div>
        </div>
      </div>
      <Image
        src="/hero/background2.webp"
        alt="curvy lines"
        width={1200}
        height={1200}
        className="hidden lg:block absolute -bottom-[80%] xl:-bottom-[110%] object-cover opacity-30 w-full pointer-events-none"
      />
    </section>
  );
}

export default MyJourney;
