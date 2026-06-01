import logo from "../assets/WhiteLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="sticky top-4 z-50 mb-20 flex items-center justify-between py-4 px-8 backdrop-blur-md bg-neutral-950/60 shadow-lg shadow-black/20 rounded-full border border-white/10">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1 className="mx-2 text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SR</h1>
      </div>
      <div className="m-2 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/sanwad-rashinkar-0b6820259/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:text-cyan-400 hover:scale-110 drop-shadow-[0_0_10px_rgba(34,211,238,0)] hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sanwadR"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:text-purple-400 hover:scale-110 drop-shadow-[0_0_10px_rgba(192,132,252,0)] hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
