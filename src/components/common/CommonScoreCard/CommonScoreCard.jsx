import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import styles from "./style";

const CommonScoreCard = ({ infoTitle, navTitle, extra }) => {
   const classes = styles();
   return (
      <Box className={classes.uniScoreCard}>
         <Box className={classes.uniScoreTitle}>{navTitle}</Box>
         <Divider sx={{ margin: "12px 0px" }} />
         <Box className={classes.uniScoreInfoBox}>
            <Box className={classes.uniScoreInfoTitle}>
               {infoTitle}
            </Box>
            {extra && (
               <Grid
                  container
                  spacing={1}
                  className={classes.uniExtraBox}
               >
                  <Grid item xs={3}>
                     <Box className={classes.uniScoreItemsBox}>
                        <Box
                           className={classes.uniScoreItemsScoreTitle}
                        >
                           Reading
                        </Box>
                        <Box
                           className={
                              classes.uniScoreItemsScoreSubtitle
                           }
                        >
                           6.0
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item xs={3}>
                     <Box className={classes.uniScoreItemsBox}>
                        <Box
                           className={classes.uniScoreItemsScoreTitle}
                        >
                           Writing
                        </Box>
                        <Box
                           className={
                              classes.uniScoreItemsScoreSubtitle
                           }
                        >
                           6.0
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item xs={3}>
                     <Box className={classes.uniScoreItemsBox}>
                        <Box
                           className={classes.uniScoreItemsScoreTitle}
                        >
                           Listining
                        </Box>
                        <Box
                           className={
                              classes.uniScoreItemsScoreSubtitle
                           }
                        >
                           6.0
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item xs={3}>
                     <Box className={classes.uniScoreItemsBox}>
                        <Box
                           className={classes.uniScoreItemsScoreTitle}
                        >
                           Speaking
                        </Box>
                        <Box
                           className={
                              classes.uniScoreItemsScoreSubtitle
                           }
                        >
                           6.0
                        </Box>
                     </Box>
                  </Grid>
               </Grid>
            )}
         </Box>
      </Box>
   );
};

export default CommonScoreCard;
