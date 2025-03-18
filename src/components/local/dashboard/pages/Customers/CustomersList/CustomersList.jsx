import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import avatarImg from "../../../../../../assets/noImgAvatar.png";
import useCustomNavigate from "../../../../../../hooks/useCustomNavigate";
import useQueryId from "../../../../../../hooks/useQueryId";
import styles from "./styles";

const CustomersList = ({
   students,
   isStudentsSuccess,
   isStudentsFetching,
}) => {
   const userData = JSON.parse(localStorage?.getItem("user"));
   const classes = styles();
   const { search_keyword = "" } = useSelector(
      (state) => state?.utils
   );

   // const [displayedCustomers, setDisplayedCustomers] = useState([]);

   const [customerLimit, setCustomerLimit] = useState(20);

   console.log({ customerLimit });

   const loadMoreBtn = () => {
      setCustomerLimit(customerLimit + 20);
   };

   // const loadMoreBtn = () => {
   //    setCustomerLimit((prevLimit) => prevLimit + 20);
   // };

   return (
      <Box className={classes.customerList}>
         {isStudentsSuccess && (
            <Box>
               {students?.data?.length ? (
                  students?.data?.map((item, index) => (
                     <React.Fragment key={item?.id}>
                        <CustomersCustomer
                           item={item}
                           index={index}
                           students={students}
                           avatarImg={avatarImg}
                        />
                        {/* <Divider /> */}
                     </React.Fragment>
                  ))
               ) : (
                  <Box
                     sx={{
                        textAlign: "center",
                        fontSize: "13px",
                        color: "gray",
                        padding: "40px 0px",
                     }}
                  >
                     No customers found
                  </Box>
               )}
               {isStudentsFetching && (
                  <>
                     <Skeleton
                        sx={{ margin: " 10px", marginRight: "15px" }}
                        width={"90%"}
                        height={50}
                        variant="rounded"
                     />
                     <Skeleton
                        sx={{ margin: " 10px", marginRight: "15px" }}
                        width={"90%"}
                        height={50}
                        variant="rounded"
                     />
                  </>
               )}
            </Box>
         )}
      </Box>
   );
};

export default CustomersList;

const CustomersCustomer = ({ item, index, students, avatarImg }) => {
   const { handleNavigate } = useCustomNavigate();
   const location = useLocation();
   console.log({ location });
   const { query: id } = useQueryId();
   console.log({ location, id });
   useEffect(() => {
      index === 0 && handleNavigate(`?id=${id ? id : item?.id}`);
   }, [index, students?.data]);

   // useEffect(() => {
   //    // Check if the current slug is not the first item or slug doesn't exist
   //    if (
   //       Students?.data?.length > 0 &&
   //       slug !== Students?.data[0]?.slug
   //    ) {
   //       // Always navigate to the top index of the array
   //       handleNavigate(`?slug=${Students?.data[0]?.slug}`);
   //    }
   // }, [Students?.data]);
   return (
      <Box
         className="singleCustomerDiv"
         sx={{
            background:
               Number(id) === item?.id && "#e1defa !important",
            transition: "200ms all ease-in-out",
         }}
      >
         <Box
            className="info"
            onClick={() => handleNavigate(`?id=${item?.id}`)}
         >
            <Avatar
               className="avatar"
               sx={{ borderRadius: "6px" }}
               src={
                  item?.profile_image
                     ? item?.profile_image
                     : avatarImg
               }
            />
            <Box sx={{ width: "100%" }}>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                  }}
               >
                  <Typography className="name">
                     {item?.name ?? "-"}
                  </Typography>
               </Box>
               <Typography className="amount">
                  {" "}
                  {item?.email ?? "-"}
               </Typography>
            </Box>
         </Box>
         <Box></Box>
      </Box>
   );
};
