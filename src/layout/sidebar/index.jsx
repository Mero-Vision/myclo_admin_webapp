import { ExpandMore, Menu } from "@mui/icons-material";
import {
   Collapse,
   Divider,
   IconButton,
   Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { SidebarConstants } from "../../constants/SidebarConstants";
import "./styles.css";

const drawerWidth = 270;

const openedMixin = (theme) => ({
   width: drawerWidth,
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: "hidden",
});

const closedMixin = (theme) => ({
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: "hidden",
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
   },
});

const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
   width: drawerWidth,
   flexShrink: 0,
   whiteSpace: "nowrap",
   boxSizing: "border-box",
   ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
   }),
   ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
   }),
}));

export default function Sidebar() {
   const theme = useTheme();
   const [open, setOpen] = useState(true); // Drawer initially open
   const [expanded, setExpanded] = useState(
      sessionStorage.getItem("active") || ""
   );

   const handleClick = (item) => {
      if (!open) {
         setOpen(true); // Open the drawer if it's closed
      }
      setExpanded((prev) =>
         prev === item?.label ? "" : item?.label
      );
      sessionStorage.setItem(
         "active",
         expanded === item?.label ? "" : item?.label
      );
   };

   const toggleDrawer = () => {
      setOpen(!open);
   };

   React.useEffect(() => {
      if (!open) {
         setExpanded(""); // Close all collapses when the drawer is closed
      }
   }, [open]);

   return (
      <Box
         sx={{
            display: "flex",
            "& .MuiDrawer-paper": { border: "none" },
         }}
      >
         <CssBaseline />

         <Drawer variant="permanent" open={open}>
            <Box className={open ? "drawerOpen" : "drawerClose"}>
               {!open && (
                  <>
                     <Box
                        sx={{
                           display: "flex",
                           justifyContent: "center",
                        }}
                     >
                        <IconButton
                           onClick={toggleDrawer}
                           sx={{ margin: "3px", marginLeft: "5px" }}
                        >
                           <Menu />
                        </IconButton>
                     </Box>
                     <Divider sx={{ marginRight: "-10px" }} />
                  </>
               )}
               <DrawerHeader>
                  <Box
                     sx={
                        open
                           ? {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                paddingLeft: "30px",
                             }
                           : { paddingLeft: "3px" }
                     }
                  >
                     <Box
                        className="drawerHeader"
                        sx={{
                           columnGap: open ? "7px" : "0px",
                           width: open ? "auto" : "fit-content",
                        }}
                     >
                        <>
                           {!open && (
                              <Box
                                 sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                 }}
                              >
                                 <img src={Logo} alt="Logo" />
                              </Box>
                           )}
                           {open && (
                              <>
                                 <Box
                                    sx={{
                                       display: "flex",
                                       justifyContent: "center",
                                    }}
                                 >
                                    <img src={Logo} alt="Logo" />
                                 </Box>

                                 <Box>
                                    <Typography
                                       sx={{
                                          lineHeight: 1,
                                          fontSize: "10px",
                                          fontWeight: "500",
                                          marginBottom: "2px",
                                          color: "#808080",
                                       }}
                                    >
                                       Powered By
                                    </Typography>
                                    <Typography
                                       fontWeight={600}
                                       fontSize={"medium"}
                                       sx={{ lineHeight: 1 }}
                                    >
                                       Mero Vision
                                    </Typography>
                                    {/* <Typography
                                       fontWeight={500}
                                       fontSize={"11px"}
                                    >
                                       Kathamndu
                                    </Typography> */}
                                 </Box>
                              </>
                           )}
                        </>
                     </Box>
                     {open && (
                        <IconButton
                           onClick={toggleDrawer}
                           sx={{
                              margin: "3px",
                              // marginLeft: "30px",
                           }}
                        >
                           <Menu />
                        </IconButton>
                     )}
                  </Box>
               </DrawerHeader>

               {open && (
                  <Divider
                     sx={{
                        marginRight: "-10px",
                        marginTop: "8px",
                        marginBottom: "7px",
                     }}
                  />
               )}

               {SidebarConstants?.map((row) => (
                  <List
                     key={row?.header}
                     subheader={
                        open && (
                           <Box
                              sx={{
                                 fontSize: "11px",
                                 padding: "5px 30px",
                                 marginBottom: "10px",
                                 color: "#adadad",
                                 textTransform: "uppercase",
                              }}
                           >
                              {row?.header}
                           </Box>
                        )
                     }
                     sx={{
                        mb: open ? "0.5rem" : "0rem",
                        paddingBottom: "0px !important",
                     }}
                  >
                     {row?.items?.map((item) => (
                        <ListItem
                           key={item?.label}
                           disablePadding
                           sx={{
                              display: "block",
                              paddingBottom: "5px",
                           }}
                           className="nav"
                        >
                           <NavLink
                              to={
                                 !item?.children?.length && item?.url
                              }
                              className={({ isActive }) =>
                                 isActive &&
                                 (item?.children?.length
                                    ? item?.children?.some(
                                         (nestedItem) =>
                                            window.location.pathname.includes(
                                               nestedItem.url
                                            )
                                      )
                                       ? "activeClass"
                                       : "inActiveClass"
                                    : "activeClass")
                              }
                           >
                              {({ isActive }) => (
                                 <ListItemButton
                                    className="listItemButton"
                                    onClick={() => handleClick(item)}
                                    style={{
                                       background:
                                          expanded === item?.label &&
                                          "#f6f6f6",
                                       // paddingInline: open
                                       //    ? "5px 10px"
                                       //    : "5px 5px 10px",
                                       // padding: open
                                       //    ? "5px 10px"
                                       //    : "5px  0px 5px 15px",
                                    }}
                                 >
                                    <Box
                                       sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          width: open
                                             ? "auto"
                                             : "32px",
                                          height: open
                                             ? "auto"
                                             : "32px",
                                          justifyContent: open
                                             ? "flex-start"
                                             : "center",
                                          marginRight: open
                                             ? "8px"
                                             : "",
                                          padding: open
                                             ? "5px 5px 5px 20px"
                                             : "5.5px 0px 5.5px 12px",
                                       }}
                                    >
                                       <IconButton
                                          style={{
                                             // marginRight: open
                                             //    ? "15px"
                                             //    : "",
                                             padding: "0",
                                          }}
                                       >
                                          {isActive
                                             ? item?.children?.length
                                                ? item?.children?.some(
                                                     (nestedItem) =>
                                                        window.location.pathname.includes(
                                                           nestedItem.url
                                                        )
                                                  )
                                                   ? React.cloneElement(
                                                        item?.activeIcon,
                                                        {
                                                           sx: {
                                                              fontSize:
                                                                 "24px",
                                                              padding: 0,
                                                              color: "#fff !important",
                                                           },
                                                        }
                                                     )
                                                   : React.cloneElement(
                                                        item?.icon,
                                                        {
                                                           sx: {
                                                              fontSize:
                                                                 "24px",
                                                              padding: 0,
                                                              color: "#6259CA !important",
                                                           },
                                                        }
                                                     )
                                                : React.cloneElement(
                                                     item?.activeIcon,
                                                     {
                                                        sx: {
                                                           fontSize:
                                                              "24px",
                                                           padding: 0,
                                                           color: "#fff !important",
                                                        },
                                                     }
                                                  )
                                             : React.cloneElement(
                                                  item?.icon,
                                                  {
                                                     sx: {
                                                        fontSize:
                                                           "24px",
                                                        padding: 0,
                                                        color: "#6259CA !important",
                                                     },
                                                  }
                                               )}
                                       </IconButton>
                                    </Box>
                                    {open && (
                                       <ListItemText
                                          sx={{
                                             "& .MuiTypography-root":
                                                {
                                                   fontSize: "13px",
                                                   fontWeight: "600",
                                                },
                                          }}
                                          primary={item?.label}
                                       />
                                    )}
                                    {item?.children?.length !== 0 && (
                                       <Box
                                          sx={{
                                             display: "flex",
                                             alignItems: "center",
                                             paddingRight: "20px",
                                          }}
                                       >
                                          <ExpandMore
                                             sx={{
                                                // width: "fit-content",
                                                fontSize: open
                                                   ? "16px"
                                                   : "16px",
                                                transition:
                                                   "transform 0.3s",
                                                transform:
                                                   expanded ===
                                                   item?.label
                                                      ? "rotate(-180deg)"
                                                      : "rotate(-90deg)",
                                             }}
                                          />
                                       </Box>
                                    )}
                                 </ListItemButton>
                              )}
                           </NavLink>
                           {item?.children?.length > 0 && (
                              <Collapse
                                 in={expanded === item?.label}
                                 timeout="auto"
                                 unmountOnExit
                              >
                                 <Box className="childContainer">
                                    {item?.children?.map(
                                       (child, index) => (
                                          <ChildComponent
                                             child={child}
                                             key={index}
                                             setOpen={setOpen} // Pass setOpen to child
                                          />
                                       )
                                    )}
                                 </Box>
                              </Collapse>
                           )}
                        </ListItem>
                     ))}
                  </List>
               ))}

               {/* {SidebarConstants?.map((row) => (
                  <List
                     key={row?.header}
                     subheader={
                        open && (
                           <Box
                              sx={{
                                 fontSize: "11px",
                                 padding: "5px 12px",
                              }}
                           >
                              {row?.header}{" "}
                           </Box>
                        )
                     }
                     sx={{ mb: "1rem" }}
                  >
                     {row?.items?.map((item) => (
                        <ListItem
                           key={item?.label}
                           disablePadding
                           sx={{
                              display: "block",
                              paddingBottom: "5px",
                           }}
                           className="nav"
                        >
                           <NavLink
                              to={
                                 !item?.children?.length && item?.url
                              }
                              className={({ isActive }) =>
                                 isActive &&
                                 (item?.children?.length
                                    ? item?.children?.some(
                                         (nestedItem) =>
                                            window.location.pathname.includes(
                                               nestedItem.url
                                            )
                                      )
                                       ? "activeClass"
                                       : {}
                                    : "activeClass")
                              }
                           >
                              {({ isActive }) => (
                                 <ListItemButton
                                    className="listItemButton"
                                    onClick={() => handleClick(item)}
                                    style={{
                                       background:
                                          expanded === item?.label &&
                                          "#f6f6f6",
                                    }}
                                 >
                                    <img
                                       style={{
                                          width: open
                                             ? "20px"
                                             : "32px",
                                          height: open
                                             ? "20px"
                                             : "32px",
                                          marginRight: open
                                             ? "15px"
                                             : "",
                                          padding: open
                                             ? ""
                                             : "5.5px 5px 5.5px 2px",
                                       }}
                                       src={
                                          isActive
                                             ? item?.children?.length
                                                ? item?.children?.some(
                                                     (nestedItem) =>
                                                        window.location.pathname.includes(
                                                           nestedItem.url
                                                        )
                                                  )
                                                   ? item?.activeIcon
                                                   : item?.icon
                                                : item?.activeIcon
                                             : item?.icon
                                       }
                                       alt=""
                                    />
                                    {open && (
                                       <ListItemText
                                          sx={{
                                             "& .MuiTypography-root":
                                                {
                                                   fontSize: "12px",
                                                   fontWeight: "500",
                                                },
                                          }}
                                          primary={item?.label}
                                       />
                                    )}
                                    {item?.children?.length !== 0 && (
                                       <ExpandMore
                                          sx={{
                                             fontSize: open
                                                ? "22px"
                                                : "18px",
                                             transition:
                                                "transform 0.3s",
                                             transform:
                                                expanded ===
                                                item?.label
                                                   ? "rotate(-180deg)"
                                                   : "rotate(0deg)",
                                          }}
                                       />
                                    )}
                                 </ListItemButton>
                              )}
                           </NavLink>
                           {item?.children?.length > 0 && (
                              <Collapse
                                 in={expanded === item?.label}
                                 timeout="auto"
                                 unmountOnExit
                              >
                                 <Box className="childContainer">
                                    {item?.children?.map(
                                       (child, index) => (
                                          <ChildComponent
                                             child={child}
                                             key={index}
                                             setOpen={setOpen} // Pass setOpen to child
                                          />
                                       )
                                    )}
                                 </Box>
                              </Collapse>
                           )}
                        </ListItem>
                     ))}
                  </List>
               ))} */}
            </Box>
         </Drawer>
      </Box>
   );
}

const ChildComponent = ({ child, setOpen }) => {
   const [hover, setHover] = useState(false);

   const handleChildClick = () => {
      setOpen(true); // Ensure the drawer opens when a child is clicked
   };

   return (
      <List
         key={child?.label}
         component="div"
         disablePadding
         sx={{ paddingBottom: "5px" }}
         className="nav"
         onMouseOver={() => setHover(true)}
         onMouseOut={() => setHover(false)}
      >
         <NavLink to={child?.url} onClick={handleChildClick}>
            {({ isActive }) => (
               <ListItemButton
                  className={[
                     "listItemButtonChild",
                     isActive
                        ? "activeChildClass"
                        : "nonActiveChildClass",
                  ]}
               >
                  <ListItemText
                     sx={{
                        "& .MuiTypography-root": {
                           fontSize: "13px",
                           fontWeight: "500",
                        },
                     }}
                     primary={child?.label}
                     className="active"
                  />
               </ListItemButton>
            )}
         </NavLink>
      </List>
   );
};
