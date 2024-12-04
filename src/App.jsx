import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage, { loader as moviesLoader } from "./pages/Home.jsx";
import MovieDetailPage from "./pages/MoiveDetail.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: moviesLoader,
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: moviesLoader },
        { path: "movie/:movieId", element: <MovieDetailPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
