import { Route, Routes } from "react-router-dom";
import Other from "../components/Other";
import Home from "../Home/Home";
const MainFram = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Other" element={<Other />} />
      </Routes>
    </>
  );
};

export default MainFram;
