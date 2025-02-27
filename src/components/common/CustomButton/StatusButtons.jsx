import { Box } from "@mui/material";
import React from "react";

const StatusButtons = ({ row, fontSize }) => {
   const ButtonStyle = ({ background, color }) => {
      return (
         <Box
            style={{
               color,
               fontSize,
            }}
         >
            {row?.status?.toUpperCase()}
         </Box>
      );
   };
   const switchButtons = () => {
      switch (row?.status?.toLowerCase()) {
         case "draft":
            return <ButtonStyle color={"#aaa"} />;
         case "void":
            return <ButtonStyle color={"#84BBBA"} />;
         case "returned":
            return <ButtonStyle color={"#9b59b6"} />;
         case "partial":
            return <ButtonStyle color={"#FD8515"} />;
         case "unpaid":
            return <ButtonStyle color={"red"} />;
         case "paid":
         case "approved":
         case "active":
            return <ButtonStyle color={"#24C046"} />;
         case "inactive":
            return <ButtonStyle color={"#FF3B3B"} />;
      }
   };
   return <>{switchButtons()}</>;
};

export default StatusButtons;
