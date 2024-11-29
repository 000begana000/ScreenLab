import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage, { loader as moviesLoader } from "./pages/Home.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: moviesLoader,
      element: <RootLayout />,
      children: [{ index: true, element: <HomePage />, loader: moviesLoader }],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
