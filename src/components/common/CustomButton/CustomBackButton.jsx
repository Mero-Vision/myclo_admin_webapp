import { ArrowCircleLeftOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomBackButton = ({ url }) => {
   const navigate = useNavigate();
   return (
      <>
         <Button
            startIcon={
               <ArrowCircleLeftOutlined
                  sx={{ fontSize: "20px !important" }}
               />
            }
            onClick={() => navigate(url ? url : -1)}
            sx={{
               padding: "0 !important",
               color: "#4C4B63",
               "&:hover": {
                  background: "none",
               },
               marginBottom: "10px",
               textTransform: "capitalize",
               fontSize: "12px",
            }}
         >
            Back
         </Button>
      </>
   );
};

export default CustomBackButton;
