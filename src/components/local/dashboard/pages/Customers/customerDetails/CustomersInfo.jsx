import { BorderColor, Delete } from "@mui/icons-material";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDeleteUniversityMutation } from "../../../../../../api/universitiesApi";
import { SidebarConstants } from "../../../../../../constants/SidebarConstants";
import useModal from "../../../../../../hooks/useModal";
import useTabs from "../../../../../../hooks/useTabs";
import { findInArray } from "../../../../../../utils/helpers";
import CustomDeleteModal from "../../../../../common/CustomModal/CustomDeleteModal";
import CustomerOrders from "./CustomerOrders";
import styles from "./styles";

const items = [
   {
      icon: <Delete fontSize="small" />,
      text: "Delete",
      modalType: "delete",
      permission: "customer-delete",
   },
   {
      icon: <BorderColor fontSize="small" />,
      text: "Edit",
      modalType: "edit",
      permission: "charts-of-account-delete",
   },
];

const CustomersInfo = ({ item, isStudentsLoading }) => {
   const classes = styles();
   const navigate = useNavigate();
   const { modals, handleOpen, handleClose, row } = useModal();
   const {
      control,
      formState: { errors },
      watch,
      handleSubmit,
      setValue,
   } = useForm({ defaultValues: { type: "none" } });
   console.log("userDDDDDDD", { item });

   // const [deleteCustomer, { isLoading, isSuccess, error }] =
   //    useDeleteCustomerMutation();

   // const handleConfirm = () => {
   //    deleteCustomer(item?.id);
   // };

   const DATA = useMemo(() => {
      const salesData = findInArray(
         SidebarConstants?.[0]?.items,
         "label",
         "Sales"
      );
      const array = salesData?.children
         ?.filter((items) => items?.label !== "Customers")
         ?.map((item) => {
            return { ...item, value: item?.label };
         });

      return array;
   }, [SidebarConstants]);

   useEffect(() => {
      if (watch("type") && watch("type") !== "none") {
         const findData = DATA?.find(
            (item) => item?.label === watch("type")
         );
         navigate(
            `${findData?.url}/add?user_id=${item?.id}&name=${item?.customer_detail?.name}`
         );
         console.log({ findData });
      }
   }, [watch("type")]);

   const [errorImg, setErrorImg] = useState("");
   const selectedFile = watch("file");
   const [
      deleteUniversity,
      {
         isSuccess: isDeleteSuccess,
         isLoading,
         error,
         data: successData,
      },
   ] = useDeleteUniversityMutation();
   const handleDelete = () => {
      deleteUniversity(item?.slug);
   };

   const data = [
      {
         label: "Orders",
         value: "orders",
         icon: <WidgetsOutlinedIcon />,
      },

      // {
      //    label: "Images",
      //    value: "docs",
      //    icon: <ImageIcon />,
      // },
      // {
      //    label: "Applications",
      //    value: "applications",
      //    icon: <FeedIcon />,
      // },
   ];

   const { value, Tabs } = useTabs({
      data,

      hideSearch: true,
   });

   const switchTabs = () => {
      switch (value) {
         case "orders":
            return <CustomerOrders ordersData={item?.orders} />;
         // case "docs":
         //    return <h1>akjgnkjsh</h1>;
         // case "applications":
         //    return <h1>fasgjanjfhbgs</h1>;
      }
   };
   return (
      <>
         <Box className={classes.customerInfo}>
            <Grid container spacing={2}>
               <Grid item md={12} sm={6}>
                  <Box className="mainInfo">
                     {" "}
                     <Avatar
                        sx={{ borderRadius: "6px" }}
                        className="avatar"
                        src={
                           item?.profile_image
                              ? item?.profile_image
                              : `https://picsum.photos/200/300?random=${item?.id}`
                        }
                     />
                     <Box sx={{ width: "100%" }}>
                        <Box>
                           <Typography className="name">
                              {item?.name ?? "-"}
                           </Typography>
                        </Box>
                        <Grid
                           container
                           spacing={1}
                           sx={{ marginBottom: "5px" }}
                        >
                           <Grid item md={4} sm={6}>
                              <Box
                                 className={"infoDiv"}
                                 sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    marginBottom: "8px !important",
                                 }}
                              >
                                 <Typography
                                    sx={{
                                       textAlign: "start",
                                       width: "100%",
                                       fontSize: "12px !important",
                                       fontWeight: "400 !important",
                                       color: "#7a889e !important",
                                    }}
                                 >
                                    District
                                 </Typography>

                                 <Typography
                                    className="position"
                                    sx={{
                                       textAlign: "start",
                                       width: "100%",
                                       fontSize: "14px !important",
                                       fontWeight: "500 !important",
                                    }}
                                 >
                                    {item?.district || "-"}
                                 </Typography>
                              </Box>
                           </Grid>
                           <Grid item md={4} sm={6}>
                              <Box
                                 className={"infoDiv"}
                                 sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    marginBottom: "8px !important",
                                 }}
                              >
                                 <Typography
                                    sx={{
                                       textAlign: "start",
                                       width: "100%",
                                       fontSize: "12px !important",
                                       fontWeight: "400 !important",
                                       color: "#7a889e !important",
                                    }}
                                 >
                                    City
                                 </Typography>

                                 <Typography
                                    className="position"
                                    sx={{
                                       textAlign: "start",
                                       width: "100%",
                                       fontSize: "14px !important",
                                       fontWeight: "500 !important",
                                    }}
                                 >
                                    {item?.city || "-"}
                                 </Typography>
                              </Box>
                           </Grid>
                           <Grid item md={4} sm={6}>
                              <Box
                                 className={"infoDiv"}
                                 sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    marginBottom: "8px !important",
                                 }}
                              >
                                 <Typography
                                    sx={{
                                       textAlign: "start",
                                       width: "100%",
                                       fontSize: "12px !important",
                                       fontWeight: "400 !important",
                                       color: "#7a889e !important",
                                    }}
                                 >
                                    Address
                                 </Typography>{" "}
                                 <Typography
                                    className="position"
                                    sx={{
                                       textAlign: "start",
                                       width: "100%",
                                       fontSize: "14px !important",
                                       fontWeight: "500 !important",
                                    }}
                                 >
                                    {item?.address || "-"}
                                 </Typography>
                              </Box>
                           </Grid>
                        </Grid>
                        <Grid
                           container
                           spacing={1}
                           sx={{ marginBottom: "5px" }}
                        >
                           <Grid item md={4} sm={6}>
                              <Box
                                 className={"infoDiv"}
                                 sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "start",
                                    marginBottom: "8px !important",
                                 }}
                              >
                                 <Typography
                                    sx={{
                                       textAlign: "start",
                                       width: "100%",
                                       fontSize: "12px !important",
                                       fontWeight: "400 !important",
                                       color: "#7a889e !important",
                                    }}
                                 >
                                    Phone No.:
                                 </Typography>{" "}
                                 <Typography
                                    className="position"
                                    sx={{
                                       textAlign: "start",
                                       width: "100%",
                                       fontSize: "14px !important",
                                       fontWeight: "500 !important",
                                    }}
                                 >
                                    {" "}
                                    {item?.phone_no || "-"}
                                 </Typography>
                              </Box>
                           </Grid>
                        </Grid>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
            <CustomDeleteModal
               handleClose={() => handleClose("delete_courses")}
               open={modals?.delete_courses}
               isLoading={isLoading}
               handleConfirm={handleDelete}
               success={isDeleteSuccess}
               error={error}
               successData={successData}
            />
         </Box>
         <Box className={classes.customerInfoTabs}>
            {Tabs}

            <Box sx={{ marginTop: "20px" }}>
               {value && switchTabs()}
            </Box>
         </Box>
      </>
   );
};

export default CustomersInfo;
