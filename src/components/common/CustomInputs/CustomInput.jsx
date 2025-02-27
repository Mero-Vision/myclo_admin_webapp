import {
   VisibilityOffOutlined,
   VisibilityOutlined,
} from "@mui/icons-material";
import {
   Box,
   IconButton,
   InputLabel,
   TextField,
   Typography,
} from "@mui/material";
import { memo, useState } from "react";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const CustomInput = memo(
   ({
      name,
      control,
      type,
      errors,
      placeholder = null,
      label = "",
      rule = { required: false },
      title = "",
      disabled = false,
      hidden = false,
      required,
      min,
      max,
      rows,
      startIcon,
      endIcon,
      defaultValue,
      isNegative,
      productSearch,
      whiteBackground,
      forgotPassword,
      itemOrderInput,
      itemOrderToppings,
      bgRed,
   }) => {
      const navigate = useNavigate();
      const [show, setShow] = useState(false);
      let error;
      const splitName = name.split(".");
      if (errors) {
         if (splitName?.length > 1) {
            let loopError = errors;
            splitName?.map((item, index) => {
               loopError = loopError?.[item];
            });
            error = loopError?.message;
         } else {
            error = errors?.[name]?.message;
         }
      }

      console.log({ aaaaa: error });

      const getValue = (e) => {
         if (type === "number") {
            if (min && e.target.value < min) {
               return min;
            } else if (max && e.target.value > max) {
               return max;
            } else {
               return e.target.value;
            }
         }
      };

      return (
         <div className="inputs">
            <div>
               {title && (
                  <Box
                     display="flex"
                     gridColumnGap={".1rem"}
                     justifyContent={"space-between"}
                     alignItems={"center"}
                  >
                     {" "}
                     <InputLabel className="inputTitle">
                        {title}{" "}
                        <span style={{ color: "red" }}>
                           {required && "*"}{" "}
                        </span>
                     </InputLabel>
                     {forgotPassword && (
                        <Box>
                           <Typography
                              onClick={() =>
                                 navigate("/forgot-password")
                              }
                              sx={{
                                 color: "#383751",
                                 fontSize: "12px",
                                 textDecoration: "underline",
                                 cursor: "pointer",
                              }}
                           >
                              Forgot Password?
                           </Typography>
                        </Box>
                     )}
                  </Box>
               )}
               <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <>
                        <TextField
                           sx={
                              // "& .textField": {
                              //    "& .MuiInputBase-root": {
                              //       border: "2px solid #fff !important",
                              //    },
                              //    "& .MuiOutlinedInput-root": {
                              //       backgroundColor: "#fff !important",
                              //    },
                              //    "& .input": {
                              //       backgroundColor: "red !important",
                              //    },
                              // },
                              // "& .title": {
                              //    fontSize: "19px",
                              //    fontWeight: "500 !important",
                              //    color: theme.palette.text.main,
                              //    marginBottom: "8px",
                              // },
                              // "& svg": {
                              //    marginRight: "9px",
                              //    height: "19px",
                              //    width: "19px",
                              // },

                              ({
                                 "& .MuiOutlinedInput-notchedOutline":
                                    {
                                       border: "none !important",
                                    },
                              },
                              {
                                 "& .MuiOutlinedInput-root": {
                                    backgroundColor:
                                       "#fff !important",
                                 },
                              },
                              {
                                 "& .MuiOutlinedInput": {
                                    border:
                                       "1px soild red !important",
                                    borderColor: "r !important",
                                    outline: "none !important",
                                    backgroundColor:
                                       "#fff !important",
                                 },
                              },
                              {
                                 "& .MuiInputBase-root": {
                                    backgroundColor:
                                       "#fff !important",
                                    // border:
                                    //    "2px solid #fff !important",
                                    border: "none !important",
                                 },
                              },
                              {
                                 "& .MuiInputBase-root": {
                                    backgroundColor:
                                       "#fff !important",
                                    borderRadius: "50px",
                                    border: "none !important",
                                 },
                              },
                              {
                                 "& .MuiInputBase-input": {
                                    backgroundColor:
                                       "#fff !important",
                                    // paddingRight: "2px !important",
                                    padding: "12px !important",
                                    fontSize: "12px",
                                    // borderRadius: "80px",

                                    // textAlign: "center",
                                 },
                              })
                           }
                           type={show ? "text" : type}
                           onChange={(event) => {
                              const newValue =
                                 type === "number" &&
                                 event.target.value > max
                                    ? max
                                    : event.target.value;
                              onChange(newValue);
                           }}
                           value={value || ""}
                           fullWidth
                           placeholder={placeholder}
                           label={label}
                           variant="outlined"
                           defaultValue={defaultValue || ""}
                           title={title}
                           disabled={disabled}
                           onWheel={(e) => e.target.blur()}
                           InputProps={{
                              inputProps: {
                                 min: !isNegative && (min || 0),
                                 max: max,
                                 step: "0.01",
                              },
                              startAdornment: startIcon,
                              endAdornment:
                                 type === "password" ? (
                                    <IconButton
                                       onClick={() =>
                                          setShow((prev) => !prev)
                                       }
                                       sx={{
                                          "& svg": {
                                             margin: "0 !important",
                                             height: "14px",
                                             width: "14px",
                                          },
                                       }}
                                    >
                                       {show ? (
                                          <VisibilityOffOutlined />
                                       ) : (
                                          <VisibilityOutlined />
                                       )}
                                    </IconButton>
                                 ) : (
                                    endIcon
                                 ),
                           }}
                           hidden={hidden}
                           multiline={rows}
                           rows={rows}
                           // required={required}
                        />
                        {error && (
                           <Box
                              style={
                                 bgRed
                                    ? {
                                         color: "#fceceb",
                                         fontSize: "10px",
                                      }
                                    : {
                                         color: "red",
                                         fontSize: "10px",
                                      }
                              }
                           >
                              {type === "password"
                                 ? error
                                 : !value && error}
                           </Box>
                        )}
                     </>
                  )}
               />
            </div>
         </div>
      );
   }
);
