import { useDevice } from "../hooks/useDevice";
import WebHome from "./web/Home";
import MobileHome from "./mobile/Home";
import TabHome from "./tab/Home";

const Home = () => {
  const device = useDevice();

  if (device === "mobile") return <MobileHome />;
  if (device === "tablet") return <TabHome />;
  return <WebHome />;
};

export default Home;
