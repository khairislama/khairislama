import Avatar from "./Avatar";
import NavbarTop from "./NavbarTop";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full drop-shadow-xl bg-background/70 hover:bg-background backdrop-blur-sm focus-within:bg-background transition-all ease-in-out duration-300 font-rubik">
      <NavbarTop />
      <div className="h-10 md:h-12 lg:h-14 border-b-2 border-foreground/70">
        <div className="relative flex items-center justify-between max-w-7xl mx-auto">
          <Navigation />
          <SocialIcons />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
