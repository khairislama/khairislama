import Link from "next/link";
import { CircularText } from "./CircularText";

function HireMe() {
  return (
    <div className="hidden lg:flex fixed left-4 bottom-4 items-center justify-center overflow-hidden z-50">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-foreground animate-spin-slow" />

        <Link
          href="mailto:contact@khairislama.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-background shadow-md border border-solid border-foreground w-20 h-20 rounded-full font-semibold hover:bg-background hover:text-foreground"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
