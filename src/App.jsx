import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/Root";
import Error from "./pages/Error";

const Home = lazy(() => import("./pages/Home/Index"));
const Destination = lazy(() => import("./pages/Destination/Index"));
const Crew = lazy(() => import("./pages/Crew/Index"));
const Technology = lazy(() => import("./pages/Technology/Index"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "destination", element: <Destination /> },
      { path: "crew", element: <Crew /> },
      { path: "technology", element: <Technology /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
