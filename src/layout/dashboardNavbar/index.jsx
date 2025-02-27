import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CustomBreadcrumbs from "../../components/common/CustomBreadcrumbs/CustomBreadcrumbs";
import AccountMenu from "./AccountMenu";
import "./styles.css"; // Import the CSS file

const Navbar = () => {
   const location = useLocation();
   const paths = location.pathname.split("/").filter(Boolean);

   //   const [anchorEl, setAnchorEl] = useState(null);
   //   const open = Boolean(anchorEl);
   //   const { company } = useSelector((state) => state?.utils);
   //   const { user } = useSelector((state) => state?.auth);
   //   const COMPANY = useMemo(() => company, [company]);
   //   const [IsCompany, setIsCompany] = useState();

   //   useEffect(() => {
   //     const item = JSON.parse(localStorage.getItem("is_company") || "{}");
   //     setIsCompany(item);
   //   }, []);

   const navigate = useNavigate();

   //   const companyBranchAddress = getCompanyDetail()?.branchAddress;
   //   console.log("ldnlasldjaslldkasj", { user, companyBranchAddress });

   return (
      <Box className="root">
         <Box className="header">
            <Box className="main">
               {paths?.length
                  ? paths?.slice(-1)?.toString()?.replaceAll("-", " ")
                  : "Dashboard"}
            </Box>
            <Box className="breadcrumbs">
               <CustomBreadcrumbs data={{ color: "#fff" }} />
            </Box>
         </Box>

         <Box className="right">
            <AccountMenu />
         </Box>
      </Box>
   );
};

export default Navbar;
