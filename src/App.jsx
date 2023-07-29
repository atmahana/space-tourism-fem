import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DestinationPage from "./pages/Destination/Index";
import RootLayout from "./layout/Root";
import HomePage from "./pages/Home/Index";
import CrewPage from "./pages/Crew/Index";
import TechnologyPage from "./pages/Technology/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "destination", element: <DestinationPage /> },
      { path: "crew", element: <CrewPage /> },
      { path: "technology", element: <TechnologyPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
