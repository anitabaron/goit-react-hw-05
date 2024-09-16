import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { setActive } from "../utils/setActiv";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const { movieId } = useParams(); // ?? ID otrzymujemy dopiero w momencie submitu
  const location = useLocation();

  const { listFiltred, setFilterQuery } = useMovies();

  const sortedMovies = [...listFiltred].sort((a, b) => {
    if (a.release_date > b.release_date) {
      return -1;
    }
    if (a.release_date < b.release_date) {
      return 1;
    }
    return 0;
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    setFilterQuery(query);
    console.log(query);
    window.location.hash = `query=${encodeURIComponent(query)}`;
    setQuery("");
  };
  console.log("Current location:", location);
  return (
    <>
      <div className="formSearch">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <ul>
          {sortedMovies.map((movie) => {
            // console.log("Movie ID:", movie.id);
            return (
              <li key={movie.id} id={movie.id}>
                <NavLink className={setActive} to={`/movies/${movie.id}`}>
                  {movie.title}
                </NavLink>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
