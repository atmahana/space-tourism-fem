import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation";

function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
