function Overview({
  children,
  reverse,
}: Readonly<{
  children: React.ReactNode;
  reverse?: boolean;
}>) {
  return (
    <div
      className={`flex flex-col relative mt-20 md:mt-24 md:hover:-translate-y-4 duration-300 ease-in-out transition-all group ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {children}
    </div>
  );
}

export default Overview;
