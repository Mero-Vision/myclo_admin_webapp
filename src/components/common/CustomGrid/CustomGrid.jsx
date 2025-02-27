import { Box, Grid } from "@mui/material";
import React from "react";

const CustomGrid = ({ info, details, left, right }) => {
   return (
      <Box>
         <Grid container spacing={3}>
            <Grid item xs={left || 3.5}>
               {info}
            </Grid>
            <Grid item xs={right || 8.5}>
               {details}{" "}
            </Grid>
         </Grid>
      </Box>
   );
};

export default CustomGrid;
