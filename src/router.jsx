import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import LatestPage from "./pages/LatestPage";
import TopPickPage from "./pages/TopPickPage";
import ErrorPage from "./pages/ErrorPage";
import BookDetailsPage from "./pages/BookDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/latest", element: <LatestPage /> },
      { path: "/popular", element: <TopPickPage /> },
      { path: "/details", element: <BookDetailsPage /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
