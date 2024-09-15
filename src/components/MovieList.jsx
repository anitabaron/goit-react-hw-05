import { NavLink, useLocation } from "react-router-dom";

export default function MovieList({ list }) {
  const { state, pathname, search } = useLocation();
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {list.map((movie) => (
          <li key={movie.id} id={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              {movie.title}
              <br />
              genre ids: {movie.genre_ids}
            </NavLink>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
