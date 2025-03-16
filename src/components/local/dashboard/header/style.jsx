import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
   gridOneCard: {
      display: "flex",
      flexDirection: " column",
      // alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "24px",
      // justifyContent: "space-between",
      // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      boxShadow:
         "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
   },

   gridOneCardIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      paddingBottom: "3px",
   },
   gridOneCardIconMain: {
      color: "#fff",
      fontSize: "38px !important",
   },
   gridOneCardInfo: {
      display: "flex",
      flexDirection: "column",
   },
   gridOneCardTitle: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#2b2b2b",
      marginBottom: "2px",
   },
   gridOneCardAmount: {
      fontSize: "32px",
      fontWeight: "800 !important",
      color: "#000",
   },

   //student ap

   studentApBox: {
      backgroundColor: "#fff",
      marginTop: "-7px",
      paddingBottom: "6px",
      borderRadius: "12px",
   },

   studentApBoxTitle: {
      fontSize: "18px !important",
      fontWeight: "700 !important",
      color: "#2b2b2b",
      padding: "4px 27px",
   },

   studentApCard: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "10px 17px",
      gap: "20px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      margin: "20px",
   },
   studentApCardIcon: {
      backgroundColor: "#6e99ff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "40px",
      height: "40px",
      // padding: "8px",
      borderRadius: "12px",
      marginTop: "5px",
   },
   studentApCardIconMain: {
      color: "#fff",
      fontSize: "22px !important",
   },
   studentApCardInfo: {
      display: "flex",
      flexDirection: "column",
   },
   studentApCardTitle: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#2b2b2b",
      marginBottom: "4px",
   },
   studentApCardDate: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#6e6e6e",
      marginBottom: "6px",
   },
   studentApCardUni: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#6a61cf",
   },

   // chart

   singleCard: {
      borderRadius: "16px",
      background: "#fff",
      padding: "20px 25px 5px 25px",
      display: "flex",
      height: "100%",
      boxShadow:
         "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
      // boxShadow: "0px 4px 5px 0px rgba(88, 144, 255, 0.07)",
      flexDirection: "column",
      rowGap: "10px",
   },

   titleDiv: {
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
      marginBottom: "10px",
      "& .titleDevBox": {
         display: "flex",
         flexDirection: "column",
         gap: "2px",
         "& .titleHeader": {
            color: "#383751",
            fontSize: "16px",
            fontWeight: "600",
         },
         "& .amount": {
            color: "#383751",
            fontSize: "22px",
            fontWeight: 600,
         },
      },
      "& .titleDevBoxStudent": {
         display: "flex",
         alignItems: "center",
         justifyContent: "space-between",
         width: "100%",
         "& .titleHeader": {
            color: "#383751",
            fontSize: "15px",
            fontWeight: "500",
         },
         "& .titleHeaderBtn": {
            backgroundColor: "#F9F9FA",
            borderRadius: "4px",
            padding: "3px 6px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
         },
         "& .amount": {
            color: "#383751",
            fontSize: "22px",
            fontWeight: 600,
         },
      },
      "& .view": {
         color: "#5C67F5",
         textDecoration: "underline",
         fontSize: "12px",
         cursor: "pointer",
      },
      "& .buttonActiveLeft": {
         backgroundColor: "#e3e5ff",
         color: "#5C67F5",
         border: "none",
         borderRadius: "8px 0px 0px 8px",
         "&:hover": {
            backgroundColor: "#e3e5ff",
         },
      },
      "& .buttonInactiveLeft": {
         backgroundColor: "#FBFBFB",
         color: "#6c6b63",
         border: "none",
         borderRadius: "8px 0px 0px 8px",
         "&:hover": {
            backgroundColor: "#FBFBFB",
         },
      },
      "& .buttonActiveRight": {
         backgroundColor: "#e3e5ff",
         color: "#5C67F5",
         border: "none",
         borderRadius: "0px 8px 8px 0px",
         "&:hover": {
            backgroundColor: "#e3e5ff",
         },
      },
      "& .buttonInactiveRight": {
         backgroundColor: "#FBFBFB",
         color: "#6c6b63",
         border: "none",
         borderRadius: "0px 8px 8px 0px",
         "&:hover": {
            backgroundColor: "#FBFBFB",
         },
      },
   },
   viewAllIcon: {
      fontSize: "12px !important",
   },
   titleHeaderBtnText: {
      color: "#383751",
      fontSize: "12px",
      fontWeight: "500",
   },
}));

export default styles;
