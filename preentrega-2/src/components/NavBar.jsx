import CardWidget from "./CardWidget";
import imagend from "../assets/images/diamante.png";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div id="contenedor1" className="container">
        <div className="row">
          <div className="col">
            <Link to={"/"}>
              <img src={imagend} alt="logodiamante" width={100} />
            </Link>
          </div>
          <div className="col">
            <ul className="nav justify-content-center">
              <li className="nav-item ">
                <NavLink
                  to={"./category/anillos"}
                  className="nav-link text-black"
                  aria-current="page"
                >
                  Anillos
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to={"./category/pulseras"}
                  className="nav-link text-black"
                >
                  Pulseras
                </NavLink>
              </li>
              <li className="nav-item text-black">
                <NavLink
                  to={"./category/cadenas"}
                  className="nav-link text-black"
                >
                  Cadenas
                </NavLink>
              </li>
              <li className="nav-item text-black">
                <NavLink
                  to={"./category/dijes"}
                  className="nav-link text-black"
                >
                  Dijes
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col text-end">
            <CardWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
