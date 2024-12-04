import classes from "./Movie.module.css";

// image, size = small, hover,

export default function Movie({ movie, isSmall }) {
  const imgUrl = `https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`;

  return (
    <img className={isSmall ? classes.img : undefined} src={imgUrl} alt="" />
  );
}
