import classes from "./Movies.module.css";

export default function Movies() {
  return (
    <>
      <div className={classes.programs}>
        <a href="#">now</a>
        <span>/</span>
        <a href="#">coming soon</a>
      </div>
      <div className="movies"></div>
    </>
  );
}
