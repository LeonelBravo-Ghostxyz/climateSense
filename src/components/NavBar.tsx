import { Link } from "react-router-dom";
import logo from "../../public/images/favicon.svg"

function NavBar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Este Proyecto", path: "/este-proyecto" },
  ];

  return (
    <ul className="flex text-white geist-regular gap-5 mb-10 bg-[#2c2f33]" id="navBar">
      <img
        alt="LogoProyecto"
        src={logo} // Utiliza la variable importada que contiene la ruta del archivo svg
        className="h-8 w-8"
        id="logo"
      />
      {navLinks.map((navLink) => (
        <li key={navLink.path} className="text-gray-300 hover:bg-[] hover:text-white hover:rounded hover:box-border p-2">
          <Link to={navLink.path}>{navLink.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;