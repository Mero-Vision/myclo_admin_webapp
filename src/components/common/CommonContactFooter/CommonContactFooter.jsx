import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getSiteDetail } from "../../../utils/helpers";
import "./CommonContactFooter.css";
const CommonContactFooter = ({}) => {
   const siteData = getSiteDetail()?.siteData;
   const navigate = useNavigate();
   return (
      <Box className="cardComponentPricingContact">
         <Grid container spacing={0}>
            <Grid item md={7} xs={12}>
               <Box className="leftBox">
                  <Box className="leftBoxTitle">
                     Let’s connect and{" "}
                     <span style={{ color: "#ff7a5c" }}>
                        turn your vision into reality.
                     </span>
                  </Box>
                  <Box className="leftBoxSubtitle">
                     We are available from 9 AM to 6 PM, Sunday to
                     Friday.
                  </Box>
               </Box>
            </Grid>
            <Grid item md={5} xs={12} className="rightBoxGrid">
               <Box className="rightBox">
                  <Box className="rightBoxTitle">Reach Out Now!</Box>
                  <Box className="rightBoxNumber">
                     {siteData?.phone_no}
                  </Box>
                  <Button
                     onClick={() => navigate(`/contact`)}
                     className="rightBoxButton"
                  >
                     Lets Start Conversation
                  </Button>
                  {/* <Box className="mapBox">
                     <img
                        src={nepalMap}
                        alt="nepal map"
                        className="mapBoxImg"
                     />
                  </Box> */}
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default CommonContactFooter;
