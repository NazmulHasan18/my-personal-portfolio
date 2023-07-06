import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "../shared/Footer/Footer";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Main = () => {
   useEffect(() => {
      Aos.init();
   }, []);

   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;
