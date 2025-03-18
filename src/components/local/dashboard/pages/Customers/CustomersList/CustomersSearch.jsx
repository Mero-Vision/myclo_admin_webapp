import { Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

// import { setSearch } from "../../../../../../rootRedux/utilsSlice";
import { setSearch } from "../../../../../../rootRedux/utilsSlice";
import { CustomUniInput } from "../../../../../common/CustomInputs/CustomUniInput";
import styles from "./styles";

const CustomersSearch = () => {
   const classes = styles();
   const dispatch = useDispatch();

   const {
      control,
      formState: { errors },
      watch,
   } = useForm({});

   useEffect(() => {
      const timeout = setTimeout(() => {
         dispatch(setSearch(watch("search_keyword")));
      }, [1000]);
      return () => clearTimeout(timeout);
   }, [watch("search_keyword")]);
   return (
      <Box className={classes.customerSearch}>
         <Box>
            <Typography
               className="title"
               sx={{ display: "flex", flexDirection: "column" }}
            ></Typography>
         </Box>
         <Box>
            <CustomUniInput
               control={control}
               errors={errors}
               name="search_keyword"
               placeholder={"Customers Search"}
               startIcon={
                  <Search
                     sx={{
                        fontSize: "18px",
                     }}
                  />
               }
            />
         </Box>
      </Box>
   );
};

export default CustomersSearch;
