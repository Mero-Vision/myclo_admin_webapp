import { Box } from "@mui/material";
import React, { useState } from "react";
import { useGetCountryNepalQuery } from "../../../../../../api/settingsApi";
import CollapseTable from "../../../../../common/CollapseableTable/CustomCollapseableTable";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import { useStyles } from "./styles";

const Provinces = () => {
   const [page, setPage] = useState();
   const [rowsPerPage, setRowsPerPage] = useState();
   const tableHeads = [
      { title: "S.N.", type: "Index", minWidth: 20 },

      {
         title: "Name",
         minWidth: 300,

         field: "name",
      },
      {
         title: "Nepali Name",
         minWidth: 300,

         field: "name_np",
      },
   ];

   const {
      data: provincesData,
      isError: isProvincesDataError,
      isFetching: isProvincesDataFetching,
      isLoading: isProvincesDataLoading,
      isSuccess: isProvincesDataSuccess,
   } = useGetCountryNepalQuery();
   return (
      <Box>
         {isProvincesDataFetching && <CustomLoaderLin />}
         {!isProvincesDataFetching && (
            <CollapseTable
               tableHeads={tableHeads}
               tableData={provincesData?.data?.[0]?.provinces}
               rowsPerPage={rowsPerPage}
               setRowsPerPage={setRowsPerPage}
               page={page}
               setPage={setPage}
               total={provincesData?.data?.[0]?.provinces?.length}
               ChildComponent={ChildComponent}
               loading={isProvincesDataLoading ? true : false}
            />
         )}
      </Box>
   );
};

const ChildComponent = ({ row }) => {
   const classes = useStyles();
   return (
      <Box className={classes.childRoot}>
         {row?.districts?.map((item, index) => (
            <Box className={classes.childList} key={index}>
               {item?.name}
            </Box>
         ))}
      </Box>
   );
};

export default Provinces;
