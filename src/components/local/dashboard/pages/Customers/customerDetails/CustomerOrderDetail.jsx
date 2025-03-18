import { Box, Divider } from "@mui/material";
import React from "react";
import { returnNepaliNumberWithCommas } from "../../../../../../utils/helpers";

const CustomerOrderDetail = ({ rowData }) => {
   console.log({ rowData });
   return (
      <>
         <Box display={"flex"} sx={{ width: "100%" }}>
            <Box>
               {" "}
               <span
                  style={{
                     marginRight: "6px",
                     fontWeight: "500",
                     fontSize: "14px",
                  }}
               >
                  Order Number:{" "}
               </span>{" "}
               <span style={{ fontWeight: "600" }}>
                  {rowData?.order_number}
               </span>
            </Box>
         </Box>
         <Divider sx={{ margin: "20px 0px 20px 0px" }} />
         <Box>
            <Box
               sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "20px",
               }}
            >
               Order Items:
            </Box>
            <Box
               sx={{
                  overflowX: "auto",
                  height: "calc(100dvh - 400px)",
                  paddingRight: "10px",
                  marginBottom: "16px",
               }}
            >
               {rowData?.order_items?.map((item, index) => (
                  <Box
                     key={index}
                     sx={{
                        marginBottom: "18px",
                        borderBottom: " 1px dashed #ccc",
                        paddingBottom: "18px",
                        display: "flex",
                        width: "100% !important",
                     }}
                  >
                     <Box
                        sx={{
                           minWidth: "70px",
                           maxWidth: "70px",
                           height: "80px",
                           marginRight: "20px",
                        }}
                     >
                        <img
                           src={
                              item?.product?.product_images?.[0]
                                 ?.product_image
                           }
                           alt="product-image"
                           style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: " 6px",
                           }}
                        />
                     </Box>
                     <Box sx={{ width: "100% !important" }}>
                        <Box
                           sx={{
                              fontSize: "16px",
                              fontWeight: "500",
                              marginBottom: "8px",
                           }}
                        >
                           {item?.product?.name}
                        </Box>
                        <Box
                           sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              width: "100% !important",
                           }}
                        >
                           <Box
                              sx={{
                                 display: "flex",
                                 flexDirection: "column",
                                 gap: "6px",
                              }}
                           >
                              <Box
                                 sx={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                 }}
                              >
                                 Quantity:{" "}
                                 <span style={{ marginLeft: "3px" }}>
                                    {item?.quantity}
                                 </span>
                              </Box>
                              <Box
                                 sx={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                 }}
                              >
                                 Price:{" "}
                                 <span style={{ marginLeft: "3px" }}>
                                    Rs.{" "}
                                    {returnNepaliNumberWithCommas(
                                       item?.price
                                    )}
                                 </span>{" "}
                              </Box>
                           </Box>
                           <Box
                              sx={{
                                 display: "flex",
                                 alignItems: "end",
                                 gap: "4px",
                              }}
                           >
                              <div
                                 style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    marginBottom: "2px",
                                 }}
                              >
                                 SubTotal:
                              </div>
                              <span
                                 style={{
                                    fontSize: "18px",
                                    fontWeight: "700",
                                 }}
                              >
                                 Rs.{" "}
                                 {returnNepaliNumberWithCommas(
                                    item?.subtotal
                                 )}
                              </span>
                           </Box>
                        </Box>
                     </Box>
                  </Box>
               ))}
            </Box>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#eae8ff",
                  padding: "16px 18px",
                  borderRadius: "12px",
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     marginBottom: "4px",
                  }}
               >
                  <Box sx={{ fontSize: "16px" }}>SubTotal:</Box>
                  <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                     Rs.{" "}
                     {returnNepaliNumberWithCommas(rowData?.subtotal)}
                  </Box>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     marginBottom: "4px",
                  }}
               >
                  <Box sx={{ fontSize: "16px" }}>Discount:</Box>
                  <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                     - Rs.{" "}
                     {returnNepaliNumberWithCommas(rowData?.discount)}
                  </Box>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     marginBottom: "4px",
                  }}
               >
                  <Box sx={{ fontSize: "16px" }}>Tax:</Box>
                  <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                     + Rs.{" "}
                     {returnNepaliNumberWithCommas(rowData?.tax)}
                  </Box>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     marginBottom: "4px",
                     borderBottom: "1px dashed #ccc",
                     paddingBottom: "4px",
                  }}
               >
                  <Box sx={{ fontSize: "16px" }}>
                     Delivery Charge:
                  </Box>
                  <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                     + Rs.{" "}
                     {returnNepaliNumberWithCommas(
                        rowData?.delivery_charge
                     )}
                  </Box>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     marginBottom: "4px",
                  }}
               >
                  <Box sx={{ fontSize: "18px", color: " #6158CA" }}>
                     Total Amount:
                  </Box>
                  <Box
                     sx={{
                        fontSize: "18px",
                        fontWeight: "800",
                        color: "#6158CA",
                     }}
                  >
                     Rs.{" "}
                     {returnNepaliNumberWithCommas(
                        rowData?.total_amount
                     )}
                  </Box>
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default CustomerOrderDetail;
