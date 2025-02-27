import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
   uniScoreCard: {
      width: "100%",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      borderRadius: "8px",
   },
   uniScoreTitle: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#242424",
      padding: "16px 16px 3px 16px",
   },
   uniScoreInfoBox: {
      padding: "0px 16px 16px 16px",
      display: " flex",
      flexDirection: "column",
   },
   uniScoreInfoTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#4d4d4d",
   },
   uniScoreItemsBox: {
      display: "flex",
      flexDirection: "column",
   },
   uniScoreItemsScoreTitle: {
      fontSize: "14px",
      fontWeight: "400",
      color: "#5e5e5e",
      marginBottom: "2px",
   },
   uniScoreItemsScoreSubtitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#242424",
   },
   uniExtraBox: {
      marginTop: "10px",
   },
}));

export default styles;
