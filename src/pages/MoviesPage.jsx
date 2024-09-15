import MovieList from "../components/MovieList";
import { useMovies } from "../hooks/useMovies";

export default function HomePage() {
  const list = useMovies();
  return (
    <div>
      <form>
        <input></input>
        <button>Search</button>
      </form>
      {/* <MovieList list={list} /> */}
    </div>
  );
}
