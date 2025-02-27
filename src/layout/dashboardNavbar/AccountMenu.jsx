import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Logout from "@mui/icons-material/Logout";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Avatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import moment from "moment";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/authApi";
import { useGetSingleUserQuery } from "../../api/userApi";
import person from "../../assets/noImgAvatar.png";
import IconWithBg from "../../components/common/CustomTooltips/IconWithBg";
import { getSiteDetail } from "../../utils/helpers";

export default function AccountMenu({ IsCompany }) {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const userData = getSiteDetail()?.userData;
   const currentDate = moment().format("DD MMM, YYYY");

   const {
      data: singleUserInfo,
      isLoading: querySingleUserLoading,
      isFetching,
   } = useGetSingleUserQuery(userData?.id);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const handleNavigate = (url) => {
      handleClose();
      navigate(url);
   };

   const handleLogout = () => {
      dispatch(logout());
      navigate(`/login`);
   };
   return (
      <React.Fragment>
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               gap: "30px",
            }}
         >
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <Box
                  sx={{
                     padding: "8px 16px",
                     boxShadow:
                        "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                     fontSize: "14px",
                     fontWeight: "600",
                     borderRadius: "6px 0px 0px 6px",
                  }}
               >
                  {currentDate}
               </Box>
               <Box
                  sx={{
                     padding: "6px 14px",
                     backgroundColor: "#1e1b42",
                     height: "37px",
                     borderRadius: "0px 6px 6px 0px",
                     boxShadow:
                        "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
               >
                  <CalendarMonthOutlinedIcon
                     sx={{
                        color: "#fff",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                     }}
                  />{" "}
               </Box>
            </Box>
            <Box
               onClick={handleClick}
               sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "5px",
                  cursor: "pointer",
               }}
            >
               <Tooltip title="Account settings">
                  <IconButton
                     size="small"
                     aria-controls={open ? "account-menu" : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? "true" : undefined}
                  >
                     <Avatar
                        src={
                           singleUserInfo?.data?.profile_image ||
                           person
                        }
                        alt={"profile image"}
                        sx={{ width: 40, height: 40 }}
                     >
                        Ram
                     </Avatar>
                  </IconButton>
               </Tooltip>
               <Box className="profileNameBox">
                  <Typography className="profileName">
                     {singleUserInfo?.data?.name}
                  </Typography>
                  <Typography className="profileRole">
                     {singleUserInfo?.data?.roles}
                  </Typography>
               </Box>
               <KeyboardArrowDownRoundedIcon className="downArrow" />
            </Box>
         </Box>

         <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            disableScrollLock
            PaperProps={{
               elevation: 0,
               sx: {
                  padding: "3px 8px",
                  width: "300px",
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                     width: 32,
                     height: 32,
                     ml: -0.5,
                     mr: 1,
                  },
                  "&:before": {
                     content: '""',
                     display: "block",
                     position: "absolute",
                     top: 0,
                     right: 14,
                     width: 10,
                     height: 10,
                     bgcolor: "background.paper",
                     transform: "translateY(-50%) rotate(45deg)",
                     zIndex: 0,
                  },
               },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
         >
            <Box
               onClick={() =>
                  handleNavigate(`/settings/user-profile`)
               }
               sx={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  paddingLeft: "10px",
               }}
            >
               <Avatar
                  src={singleUserInfo?.data?.profile_image || person}
                  alt={"profile image"}
                  sx={{
                     width: "44px !important",
                     height: "44px !important",
                  }}
               >
                  Ram
               </Avatar>
               <Box sx={{ fontSize: "16px", fontWeight: "500" }}>
                  {singleUserInfo?.data?.name}
               </Box>
            </Box>
            <Divider sx={{ margin: "10px 0px" }} />

            <Box
               onClick={() =>
                  handleNavigate(`/settings/user-profile`)
               }
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  cursor: "pointer",
                  transition: "0.2s ease-in-out",
                  padding: "6px",
                  borderRadius: "4px",
                  "&:hover": {
                     backgroundColor: "#fafafa",
                  },
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     gap: "10px",
                     alignItems: "center",
                  }}
               >
                  <IconWithBg
                     data={{
                        title: "Help",
                        icon: <PersonRoundedIcon fontSize="small" />,
                     }}
                  />
                  <Box sx={{ fontSize: "14px", fontWeight: "500" }}>
                     Edit Profile
                  </Box>
               </Box>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowRightRoundedIcon
                     sx={{ color: "#9e9e9e" }}
                  />
               </Box>
            </Box>

            {/* <Box
               onClick={() =>
                  handleNavigate(`/settings/user-profile`)
               }
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  cursor: "pointer",
                  transition: "0.2s ease-in-out",
                  padding: "6px",
                  borderRadius: "4px",
                  "&:hover": {
                     backgroundColor: "#fafafa",
                  },
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     gap: "10px",
                     alignItems: "center",
                  }}
               >
                  <IconWithBg
                     data={{
                        title: "Help",
                        icon: <Settings fontSize="small" />,
                     }}
                  />
                  <Box sx={{ fontSize: "14px", fontWeight: "500" }}>
                     Settings & Privacy
                  </Box>
               </Box>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowRightRoundedIcon
                     sx={{ color: "#9e9e9e" }}
                  />
               </Box>
            </Box>
            <Box
               onClick={() =>
                  window.open(`https://api.rbabroads.com/mail`)
               }
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  cursor: "pointer",
                  transition: "0.2s ease-in-out",
                  padding: "6px",
                  borderRadius: "4px",
                  "&:hover": {
                     backgroundColor: "#fafafa",
                  },
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     gap: "10px",
                     alignItems: "center",
                  }}
               >
                  <IconWithBg
                     data={{
                        title: "Help",
                        icon: <EmailRoundedIcon fontSize="small" />,
                     }}
                  />
                  <Box sx={{ fontSize: "14px", fontWeight: "500" }}>
                     Check Inbox
                  </Box>
               </Box>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowRightRoundedIcon
                     sx={{ color: "#9e9e9e" }}
                  />
               </Box>
            </Box>

            <Box
               onClick={() =>
                  handleNavigate(`/settings/user-profile`)
               }
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  cursor: "pointer",
                  transition: "0.2s ease-in-out",
                  padding: "6px",
                  borderRadius: "4px",
                  "&:hover": {
                     backgroundColor: "#fafafa",
                  },
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     gap: "10px",
                     alignItems: "center",
                  }}
               >
                  <IconWithBg
                     data={{
                        title: "Help",
                        icon: <HelpIcon fontSize="small" />,
                     }}
                  />
                  <Box sx={{ fontSize: "14px", fontWeight: "500" }}>
                     Help & Support
                  </Box>
               </Box>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowRightRoundedIcon
                     sx={{ color: "#9e9e9e" }}
                  />
               </Box>
            </Box> */}

            <Box
               onClick={() => handleLogout()}
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  cursor: "pointer",
                  transition: "0.2s ease-in-out",
                  padding: "6px",
                  borderRadius: "4px",
                  "&:hover": {
                     backgroundColor: "#fafafa",
                  },
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     gap: "10px",
                     alignItems: "center",
                  }}
               >
                  <IconWithBg
                     data={{
                        title: "Help",
                        icon: <Logout fontSize="small" />,
                     }}
                  />
                  <Box sx={{ fontSize: "14px", fontWeight: "500" }}>
                     Logout
                  </Box>
               </Box>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowRightRoundedIcon
                     sx={{ color: "#9e9e9e" }}
                  />
               </Box>
            </Box>
         </Menu>
      </React.Fragment>
   );
}
