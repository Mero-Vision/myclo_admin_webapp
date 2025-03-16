import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { useGetDashboardQuery } from "../../../../api/dashboardApi";
import {
   generateGreetings,
   getSiteDetail,
} from "../../../../utils/helpers";
import TotalSalesCardTwo from "./ChertTwo";
import DashboardLeftGridOne from "./DashboardLeft";

const DashboardHeader = () => {
   const dummyDashboardData = {
      sales_by_week: [
         { day_of_week: "Monday", total_sales: 12000 },
         { day_of_week: "Tuesday", total_sales: 15000 },
         { day_of_week: "Wednesday", total_sales: 14000 },
         { day_of_week: "Thursday", total_sales: 17000 },
         { day_of_week: "Friday", total_sales: 20000 },
         { day_of_week: "Saturday", total_sales: 22000 },
         { day_of_week: "Sunday", total_sales: 18000 },
      ],
      sales_by_month: [
         { day: "1", total_sales: 30000 },
         { day: "2", total_sales: 25000 },
         { day: "3", total_sales: 40000 },
         { day: "4", total_sales: 35000 },
         { day: "5", total_sales: 38000 },
         { day: "6", total_sales: 42000 },
         { day: "7", total_sales: 37000 },
         { day: "8", total_sales: 41000 },
         { day: "9", total_sales: 39000 },
         { day: "10", total_sales: 45000 },
         { day: "11", total_sales: 31000 },
         { day: "12", total_sales: 36000 },
         { day: "13", total_sales: 47000 },
         { day: "14", total_sales: 32000 },
         { day: "15", total_sales: 34000 },
         { day: "16", total_sales: 38000 },
         { day: "17", total_sales: 40000 },
         { day: "18", total_sales: 33000 },
         { day: "19", total_sales: 39000 },
         { day: "20", total_sales: 45000 },
         { day: "21", total_sales: 46000 },
         { day: "22", total_sales: 37000 },
         { day: "23", total_sales: 42000 },
         { day: "24", total_sales: 40000 },
         { day: "25", total_sales: 38000 },
         { day: "26", total_sales: 44000 },
         { day: "27", total_sales: 41000 },
         { day: "28", total_sales: 43000 },
         { day: "29", total_sales: 39000 },
         { day: "30", total_sales: 47000 },
      ],

      total_sales_by_month: 350000,
      sales_amount_by_week: 118000,
   };

   const userData = getSiteDetail()?.userData;

   const {
      data: dashboardData,
      isFetching,
      isSuccess,
   } = useGetDashboardQuery();

   return (
      <>
         <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
               sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#343434",
                  marginBottom: "2px",
               }}
            >
               Good {generateGreetings()}, {userData?.name || ""}
               {/* {singleUserInfo?.data?.name || "User"}! */}
            </Typography>
            <Typography
               sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#7d7d7d",
                  marginBottom: "30px",
               }}
            >
               Here's what's happening with your account today.
            </Typography>

            <>
               <Grid
                  container
                  spacing={2}
                  sx={{ marginBottom: "24px" }}
               >
                  <Grid
                     item
                     xs={12}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                     }}
                  >
                     <DashboardLeftGridOne
                        dashboardData={dashboardData?.data}
                     />
                  </Grid>
               </Grid>
               <Grid
                  container
                  spacing={1}
                  sx={{ marginBottom: "24px" }}
               >
                  <Grid
                     item
                     xs={12}
                     sm={12}
                     md={6}
                     lg={12}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                     }}
                  >
                     <TotalSalesCardTwo
                        title={
                           "Total Revenue and Net Profit by month"
                        }
                        dashboardData={
                           dashboardData?.data?.revenue_graph
                        }
                        dashboardData2={
                           dashboardData?.data?.net_profit_graph_data
                        }
                     />
                  </Grid>
               </Grid>
               {/* <Grid
                  container
                  spacing={2}
                  sx={{ marginBottom: "24px" }}
               >
                  <Grid
                     item
                     xs={12}
                     sm={12}
                     md={6}
                     lg={12}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                     }}
                  >
                     <TotalSalesCard
                        title={"Total Net Profit by month"}
                        dashboardData={
                           dashboardData?.data?.net_profit_graph_data
                        }
                     />
                  </Grid>
               </Grid> */}
            </>
         </Box>
      </>
   );
};

export default DashboardHeader;
