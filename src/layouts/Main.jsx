import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "../shared/Footer/Footer";

const Main = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;
