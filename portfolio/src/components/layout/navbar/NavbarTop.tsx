import NavLanguage from "./NavLanguage";

export const runtime = "edge";

export default function NavbarTop() {
  return (
    <div className="h-6 lg:h-8 border-b-2 border-border w-full">
      <div className="flex items-center justify-center lg:justify-end lg:pr-6 gap-8 max-w-7xl mx-auto text-xs">
        <span className="cursor-default">54 007 387</span>
        <span className="cursor-pointer"> Download CV </span>
        <NavLanguage />
      </div>
    </div>
  );
}
