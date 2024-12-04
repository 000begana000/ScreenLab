import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Movie Detail</h1>
      <p>ID: {params.movieId}</p>
    </>
  );
}
