import { Delete, Print } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
   useDeleteOrdersMutation,
   usePostOrdersStatusUpdateMutation,
} from "../../../../../../api/orders";
import useModal from "../../../../../../hooks/useModal";
import { returnNepaliNumberWithCommas } from "../../../../../../utils/helpers";
// import CustomDeleteModal from "../../../common/CustomModal/CustomDeleteModal";
import { useGetCustomersSingleQuery } from "../../../../../../api/customersApi";
import useQueryId from "../../../../../../hooks/useQueryId";
import CustomDataGrid from "../../../../../common/CustomDataGrid/CustomDataGrid";
import CustomDrawer from "../../../../../common/CustomDrawer/CustomDrawer";
import CustomDeleteModal from "../../../../../common/CustomModal/CustomDeleteModal";
import OrderStatusChangeModal from "../../Orders/OrderStatusChangeModal";
import CustomerOrderDetail from "./CustomerOrderDetail";

const items = [
   {
      icon: <Delete fontSize="small" />,
      text: "Delete",
      // modalType: "delete_products",
      permission: "department-delete",
   },
];

const data = [
   {
      label: "Orders",
      value: "Orders",
      icon: <PeopleIcon />,
   },
];

const CustomerOrders = ({ ordersData }) => {
   const { modals, handleOpen, handleClose, row } = useModal();
   const [rowId, setRowId] = useState();

   console.log({ ordersData, row });

   const drawerComponent = (
      <>{rowId && <OrderDetailsDrawer rowData={rowId} />}</>
   );

   const [tableStatus, setTableStatus] = useState();
   console.log({ row, rowId });
   const { search_keyword = "" } = useSelector(
      (state) => state?.utils
   );

   const [page, setPage] = useState(1);
   const [paginationModel, setPaginationModel] = useState({
      page: 0,
      pageSize: 10,
   });

   const params = {
      page: paginationModel?.page + 1,
      pagination_limit: paginationModel?.pageSize,
      search_keyword,
   };
   // const {
   //    data: ordersData,
   //    isFetching,
   //    isSuccess,
   // } = useGetOrdersQuery(params);

   const [
      postOrdersStatusUpdate,
      {
         isSuccess: isOrderStatusSuccess,
         isLoading: isOrderStatusLoading,
         error: isOrderStatusError,
         data: successDataOrderStatus,
      },
   ] = usePostOrdersStatusUpdateMutation();
   const { query: id } = useQueryId();

   console.log("yoooooooooooooooo", { id });
   const { refetch } = useGetCustomersSingleQuery(id, { skip: !id });

   const [
      deleteOrders,
      {
         isSuccess: isDeleteSuccess,
         isLoading,
         error,
         data: successData,
      },
   ] = useDeleteOrdersMutation();

   const handleDelete = () => {
      console.log({ row });

      deleteOrders(row?.id);
   };

   const handleStatusChange = (status) => {
      const payload = {
         status: status,
         _method: "PUT",
      };
      postOrdersStatusUpdate({
         data: payload,
         id: row?.id,
      });
   };

   useEffect(() => {
      if (isDeleteSuccess) {
         handleClose("delete_products");
      }
   }, [isDeleteSuccess]);

   useEffect(() => {
      if (isOrderStatusSuccess) {
         handleClose("change_order_status");
         refetch();
      }
   }, [isOrderStatusSuccess]);

   // const handlePrint = (rowData) => {
   //    // Create a new window or iframe for printing
   //    const printWindow = window.open("");
   //    printWindow.document.write(`
   //       <html>
   //          <head>
   //             <title>Print Order Details</title>
   //             <style>
   //                body { font-family: Arial, sans-serif; }
   //                .print-container { padding: 20px; }
   //                .print-header { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
   //                .print-content { font-size: 14px; }
   //             </style>
   //          </head>
   //          <body>
   //             <div class="print-container">
   //                <div class="print-header">Order Details</div>
   //                <div class="print-content">
   //                   ${printOrderDetails(rowData)}
   //                </div>
   //             </div>
   //          </body>
   //       </html>
   //    `);
   //    printWindow.document.close();
   //    printWindow.focus();

   //    // Trigger the print dialog
   //    printWindow.print();
   // };

   const handlePrint = (rowData) => {
      // Create a hidden iframe
      const iframe = document.createElement("iframe");
      iframe.style.position = "fixed";
      iframe.style.right = "0";
      iframe.style.bottom = "0";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "0";
      iframe.style.visibility = "hidden";

      // Append the iframe to the document body
      document.body.appendChild(iframe);

      // Write the print content to the iframe
      const iframeDocument = iframe.contentWindow?.document;
      if (iframeDocument) {
         iframeDocument.open();
         iframeDocument.write(`
            <html>
               <head>
                  <title>Print Order Details</title>
                  <style>
                     body { font-family: Arial, sans-serif; }
                     .print-container { padding: 20px; }
                     .print-header { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
                     .print-content { font-size: 14px; }
                  </style>
               </head>
               <body>
                  <div class="print-container">
                     <div class="print-header">Order Details</div>
                     <div class="print-content">
                        ${printOrderDetails(rowData)}
                     </div>
                  </div>
               </body>
            </html>
         `);
         iframeDocument.close();

         // Trigger the print dialog
         iframe.contentWindow?.focus();
         iframe.contentWindow?.print();
      }

      // Remove the iframe after printing
      setTimeout(() => {
         document.body.removeChild(iframe);
      }, 1000); // Adjust the timeout as needed
   };
   const printOrderDetails = (rowData) => {
      return `
         <div style="font-family: Arial, sans-serif; padding: 20px;">
            <div style="display: flex; width: 100%;">
               <div>
                  <span style="margin-right: 6px; font-weight: 500; font-size: 14px;">
                     Order Number:
                  </span>
                  <span style="font-weight: 600;">
                     ${rowData?.order_number}
                  </span>
               </div>
            </div>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ccc;" />
            <div>
               <div style="font-size: 16px; font-weight: 600; margin-bottom: 20px;">
                  Order Items:
               </div>
               <div style="padding-right: 10px; margin-bottom: 16px;">
                  ${rowData?.order_items
                     ?.map(
                        (item) => `
                     <div style="margin-bottom: 18px; border-bottom: 1px dashed #ccc; padding-bottom: 18px; display: flex; width: 100%;">
                        <div style="min-width: 70px; max-width: 70px; height: 80px; margin-right: 20px;">
                           <img
                              src="${
                                 item?.product?.product_images?.[0]
                                    ?.product_image
                              }"
                              alt="product-image"
                              style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;"
                           />
                        </div>
                        <div style="width: 100%;">
                           <div style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">
                              ${item?.product?.name}
                           </div>
                           <div style="display: flex; justify-content: space-between; align-items: end; width: 100%;">
                              <div style="display: flex; flex-direction: column; gap: 6px;">
                                 <div style="font-size: 14px; font-weight: 500;">
                                    Quantity: <span style="margin-left: 3px;">${
                                       item?.quantity
                                    }</span>
                                 </div>
                                 <div style="font-size: 14px; font-weight: 500;">
                                    Price: <span style="margin-left: 3px;">Rs. ${returnNepaliNumberWithCommas(
                                       item?.price
                                    )}</span>
                                 </div>
                              </div>
                              <div style="display: flex; align-items: end; gap: 4px;">
                                 <div style="font-size: 14px; font-weight: 500; margin-bottom: 2px;">
                                    SubTotal:
                                 </div>
                                 <span style="font-size: 18px; font-weight: 700;">
                                    Rs. ${returnNepaliNumberWithCommas(
                                       item?.subtotal
                                    )}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  `
                     )
                     .join("")}
               </div>
               <div style="display: flex; flex-direction: column; background-color: #eae8ff; padding: 16px 18px; border-radius: 12px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                     <div style="font-size: 16px;">SubTotal:</div>
                     <div style="font-size: 16px; font-weight: 600;">
                        Rs. ${returnNepaliNumberWithCommas(
                           rowData?.subtotal
                        )}
                     </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                     <div style="font-size: 16px;">Discount:</div>
                     <div style="font-size: 16px; font-weight: 600;">
                        - Rs. ${returnNepaliNumberWithCommas(
                           rowData?.discount
                        )}
                     </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                     <div style="font-size: 16px;">Tax:</div>
                     <div style="font-size: 16px; font-weight: 600;">
                        + Rs. ${returnNepaliNumberWithCommas(
                           rowData?.tax
                        )}
                     </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px; border-bottom: 1px dashed #ccc; padding-bottom: 4px;">
                     <div style="font-size: 16px;">Delivery Charge:</div>
                     <div style="font-size: 16px; font-weight: 600;">
                        + Rs. ${returnNepaliNumberWithCommas(
                           rowData?.delivery_charge
                        )}
                     </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                     <div style="font-size: 18px; color: #6158CA;">Total Amount:</div>
                     <div style="font-size: 18px; font-weight: 800; color: #6158CA;">
                        Rs. ${returnNepaliNumberWithCommas(
                           rowData?.total_amount
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      `;
   };

   // const printOrderDetails = (rowData) => {
   //    return `
   //       <div style="font-family: Arial, sans-serif; padding: 20px;">
   //          <div style="display: flex; width: 100%;">
   //             <div>
   //                <span style="margin-right: 6px; font-weight: 500; font-size: 14px;">
   //                   Order Number:
   //                </span>
   //                <span style="font-weight: 600;">
   //                   ${rowData?.order_number}
   //                </span>
   //             </div>
   //          </div>
   //          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ccc;" />
   //          <div>
   //             <div style="font-size: 16px; font-weight: 600; margin-bottom: 20px;">
   //                Order Items:
   //             </div>
   //             <div style=" padding-right: 10px; margin-bottom: 16px;">
   //                ${rowData?.order_items
   //                   ?.map(
   //                      (item) => `
   //                   <div style="margin-bottom: 18px; border-bottom: 1px dashed #ccc; padding-bottom: 18px; display: flex; width: 100%;">
   //                      <div style="min-width: 70px; max-width: 70px; height: 80px; margin-right: 20px;">
   //                         <img
   //                            src="${
   //                               item?.product?.product_images?.[0]
   //                                  ?.product_image
   //                            }"
   //                            alt="product-image"
   //                            style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;"
   //                         />
   //                      </div>
   //                      <div style="width: 100%;">
   //                         <div style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">
   //                            ${item?.product?.name}
   //                         </div>
   //                         <div style="display: flex; justify-content: space-between; align-items: end; width: 100%;">
   //                            <div style="display: flex; flex-direction: column; gap: 6px;">
   //                               <div style="font-size: 14px; font-weight: 500;">
   //                                  Quantity: <span style="margin-left: 3px;">${
   //                                     item?.quantity
   //                                  }</span>
   //                               </div>
   //                               <div style="font-size: 14px; font-weight: 500;">
   //                                  Price: <span style="margin-left: 3px;">Rs. ${returnNepaliNumberWithCommas(
   //                                     item?.price
   //                                  )}</span>
   //                               </div>
   //                            </div>
   //                            <div style="display: flex; align-items: end; gap: 4px;">
   //                               <div style="font-size: 14px; font-weight: 500;">
   //                                  SubTotal:
   //                               </div>
   //                               <span style="font-size: 18px; font-weight: 700;">
   //                                  Rs. ${returnNepaliNumberWithCommas(
   //                                     item?.subtotal
   //                                  )}
   //                               </span>
   //                            </div>
   //                         </div>
   //                      </div>
   //                   </div>
   //                `
   //                   )
   //                   .join("")}
   //             </div>
   //             <div style="display: flex; flex-direction: column; background-color: #eae8ff; padding: 16px 18px; border-radius: 12px;">
   //                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
   //                   <div style="font-size: 16px;">SubTotal:</div>
   //                   <div style="font-size: 16px; font-weight: 600;">
   //                      Rs. ${returnNepaliNumberWithCommas(
   //                         rowData?.subtotal
   //                      )}
   //                   </div>
   //                </div>
   //                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
   //                   <div style="font-size: 16px;">Discount:</div>
   //                   <div style="font-size: 16px; font-weight: 600;">
   //                      - Rs. ${returnNepaliNumberWithCommas(
   //                         rowData?.discount
   //                      )}
   //                   </div>
   //                </div>
   //                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
   //                   <div style="font-size: 16px;">Tax:</div>
   //                   <div style="font-size: 16px; font-weight: 600;">
   //                      + Rs. ${returnNepaliNumberWithCommas(
   //                         rowData?.tax
   //                      )}
   //                   </div>
   //                </div>
   //                <div style="display: flex; justify-content: space-between; margin-bottom: 4px; border-bottom: 1px dashed #ccc; padding-bottom: 4px;">
   //                   <div style="font-size: 16px;">Delivery Charge:</div>
   //                   <div style="font-size: 16px; font-weight: 600;">
   //                      + Rs. ${returnNepaliNumberWithCommas(
   //                         rowData?.delivery_charge
   //                      )}
   //                   </div>
   //                </div>
   //                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
   //                   <div style="font-size: 18px; color: #6158CA;">Total Amount:</div>
   //                   <div style="font-size: 18px; font-weight: 800; color: #6158CA;">
   //                      Rs. ${returnNepaliNumberWithCommas(
   //                         rowData?.total_amount
   //                      )}
   //                   </div>
   //                </div>
   //             </div>
   //          </div>
   //       </div>
   //    `;
   // };

   const columns = [
      {
         flex: 0.8,
         field: "order_number",
         headerName: "Order No.",
      },
      // {
      //    flex: 0.8,
      //    field: "order_items",
      //    headerName: "Total Products / Qty",
      //    renderCell: (params) => {
      //       const totalQuantity = params?.row?.order_items?.reduce(
      //          (total, item) => total + item.quantity,
      //          0
      //       );

      //       return (
      //          <Box
      //             sx={{
      //                display: "flex",
      //                alignItems: "center",
      //                height: "100%",
      //             }}
      //          >
      //             Products: {params?.row?.order_items?.length} /{" "}
      //             Quantity: {totalQuantity}
      //          </Box>
      //       );
      //    },
      // },
      {
         flex: 0.6,
         field: "subtotal",
         headerName: "Subtotal",
         type: "number",

         renderCell: (params) => {
            return (
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "end",
                     height: "100%",
                  }}
               >
                  Rs.{" "}
                  {params?.row?.subtotal &&
                     returnNepaliNumberWithCommas(
                        params?.row?.subtotal
                     )}
               </Box>
            );
         },
      },
      // {
      //    flex: 0.7,
      //    field: "delivery_charge",
      //    headerName: "Delivery Charge",
      //    type: "number",

      //    renderCell: (params) => {
      //       return (
      //          <Box
      //             sx={{
      //                display: "flex",
      //                alignItems: "center",
      //                height: "100%",
      //                justifyContent: "end",
      //             }}
      //          >
      //             Rs.{" "}
      //             {params?.row?.delivery_charge &&
      //                returnNepaliNumberWithCommas(
      //                   params?.row?.delivery_charge
      //                )}
      //          </Box>
      //       );
      //    },
      // },
      // {
      //    flex: 0.6,
      //    field: "discount",
      //    headerName: "Discount",
      //    type: "number",

      //    renderCell: (params) => {
      //       return (
      //          <Box
      //             sx={{
      //                display: "flex",
      //                alignItems: "center",
      //                height: "100%",
      //                justifyContent: "end",
      //             }}
      //          >
      //             Rs.{" "}
      //             {params?.row?.discount &&
      //                returnNepaliNumberWithCommas(
      //                   params?.row?.discount
      //                )}
      //          </Box>
      //       );
      //    },
      // },
      {
         flex: 0.8,
         field: "total_amount",
         headerName: "Total Amount",
         type: "number",

         renderCell: (params) => {
            return (
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     height: "100%",
                     justifyContent: "end",
                  }}
               >
                  Rs.{" "}
                  {params?.row?.total_amount &&
                     returnNepaliNumberWithCommas(
                        params?.row?.total_amount
                     )}
               </Box>
            );
         },
      },

      {
         flex: 1,
         field: "status",
         headerName: "Update status",
         renderCell: (params) => {
            return (
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     height: "100%",
                  }}
               >
                  <Button
                     sx={{
                        border: "1px solid #6158CA",
                        color: "#6158CA",
                        fontSize: "13px",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        position: "relative", // For the tick icon
                        "&:hover": {
                           borderColor: "#6158CA",
                        },
                        padding: "2px 6px",
                        marginRight: "6px",
                     }}
                     onClick={() =>
                        handleOpen("change_order_status", params.row)
                     }
                  >
                     Change
                  </Button>{" "}
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "4px 10px",
                        borderRadius: "16px",
                        fontSize: "12px",
                        fontWeight: "600",
                        minWidth: "90px",
                        height: "24px",
                        textTransform: "capitalize",
                        color: "#fff",
                        backgroundColor:
                           params?.row?.order_status === "cancelled"
                              ? "#ff5a36"
                              : params?.row?.order_status ===
                                "processing"
                              ? "#10aade"
                              : "#3ec2a1",
                     }}
                  >
                     {params?.row?.order_status}
                  </div>
               </Box>
            );
         },
      },
      {
         flex: 0.5,
         field: "action",
         headerName: "Actions",
         renderCell: (params) => (
            <Box
               sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  gap: "8px", // Add some gap between the buttons
               }}
            >
               {/* View Action */}
               <Box
                  sx={{
                     cursor: "pointer",
                     display: "flex",
                     alignItems: "center",
                     height: "100%",
                  }}
               >
                  <CustomDrawer
                     padding={"20px 30px"}
                     width={"40vw"}
                     component={
                        <Box
                           className="cashierAmountInfoBoxTitle"
                           sx={{
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "#e3e3e3",
                              padding: "2px",
                              borderRadius: "6px",
                           }}
                        >
                           <Box
                              onClick={() => setRowId(params?.row)}
                              sx={{
                                 display: "flex",
                                 alignItems: "center",
                                 height: "100%",
                              }}
                           >
                              <VisibilityIcon
                                 sx={{
                                    color: "#000",
                                    fontSize: "18px",
                                 }}
                              />
                           </Box>
                        </Box>
                     }
                     drawer={drawerComponent}
                  />
               </Box>

               {/* Print Action */}
               <Box
                  sx={{
                     cursor: "pointer",
                     display: "flex",
                     alignItems: "center",
                     backgroundColor: "#e3e3e3",
                     padding: "2px",
                     borderRadius: "6px",
                  }}
                  onClick={() => handlePrint(params.row)} // Trigger print on click
               >
                  <Print sx={{ color: "#000", fontSize: "18px" }} />
               </Box>

               {/* Delete Action */}
               <Box
                  sx={{
                     cursor: "pointer",
                     display: "flex",
                     alignItems: "center",
                     backgroundColor: "#e3e3e3",
                     padding: "2px",
                     borderRadius: "6px",
                  }}
                  onClick={() =>
                     handleOpen("delete_products", params.row)
                  }
               >
                  <Delete sx={{ color: "#000", fontSize: "18px" }} />
               </Box>
            </Box>
         ),
      },
   ];

   return (
      <div>
         <CustomDataGrid
            rows={ordersData}
            columns={columns}
            rowCount={10}
            // setPage={setPage}
            // paginationModel={paginationModel}
            // setPaginationModel={setPaginationModel}
            paginationMode={"client"}
            settings
            // pageInfo={ordersData}
         />

         <CustomDeleteModal
            handleClose={() => handleClose("delete_products")}
            open={modals?.delete_products}
            isLoading={isLoading}
            handleConfirm={handleDelete}
            success={isDeleteSuccess}
            error={error}
            successData={successData}
            title={"Order"}
            subTitle={row?.order_number}
         />

         <OrderStatusChangeModal
            open={modals?.change_order_status}
            handleClose={() => handleClose("change_order_status")}
            handleConfirm={handleStatusChange}
            isLoading={isOrderStatusLoading}
            success={isOrderStatusSuccess}
            error={isOrderStatusError}
            message="Do you want to change the order status of"
            buttonName="Update"
            row={row}
            title={"Order"}
            subTitle={row?.order_number}
         />
      </div>
   );
};

const OrderDetailsDrawer = ({ rowData }) => {
   return (
      <Box>
         <CustomerOrderDetail rowData={rowData} />
      </Box>
   );
};

const PrintOrderDetailsDrawer = ({ rowData }) => {
   return (
      <Box>
         <h2>Print Order Details</h2>
         <p>Order Number: {rowData?.order_number}</p>
         <p>Total Amount: Rs. {rowData?.total_amount}</p>
         {/* Add more details as needed */}
         <Button
            variant="contained"
            onClick={() => window.print()} // Trigger browser print
         >
            Print
         </Button>
      </Box>
   );
};

export default CustomerOrders;
