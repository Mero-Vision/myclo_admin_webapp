import Sidebar from "./sidebar";

import { Box } from "@mui/material";

import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./dashboardNavbar";

const MainDashboardLayout = () => {
   const dispatch = useDispatch();
   const location = useLocation();

   // const { data: userDetails } = useGetSingleUserInfoQuery();

   // useEffect(() => {
   //    if (userDetails) {
   //       dispatch(
   //          setDynamicData({
   //             type: "userDetails",
   //             ...userDetails?.data,
   //          })
   //       );
   //    }
   // }, [dispatch, userDetails]);

   return (
      <>
         <Box sx={{ margin: 0, padding: "0", display: "flex" }}>
            {location?.pathname !== "/document/new" && <Sidebar />}
            <Box sx={{ background: "#F9F9FB", width: "100%" }}>
               <Box
                  sx={{
                     borderLeft: "1px solid #F9F9FB",

                     backgroundColor: "#fff",
                     paddingInline: "22px",
                  }}
               >
                  <Navbar />
               </Box>
               {/* <Divider /> */}
               <Box
                  sx={
                     location?.pathname !==
                     "/student-application/applications"
                        ? {
                             minHeight: "calc(100vh - 63px)",
                             paddingBlock: "1rem",
                             paddingInline: "22px",
                             // maxWidth: "calc(100vw - 10%)",
                             // width: "100%",
                          }
                        : {
                             minHeight: "calc(100vh - 93px)",
                          }
                  }
               >
                  <Outlet />
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default MainDashboardLayout;
