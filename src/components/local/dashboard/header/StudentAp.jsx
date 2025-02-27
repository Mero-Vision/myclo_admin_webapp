import { People } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "./style";

const StudentAp = () => {
   const classes = styles();
   const data = [
      {
         title: "Hancie Wanem Phago",
         date: "2024-09-30",
         university: "Harvard University",
      },
      {
         title: "Bikash Lal Singh",
         date: "2024-09-30",
         university: "Stanford University",
      },
      {
         title: "Nika Motosoko",
         date: "2024-09-30",
         university: "Harvard University",
      },
      {
         title: "James Kawasaki",
         date: "2024-09-30",
         university: "Harvard University",
      },
   ];
   return (
      <Box className={classes.studentApBox}>
         <Box className={classes.studentApBoxTitle}>
            Student Appointments
         </Box>
         {data?.map((item, index) => (
            <Box key={index} className={classes.studentApCard}>
               <Grid container spacing={2}>
                  <Grid item xs={2.5}>
                     <Box className={classes.studentApCardIcon}>
                        <People
                           className={classes.studentApCardIconMain}
                        />
                     </Box>
                  </Grid>
                  <Grid item xs={9.5}>
                     <Box className={classes.studentApCardInfo}>
                        <Box className={classes.studentApCardTitle}>
                           {item?.title}
                        </Box>
                        <Box className={classes.studentApCardDate}>
                           {item?.date}
                        </Box>
                        <Box className={classes.studentApCardUni}>
                           {item?.university}
                        </Box>
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         ))}
      </Box>
   );
};

export default StudentAp;
