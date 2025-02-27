import {
   ContactPageOutlined,
   InfoOutlined,
   SettingsOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import useTabs from "../../../../../../hooks/useTabs";
import ApplicationPeriod from "./ApplicationPeriod";
import CountriesData from "./CountriesData";
import EducationLevels from "./EducationLevels";
import GendersData from "./GendersData";
import PaymentMethods from "./PaymentMethods";
import Provinces from "./Provinces";
const MasterData = () => {
   const data = [
      {
         label: "Application Periods",
         value: "app_period",
         icon: <ContactPageOutlined />,
      },
      {
         label: "Education Levels",
         value: "edu",
         icon: <ContactPageOutlined />,
      },
      {
         label: "Countries",
         value: "countries",
         icon: <InfoOutlined />,
      },
      {
         label: "Provinces Of Nepal",
         value: "provinces",
         icon: <ContactPageOutlined />,
      },
      {
         label: "Genders",
         value: "genders",
         icon: <SettingsOutlined />,
      },
      {
         label: "Payment Methods",
         value: "payment-methods",
         icon: <PaidOutlinedIcon />,
      },
   ];
   const { value, Tabs } = useTabs({
      hideSearch: true,

      data,
   });

   const switchTabs = () => {
      switch (value) {
         case "genders":
            return <GendersData />;
         case "countries":
            return <CountriesData />;
         case "edu":
            return <EducationLevels />;
         case "app_period":
            return <ApplicationPeriod />;
         case "provinces":
            return <Provinces />;
         case "payment-methods":
            return <PaymentMethods />;
      }
   };
   return (
      <Box>
         {Tabs}
         <Box
            sx={{
               borderBottom: "1px solid #2A7576",
               marginTop: "-10px",
            }}
         ></Box>
         <Box
            sx={{
               backgroundColor: "#fff",
               marginTop: "20px",
               padding: "20px",
            }}
         >
            {switchTabs()}
         </Box>
      </Box>
   );
};

export default MasterData;
