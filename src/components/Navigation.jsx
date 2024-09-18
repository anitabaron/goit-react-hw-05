import { NavLink } from "react-router-dom";
import { setActive } from "../utils/setActiv";

export default function Navigation() {
  return (
    <nav className="navPage header">
      <NavLink className={`{setActive} btn`} to="/">
        Home
      </NavLink>
      <NavLink className={`{setActive} btn`} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}
