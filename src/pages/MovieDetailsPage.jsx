import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { useParams } from "react-router-dom";
import { genreMap, imageBaseURL } from "../constants/constants";

export default function MovieDetailsPage() {
  const { list, setMovieId } = useMovies();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovieId(movieId);
  }, [movieId, setMovieId]);

  useEffect(() => {
    if (list.length > 0 && movieId) {
      const foundMovie = list.find((movie) => movie.id === parseInt(movieId));
      setMovie(foundMovie);
    }
  }, [list, movieId]);

  if (!movie) {
    return <h4>Sorry. Movie not found !</h4>;
  }

  if (!movieId) {
    return <h4>Sorry. Movie no movie ID found !</h4>;
  }

  return (
    <div className="movieDetailsPage">
      <div className="movieImage">
        <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movieDescr">
        <h2>
          {movie.title} ID: {movie.id}
        </h2>
        <br />
        <p>Release Date: {movie.release_date}</p>
        <p>Average Vote: {movie.vote_average}</p>
        Genres: {movie.genre_ids.map((id) => genreMap[id]).join(", ")}
        <br />
        <br />
        <p>Overview: {movie.overview}</p>
        <br />
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
