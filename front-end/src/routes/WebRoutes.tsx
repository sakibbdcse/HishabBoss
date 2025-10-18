import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layout/PrimaryLayout";

const WebRoutes = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
  },
]);

export default WebRoutes;
