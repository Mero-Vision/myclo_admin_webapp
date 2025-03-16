import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { Box } from "@mui/material";
import React from "react";
import { returnNepaliNumberWithCommas } from "../../../../utils/helpers";
const DashCardSecondary = ({ title, data }) => {
   return (
      <Box
         sx={{
            padding: "24px",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow:
               "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
            display: "flex",
            flexDirection: "column",
         }}
      >
         <Box
            sx={{
               fontSize: "18px",
               fontWeight: "600",
               marginBottom: "18px",
            }}
         >
            {title}
         </Box>
         <Box>
            {data?.slice(0, 3)?.map((item, index) => (
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     marginBottom: "20px",
                     "&:last-child": {
                        marginBottom: 0,
                     },
                  }}
               >
                  {" "}
                  <Box>
                     <Box
                        sx={{
                           fontSize: "14px",
                           fontWeight: " 600",
                           marginBottom: "6px",
                        }}
                     >
                        {item?.name}
                     </Box>
                     <Box
                        sx={{
                           display: "flex",
                           alignItems: "center",
                           gap: " 2px",
                        }}
                     >
                        <Box
                           sx={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#637381",
                           }}
                        >
                           {item?.order_count} Order Count
                        </Box>
                        <Box
                           sx={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#637381",
                           }}
                        >
                           /
                        </Box>
                        <Box
                           sx={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#637381",
                           }}
                        >
                           Rs.{" "}
                           {returnNepaliNumberWithCommas(item?.total)}{" "}
                           Revenue
                        </Box>
                     </Box>
                  </Box>
                  <Box
                     sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                     }}
                  >
                     <Box
                        sx={{
                           display: "flex",
                           alignItems: "center",
                           backgroundColor:
                              index === 0
                                 ? "#EFF8F4"
                                 : index === 1
                                 ? "#EFF9FC"
                                 : "#FFF2EF",
                           color:
                              index === 0
                                 ? "#00A66E"
                                 : index === 1
                                 ? "#00B8D9"
                                 : "#FF5530",
                           padding: "7px",
                           borderRadius: "50%",
                           height: "fit-content",
                        }}
                     >
                        <EmojiEventsOutlinedIcon />
                     </Box>
                  </Box>
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default DashCardSecondary;
