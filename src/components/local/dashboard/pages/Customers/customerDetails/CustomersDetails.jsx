import { Box } from "@mui/material";
import React, { useMemo } from "react";
import { useGetCustomersSingleQuery } from "../../../../../../api/customersApi";
import useQueryId from "../../../../../../hooks/useQueryId";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import CustomersInfo from "./CustomersInfo";

const CustomersDetails = ({ pos, deliveryForm }) => {
   const { query: id } = useQueryId();

   console.log("yoooooooooooooooo", { id });
   const {
      data: singleStudents,
      isError: isStudentsError,
      isFetching: isStudentsFetching,
      isLoading: isStudentsLoading,
      isSuccess: isStudentsSuccess,
   } = useGetCustomersSingleQuery(id, { skip: !id });

   const SingleStudents = useMemo(
      () => singleStudents?.data,
      [singleStudents?.data]
   );

   console.log({ SingleStudents });
   return (
      <Box>
         {isStudentsFetching && <CustomLoaderLin />}
         {!isStudentsFetching && isStudentsSuccess && (
            <Box>
               <CustomersInfo
                  item={SingleStudents}
                  isStudentsLoading={isStudentsLoading}
               />
            </Box>
         )}
      </Box>
   );
};

export default CustomersDetails;
