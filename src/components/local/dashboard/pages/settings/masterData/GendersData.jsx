import { Box } from "@mui/material";
import React from "react";
import { useGetGendersQuery } from "../../../../../../api/settingsApi";
import CustomDataGrid from "../../../../../common/CustomDataGrid/CustomDataGrid";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";

const GendersData = () => {
   const columns = [
      {
         flex: 1,
         field: "sn",
         headerName: "S.N.",
      },
      {
         flex: 1,
         field: "gender",
         headerName: "Gender",
      },
   ];

   const {
      data: genders,
      isError: isGendersError,
      isFetching: isGendersFetching,
      isSuccess: isGendersSuccess,
   } = useGetGendersQuery();
   return (
      <Box>
         {isGendersFetching && <CustomLoaderLin />}
         {!isGendersFetching && (
            <CustomDataGrid
               settings
               rows={
                  genders?.data?.map((item, index) => {
                     return { ...item, sn: index + 1 };
                  }) || []
               }
               columns={columns}
               paginationMode={"client"}
            />
         )}
      </Box>
   );
};

export default GendersData;
