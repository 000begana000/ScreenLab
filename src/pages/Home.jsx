import Carousel from "../components/Carousel.jsx";
import Movies from "../components/Movies.jsx";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <div className="container">
        <Movies />
      </div>
    </>
  );
}
