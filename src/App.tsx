// https://api.unsplash.com/search/photos?page=1&query=office
//https://api.unsplash.com/search/photos?client_id=anjqdVzVPYJMHVrQAkf8aAx8g1wEXVzvSGMFQ5hEcOo&page=1&&per_page=20&query=tbilisi
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
