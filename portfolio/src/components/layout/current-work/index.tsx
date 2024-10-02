function AboutCurrentWork() {
  return (
    <section className="relative w-full px-4 xl:px-0 my-20 md:my-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 w-full gap-4 md:gap-y-20">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold font-syne text-foreground tracking-wider md:col-span-3">
          Engineering Security and Innovation at Hutchinson
        </h2>
        <p className="font-rubik text-lg md:col-span-3 lg:mt-8 text-justify md:text-left lg:text-xl">
          I’ve been involved in critical backend development, working with
          NestJS to build highly secure solutions for the industry. Over 1 year
          and 7 months, I’ve contributed in a projects, ensuring it meet the
          highest security standards while maintaining optimal performance.
          Every project I take on challenges me to improve both the security
          architecture and the performance of the systems, which is a key part
          of my role.
        </p>
        <div className="hidden md:block h-96 w-full md:col-span-2 bg-foreground rounded-xl"></div>
        <div className="h-96 w-full md:col-span-4 bg-foreground rounded-xl"></div>
      </div>
    </section>
  );
}

export default AboutCurrentWork;
