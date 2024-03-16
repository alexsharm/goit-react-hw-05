import css from "./MovieDetailsContainer.module.css";

export default function MovieDetailsContainer({ movie }) {
  return (
    <>
      <div className={css.mainCont}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://www.easytogrowbulbs.com/cdn/shop/products/Lycoris_Red_Radiata.SHUT_800x.jpg?v=1571439604"
          }
          alt="poster"
        />
        <div>
          <h2 className={css.movieTitle}>{`${
            movie.title
          } (${movie.release_date.slice(0, 4)})`}</h2>

          <p className={css.text}>{`User Score: ${Math.round(
            movie.vote_average * 10
          )}%`}</p>

          <h3 className={css.secondaryTitle}>Overview</h3>
          <p className={css.text}>{movie.overview}</p>

          <h3 className={css.secondaryTitle}>Genres</h3>

          <ul className={css.genresList}>
            {movie.genres.map((genre) => {
              return (
                <li className={css.text} key={genre.id}>
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
