import { Box } from "@mui/material";
import React from "react";
import { useGetCountriesQuery } from "../../../../../../api/settingsApi";
import CustomDataGrid from "../../../../../common/CustomDataGrid/CustomDataGrid";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";

const CountriesData = () => {
   const columns = [
      {
         flex: 1,
         field: "sn",
         headerName: "S.N.",
      },
      {
         flex: 1,
         field: "name",
         headerName: "Country Name",
      },
      {
         flex: 1,
         field: "code",
         headerName: "Country Code",
      },
      {
         flex: 1,
         field: "currency",
         headerName: "Currency",
      },
   ];

   const {
      data: countries,
      isError: isCountriesError,
      isFetching: isCountriesFetching,
      isSuccess: isCountriesSuccess,
   } = useGetCountriesQuery();
   return (
      <Box>
         {isCountriesFetching && <CustomLoaderLin />}
         {!isCountriesFetching && (
            <CustomDataGrid
               settings
               rows={
                  countries?.data?.map((item, index) => {
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

export default CountriesData;
