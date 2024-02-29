import { Route, Routes, BrowserRouter } from "react-router-dom";
import EditScreen from "../screen/EditScreen";
import CreateScreen from "../screen/CreateScreen";
import HomeScree from "../screen/HomeScree";
const MainAppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScree />} />
        <Route path="/edit/:id" element={<EditScreen />} />
        <Route path="/create" element={<CreateScreen />} />
      </Routes>
    </>
  );
};

export default MainAppRoutes;
