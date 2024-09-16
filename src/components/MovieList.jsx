import { NavLink, useLocation } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";

export default function MovieList() {
  const { list } = useMovies();
  const { state, pathname, search } = useLocation();
  return (
    <div>
      <h2>Trending today</h2>
      <br />
      <ul>
        {list.map((movie) => (
          <li key={movie.id} id={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title} </NavLink>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
