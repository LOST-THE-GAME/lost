import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-20 flex justify-center items-center min-w-[100dvw] px-2 lg:px-7 py-2 lg:py-4 bg-zinc-700/50 backdrop-blur-md text-zinc-100">
      <nav className="space-x-12 uppercase text-lg sm:text-2xl">
        <Link
          className="nav-button"
          to="lost"
          spy={true}
          duration={1000}
          delay={100}
          smooth={true}
          offset={50}
        >
          LOST
        </Link>
        <Link
          className="nav-button"
          to="about"
          spy={true}
          duration={1000}
          delay={100}
          smooth={true}
          offset={50}
        >
          What is The Game?
        </Link>
        <Link
          className="nav-button"
          to="contactme"
          spy={true}
          duration={1000}
          delay={100}
          smooth={true}
          offset={550}
        >
          Play the Game
        </Link>
      </nav>
    </header>
  );
}
