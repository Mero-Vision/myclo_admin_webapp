import { Box, IconButton } from "@mui/material";
import React from "react";

const IconWithBg = ({ data, handleClick = () => {} }) => {
   const { icon } = data;
   return (
      <div>
         {" "}
         <Box>
            <IconButton
               sx={{
                  backgroundColor: "#EFEFF1",
               }}
            >
               {icon}
            </IconButton>
         </Box>
      </div>
   );
};

export default IconWithBg;
