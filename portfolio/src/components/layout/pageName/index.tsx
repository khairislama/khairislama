function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section
      aria-labelledby="hero"
      className="w-full max-w-7xl mx-auto my-10 md:my-16 lg:my-20 xl:my-24 px-4 sm:px-6 xl:px-0"
    >
      <h1
        id="hero"
        className="text-2xl sm:text-4xl lg:text-6xl font-semibold font-syne text-foreground tracking-wider"
      >
        {title}
      </h1>
      <h2 className="text-lg tracking-wide font-rubik text-justify mt-3 sm:mt-4">
        {subtitle}
      </h2>
      <div className="h-[1px] w-full bg-foreground/70 mt-6" />
    </section>
  );
}

export default PageHero;
