import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { useParams } from "react-router-dom";
import { genreMap, imageBaseURL } from "../constants/constants";
import { setActive } from "../utils/setActiv";

export default function MovieDetailsPage() {
  const { list, listFiltred, setMovieId } = useMovies();
  const { movieId } = useParams();
  console.log("movieId from URL:", movieId);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movieId) {
      setMovieId(movieId);
    }
  }, [movieId, setMovieId]);

  useEffect(() => {
    if (movieId) {
      const foundMovie = list.find((movie) => movie.id === parseInt(movieId));
      setMovie(foundMovie);
    }
  }, [list, listFiltred, movieId]);

  if (!movie) {
    return <h4>Sorry. Movie not found !</h4>;
  }

  if (!movieId) {
    return <h4>Sorry. Movie no movie ID found !</h4>;
  }

  return (
    <>
      <NavLink to="/" className="naviBack">
        Go back
      </NavLink>
      <div className="movieDetailsPage">
        <div className="movieImage">
          <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movieDescr">
          <h2>{movie.title}</h2>
          <br />
          <p>Release Date: {movie.release_date}</p>
          <p>Average Vote: {movie.vote_average}</p>
          Genres: {movie.genre_ids.map((id) => genreMap[id]).join(", ")}
          <br />
          <br />
          <p>Overview: {movie.overview}</p>
          <br />
          <p>Additional information:</p>
          <h3>
            <NavLink className={setActive} to="cast">
              Cast
            </NavLink>{" "}
            |{" "}
            <NavLink className={setActive} to="reviews">
              Reviews
            </NavLink>
          </h3>
          <br />
          <Outlet />
        </div>
      </div>
    </>
  );
}
