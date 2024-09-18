import { useMovies } from "../hooks/useMovies";
import { useParams } from "react-router-dom";
import { imageBaseURL } from "../constants/constants";

export default function MovieCast() {
  const { cast } = useMovies();
  const { list } = useMovies();
  const { movieId } = useParams();
  imageBaseURL;
  const castWithPhoto = cast.filter((c) => c.profile_path !== null);
  return (
    <div className="castSet">
      {castWithPhoto.length > 0 ? (
        castWithPhoto.slice(0, 20).map((c) => (
          <div className="castCard" key={c.id}>
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
