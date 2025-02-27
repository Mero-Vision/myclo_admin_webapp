import { yupResolver } from "@hookform/resolvers/yup";
import { EditOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { logout } from "../../../../../../api/authApi";
import {
   useGetSingleUserQuery,
   usePostUserPasswordUpdateMutation,
} from "../../../../../../api/userApi";
import Logo from "../../../../../../assets/noImgAvatar.png";
import { getSiteDetail } from "../../../../../../utils/helpers";
import CustomButton from "../../../../../common/CustomButton/CustomButton";
import { CustomInputDefault } from "../../../../../common/CustomInputs/CustomInputDefault";
import CustomLoaderLin from "../../../../../common/CustomLoader/CustomLoaderLin";
import CustomPaper from "../../../../../common/CustomPaper/CustomPaper";
import styles from "./styles";

const schema = Yup.object().shape({
   current_password: Yup.string().required(
      "Current Password is required"
   ),
   password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be 8 characters or more"),
   // .matches(/[a-z]+/, getCharacterValidationError("lowercase"))
   // .matches(/[A-Z]+/, getCharacterValidationError("uppercase"))
   // .matches(/[@$!%*#?&]+/, getCharacterValidationError("special"))
   // .matches(/\d+/, "Your password must contain at least 1 number"),
   password_confirmation: Yup.string()
      .required("Please re-type your password")
      .transform((value, originalValue) =>
         typeof originalValue === "string"
            ? originalValue.trim()
            : originalValue
      )
      .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const UserProfile = () => {
   const classes = styles();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [changed, setChanged] = useState(false);
   const userData = getSiteDetail()?.userData;
   const {
      control,
      formState: { errors },
      watch,
      setValue,
      handleSubmit,
   } = useForm({ resolver: yupResolver(schema) });

   const {
      data: singleUserInfo,
      isLoading: querySingleUserLoading,
      isFetching,
   } = useGetSingleUserQuery(userData?.id);
   const { company } = useSelector((state) => state?.utils);
   const data = [
      {
         title: "Email address",
         value: singleUserInfo?.data?.email || "-",
      },
      {
         title: "Mobile No.",
         value: singleUserInfo?.data?.phone || "-",
      },
   ];

   const [
      postUserPasswordUpdate,
      {
         error: editError,
         isLoading: isEditLoading,
         isSuccess: isEditSuccess,
         data: editSuccessData,
      },
   ] = usePostUserPasswordUpdateMutation();

   const submitHandler = (data) => {
      console.log({ data });
      const finalData = {
         ...data,
      };
      postUserPasswordUpdate(finalData)
         .unwrap()
         .then(() => {
            successToast("changed password sucessfully");
         });
   };

   useEffect(() => {
      if (isEditSuccess) {
         setValue("current_password", "");
         setValue("password", "");
         setValue("password_confirmation", "");
      }
   }, [isEditSuccess, setValue]);

   useEffect(() => {
      if (isEditSuccess) {
         dispatch(logout());
         navigate(`/login`);
      }
   }, [isEditSuccess]);

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
         }}
      >
         {" "}
         <CustomPaper
            modalTitle={"User Profile"}
            button={
               <Button
                  sx={{
                     border: "1px solid #6259CA",
                     color: "#6259CA",
                     fontSize: "13px !important",
                     fontWeight: "500 !important",
                     textTransform: "capitalize",
                     // padding: "6px 8px !important",
                  }}
                  startIcon={
                     <EditOutlined
                        sx={{ fontSize: "18px !important" }}
                     />
                  }
                  variant="outlinedButton"
                  onClick={() => navigate("edit")}
               >
                  Edit Profile
               </Button>
            }
         >
            {isFetching ? (
               <CustomLoaderLin />
            ) : (
               <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
                  <Box className={classes.profilePicture}>
                     <Avatar
                        src={
                           singleUserInfo?.data?.profile_image || Logo
                        }
                        alt={singleUserInfo?.data?.name}
                     />
                  </Box>
                  <Box>
                     <Grid container spacing={4}>
                        <Grid item xs={12}>
                           <Box>
                              <Typography
                                 sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#201F37",
                                 }}
                              >
                                 {singleUserInfo?.data?.name ?? "-"}{" "}
                              </Typography>
                           </Box>
                        </Grid>
                        {data?.map((item) => (
                           <React.Fragment key={item?.title}>
                              <SingleItem data={item} />
                           </React.Fragment>
                        ))}
                     </Grid>
                  </Box>
               </Box>
            )}
         </CustomPaper>
         <CustomPaper modalTitle={"Change Password"}>
            <Box display={"flex"} columnGap={"45px"} mb={"2rem"}>
               <Grid container spacing={0}>
                  <Grid item sm={1.4}></Grid>
                  <Grid sm={10.6}>
                     <form onSubmit={handleSubmit(submitHandler)}>
                        <Box>
                           <Grid container spacing={4}>
                              <Grid item sm={12}>
                                 <CustomInputDefault
                                    title="Current Password"
                                    name="current_password"
                                    type="password"
                                    control={control}
                                    errors={errors}
                                 />
                              </Grid>
                              <Grid item sm={6}>
                                 <CustomInputDefault
                                    title="New Password"
                                    name="password"
                                    type="password"
                                    control={control}
                                    errors={errors}
                                 />
                              </Grid>
                              <Grid item sm={6}>
                                 <CustomInputDefault
                                    title="Confirm Password"
                                    name="password_confirmation"
                                    type="password"
                                    control={control}
                                    errors={errors}
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
                              buttonName={"Change Password"}
                              loading={isEditLoading}
                              error={editError}
                              success={isEditSuccess}
                              successData={editSuccessData}
                           />
                        </Box>
                     </form>
                  </Grid>
               </Grid>
            </Box>
         </CustomPaper>
      </Box>
   );
};

const SingleItem = ({ data }) => {
   const { title, value } = data;
   return (
      <Grid item xs={6}>
         <Box>
            <Typography
               sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#201F37",
               }}
            >
               {title}
            </Typography>
            <Typography
               sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#4C4B63",
               }}
            >
               {value}{" "}
            </Typography>
         </Box>
      </Grid>
   );
};

export default UserProfile;
