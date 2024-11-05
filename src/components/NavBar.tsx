import { Link } from "react-router-dom";
import logo from "../../public/images/favicon.svg";
import maindb from "../db/main.json";

function NavBar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Informacion", path: "/este-proyecto" },
    { title: "API", path: "/api" },
  ];

  // Background basado en Alerta
  let alerta = maindb.horaActual.alerta;
  let bgColorClass = "";
  if (alerta === 0) {
    bgColorClass = "greenNav";
  } else if (alerta === 1) {
    bgColorClass = "yellowNav";
  } else if (alerta === 2) {
    bgColorClass = "orangeNav";
  } else if (alerta === 3) {
    bgColorClass = "redNav";
  }

  return (
    <ul
      className={`flex text-white geist-regular gap-5 mb-10 ${bgColorClass}`}
      id="navBar"
    >
      <img
        alt="LogoProyecto"
        src={logo}
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