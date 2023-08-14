import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigations/Index";
import { Suspense } from "react";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="h-screen bg-primary grid place-content-center">
      <img src="/ripple.svg" />
    </div>
  );
}
export default RootLayout;
