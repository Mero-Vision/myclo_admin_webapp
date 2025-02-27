import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useForm } from "react-hook-form";
import styles from "./style";

const StudentsOverviewChart = ({ dashboardData }) => {
   const [activeButton, setActiveButton] = useState("week");

   const weekDays =
      dashboardData?.sales_by_week?.map(
         (item) => item?.day_of_week
      ) || [];
   const salesData =
      dashboardData?.sales_by_week?.map(
         (item) => item?.total_sales
      ) || [];

   const monthDays =
      dashboardData?.sales_by_month?.map((item) => item?.day) || [];
   const monthData =
      dashboardData?.sales_by_month?.map(
         (item) => item?.total_sales
      ) || [];

   const labels =
      activeButton === "month" ? monthDays : weekDays || [];

   const apexData = {
      series: [
         {
            name: "Sales",
            data:
               activeButton === "month" ? monthData : salesData || [],
         },
      ],
      options: {
         chart: {
            background: "#fff",
            type: "line",
            zoom: {
               enabled: false,
            },
            toolbar: {
               show: false,
            },
            dropShadow: {
               enabled: true,
               color: "#5C67F5",
               top: 18,
               left: 7,
               blur: 10,
               opacity: 0.2,
            },
         },
         dataLabels: {
            enabled: false,
         },
         stroke: {
            curve: "smooth",
            width: 3,
            colors: ["#5C67F5"],
         },
         fill: {
            colors: ["#5C67F5"],
            opacity: 0.9,
            type: "solid",
            gradient: {
               shade: "dark",
               type: "horizontal",
               shadeIntensity: 0.5,
               gradientToColors: undefined,
               inverseColors: true,
               opacityFrom: 1,
               opacityTo: 1,
               stops: [0, 50, 100],
               colorStops: [],
            },
         },

         colors: ["#5C67F5"],
         markers: {
            size: 0,
            colors: ["#fff"],
            strokeColors: "#5C67F5",
         },
         grid: {
            strokeDashArray: 7,

            row: {
               colors: ["transparent"],
               opacity: 0.5,
            },
            yaxis: {
               lines: {
                  show: true, // Hides the y-axis lines
                  // strokeDashArray: 10,
               },
            },
            xaxis: {
               lines: {
                  show: false, // Show vertical lines next to x-axis labels
               },
            },
         },
         xaxis: {
            categories: labels,
            tickAmount: 12,
            labels: {
               style: {
                  fontWeight: "400",
                  fontFamily: "Mukta, sans-serif !important",
               },
            },
            tooltip: {
               enabled: false,
            },
         },
         yaxis: {
            labels: {
               formatter: function (value) {
                  return Math.round(value);
               },
            },
         },
         tooltip: {
            marker: {
               show: false,
            },
            x: {
               formatter: (
                  seriesName,
                  { series, seriesIndex, dataPointIndex }
               ) => {
                  return labels?.[dataPointIndex];
               },
               show: true,
            },
         },
      },
   };

   const DATA = [
      { label: "Week", value: "week" },
      { label: "Month", value: "month" },
   ];
   const classes = styles();
   const {
      control,
      formState: { errors },
   } = useForm({ defaultValues: { time: DATA?.[0]?.value } });

   const handleButtonClick = (button) => {
      setActiveButton(button);
   };

   const totalSales =
      activeButton === "month"
         ? dashboardData?.total_sales_by_month
         : dashboardData?.sales_amount_by_week;

   return (
      <Box className={classes.singleCard}>
         <Box className={classes.titleDiv}>
            <Box className="titleDevBox">
               <Typography className="titleHeader">
                  Applications Overview
               </Typography>
               {/* <Typography className="amount">
                  Rs. {returnNepaliNumberWithCommas(totalSales || 0)}
               </Typography> */}
            </Box>
            <Box>
               <Button
                  className={
                     activeButton === "week"
                        ? "buttonActiveLeft"
                        : "buttonInactiveLeft"
                  }
                  onClick={() => handleButtonClick("week")}
               >
                  Week
               </Button>
               <Button
                  className={
                     activeButton === "month"
                        ? "buttonActiveRight"
                        : "buttonInactiveRight"
                  }
                  onClick={() => handleButtonClick("month")}
               >
                  Month
               </Button>
            </Box>
         </Box>

         <Box>
            <ReactApexChart
               type="line"
               options={apexData?.options}
               series={apexData?.series}
            />{" "}
         </Box>
      </Box>
   );
};

export default StudentsOverviewChart;
