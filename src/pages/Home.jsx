import Carousel from "../components/Carousel.jsx";
import Movies from "../components/Movies.jsx";

import classes from "./Home.module.css";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <div className={classes.container}>
        <Movies />
      </div>
    </>
  );
}
