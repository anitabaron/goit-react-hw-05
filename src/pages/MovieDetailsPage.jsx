import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const list = useMovies();
  const { movieId } = useParams();
  const imageBaseURL = "https://image.tmdb.org/t/p/w500";
  const movie = list.find((movie) => movie.id === parseInt(movieId));
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movieDetailsPage">
      <div className="movieImage">
        <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movieDescr">
        <h2>{movie.title}</h2>

        <p>Release Date: {movie.release_date}</p>
        <p>Average Vote: {movie.vote_average}</p>
        <p>Overview: {movie.overview}</p>
        <p>Additional information:</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
