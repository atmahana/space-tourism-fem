import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import RootLayout from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";

const HomePage = lazy(() => import("./pages/Home/Index"));
const DestinationPage = lazy(() => import("./pages/Destination/Index"));
const CrewPage = lazy(() => import("./pages/Crew/Index"));
const TechnologyPage = lazy(() => import("./pages/Technology/Index"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Route>
      </Routes>
    </>
  );
}
