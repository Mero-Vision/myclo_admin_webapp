import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  tabs: {
    "& .MuiTab-root": {
      paddingBlock: "0 5px",
      fontSize: "12px",
    },
    "& svg": {
      height: "15px",
      width: "15px",
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    "& .MuiTypography-root": {
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "600",
    },
  },
}));

export default styles;
