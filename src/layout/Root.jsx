import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigations/Index";

function RootLayout() {
  return (
    <>
      <NavBar />
      <main className="h-screen">
        <Outlet/>
      </main>
    </>
  );
}

export default RootLayout;
