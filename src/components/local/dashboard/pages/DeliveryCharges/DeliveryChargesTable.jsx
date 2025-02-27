import { Box } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import {
   FormProvider,
   useForm,
   useFormContext,
} from "react-hook-form";
import { useDebounce } from "use-debounce";
import {
   useGetDeliveryChargesQuery,
   usePostDeliveryChargesUpdateMutation,
} from "../../../../../api/deliveryChargesApi";
import useSearch from "../../../../../hooks/useSearch";
import CustomButton from "../../../../common/CustomButton/CustomButton";
import CustomDataGrid from "../../../../common/CustomDataGrid/CustomDataGrid";
import { CustomInputDefault } from "../../../../common/CustomInputs/CustomInputDefault";
import CustomLoaderLin from "../../../../common/CustomLoader/CustomLoaderLin";
import { CustomSearchSelectMain } from "../../../../common/CustomSelects/CustomSearchSelectMain";
import styles from "./style";

const NewMenuPriceInput = ({ props }) => {
   const {
      control,
      formState: { errors },
   } = useFormContext();

   return (
      <Box>
         <CustomInputDefault
            control={control}
            errors={errors}
            name={`products_data.${props?.id}.${props.field}`}
            type="number"
            delivery
         />
      </Box>
   );
};

const DeliveryChargesTable = () => {
   const { data: allProducts, isFetching } =
      useGetDeliveryChargesQuery({ page: 1, limit: 100 }); // Fetch only 100 items
   const classes = styles();
   const methods = useForm();
   const {
      handleSubmit,
      setValue,
      control,
      formState: { errors },
   } = methods;
   const { search, SearchBar } = useSearch();
   const [debouncedSearch] = useDebounce(search, 300); // Debounce search input

   console.log("searchdsdsadasdadas", { search });

   const [
      postDeliveryChargesUpdate,
      { isSuccess, isLoading, error, data },
   ] = usePostDeliveryChargesUpdateMutation();

   useEffect(() => {
      if (allProducts?.data) {
         allProducts.data.forEach((product) => {
            setValue(
               `products_data.${product.id}.cash_on_delivery`,
               "Yes"
            );
         });
      }
   }, [allProducts?.data, setValue]);

   const weightCategories = [
      { field: "cost_0_1kg", label: "0-1kg Price" },
      { field: "cost_1_2kg", label: "1-2kg Price" },
      { field: "cost_2_3kg", label: "2-3kg Price" },
      { field: "cost_3_5kg", label: "3-5kg Price" },
      { field: "cost_5_10kg", label: "5-10kg Price" },
      { field: "cost_above_10kg", label: "Above 10kg Price" },
   ];

   const cashOnDelevery = [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
   ];

   const columns = [
      {
         flex: 0.8,
         field: "district_name",
         headerName: "Menu Name",
      },
      {
         field: "cash_on_delivery",
         headerName: "COD",
         width: 120,
         renderCell: (params) => (
            <CustomSearchSelectMain
               control={control}
               errors={errors}
               name={`products_data.${params.row.id}.cash_on_delivery`}
               data={cashOnDelevery || []}
               key={`cash_on_delivery_${params.row.id}`}
               defaultValue="Yes"
            />
         ),
      },
      ...weightCategories.map(({ field, label }) => ({
         flex: 0.5,
         field,
         headerName: label,
         renderCell: (props) => (
            <NewMenuPriceInput props={{ ...props, field }} />
         ),
      })),
   ];

   const filteredProductsBySearchTerm = useMemo(() => {
      if (!allProducts?.data) return [];

      const searchTerm = debouncedSearch.toLowerCase().trim();
      console.log("Filtering products with search term:", searchTerm);

      return allProducts?.data.filter((item) =>
         String(item?.district_name)
            .toLowerCase()
            .includes(searchTerm)
      );
   }, [debouncedSearch, allProducts?.data]);

   console.log({ filteredProductsBySearchTerm });

   const onSubmit = async (values) => {
      console.log({ values });
      try {
         const payload = Object.keys(values?.products_data || {})
            .map((key) => {
               // Find the real product object from allProducts.data based on key (id)
               const product = allProducts?.data?.find(
                  (item) => item.id === Number(key)
               ); // Ensure `key` is treated as a number

               if (product) {
                  // Return the payload with id, district_name, cash_on_delivery, and weight categories
                  return {
                     id: product.id, // Real id from allProducts.data
                     cash_on_delivery:
                        values?.products_data[key]
                           ?.cash_on_delivery || "", // Use the value from the form
                     cost_0_1kg:
                        values?.products_data[key]?.cost_0_1kg || 0, // Use the value from the form
                     cost_1_2kg:
                        values?.products_data[key]?.cost_1_2kg || 0,
                     cost_2_3kg:
                        values?.products_data[key]?.cost_2_3kg || 0,
                     cost_3_5kg:
                        values?.products_data[key]?.cost_3_5kg || 0,
                     cost_5_10kg:
                        values?.products_data[key]?.cost_5_10kg || 0,
                     cost_above_10kg:
                        values?.products_data[key]?.cost_above_10kg ||
                        0,
                  };
               }
               return null; // In case the product is not found
            })
            .filter((item) => item); // Filter out null items

         console.log({ payload });
         const finalPayload = {
            districts: [payload],
         };

         await postDeliveryChargesUpdate({
            data: finalPayload, // Send the payload with the real id and district_name included
         }).unwrap();
      } catch (error) {
         console.error("Failed to update delivery charges:", error);
      }
   };

   return (
      <>
         <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <Box className={classes.title}>
                  <CustomButton
                     buttonName={"Save Changes"}
                     variant={"blue"}
                     disabled={isFetching || isLoading}
                     margin={"0"}
                     success={isSuccess}
                     loading={isFetching}
                     error={error}
                     successData={data}
                  />
               </Box>
               <Box>{SearchBar}</Box>
               <Box>
                  {isFetching ? (
                     <CustomLoaderLin />
                  ) : (
                     <CustomDataGrid
                        settings
                        rows={filteredProductsBySearchTerm || []}
                        columns={columns}
                        paginationMode="client"
                        // hidePagination
                     />
                  )}
               </Box>
            </form>
         </FormProvider>
      </>
   );
};

export default DeliveryChargesTable;
