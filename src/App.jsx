import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import BlogDetail from "./pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: ':id/blog',
    element: <BlogDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
