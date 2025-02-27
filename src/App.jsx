import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { auth } from "./api/authApi";
import SiteRoutes from "./routes/Routes";
import { getSiteDetail, getToken } from "./utils/helpers";
const App = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(auth(getToken()));
   }, []);

   const token = getSiteDetail()?.token;

   console.log({ token });

   return (
      <>
         <SiteRoutes />
         <ToastContainer position="bottom-right" />
      </>
   );
};

export default App;
