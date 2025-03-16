import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useForm } from "react-hook-form";
import styles from "./style";

const TotalSalesCardTwo = ({
   title,
   dashboardData,
   dashboardData2,
}) => {
   const [activeButton, setActiveButton] = useState("month");

   console.log({ dashboardData, dashboardData2 });

   const monthDays =
      dashboardData?.map((item, index) => index + 1) || [];
   const monthDaysDates =
      dashboardData?.map((item) => item?.day) || [];
   const monthData = dashboardData?.map((item) => item?.total) || [];
   const monthData2 =
      dashboardData2?.map((item) => item?.total) || [];

   const labels = monthDays || [];
   const labelsDates = monthDaysDates || [];

   const apexData = {
      series: [
         {
            name: "Revenue",
            data: monthData || [],
         },
         {
            name: "Net Profit",
            data: monthData2 || [],
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
            colors: ["#5C67F5", "#50a8eb"], // Different colors for each series
         },
         fill: {
            colors: ["#5C67F5", "#50a8eb"],
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
         colors: ["#5C67F5", "#50a8eb"], // Different colors for each series
         markers: {
            size: 0,
            colors: ["#fff"],
            strokeColors: ["#5C67F5", "#50a8eb"],
         },
         grid: {
            strokeDashArray: 7,
            row: {
               colors: ["transparent"],
               opacity: 0.5,
            },
            yaxis: {
               lines: {
                  show: true,
               },
            },
            xaxis: {
               lines: {
                  show: false,
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
                  return labelsDates?.[dataPointIndex];
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

   return (
      <Box className={classes.singleCard}>
         <Box className={classes.titleDiv}>
            <Box className="titleDevBox">
               <Typography className="titleHeader">
                  {title}
               </Typography>
            </Box>
            <Box>
               {/* Buttons for Week/Month can be added here */}
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

export default TotalSalesCardTwo;
