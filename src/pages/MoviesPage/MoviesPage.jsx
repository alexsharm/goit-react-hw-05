import { useState, useEffect } from "react";
import SearchMovie from "../../components/SearchMovie/SearchMovie";
import { getMoviesByQuery } from "../../movies-api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [params] = useSearchParams();
  const query = params.get("query");

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query]);

  return (
    <>
      {loading && <b>Loading...</b>}
      {error && <b>Error occured</b>}
      <SearchMovie />
      <MovieList movies={movies} />
    </>
  );
}
