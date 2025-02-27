import { Box } from "@mui/material";
import React from "react";
import { useGetApplicationPeriodQuery } from "../../../../../../api/settingsApi";
import CustomDataGrid from "../../../../../common/CustomDataGrid/CustomDataGrid";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";

const ApplicationPeriod = () => {
   const columns = [
      {
         flex: 1,
         field: "sn",
         headerName: "S.N.",
      },
      {
         flex: 1,
         field: "season",
         headerName: "Season",
      },
      {
         flex: 1,
         field: "start_month",
         headerName: "Start Month",
      },
      {
         flex: 1,
         field: "end_month",
         headerName: "End Month",
      },
      {
         flex: 1,
         field: "year",
         headerName: "Year",
      },
   ];

   const {
      data: appPeriod,
      isError: isAppPeriodError,
      isFetching: isAppPeriodFetching,
      isSuccess: isAppPeriodSuccess,
   } = useGetApplicationPeriodQuery();
   return (
      <Box>
         {isAppPeriodFetching && <CustomLoaderLin />}
         {!isAppPeriodFetching && (
            <CustomDataGrid
               settings
               rows={
                  appPeriod?.data?.map((item, index) => {
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

export default ApplicationPeriod;
