import { Box, Grid } from "@mui/material";
import React from "react";
import useTabs from "../../../../../../hooks/useTabs";
import CustomPaper from "../../../../../common/CustomPaper/CustomPaper";
import Banner from "./Banners";
import Colors from "./Colors";
import SiteData from "./SiteData";

// const schema = Yup.object().shape({});

const StoreSiteSettings = () => {
   const data = [
      {
         label: "Site Data",
         value: "site_data",
      },
      {
         label: "Banners",
         value: "banners",
      },
      {
         label: "Site Colors",
         value: "sites_colors",
      },
   ];

   const { value, Tabs } = useTabs({
      data,
      hideSearch: true,
   });

   const switchTabs = () => {
      switch (value) {
         case "site_data":
            return <SiteData />;
         case "banners":
            return <Banner />;
         case "sites_colors":
            return <Colors />;
      }
   };

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
         }}
      >
         {" "}
         <CustomPaper modalTitle={"Store Site Settings"}>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
               }}
               mb={"2rem"}
            >
               <Grid
                  container
                  spacing={0}
                  sx={{ paddingBottom: " 20px" }}
               >
                  {Tabs}
               </Grid>
               <Grid container spacing={0}>
                  {value && switchTabs()}
               </Grid>
            </Box>
         </CustomPaper>
      </Box>
   );
};

export default StoreSiteSettings;
