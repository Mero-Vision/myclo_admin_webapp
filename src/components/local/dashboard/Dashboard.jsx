import { Box } from "@mui/material";
import React from "react";
import DashboardHeader from "./header/DashboardHeader";

const Dashboard = () => {
   return (
      <>
         <Box display={"flex"} flexDirection={"column"} mb={"2rem"}>
            <DashboardHeader />
         </Box>
      </>
   );
};

export default Dashboard;
