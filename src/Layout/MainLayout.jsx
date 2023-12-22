import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-white shadow-lg fixed z-10 w-full pb-4">
        <Navbar></Navbar>
      </div>
      <div className="w-4/5 mx-auto pt-28">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
