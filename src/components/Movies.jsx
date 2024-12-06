import { Link } from "react-router-dom";

import Movie from "../UI/Movie.jsx";

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
            <Link key={movie.id} to={`movie/${movie.id}`} relative="end">
              <Movie movie={movie} />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
