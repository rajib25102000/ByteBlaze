import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayOut = () => {
  return (
    <div>
      <div className="h-20">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-132px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
