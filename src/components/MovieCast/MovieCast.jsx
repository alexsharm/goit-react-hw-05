import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../movies-api";

export default function MovieCast() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getMovieById(movieId, "/credits");
        setMovieCast(data.cast);
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
      {movieCast && (
        <ul>
          {movieCast.map((actor) => {
            return (
              <li key={actor.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt="profile"
                />
                <h3>{actor.name}</h3>
                <b>{`Character: ${actor.character}`}</b>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
