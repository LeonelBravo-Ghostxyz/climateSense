import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <footer className="w-full text-center py-5 text-cwhite text-white font-bold bg-[#2c2f33] h-24">
      <p>
        ClimateSense
      </p>

      <div id="footerSocial" className="flex justify-center gap-6 mt-3">
        <a href="https://github.com/LeonelBravo-Ghostxyz" className="flex gap-2"><IoLogoGithub className="h-8 w-8"/>Github</a>
        <a href="https://www.instagram.com/leonel_.bravo/" className="flex gap-2"><IoLogoInstagram className="h-8 w-8"/>Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
