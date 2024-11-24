import { Outlet } from "react-router-dom";

import MainNaviation from "../components/MainNaviation";

export default function RootLayout() {
  return (
    <>
      <MainNaviation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
