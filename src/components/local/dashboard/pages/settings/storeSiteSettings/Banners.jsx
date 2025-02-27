import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
   useGetSettingsQuery,
   usePostSettingsUpdateMutation,
} from "../../../../../../api/settingsApi";
import CustomButton from "../../../../../common/CustomButton/CustomButton";
import FileUploader from "../../../../../common/CustomFileUpload/ImageUpload";

const Banner = () => {
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
         // ...data,
         home_page_banner_1:
            data?.home_page_banner_1?.[0] instanceof File
               ? data?.home_page_banner_1?.[0]
               : "",
         home_page_banner_2:
            data?.home_page_banner_2?.[0] instanceof File
               ? data?.home_page_banner_2?.[0]
               : "",
         home_page_banner_3:
            data?.home_page_banner_3?.[0] instanceof File
               ? data?.home_page_banner_3?.[0]
               : "",
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
                  <Grid
                     item
                     xs={12}
                     style={{
                        marginBottom: "-20px",
                        color: "#343434",
                        fontSize: "14px",
                        fontWeight: "600",
                     }}
                  >
                     Recomended image sizes for all Hero Banners:{" "}
                     <span style={{ color: "#131313" }}>
                        Width:1305px, Height:350px{" "}
                     </span>
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
                           name="home_page_banner_1"
                           title="Hero Banner 1"
                           setValue={setValue}
                           errors={errors}
                           clearErrors={clearErrors}
                           imageLink={
                              watch("home_page_banner_1") || ""
                           }
                        />
                     </Box>
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
                           name="home_page_banner_2"
                           title="Hero Banner 2"
                           setValue={setValue}
                           errors={errors}
                           clearErrors={clearErrors}
                           imageLink={
                              watch("home_page_banner_2") || ""
                           }
                        />
                     </Box>
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
                           name="home_page_banner_3"
                           title="Hero Banner 3"
                           setValue={setValue}
                           errors={errors}
                           clearErrors={clearErrors}
                           imageLink={
                              watch("home_page_banner_3") || ""
                           }
                        />
                     </Box>
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

export default Banner;
