function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="w-full px-4 xl:px-0 max-w-7xl mx-auto my-10 md:my-16 lg:my-20 xl:my-24">
      <h1 className="text-4xl font-semibold font-syne text-foreground tracking-wider">
        {title}
      </h1>
      <p className="text-sm tracking-wide font-rubik text-justify mt-3 sm:mt-4">
        {subtitle}
      </p>
      <div className="h-[1px] w-full bg-foreground/70 mt-6" />
    </section>
  );
}

export default PageHero;
