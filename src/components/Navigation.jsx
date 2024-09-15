import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };
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
