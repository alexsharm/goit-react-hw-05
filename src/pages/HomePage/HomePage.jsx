import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <>
      {loading && <b>Loading...</b>}
      {error && <b>Error occured</b>}
      <MovieList movies={movies} />
    </>
  );
}
