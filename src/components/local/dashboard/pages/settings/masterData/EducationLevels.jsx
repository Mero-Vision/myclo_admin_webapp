import { Box } from "@mui/material";
import React, { useState } from "react";
import { useGetEducationLevelsQuery } from "../../../../../../api/settingsApi";
import CollapseTable from "../../../../../common/CollapseableTable/CustomCollapseableTable";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import { useStyles } from "./styles";

const EducationLevels = () => {
   const [page, setPage] = useState();
   const [rowsPerPage, setRowsPerPage] = useState();
   const tableHeads = [
      { title: "S.N.", type: "Index", minWidth: 20 },

      {
         title: "Label",
         minWidth: 300,

         field: "label",
      },
   ];

   const {
      data: eduData,
      isError: isEduDataError,
      isFetching: isEduDataFetching,
      isLoading: isEduDataLoading,
      isSuccess: isEduDataSuccess,
   } = useGetEducationLevelsQuery();
   return (
      <Box>
         {isEduDataFetching && <CustomLoaderLin />}
         {!isEduDataFetching && (
            <CollapseTable
               tableHeads={tableHeads}
               tableData={eduData?.data?.education_levels}
               rowsPerPage={rowsPerPage}
               setRowsPerPage={setRowsPerPage}
               page={page}
               setPage={setPage}
               total={eduData?.data?.education_levels?.length}
               ChildComponent={ChildComponent}
               loading={isEduDataLoading ? true : false}
            />
         )}
      </Box>
   );
};

const ChildComponent = ({ row }) => {
   const classes = useStyles();
   return (
      <Box className={classes.childRoot}>
         {row?.options?.map((item, index) => (
            <Box className={classes.childList} key={index}>
               {item?.label}
            </Box>
         ))}
      </Box>
   );
};

export default EducationLevels;
