import classes from "./Movies.module.css";

export default function Movies({ movies }) {
  return (
    <>
      <div className={classes.programs}>
        <a href="#">now</a>
        <span>/</span>
        <a href="#">coming soon</a>
      </div>
      <div className="movies">
        <ul>
          {movies.map((movie) => (
            <li key={movie.backdrop_path}>
              <p>{movie.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
