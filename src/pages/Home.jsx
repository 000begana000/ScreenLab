import { useLoaderData } from "react-router-dom";

import Carousel from "../components/Carousel.jsx";
import Movies from "../components/Movies.jsx";

import classes from "./Home.module.css";

const apiKey = import.meta.env.VITE_API_KEY;

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
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  );

  if (!response.ok) {
    // handle error
  } else {
    return response;
  }
}
