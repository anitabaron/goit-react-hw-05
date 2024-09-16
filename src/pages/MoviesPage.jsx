// import MovieList from "../components/MovieList";
import { useMovies } from "../hooks/useMovies";

export default function HomePage() {
  const list = useMovies();
  const handlesubmit = () => {};
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input></input>
        <button>Search</button>
      </form>
      {/* <MovieList list={list} /> */}
    </div>
  );
}

//value={query}
