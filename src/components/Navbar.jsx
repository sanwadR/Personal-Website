import logo from "../assets/WhiteLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1 className="mx-2 w-10 text-4xl font-bold">SR</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sanwad-rashinkar-0b6820259/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sanwadR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* <FaInstagram />
        <FaSquareXTwitter /> */}
      </div>
    </nav>
  );
};

export default Navbar;
