import { NavLink } from "react-router-dom";
import { setActive } from "../utils/setActiv";

export default function Navigation() {
  return (
    <nav className="navPage">
      <NavLink className={setActive} to="/">
        Home
      </NavLink>
      <NavLink className={setActive} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}
