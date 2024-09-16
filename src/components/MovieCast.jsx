import React from "react";
import { useMovies } from "../hooks/useMovies";
import { useParams } from "react-router-dom";
import { imageBaseURL } from "../constants/constants";

export default function MovieCast() {
  const { cast } = useMovies();
  const { list } = useMovies();
  const { movieId } = useParams();
  imageBaseURL;
  const movie = list.find((movie) => movie.id === parseInt(movieId));

  return (
    <div>
      {cast.length > 0 ? (
        cast.map((c) => (
          <div key={c.id}>
            <div className="castImage">
              <img
                src={`${imageBaseURL}${c.profile_path}`}
                alt={`${c.name} photo`}
              />
            </div>
            <h3>{c.name}</h3>
            <p>as {c.character}</p>
          </div>
        ))
      ) : (
        <p>No cast available.</p>
      )}
    </div>
  );
}
