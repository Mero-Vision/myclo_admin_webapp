import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Box, Grid } from "@mui/material";
import React from "react";
import { returnNepaliNumberWithCommas } from "../../../../utils/helpers";
import styles from "./style";
const DashboardLeftGridOne = ({ dashboardData }) => {
   const classes = styles();

   console.log(dashboardData);
   const data = [
      {
         title: "Total Revenue",
         amount: dashboardData?.last_30_days_revenue,
         money: dashboardData?.last_30_days_revenue,
         icon: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <AttachMoneyOutlinedIcon
                  sx={{
                     fontSize: "44px !important",
                     color: "#009C68",
                  }}
               />
            </Box>
         ),
      },
      {
         title: "Total Orders",
         amount: dashboardData?.last_30_days_order,
         icon: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <ArticleOutlinedIcon
                  sx={{
                     fontSize: "44px !important",
                     color: "#19ACCA",
                  }}
               />
            </Box>
         ),
      },
      {
         title: "Total Customers",
         amount: dashboardData?.last_30_days_customer,
         icon: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <PeopleOutlinedIcon
                  sx={{
                     fontSize: "44px !important",
                     color: "#FF5530",
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
               <Grid item sm={6} mg={4} lg={4} key={index}>
                  <Box className={classes.gridOneCard}>
                     <Box
                        sx={{
                           display: "flex",
                           justifyContent: "space-between",
                           alignItems: "end",
                           marginBottom: " 8px",
                           height: "100%",
                        }}
                     >
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
                     <Box
                        sx={{
                           color: " #637381",
                           fontSize: "14px",
                           fontWeight: "400",
                        }}
                     >
                        last 30 days
                     </Box>
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default DashboardLeftGridOne;
