import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { Box, Grid } from "@mui/material";
import React from "react";
import { returnNepaliNumberWithCommas } from "../../../../utils/helpers";
import styles from "./style";
const DashboardLeftGridOne = ({ dashboardData }) => {
   const classes = styles();
   const data = [
      {
         title: "Bookings",
         amount: dashboardData?.booking_count,
         icon: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <MenuBookOutlinedIcon
                  sx={{
                     fontSize: "44px !important",
                     color: "#FFC658",
                  }}
               />
            </Box>
         ),
      },
      {
         title: "Blogs",
         amount: dashboardData?.blog_count,
         icon: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <ArticleOutlinedIcon
                  sx={{
                     fontSize: "44px !important",
                     color: "#5C67F6",
                  }}
               />
            </Box>
         ),
      },
      {
         title: "Events",
         amount: dashboardData?.event_count,
         icon: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <EventNoteOutlinedIcon
                  sx={{
                     fontSize: "44px !important",
                     color: "#FE5D9F",
                  }}
               />
            </Box>
         ),
      },
      {
         title: "Menu Items",
         amount: dashboardData?.menu_item_count,
         icon: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <DinnerDiningOutlinedIcon
                  sx={{
                     fontSize: "44px !important",
                     color: "#FF8E6F",
                  }}
               />
            </Box>
         ),
      },
      {
         title: "Contact Us",
         amount: dashboardData?.contact_us_count,
         icon: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <MessageOutlinedIcon
                  sx={{
                     fontSize: "44px !important",
                     color: "#E254D4",
                  }}
               />
            </Box>
         ),
      },
   ];
   return (
      <Box>
         <Grid container spacing={3}>
            {data?.map((item, index) => (
               <Grid item sm={6} mg={4} lg={2.4} key={index}>
                  <Box className={classes.gridOneCard}>
                     <Box className={classes.gridOneCardInfo}>
                        <Box className={classes.gridOneCardTitle}>
                           {item?.title}
                        </Box>
                        <Box className={classes.gridOneCardAmount}>
                           {item?.money && "Rs."}{" "}
                           {returnNepaliNumberWithCommas(
                              item?.amount || 0
                           )}
                        </Box>
                     </Box>
                     <Box className={classes.gridOneCardIcon}>
                        {item?.icon}
                     </Box>
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default DashboardLeftGridOne;
