import { Link } from "react-router-dom";

import Movie from "../UI/Movie.jsx";

import classes from "./Movies.module.css";

export default function Movies({ movies }) {
  return (
    <>
      <h1 className={classes.program}>What's on</h1>
      <div className={classes.tabs}>
        <a href="#">now</a>
        <span>/</span>
        <a href="#">coming soon</a>
      </div>
      <div className={classes.movies}>
        {movies.map((movie) => (
          <Link key={movie.id} to={`movie/${movie.id}`} relative="end">
            <Movie movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
}
