import { Publish } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useRef } from "react";
import { Controller } from "react-hook-form";

const CustomFileUpload = ({
   name,
   control,
   disabled,
   buttonName,
   isMultiple,
   variant,
   fileComponent,
}) => {
   const fileRef = useRef();

   const handleFilesChange = (newFiles, existingFiles, onChange) => {
      const filesArray = Array.from(newFiles);
      if (existingFiles && existingFiles.length) {
         onChange([...existingFiles, ...filesArray]);
      } else {
         onChange(filesArray);
      }
   };

   return (
      <div>
         {fileComponent ? (
            <Box onClick={() => fileRef.current.click()}>
               {fileComponent}
            </Box>
         ) : (
            <Button
               sx={{
                  fontSize: "14px",
                  textTransform: "capitalize",
                  background: "#736AE3",
                  color: "#fff",
                  "&:hover": {
                     background: "#867feb",
                  },
               }}
               variant={variant || "blue"}
               onClick={() => fileRef.current.click()}
               startIcon={<Publish />}
            >
               {buttonName || "Upload"}
            </Button>
         )}
         <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
               <input
                  ref={fileRef}
                  type={"file"}
                  multiple={isMultiple}
                  onChange={(e) =>
                     handleFilesChange(
                        e.target.files,
                        value,
                        onChange
                     )
                  }
                  disabled={disabled}
                  hidden
               />
            )}
         />
      </div>
   );
};

export default CustomFileUpload;
