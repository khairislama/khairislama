import NavbarTop from "./NavbarTop";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <NavbarTop />
      <nav className="flex items-center justify-between h-10 md:h-12 lg:h-14 border-b-2 border-border backdrop-blur-lg bg-opacity-70 hover:bg-opacity-100 focus-within:bg-opacity-100 transition-all ease-in-out duration-300">
        <p>Home</p>
        <p>Contact</p>
        <p>Lol</p>
      </nav>
    </header>
  );
}

export default Navbar;
