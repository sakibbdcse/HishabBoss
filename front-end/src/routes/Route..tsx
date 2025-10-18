import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layout/PrimaryLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default Route;
