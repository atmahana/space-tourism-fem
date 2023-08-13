import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/Navigations/Index";
import RootLayout from "./layout/Root";
import DestinationPage from "./pages/Destination/Index";
import HomePage from "./pages/Home/Index";
import CrewPage from "./pages/Crew/Index";
import TechnologyPage from "./pages/Technology/Index";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     id: "root",
//     children: {
//       element: <AnimatePresence mode="wait" />,
//       children: [
//         { index: true, element: <HomePage /> },
//         { path: "destination", element: <DestinationPage /> },
//         { path: "crew", element: <CrewPage /> },
//         { path: "technology", element: <TechnologyPage /> },
//       ],
//     },
//   },
// ]);

export default function App() {
  // return <RouterProvider router={router} />;
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </>
  );
}
