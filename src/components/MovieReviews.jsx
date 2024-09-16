import { useParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { imageBaseURL } from "../constants/constants";

export default function MovieReviews() {
  const { list, reviews } = useMovies();
  const { movieId } = useParams();
  imageBaseURL;
  const movie = list.find((movie) => movie.id === parseInt(movieId));

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
            <p>
              Created at: {new Date(review.created_at).toLocaleDateString()}
            </p>
            <hr />
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
