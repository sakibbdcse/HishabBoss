import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layout/PrimaryLayout";

const Route = createBrowserRouter([
  {
    path: "/",
    Element: <PrimaryLayout />,
  },
]);

export default Route;
