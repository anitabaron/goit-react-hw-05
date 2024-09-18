import { NavLink } from "react-router-dom";
import { setActive } from "../utils/setActiv";

export default function NavigationBack() {
  return (
    <NavLink to="/" className={`{setActive} naviBack btn`}>
      Go back
    </NavLink>
  );
}
