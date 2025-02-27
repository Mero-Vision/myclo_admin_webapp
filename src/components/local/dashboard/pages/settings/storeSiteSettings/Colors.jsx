import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
   useGetSettingsQuery,
   usePostSettingsUpdateMutation,
} from "../../../../../../api/settingsApi";
import CustomButton from "../../../../../common/CustomButton/CustomButton";
import { CustomInputDefault } from "../../../../../common/CustomInputs/CustomInputDefault";

const Colors = () => {
   const {
      control,
      formState: { errors },
      watch,
      setValue,
      handleSubmit,
      clearErrors,
      reset,
   } = useForm({});

   const {
      data: settingsData,
      isLoading: settingsLoading,
      isFetching: settingsFetching,
   } = useGetSettingsQuery();
   useEffect(() => {
      reset(settingsData);
   }, [settingsData]);

   const [
      postSettingsUpdate,
      {
         error: editError,
         isLoading: isEditLoading,
         isSuccess: isEditSuccess,
         data: editSuccessData,
      },
   ] = usePostSettingsUpdateMutation();

   const onSubmit = (data) => {
      console.log("Form data before processing:", data);

      const formData = new FormData();
      let obj = {};
      const finalData = {
         primary_nav_background_color:
            data.primary_nav_background_color || "",
         primary_nav_text_color: data.primary_nav_text_color || "",
         secondary_nav_background_color:
            data.secondary_nav_background_color || "",
         secondary_nav_text_color:
            data.secondary_nav_text_color || "",
         footer_background_color: data.footer_background_color || "",
         footer_text_color: data.footer_text_color || "",
      };

      console.log(
         "Final data before formData processing:",
         finalData
      );

      delete finalData?.other_category_details;

      finalData &&
         Object?.keys(finalData)?.forEach((key) => {
            formData.append(key, finalData?.[key] ?? "");
         });

      console.log("FormData content:");
      for (let pair of formData.entries()) {
         console.log(pair[0] + ": " + pair[1]);
      }

      postSettingsUpdate({ data: formData })
         .unwrap()
         .then((response) => {
            console.log("API call successful:", response);
         })
         .catch((error) => {
            console.error("API call error:", error);
         });
   };
   return (
      <Grid sm={12}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
               <Grid container spacing={4}>
                  <Grid item md={12} lg={4}>
                     <CustomInputDefault
                        title="Primary Navbar Background Color"
                        name="primary_nav_background_color"
                        type="color"
                        control={control}
                        errors={errors}
                        color
                     />
                  </Grid>
                  <Grid item md={12} lg={4}>
                     <CustomInputDefault
                        title="Primary Navbar Text Color"
                        name="primary_nav_text_color"
                        type="color"
                        control={control}
                        errors={errors}
                        color
                     />
                  </Grid>
                  <Grid item md={12} lg={4}>
                     <CustomInputDefault
                        title="Secondary Navbar Background Color"
                        name="secondary_nav_background_color"
                        type="color"
                        control={control}
                        errors={errors}
                        color
                     />
                  </Grid>
                  <Grid item md={12} lg={4}>
                     <CustomInputDefault
                        title="Secondary Navbar Text Color"
                        name="secondary_nav_text_color"
                        type="color"
                        control={control}
                        errors={errors}
                        color
                     />
                  </Grid>
                  <Grid item md={12} lg={4}>
                     <CustomInputDefault
                        title="Footer Background Color"
                        name="footer_background_color"
                        type="color"
                        control={control}
                        errors={errors}
                        color
                     />
                  </Grid>
                  <Grid item md={12} lg={4}>
                     <CustomInputDefault
                        title="Footer Text Color"
                        name="footer_text_color"
                        type="color"
                        control={control}
                        errors={errors}
                        color
                     />
                  </Grid>
               </Grid>
            </Box>
            <Box
               sx={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
               }}
            >
               <CustomButton
                  buttonName={"Save Changes"}
                  loading={isEditLoading}
                  error={editError}
                  success={isEditSuccess}
                  successData={editSuccessData}
                  type="submit"
               />
            </Box>
         </form>
      </Grid>
   );
};

export default Colors;
