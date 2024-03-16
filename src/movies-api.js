import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWMyNmM3Y2RkNzA4Njc3YmQ0OGY5YWFkNmJhZjIzNyIsInN1YiI6IjY1ZjJkZWQxNWE3ODg0MDE2M2Q3NzU5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x_6Vh8Uf_xIramZjCpnz4mPCSSXdDR4SCYJ_To0EfCY",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data;
};

export const getMovieById = async (movieId, extra) => {
  const response = await axios.get(`/movie/${movieId}${extra}`, options);
  return response.data;
};

export const getMoviesByQuery = async (query) => {
  const response = await axios.get(`/search/movie`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWMyNmM3Y2RkNzA4Njc3YmQ0OGY5YWFkNmJhZjIzNyIsInN1YiI6IjY1ZjJkZWQxNWE3ODg0MDE2M2Q3NzU5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x_6Vh8Uf_xIramZjCpnz4mPCSSXdDR4SCYJ_To0EfCY",
    },
    params: {
      query: query,
    },
  });
  return response.data;
};
