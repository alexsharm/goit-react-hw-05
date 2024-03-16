import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../movies-api";

export default function MovieReviews() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getMovieById(movieId, "/reviews");
        setMovieReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <>
      {loading && <b>Loading...</b>}
      {error && <b>Error occured</b>}
      {movieReviews && movieReviews.length ? (
        <ul>
          {movieReviews.map((review) => {
            return (
              <li key={review.id}>
                <h3>{`Author: ${review.author}`}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <b>{`We don't have any reviews for this movie.`}</b>
      )}
    </>
  );
}
