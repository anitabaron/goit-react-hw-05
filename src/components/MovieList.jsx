import Movie from "./Movie";

export default function MovieList({ list }) {
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {list.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <Movie />
    </div>
  );
}
