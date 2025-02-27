import { Receipt } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

import useTabs from "../../../../../hooks/useTabs";
import CustomPaper from "../../../../common/CustomPaper/CustomPaper";
import DeliveryChargesTable from "./DeliveryChargesTable";
import styles from "./style";

const data = [
   // {
   //    label: "Accounts",
   //    value: "accounts",
   //    icon: <Calculate />,
   // },
   {
      label: "Delivery Charges",
      value: "delivery_charges",
      icon: <Receipt />,
   },
   // {
   //    label: "Suppliers",
   //    value: "suppliers",
   //    icon: <ShoppingCart />,
   // },
];
const DeliveryCharges = () => {
   const classes = styles();
   const { value, Tabs } = useTabs({
      data,
      hideSearch: true,
   });
   return (
      <>
         <CustomPaper modalTitle={"Delivery Charges"}>
            <Box className={classes.tabs}>{Tabs}</Box>
            <Box>
               <DeliveryChargesTable />
            </Box>
         </CustomPaper>
      </>
   );
};

export default DeliveryCharges;
