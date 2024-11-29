import { useLoaderData } from "react-router-dom";

import Carousel from "../components/Carousel.jsx";
import Movies from "../components/Movies.jsx";

import classes from "./Home.module.css";

export default function HomePage() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Carousel />
      <div className={classes.container}>
        <Movies movies={data.results} />
      </div>
    </>
  );
}

export async function loader() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1653b415dad054c42a306ec41cc9f94d"
  );

  if (!response.ok) {
    // handle error
  } else {
    return response;
  }
}
