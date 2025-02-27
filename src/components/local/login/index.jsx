import { yupResolver } from "@hookform/resolvers/yup";
import {
   Box,
   Button,
   CircularProgress,
   Grid,
   Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { auth, useLoginMutation } from "../../../api/authApi";

import { getError } from "../../../utils/helpers";
import { CustomInputDefault } from "../../common/CustomInputs/CustomInputDefault";
import "./styles.css";

import fbIcon from "../../../assets/social/fb.png";

const validationSchema = yup.object().shape({
   email: yup.string().required("Email is required"),
   password: yup.string().required("Password is required"),
});

const Login = () => {
   const isMobile = window.innerWidth < 900; //Add the width you want to check for here (now 768px)

   return (
      <>
         <Box sx={{ position: "relative" }}>
            <Grid container spacing={0}>
               <Grid item md={0} lg={6}>
                  <Box className="grid2Login">
                     <Box className="grid2LoginWrap">
                        <Box
                           className="grid2LoginWrapImg "
                           sx={{
                              fontSize: "44px",
                              fontWeight: "500",
                              color: "#333",
                           }}
                        >
                           {/* <img
                              src={LogoPng}
                              alt=""
                              style={{
                                 width: "100%",
                                 height: "100%",
                              }}
                           /> */}
                        </Box>
                     </Box>
                  </Box>
               </Grid>
               <Grid
                  item
                  lg={6}
                  md={12}
                  sx={{ width: "100% !important" }}
               >
                  <LoginForm />
               </Grid>
            </Grid>
         </Box>
      </>
   );
};

export default Login;

const LoginForm = () => {
   const {
      control,
      formState: { errors },
      handleSubmit,
   } = useForm({ resolver: yupResolver(validationSchema) });

   const navigate = useNavigate();
   const [fullfilledData, setFullfiledData] = useState();
   const [
      login,
      {
         error,
         isLoading,
         isSuccess,
         error: loginErrors,
         data: successData,
      },
   ] = useLoginMutation();

   useEffect(() => {
      getError(error);
   }, [error]);

   const dispatch = useDispatch();

   const onSubmit = async (values) => {
      const finalValues = {
         ...values,
      };

      login(finalValues)
         ?.unwrap()
         .then((res) => {
            const auth_token = res?.data?.token;
            const refresh_token = res?.data?.refresh_token;
            const user = res?.data?.user;
            const company = res?.data?.company;

            localStorage.setItem(
               "account_access_token",
               auth_token || ""
            );
            localStorage.setItem(
               "account_refresh_token",
               refresh_token || ""
            );
            localStorage.setItem("user", JSON.stringify(user) || "");
            localStorage.setItem(
               "company",
               JSON.stringify(company) || ""
            );

            dispatch(auth(res?.data));
            setFullfiledData(res?.data);

            navigate("/");
         })
         .catch((rejected) => console.log({ rejected }));
   };

   // useEffect(() => {
   //    localStorage?.getItem("account_access_token") && navigate("/");
   // }, [localStorage?.getItem("account_access_token")]);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Box className="mainDiv">
            <Box className="formDiv">
               <Box className="form">
                  <Box className="formTitleDiv">
                     <Box
                        sx={{
                           display: "flex",
                           justifyContent: "flex-start",
                           alignItems: "center",
                           width: "100%",
                        }}
                     >
                        <Box
                           sx={{
                              // width: "120px",
                              height: "100%",
                              marginBottom: "20px",
                              fontSize: "44px",
                              fontWeight: "400",
                           }}
                        >
                           MyClo
                           {/* <img
                              src={LogoLogin}
                              alt=""
                              style={{
                                 width: "100%",
                                 height: "100%",
                              }}
                           /> */}
                        </Box>
                     </Box>
                     <Box className="formTitle">Hey, Hello 👋</Box>
                     <Box className="formSubtitle">
                        Enter the information you entered while
                        registering.{" "}
                     </Box>
                  </Box>
                  <Box>
                     <Box>
                        <CustomInputDefault
                           control={control}
                           errors={errors}
                           name="email"
                           type={"email"}
                           title="Email Address"
                           loginInput
                        />
                     </Box>

                     <Box mt={"24px"} mb={"10px"}>
                        <CustomInputDefault
                           control={control}
                           errors={errors}
                           name="password"
                           type={"password"}
                           title="Password"
                           loginInput
                        />
                     </Box>
                  </Box>
                  <Box sx={{ textAlign: "end !important" }}>
                     <Typography
                        onClick={() => navigate("/forgot-password")}
                        sx={{
                           color: "#6259CA",
                           fontSize: "12px",
                           cursor: "pointer",

                           "&:hover": {
                              textDecoration: "underline",
                              color: "#0064E1",
                           },
                        }}
                     >
                        Forgot Password?
                     </Typography>
                  </Box>
                  <Box className="buttonDiv" mt={"25px"} mb={"25px"}>
                     <Button
                        type="submit"
                        sx={{
                           width: "100%",
                           height: "38px !important",
                           backgroundColor: "#746be3 !important",
                           borderRadius: "8px",
                           color: "#fff",
                           textTransform: "capitalize",
                           "&:hover": {
                              backgroundColor: "#6259CA !important",
                           },
                        }}
                     >
                        {isLoading && (
                           <CircularProgress
                              size="1rem"
                              sx={{
                                 marginRight: "10px",
                                 color: "#fff",
                              }}
                           />
                        )}
                        Login
                     </Button>{" "}
                  </Box>
               </Box>
            </Box>
            <Box className="bottomCopyright">
               <Box sx={{ width: "fit-content" }}>
                  © Copyright 2024 © All Right Reserved.
                  {/* Developed by{" "} */}
               </Box>
               {/* <Box
                  onClick={() =>
                     window.open("https://merovision.com/")
                  }
                  sx={{
                     marginLeft: "4px",
                     color: "#6259CA",
                     "&:hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                     },
                  }}
               >
                  Mero Vision Pvt. Ltd.
               </Box> */}
            </Box>
         </Box>
      </form>
   );
};

const IconComp = () => {
   return (
      <Box sx={{ width: "30px", height: "30px" }}>
         <img
            src={fbIcon}
            alt="icon"
            style={{ width: "100%", height: "100%" }}
         />
      </Box>
   );
};
