import { Box } from "@mui/material";
import React from "react";
import { useGetPaymentMethodsQuery } from "../../../../../../api/settingsApi";
import CustomDataGrid from "../../../../../common/CustomDataGrid/CustomDataGrid";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";

const PaymentMethods = () => {
   const columns = [
      {
         flex: 1,
         field: "id",
         headerName: "S.N.",
      },
      {
         flex: 1,
         field: "name",
         headerName: "Payment Method",
      },
   ];

   const {
      data: paymentMethods,
      isFetching: isPaymentMethodsFetching,
   } = useGetPaymentMethodsQuery();
   return (
      <Box>
         {isPaymentMethodsFetching && <CustomLoaderLin />}
         {!isPaymentMethodsFetching && (
            <CustomDataGrid
               settings
               rows={
                  paymentMethods?.data?.map((item, index) => {
                     return { name: item, id: index + 1 };
                  }) || []
               }
               columns={columns}
               paginationMode={"client"}
            />
         )}
      </Box>
   );
};

export default PaymentMethods;
