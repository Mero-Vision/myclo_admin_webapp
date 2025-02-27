import { ArrowCircleLeftOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomBackButton = ({ url }) => {
   const navigate = useNavigate();
   return (
      <Box sx={{ textAlign: "start", marginBottom: "40px" }}>
         <Button
            startIcon={<ArrowCircleLeftOutlined />}
            onClick={() => navigate(url ? url : -1)}
            sx={{
               padding: "0 !important",
               color: "#4C4B63",
               "&:hover": {
                  background: "none",
               },
               marginBottom: "10px",
            }}
         >
            Back
         </Button>
      </Box>
   );
};

export default CustomBackButton;
