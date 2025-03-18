import { Delete } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getError, getSuccess } from "../../../../../utils/helpers";
import CustomModal from "../../../../common/CustomModal/CustomModal";

const OrderStatusChangeModal = ({
   open,
   handleClose,
   handleConfirm,
   isLoading,
   success,
   error,
   content,
   message,
   buttonName,
   height,
   row,
   title,
   subTitle,
}) => {
   const [selectedStatus, setSelectedStatus] = useState();

   useEffect(() => {
      if (row?.order_status) {
         setSelectedStatus(row?.order_status);
      }
   }, [row]);

   console.log({ success });
   useEffect(() => {
      if (success) {
         getSuccess(success);
         handleClose();
      }
   }, [success]);

   useEffect(() => {
      getError(error);
   }, [error]);

   // Function to handle status selection
   const handleStatusSelection = (status) => {
      setSelectedStatus(status);
   };

   // Function to handle update button click
   const handleUpdateClick = () => {
      if (selectedStatus) {
         handleConfirm(selectedStatus); // Pass the selected status to handleConfirm
      }
   };

   return (
      <>
         <CustomModal
            open={open}
            width={"500px"}
            height={height || "auto"} // Adjust height for the new layout
            icon={<Delete />}
            handleClose={handleClose}
         >
            <Box>
               <Box>
                  <Box
                     style={{
                        fontSize: "17px",
                        textAlign: "start",
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        flexDirection: "column",
                        width: "100%",
                        marginTop: "20px",
                     }}
                  >
                     <Box
                        sx={{
                           display: "flex",
                           alignItems: "center",
                           gap: "4px",
                           marginBottom: "24px",
                           marginLeft: "-4px",
                        }}
                     >
                        <WidgetsOutlinedIcon
                           style={{
                              color: "#000",
                              width: "24px",
                              height: "24px",
                           }}
                        />
                        <Box
                           sx={{
                              fontSize: "15px",
                              fontWeight: "700",
                           }}
                        >
                           Change {title || ""} Status
                        </Box>
                     </Box>
                  </Box>
               </Box>

               <p
                  style={{
                     fontWeight: "400",
                     fontSize: "14px",
                     color: " #8D8D8D",
                     margin: 0,
                     padding: 0,
                     marginBottom: "10px",
                  }}
               >
                  {message ||
                     "Are you sure you want to chnage the status of"}{" "}
                  <span
                     style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "rgb(47, 47, 47)",
                     }}
                  >
                     {subTitle || ""}
                  </span>{" "}
                  {subTitle ? (
                     <span
                        style={{
                           fontWeight: "600",
                           fontSize: "14px",
                           color: "rgb(47, 47, 47)",
                        }}
                     >
                        ?
                     </span>
                  ) : (
                     <span
                        style={{
                           fontWeight: "400",
                           fontSize: "14px",
                           color: " #8D8D8D",
                        }}
                     >
                        ?
                     </span>
                  )}{" "}
               </p>

               {/* Add buttons for status selection */}
               <Box
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     gap: "10px",
                     marginTop: "20px",
                  }}
               >
                  <Button
                     startIcon={
                        selectedStatus === "processing" ? (
                           <CheckCircleIcon />
                        ) : null
                     }
                     onClick={() =>
                        handleStatusSelection("processing")
                     }
                     variant="outlined"
                     sx={{
                        borderColor:
                           selectedStatus === "processing"
                              ? "#6158CA"
                              : "#ccc",
                        color: "#6158CA",
                        fontSize: "13px",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        "&:hover": {
                           borderColor: "#6158CA",
                        },
                     }}
                  >
                     Processing
                  </Button>
                  <Button
                     startIcon={
                        selectedStatus === "delivered" ? (
                           <CheckCircleIcon />
                        ) : null
                     }
                     onClick={() =>
                        handleStatusSelection("delivered")
                     }
                     variant="outlined"
                     sx={{
                        borderColor:
                           selectedStatus === "delivered"
                              ? "#6158CA"
                              : "#ccc",
                        color: "#6158CA",
                        fontSize: "13px",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        "&:hover": {
                           borderColor: "#6158CA",
                        },
                     }}
                  >
                     Delivered
                  </Button>
                  <Button
                     startIcon={
                        selectedStatus === "cancelled" ? (
                           <CheckCircleIcon />
                        ) : null
                     }
                     onClick={() =>
                        handleStatusSelection("cancelled")
                     }
                     variant="outlined"
                     sx={{
                        borderColor:
                           selectedStatus === "cancelled"
                              ? "#6158CA"
                              : "#ccc",
                        color: "#6158CA",
                        fontSize: "13px",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        "&:hover": {
                           borderColor: "#6158CA",
                        },
                     }}
                  >
                     Cancelled
                  </Button>
               </Box>

               {/* Update and Cancel buttons */}
               <Box
                  style={{
                     display: "flex",
                     justifyContent: "end",
                     alignItems: "center",
                     gap: "10px",
                     marginTop: "30px",
                  }}
               >
                  <Button
                     onClick={() => handleClose()}
                     sx={{
                        color: "#6f66d1",
                        border: "1px solid #6f66d1 !important",
                        fontSize: "13px",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        padding: "7px 25px",
                        borderRadius: "8px",
                        "&:hover": {
                           borderColor: "#6f66d1",
                        },
                     }}
                  >
                     Cancel
                  </Button>
                  <Button
                     onClick={handleUpdateClick}
                     disabled={isLoading || !selectedStatus} // Disable if no status is selected
                     sx={{
                        backgroundColor: "#6158CA",
                        border: "1px solid #6158ca",
                        color: "white",
                        fontSize: "13px",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        padding: "7px 25px",
                        borderRadius: "8px",
                        "&:hover": {
                           backgroundColor: "#6f66d1",
                        },
                        "&:disabled": {
                           backgroundColor: "#ccc",
                           color: "#666",
                           border: "1px solid #ccc",
                        },
                     }}
                  >
                     Update
                  </Button>
               </Box>
            </Box>
            {content && content}
         </CustomModal>
      </>
   );
};

export default OrderStatusChangeModal;
