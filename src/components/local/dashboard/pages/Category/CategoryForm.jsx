import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import {
   usePostMenuCategoryMutation,
   usePostMenuCategoryUpdateMutation,
} from "../../../../../api/categoryApi";
import CustomButton from "../../../../common/CustomButton/CustomButton";
import FileUploader from "../../../../common/CustomFileUpload/ImageUpload";
import { CustomInputDefault } from "../../../../common/CustomInputs/CustomInputDefault";

const schema = Yup.object().shape({
   name: Yup.string().required("Name is required"),
   // description: Yup.string().required("Description is required"),
   // our_team_image: Yup.string().required("Image is required"),
});

const CategoryForm = ({ row, handleClose, uuid, inputValue }) => {
   const userData = JSON.parse(localStorage?.getItem("user"));

   console.log({ userData, row });

   const [
      postMenuCategory,
      {
         error,
         isLoading: isPostLoading,
         isSuccess: isPostSuccess,
         data: successData,
      },
   ] = usePostMenuCategoryMutation();
   const [
      postMenuCategoryUpdate,
      {
         error: editError,
         isLoading: isEditLoading,
         isSuccess: isEditSuccess,
         data: editSuccessData,
      },
   ] = usePostMenuCategoryUpdateMutation();
   console.log({ successData, editSuccessData });

   const {
      control,
      formState: { errors },
      watch,
      setValue,
      register,
      handleSubmit,
      reset,
      clearErrors,
   } = useForm({ resolver: yupResolver(schema) });

   console.log("watch", watch());

   const onSubmit = (data) => {
      console.log({ data });

      const formData = new FormData();
      let obj = {};
      const finalData = {
         ...data,
         category_image:
            data?.category_image?.[0] instanceof File
               ? data?.category_image?.[0]
               : "",
         _method: row && "PUT",
      };

      console.log({ row });

      !row && delete finalData?._method;
      delete finalData?.other_group_details;
      finalData &&
         Object?.keys(finalData)?.map((key) =>
            formData.append(key, finalData?.[key] ?? "")
         );
      row
         ? postMenuCategoryUpdate({ slug: row?.id, data: formData })
         : postMenuCategory(formData);
   };

   useEffect(() => {
      if (isPostSuccess || isEditSuccess) {
         handleClose();
      }
   }, [isPostSuccess, isEditSuccess, handleClose]);

   useEffect(() => {
      if (row) {
         reset({
            name: row?.name || "",
            category_image: row?.category_image || "",
            slug: row?.slug,
            id: row?.id,
         });
      }
   }, [reset, row]);

   return (
      <Box>
         <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <CustomInputDefault
                        control={control}
                        errors={errors}
                        name="name"
                        title={"Categrory Name"}
                        required
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Box
                        className="form-container"
                        sx={{
                           flexGrow: 1,
                           "& .file-input": {
                              width: "100%",
                           },
                        }}
                     >
                        <FileUploader
                           control={control}
                           name="category_image"
                           title="Category Image"
                           setValue={setValue}
                           errors={errors}
                           clearErrors={clearErrors}
                           imageLink={watch("category_image") || ""}
                           required
                        />
                     </Box>
                  </Grid>
               </Grid>
               <CustomButton
                  loading={isPostLoading || isEditLoading}
                  error={error || editError}
                  success={isPostSuccess || isEditSuccess}
                  successData={successData || editSuccessData}
                  buttonName={row?.id && "Edit"}
               />
            </form>
         </Box>
      </Box>
   );
};

export default CategoryForm;
