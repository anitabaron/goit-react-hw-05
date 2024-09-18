import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { setActive } from "../utils/setActiv";
import { imageBaseURL } from "../constants/constants";
import { ComboboxInput, Input } from "@headlessui/react";
import NavigationBack from "../components/NavigationBack";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  // const location = useLocation();

  const { list, listFiltred, setFilterQuery } = useMovies();

  const sortedMovies = listFiltred.toSorted(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );

  const handlesubmit = (e) => {
    e.preventDefault();
    setFilterQuery(query);
    console.log(query);
    // window.location.hash = `query=${encodeURIComponent(query)}`;
    setQuery("");
    // const form = e.target;
    // form.reset();
  };
  // console.log("z MP Current location:", location);
  console.log("z MP List filtred ", listFiltred);
  console.log("z MP Sorted movies ", sortedMovies);
  // console.log("z MP list:", list);

  // if (listFiltred.length === 0) {
  //   return <h4>Sorry. No movies found to your query!</h4>;
  // }
  return (
    <>
      <NavigationBack />
      <div className="formSearch">
        <form onSubmit={handlesubmit}>
          <Input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></Input>
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <div>
        <ul>
          {sortedMovies.map((movie) => (
            // console.log("Movie ID:", movie.id);
            <li key={movie.id} id={movie.id}>
              <NavLink
                className={`${setActive} movieContainer`}
                to={`/movies/${movie.id}`}
              >
                {movie.title}
                <img
                  className="imgSmall"
                  src={`${imageBaseURL}${movie.poster_path}`}
                  alt={movie.title}
                />
              </NavLink>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
