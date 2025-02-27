import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
   useGetSettingsQuery,
   usePostSettingsUpdateMutation,
} from "../../../../../../api/settingsApi";
import CustomButton from "../../../../../common/CustomButton/CustomButton";
import FileUploader from "../../../../../common/CustomFileUpload/ImageUpload";
import { CustomInputDefault } from "../../../../../common/CustomInputs/CustomInputDefault";
import TextEditor from "../../../../../common/TextEditor/TextEditor";

const SiteData = () => {
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
         logo: data?.logo?.[0] instanceof File ? data?.logo?.[0] : "",
         website_title: data.website_title || "",
         address: data.address || "",
         contact_no: data.contact_no || "",
         facebook_link: data.facebook_link || "",
         instagram_link: data.instagram_link || "",
         tiktok_link: data.tiktok_link || "",
         whatsapp_number: data.whatsapp_number || "",
         privacy_policy: data.privacy_policy || "",
         terms_conditions: data.terms_conditions || "",
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
                           name="logo"
                           title="Logo"
                           setValue={setValue}
                           errors={errors}
                           clearErrors={clearErrors}
                           imageLink={watch("logo") || ""}
                        />
                     </Box>
                  </Grid>
                  <Grid item sm={12}>
                     <CustomInputDefault
                        title="Website Title"
                        name="website_title"
                        control={control}
                        errors={errors}
                     />
                  </Grid>

                  <Grid item sm={12}>
                     <CustomInputDefault
                        title="Address"
                        name="address"
                        control={control}
                        errors={errors}
                     />
                  </Grid>
                  <Grid item sm={12}>
                     <CustomInputDefault
                        title="Contact No"
                        name="contact_no"
                        type="number"
                        control={control}
                        errors={errors}
                     />
                  </Grid>
                  <Grid item sm={12}>
                     <CustomInputDefault
                        title="Facebook Link"
                        name="facebook_link"
                        control={control}
                        errors={errors}
                     />
                  </Grid>
                  <Grid item sm={12}>
                     <CustomInputDefault
                        title="Instagram Link"
                        name="instagram_link"
                        control={control}
                        errors={errors}
                     />
                  </Grid>
                  <Grid item sm={12}>
                     <CustomInputDefault
                        title="Tiktok Link"
                        name="tiktok_link"
                        control={control}
                        errors={errors}
                     />
                  </Grid>
                  <Grid item sm={12}>
                     <CustomInputDefault
                        title="Whatsapp Number"
                        name="whatsapp_number"
                        type="number"
                        control={control}
                        errors={errors}
                     />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: "16px" }}>
                     <TextEditor
                        label="Privacy Policy"
                        error={errors}
                        control={control}
                        name={"privacy_policy"}
                     />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: "16px" }}>
                     <TextEditor
                        label="Terms and Conditions"
                        error={errors}
                        control={control}
                        name={"terms_conditions"}
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

export default SiteData;
