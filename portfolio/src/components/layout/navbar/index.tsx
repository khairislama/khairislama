import Image from "next/image";
import NavbarTop from "./NavbarTop";
import NavBurger from "./NavBurger";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";
import { MoonIcon } from "@/components/MoonIcon";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import Avatar from "./Avatar";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full drop-shadow-xl bg-background/70 hover:bg-background backdrop-blur-sm focus-within:bg-background transition-all ease-in-out duration-300 font-rubik">
      <NavbarTop />
      <div className="h-12 lg:h-14 border-b-2 border-foreground/70 relative px-3">
        <div className="relative hidden lg:flex items-center justify-between max-w-7xl mx-auto">
          <Navigation />
          <div className="flex items-center justify-center gap-8">
            <SocialIcons />
            <div className="w-9 h-9 p-1 rounded-full bg-foreground cursor-not-allowed">
              <MoonIcon className="text-background" />
            </div>
          </div>
        </div>
        <Suspense fallback={<AvatarFallback />}>
          <Avatar />
        </Suspense>
        <NavBurger />
        <Image
          src="/icons/social/github.svg"
          alt="github carthabot"
          width={20}
          height={20}
          className="w-8 absolute right-4 top-0 lg:hidden md:right-6"
        />
      </div>
    </header>
  );
}

const AvatarFallback = () => (
  <div className="absolute left-[50%] translate-x-[-50%] top-0">
    <Skeleton className="w-10 h-10 bg-foreground flex items-center justify-center rounded-full" />
  </div>
);

export default Navbar;
