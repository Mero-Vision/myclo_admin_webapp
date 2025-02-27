import { Box, InputLabel, Switch } from "@mui/material";

export default function SecondarySwitch({
   title = "",
   checked,
   onChange,
   ...props
}) {
   return (
      <>
         <Box
            sx={{
               display: "flex",
               gap: "5px",
               alignItems: "center",
               marginBottom: "10px",
            }}
         >
            {title && (
               <InputLabel
                  className="title"
                  sx={{
                     color: "#121127",
                     fontWeight: "500",
                     fontSize: "12px",
                     textTransform: "capitalize",
                     margin: "0px",
                  }}
               >
                  {title}
               </InputLabel>
            )}
            <Box>
               <Switch
                  checked={checked}
                  onChange={onChange}
                  {...props}
               />
            </Box>
         </Box>
      </>
   );
}
