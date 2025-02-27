import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style";

const StudentsList = () => {
   const classes = styles();
   const navigate = useNavigate();

   const handleStudentsNavigate = () => {
      navigate(`/students`);
   };

   return (
      <Box className={classes.singleCard}>
         <Box className={classes.titleDiv}>
            <Box className="titleDevBoxStudent">
               <Typography className="titleHeader">
                  Clients List
               </Typography>
               <Box
                  className="titleHeaderBtn"
                  onClick={handleStudentsNavigate}
               >
                  <Box className={classes.titleHeaderBtnText}>
                     View All{" "}
                  </Box>
                  <span>
                     <EastOutlinedIcon
                        className={classes.viewAllIcon}
                     />
                  </span>
               </Box>
            </Box>
         </Box>

         <Box>
            <StudentTable />
         </Box>
      </Box>
   );
};

const StudentTable = () => {
   const students = [
      {
         name: "John Doe",
         university: "Harvard University",
         course: "Physics",
      },
      {
         name: "Jane Smith",
         university: "Stanford University",
         course: "Computer Science",
      },
      {
         name: "Mike Johnson",
         university: "MIT",
         course: "Mathematics",
      },
      {
         name: "Sarah Brown",
         university: "Oxford University",
         course: "Biology",
      },
      {
         name: "Emily Davis",
         university: "Cambridge University",
         course: "History",
      },
      {
         name: "Chris Wilson",
         university: "Yale University",
         course: "Philosophy",
      },
      {
         name: "Anna Garcia",
         university: "Columbia University",
         course: "Chemistry",
      },
      {
         name: "Paul Lee",
         university: "Princeton University",
         course: "Engineering",
      },
   ];

   const randomColors = [
      "#FF5733",
      "#3357FF",
      "#3498DB",
      "#9B59B6",
      "#E74C3C",
      "#1ABC9C",
      "#8E44AD",
      "#2ECC71",
      "#F1C40F",
      "#33FF57",
   ];

   return (
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
         <thead>
            <tr>
               <th
                  style={{
                     textAlign: "left",
                     padding: "10px",
                     fontSize: "14px",
                     fontWeight: "500",
                  }}
               >
                  Clients
               </th>
               <th
                  style={{
                     textAlign: "left",
                     padding: "10px",
                     fontSize: "14px",
                     fontWeight: "500",
                  }}
               >
                  Organization
               </th>
               <th
                  style={{
                     textAlign: "left",
                     padding: "10px",
                     fontSize: "14px",
                     fontWeight: "500",
                  }}
               >
                  Course
               </th>
            </tr>
         </thead>
         <tbody>
            {students.map((student, index) => (
               <React.Fragment key={index}>
                  <tr>
                     <td
                        style={{
                           padding: "10px",
                           fontSize: "13px",
                           fontWeight: "500",
                        }}
                     >
                        {student.name}
                     </td>
                     <td
                        style={{
                           padding: "10px",
                           fontSize: "12px",
                           fontWeight: "400",
                        }}
                     >
                        {student.university}
                     </td>
                     <td
                        style={{
                           padding: "10px",
                           fontSize: "14px",
                           fontWeight: "500",
                           color: randomColors[
                              index % randomColors.length
                           ],
                        }}
                     >
                        {student.course}
                     </td>
                  </tr>
                  {index < students.length - 1 && (
                     <tr>
                        <td colSpan="3" style={{ padding: "0" }}>
                           <hr
                              style={{
                                 margin: 0,
                                 border: "0.5px solid #ddd",
                              }}
                           />
                        </td>
                     </tr>
                  )}
               </React.Fragment>
            ))}
         </tbody>
      </table>
   );
};

export default StudentsList;
