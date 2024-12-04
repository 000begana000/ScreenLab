import Movie from "../UI/Movie.jsx";

import classes from "./Movies.module.css";
// https://media.themoviedb.org/t/p/w440_and_h660_face/aTpMwcMzgwUfs5mY8WJEhBn7Q7y.jpg

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
            <Movie key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </>
  );
}
