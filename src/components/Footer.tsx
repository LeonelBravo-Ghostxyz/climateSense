import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <footer className="w-full text-center py-5 text-cwhite text-white font-bold bg-[#2c2f33] h-24">
      <p>
        ClimateSense
      </p>

      <div id="footerSocial" className="flex justify-center gap-6 mt-3">
        <a href="https://github.com/LeonelBravo-Ghostxyz/climateSense" className="flex gap-2"><IoLogoGithub className="h-8 w-8"/>Repositorio</a>
        <a href="https://www.instagram.com/leonel_.bravo/" className="flex gap-2"><IoLogoInstagram className="h-8 w-8"/>Instagram</a>
        <a href="#">Acuerdo de uso</a>
      </div>
    </footer>
  );
}

export default Footer;
