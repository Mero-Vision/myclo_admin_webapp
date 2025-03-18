import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import CustomersList from "./CustomersList";
import CustomersSearch from "./CustomersSearch";
import styles from "./styles";

const CustomersLeft = ({
   pos,
   students,
   isStudentsFetching,
   isStudentsLoading,
   isStudentsSuccess,
}) => {
   const classes = styles();

   const defaultValues = {
      sort_filter_name: "aToz",
   };

   const {
      control,
      formState: { errors },
      watch,
   } = useForm({ defaultValues });

   return (
      <Box className={classes.customerLeft}>
         <CustomersSearch />
         <CustomersList
            students={students}
            isStudentsFetching={isStudentsFetching}
            isStudentsSuccess={isStudentsSuccess}
         />
      </Box>
   );
};

export default CustomersLeft;
