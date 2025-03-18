import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

export const SidebarConstants = [
   {
      header: "Main",
      items: [
         {
            label: "Dashboard",
            url: "/",
            icon: <HomeOutlinedIcon />,
            activeIcon: <HomeOutlinedIcon />,
            children: [],
            permission: "company-dashboard-view",
         },

         {
            label: "Brands",
            url: "/brands",
            icon: <BrandingWatermarkOutlinedIcon />,
            activeIcon: <BrandingWatermarkOutlinedIcon />,
            permission: "customer-list",
            children: [],
         },
         {
            label: "Categories",
            url: "/categories",
            icon: <CategoryOutlinedIcon />,
            activeIcon: <CategoryOutlinedIcon />,
            permission: "customer-list",
            children: [],
         },
         {
            label: "Products",
            url: "/products",
            icon: <DashboardOutlinedIcon />,
            activeIcon: <DashboardOutlinedIcon />,
            permission: "customer-list",
            children: [],
         },
         {
            label: "Orders",
            url: "/orders",
            icon: <WidgetsOutlinedIcon />,
            activeIcon: <WidgetsOutlinedIcon />,
            permission: "customer-list",
            children: [],
         },
         {
            label: "Customers",
            url: "/customers",
            icon: <PeopleOutlinedIcon />,
            activeIcon: <PeopleOutlinedIcon />,
            permission: "customer-list",
            children: [],
         },

         // {
         //    label: "Delivery Charges",
         //    url: "/delivery-charges",
         //    icon: <LocalAtmOutlinedIcon />,
         //    activeIcon: <LocalAtmOutlinedIcon />,
         //    permission: "customer-list",
         //    children: [],
         // },
      ],
   },

   {
      header: "Setup",
      items: [
         {
            label: "Settings",
            url: "/settings",
            icon: <SettingsOutlinedIcon />,
            activeIcon: <SettingsOutlinedIcon />,
            children: [],
            permission: "setting-view",
         },
      ],
   },
];
