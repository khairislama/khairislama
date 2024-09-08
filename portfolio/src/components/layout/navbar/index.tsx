import NavbarTop from "./NavbarTop";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-navbar-background text-navbar-foreground drop-shadow-xl">
      <NavbarTop />
      <nav className="h-10 md:h-12 lg:h-14 border-b-2 border-border bg-opacity-70 hover:bg-opacity-100 focus-within:bg-opacity-100 transition-all ease-in-out duration-300">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            <p>Home</p>
            <p>Contact</p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <p>Home</p>
            <p>Contact</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
