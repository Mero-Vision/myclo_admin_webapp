import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
   customerLeft: {
      background: "#fff",
   },
   customerSearch: {
      padding: "10px 15px",
      display: "flex",
      flexDirection: "column",
      rowGap: "10px",
      "& input": {
         paddingLeft: "0 !important",
         padding: "7px 11px !important",
      },
      "& .title": {
         color: "#121127",
         fontSize: "16px",
         fontWeight: "600",
      },
   },
   customerList: {
      maxHeight: "500px",
      overflowY: "auto",
      "& .customerLoadMoreBtnBox": {
         display: " flex",
         justifyContent: " center",
         paddingBottom: "10px",
         "& .customerLoadMoreBtn": {
            backgroundColor: " #4C7CE5",
            color: " #fff",
            "&:hover": {
               backgroundColor: " #4C7CE5",
            },
         },
      },
      "& .singleCustomerDiv": {
         padding: "15px",
         cursor: "pointer",
         "& .info": {
            display: "flex",
            columnGap: "10px",
            alignItems: "center",
            "& .avatar": {
               height: "34px",
               width: "34px",
               objectFit: "cover",
            },
            "& .name": {
               color: "#121127",
               fontSize: "13px",
               fontWeight: "600",
            },
            "& .amount": {
               color: "#4C4B63",
               fontSize: "12px",
               fontWeight: "500",
            },
         },
      },
   },
}));

export default styles;
