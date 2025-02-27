import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  profilePicture: {
    "& .MuiAvatar-root": {
      borderRadius: "50%",
      height: "65px",
      width: "65px",
      objectFit: "cover",
      border: "1px solid #D1D1DB",
    },
  },
}));

export default styles;
