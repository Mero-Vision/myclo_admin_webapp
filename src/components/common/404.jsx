import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();
   return (
      <>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               marginTop: "4rem",
               height: "50dvh",
            }}
         >
            <Typography textAlign={"center"} variant="h5">
               Sorry! The route you trying to access is not available
            </Typography>
         </Box>
         <Box sx={{ textAlign: "center", margin: "10px 0px" }}>
            <Button variant="text" onClick={() => navigate("/")}>
               Go to homepage
            </Button>
         </Box>
      </>
   );
};

export default NotFound;
