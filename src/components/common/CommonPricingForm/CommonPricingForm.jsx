import { yupResolver } from "@hookform/resolvers/yup";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { usePostCustomPackageMutation } from "../../../api/siteSlice";
import { getError } from "../../../utils/helpers";
import { CustomPricingInput } from "../CustomInputs/CustomPricingInput";
import customToaster from "../CustomToasters/CustomToaster";
import "./CommonPricingForm.css";

export const CommonPricingForm = ({
   modal,
   business_category,
   handleClose,
}) => {
   return (
      <Box
         className="priceFormBox"
         sx={modal ? { padding: "1rem" } : { marginTop: "4rem" }}
      >
         <Box className="priceFormWrap">
            {!modal && (
               <Box className="priceFormTitleBox">
                  <Box className="priceFormSubtitle">
                     Request For A Quotation
                  </Box>
                  <Box className="priceFormTitle">
                     Create Your Custom Package
                  </Box>
               </Box>
            )}
            <Box className="priceFormWrapBox">
               <PricingForm
                  business_category={business_category}
                  modal={modal}
                  handleClose={handleClose}
               />
            </Box>
         </Box>
      </Box>
   );
};

const PricingForm = ({ business_category, modal, handleClose }) => {
   const schema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required"),
      phone_no: Yup.string().required("Phone is required"),
      business_category: Yup.string().required(
         "Business Category is required"
      ),
   });

   const [
      postCustomPackage,
      {
         error,
         isLoading: isPostLoading,
         isSuccess: isPostSuccess,
         data: successData,
      },
   ] = usePostCustomPackageMutation();

   console.log({ isPostSuccess, successData });

   useEffect(() => {
      if (isPostSuccess && modal) {
         handleClose();
      }
   }, [isPostSuccess]);

   useEffect(() => {
      getError(error);
   }, [error]);

   const defaultValues = {
      name: "",
      email: "",
      phone_no: "",
      no_of_graphics: "",
      no_of_pages: "",
      business_category: business_category ? business_category : "",
   };

   const {
      control,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm({ resolver: yupResolver(schema), defaultValues });

   const onSubmit = (data) => {
      const finalData = {
         name: data?.name || "",
         email: data?.email || "",
         phone_no: data?.phone_no || "",
         no_of_pages: data?.no_of_pages || "",
         business_category: data?.business_category || "",
         no_of_graphics: data?.no_of_graphics || "",
      };
      postCustomPackage(finalData);
   };

   useEffect(() => {
      if (successData) {
         customToaster({
            type: "success",
            message: successData.message || "Success",
         });
      }
   }, [successData]);

   useEffect(() => {
      if (isPostSuccess) {
         reset({
            name: "",
            email: "",
            phone_no: "",
            no_of_graphics: "",
            business_category: "",
         }); // Reset the form fields explicitly
      }
   }, [isPostSuccess, reset]);

   return (
      <Box className="formSectionWrap">
         <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                  <CustomPricingInput
                     control={control}
                     errors={errors}
                     name="name"
                     // placeholder="Name/Business Name"
                     title="Name/Business Name"
                     required
                  />
               </Grid>

               <Grid item xs={12} md={6}>
                  <CustomPricingInput
                     control={control}
                     errors={errors}
                     name="phone_no"
                     type="tel"
                     // placeholder="Phone No."
                     title="Phone No."
                     required
                  />
               </Grid>

               <Grid item xs={12} md={6}>
                  <CustomPricingInput
                     control={control}
                     errors={errors}
                     name="email"
                     // placeholder="Email"
                     title="Email"
                     required
                  />
               </Grid>
               <Grid item xs={12} md={6}>
                  <CustomPricingInput
                     control={control}
                     errors={errors}
                     name="business_category"
                     // placeholder="Business Category"
                     title="Business Category"
                     disabled={business_category}
                     required
                  />
               </Grid>

               <Grid item xs={12} md={6}>
                  <CustomPricingInput
                     control={control}
                     errors={errors}
                     name="no_of_graphics"
                     // placeholder="No. of Graphics"
                     title="No. of Graphics"
                     required
                  />
               </Grid>
               <Grid item xs={12} md={6}>
                  <CustomPricingInput
                     control={control}
                     errors={errors}
                     name="no_of_pages"
                     // placeholder="No. of Pages"
                     title="No. of Pages"
                     required
                  />
               </Grid>
            </Grid>
            <Button
               type="submit"
               className={"pricing-form-btn"}
               sx={modal && { width: "100% !important" }}
            >
               {isPostLoading ? (
                  <CircularProgress
                     size="1rem"
                     sx={{ marginRight: "10px", color: "#fff" }}
                  />
               ) : null}
               Send Message
               <ArrowForwardIosRoundedIcon
                  className={"pricing-form-btn-icon"}
               />
            </Button>
         </form>
      </Box>
   );
};

export default CommonPricingForm;
