import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/home/Home/Home";
import "react-awesome-button/dist/styles.css";
import { ParallaxProvider } from "react-scroll-parallax";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ParallaxProvider>
         <RouterProvider router={router} />
      </ParallaxProvider>
   </React.StrictMode>
);
