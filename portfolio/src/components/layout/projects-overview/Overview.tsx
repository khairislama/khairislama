export const runtime = "edge";

function Overview({
  children,
  reverse,
}: Readonly<{
  children: React.ReactNode;
  reverse?: boolean;
}>) {
  return (
    <div
      className={`flex flex-col relative md:mt-24 md:hover:scale-105 duration-300 ease-in-out transition-all ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {children}
    </div>
  );
}

export default Overview;
