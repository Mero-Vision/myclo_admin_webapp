// Import necessary modules
import { Box, FormHelperText, Typography } from "@mui/material";
import { Editor } from "mui-rte";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { styles } from "./style"; // Assuming you have some styles defined

const CustomEditor = ({ name, control, title, errors }) => {
   const [editorState, setEditorState] = useState(null);
   const classes = styles();

   return (
      <Box>
         <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
               <div className={classes.richTextEditor}>
                  <Typography className={classes.descriptionLabel}>
                     {title || "Description"}
                  </Typography>
                  <Editor
                     value={value}
                     onChange={(newValue) => {
                        setEditorState(newValue);
                        onChange(newValue);
                     }}
                     toolbar={{
                        // Define your toolbar configuration here
                        buttons: [
                           "bold",
                           "italic",
                           "underline",
                           "link",
                           "bulletList",
                           "numberList",
                           "quote",
                        ],
                     }}
                     // Optional: add additional props as needed
                  />
               </div>
            )}
         />
         {errors?.[name]?.message && (
            <FormHelperText
               sx={{
                  fontSize: "10px",
                  color: "red",
                  marginTop: "5px",
               }}
            >
               {errors?.[name].message}
            </FormHelperText>
         )}
      </Box>
   );
};

export default CustomEditor;
