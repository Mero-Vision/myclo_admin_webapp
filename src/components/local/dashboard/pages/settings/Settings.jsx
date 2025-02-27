import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import CustomGrid from "../../../../common/CustomGrid/CustomGrid";
import SettingsRoutes from "./SettingsRoutes";

const Settings = () => {
   return (
      <Box>
         {" "}
         <CustomGrid
            info={<SettingsRoutes />}
            details={<Outlet />}
            left={2.5}
            right={9.5}
         />
      </Box>
   );
};

export default Settings;
