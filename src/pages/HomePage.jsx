import MovieList from "../components/MovieList";
import { useMovies } from "../hooks/useMovies";

export default function HomePage() {
  const list = useMovies();

  return (
    <div>
      <h2>Trending today</h2>
      <br />
      <MovieList list={list} />
    </div>
  );
}
