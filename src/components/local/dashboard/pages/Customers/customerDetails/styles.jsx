import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
   customerInfo: {
      background: "#fff",
      padding: "25px",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "12px",
      "& .mainInfo": {
         display: "flex",
         columnGap: "15px",
         "& .avatar": {
            height: "100px",
            width: "100px",
            objectFit: "cover",
         },
         "& .name": {
            color: "#121127",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "10px",
         },

         "& .infoDiv": {
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            marginBottom: "5px",
            "& > *": {
               color: "#4C4B63",
               fontSize: "12px",
               fontWeight: "400",
            },
            "& svg": {
               fontSize: "13px",
            },
         },
      },
      "& .amountInfo": {
         textAlign: "right",
         display: "flex",
         flexDirection: "column",
         justifyContent: "space-between",
         "& .totalAmount": {
            color: "#339AA2",
            fontSize: "22px",
            fontWeight: "600",
         },
         "& .totalAmountDue": {
            color: "#339AA2",
            fontSize: "18px",
            fontWeight: "600",
         },
         "& .payBtn": {
            backgroundColor: "#4C7CE5",
            color: "#fff",
            marginTop: "5px",
         },
         "& .receivableAmount": {
            color: "#6C6B80",
            fontSize: "12px",
            fontWeight: "400",
         },
         "& .buttonDiv": {
            display: "flex",
            columnGap: "10px",
            justifyContent: "end",
         },
      },
   },

   customerInfoTabs: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      marginTop: "20px",
   },

   docImgBox: {
      position: "relative",
      width: "100%",
      height: "250px",
      overflow: "hidden",
      borderRadius: "4px 4px 0px 0px",
      "&:hover $viewButton": {
         opacity: 1, // Show the button on hover
         pointerEvents: "auto", // Enable interaction on hover
      },
   },
   docImgBoxModal: {
      width: "100%",
      height: "auto",
      overflow: "hidden",
   },
   docImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
   },
   viewButton: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay
      color: "white",
      padding: "10px 20px",
      border: "none",
      width: "100%",
      height: "100%",
      cursor: "pointer",
      fontSize: "16px",
      zIndex: 10, // Ensures the button is above the image
      opacity: 0, // Initially hidden
      transition: "opacity 0.3s", // Smooth hover effect
      pointerEvents: "none", // Prevents interaction when hidden
   },

   customerTable: {
      padding: "10px",
      marginTop: "20px",
      background: "#fff",
      "& .header": {
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         paddingInline: "10px",
         "& .headerTitle": {
            color: "#2a7576",
            fontSize: "14px",
            fontWeight: "600",
         },
      },
   },

   // other info

   conpanyInfoTitle: {
      color: "#4C4B63",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "10px",
   },
   conpanyInfoTitleTest: {
      color: "#4C4B63",
      fontSize: "14px",
      fontWeight: "600",
   },

   rowWrap: {
      display: "flex",
      flexDirection: "column !important",
   },

   rowBox: {
      display: "flex",
      // alignItems: "start",
      margin: "6px 0px",
   },

   rowBoxTitle: {
      color: "#7A889E",
      fontSize: "12px",
      fontWeight: "500",
      width: "150px !important",
      marginRight: "10px",
   },
   rowBoxSub: {
      color: "#4C4B63",
      fontSize: "12px",
      fontWeight: "600",
      wordBreak: "break-all",
   },
   docImgText: {
      color: "#4C4B63",
      fontSize: "15px",
      fontWeight: "500",

      padding: "15px 10px",
   },
   docImgWrap: {
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      borderRadius: "4px",
   },

   gallerySingleBox: {
      backgroundColor: "#fff",
   },
   gallerySingleBoxWrap: {
      padding: "0px ",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
   },
   gallerySingleImageTitle: {
      fontSize: "34px",
      fontWeight: 500,
      color: "#424242",
      lineHeight: "60px",
      marginBottom: "35px",
   },
   galleryItemImage: {
      width: "100%",
      height: "auto",
      position: "relative",
      overflow: "hidden",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
   },
   galleryFinalImgSingle: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
   },

   // uni course tab

   uniCard: {
      width: "100%",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "16px",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      borderRadius: "14px",
   },
   imgMainBox: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "20px",
   },
   uniImg: {
      width: "60px",
      height: "60px",
      objectFit: "cover",
      borderRadius: "50%",
      border: "1px solid #adadad",
   },
   imgTitle: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#242424",
      lineHeight: "22px",
      textDecoration: "underline",
      cursor: "pointer",
   },

   // course title

   courseTitleBox: {
      display: "flex",
      flexDirection: "column",
   },
   courseSubtitle: {
      fontSize: "14px",
      fontWeight: "400",
      color: "#5e5e5e",
      marginBottom: "6px",
   },
   courseTitle: {
      fontSize: "18px",
      fontWeight: "500",
      color: "#242424",
      marginBottom: "10px",
      lineHeight: "24px",
      textDecoration: "underline",
      cursor: "pointer",
   },
   // course info
   infoBoxWrap: {
      display: "flex",
      flexDirection: "column",
      gap: " 10px",
   },
   infoBox: {
      display: "flex",
      justifyContent: "space-between",
   },
   infoBoxTitle: {
      fontSize: "15px",
      fontWeight: "500",
      color: "#242424",
   },
   infoBoxTitleInfo: {
      fontSize: "16px",
      fontWeight: "400",
      color: "#5e5e5e",
   },
   // single course
   singleWrap: {
      margin: "2rem 0rem",
      display: "flex",
      flexDirection: "column",
   },
   singleCourseImgBox: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginBottom: "40px",
   },
   singleCourseImg: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
   },
   singleCourseTitleBox: {
      display: "flex",
      flexDirection: "column",
   },
   singleCourseUni: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#6258db",
      marginBottom: "2px",
   },
   singleCourseAddress: {
      fontSize: "14px",
      fontWeight: "400",
      color: "#5e5e5e",
   },
   courseSingleTitleMain: {
      fontSize: "40px",
      fontWeight: "500",
      color: "#242424",
      lineHeight: "52px",
      marginBottom: "50px",
   },
   // success prediction
   intakeBox: {
      display: "flex",
      flexDirection: "column",
   },
   intakeBoxTitle: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#242424",
      marginBottom: "10px",
   },
   intakeItemBox: {
      display: "flex",
      flexDirection: "column",
   },
   intakeItemYear: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#242424",
      marginBottom: "6px",
   },
   intakeItemYearSuccessH: {
      fontSize: "13px",
      fontWeight: "500",
      color: "#242424",
      backgroundColor: "#DFF2F0",
      padding: "3px 10px",
      borderRadius: "50px",
      width: "max-content",
   },
   intakeItemYearSuccessL: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#242424",
      backgroundColor: "#FEEDC8",
      padding: "3px 10px",
      borderRadius: "50px",
      width: "max-content",
   },
   intakeItemYearSuccessVH: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#242424",
      backgroundColor: "#E6EFFE",
      padding: "3px 10px",
      borderRadius: "50px",
      width: "max-content",
   },
   // requirement
   requirementTitle: {
      color: "#4d4d4d",
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "15px",
   },
   academicBg: {
      marginBottom: "50px",
   },

   // features

   faqHomeWrap: {
      padding: "6rem 6rem 4rem 6rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f9fb",
      position: "relative",
   },

   faqHomeBox: {
      maxWidth: "950px",
      width: "100%",
   },
   faqHomeBoxHead: {
      fontSize: "38px",
      fontWeight: "500",
      lineHeight: "51px",
      width: "100%",
      color: "#201f37",
      marginBottom: "48px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "margin-top 0.5s ease",
   },
   faqHomeBoxHeadWidth: {
      textAlign: "center",
      width: "698px",
   },
   accordianBoxMain: {
      marginBottom: "40px",
   },
   accordianQuestion: {
      fontSize: "16px",
      color: "#121127",
      fontWeight: "600",
      padding: "12px",
   },
   accordianAnswer: {
      fontSize: "14px",
      color: "#787784",
      fontWeight: "400",
   },
   // table

   table: {
      borderCollapse: "collapse",
      width: "100%",
      marginTop: "20px",
   },
   thead: {
      backgroundColor: "#f2f2f2",
      borderRadius: "8px",
      overflow: "hidden",
   },

   th: {
      border: "1px solid #EDF0FC",
      padding: "6px 8px",
      textAlign: "left",
      backgroundColor: "#cfd8fc",
      fontSize: "12px",
   },
   td: {
      padding: "8px",
      fontSize: "12px",
   },
   // payment
   containerPaymentTitle: {
      color: "#3b3b3b",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "10px",
   },

   containerPayment: {
      width: "100%",
      marginBottom: "20px",
      // display: "flex",
      // gap: "20px",
      // justifyContent: "center",
   },
   paymentOption: {
      cursor: "pointer",
      padding: "10px 20px",
      border: "2.5px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#fff",
      textAlign: "center",
      transition: "all 0.3s",
      height: "60px !important",
   },
   selected: {
      borderColor: "#0F4CAD",
      backgroundColor: "#e8effa",
      boxShadow: "0 4px 6px rgba(0, 128, 0, 0.2)",
      "&:hover": {
         backgroundColor: "#fcfdff",
      },
   },

   paymentOptionText: {
      color: "#3b3b3b",
      fontSize: "14px",
      fontWeight: "500",
      margin: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
   },
   selectedText: {
      color: "#0F4CAD",
   },
}));

export default styles;
