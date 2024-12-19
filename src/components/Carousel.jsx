import classes from "./Carousel.module.css";

import heroImg from "../public/cinema.jpg";

export default function Carousel() {
  return (
    <div className={classes.hero}>
      <img src={heroImg} />
    </div>
  );
}
