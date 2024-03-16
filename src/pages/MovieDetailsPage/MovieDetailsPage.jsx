import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieById } from "../../movies-api";
import { useState, useEffect, useRef, Suspense } from "react";
import MovieDetailsContainer from "../../components/MovieDetailsContainer/MovieDetailsContainer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function MovieDetailsPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
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
      {error && <NotFoundPage />}
      <Link to={backLinkRef.current}>Go back</Link>
      {movie && <MovieDetailsContainer movie={movie} />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
