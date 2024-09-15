import MovieList from "../components/MovieList";
import { useMovies } from "../hooks/useMovies";

export default function HomePage() {
  const list = useMovies();

  return (
    <div>
      <MovieList list={list} />
    </div>
  );
}
