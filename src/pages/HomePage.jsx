import { Suspense } from "react";
// import MovieList from "../components/MovieList";
import { useMovies } from "../hooks/useMovies";
import Loading from "../components/Loading";
import { lazy } from "react";
const MovieList = lazy(() => import("../components/MovieList"));

export default function HomePage() {
  const list = useMovies();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h2>Trending today</h2>
        <br />
        <MovieList list={list} />
      </Suspense>
    </div>
  );
}
