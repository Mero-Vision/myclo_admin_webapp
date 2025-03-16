import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
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
            url: "/Categories",
            icon: <MenuBookOutlinedIcon />,
            activeIcon: <MenuBookOutlinedIcon />,
            permission: "customer-list",
            children: [],
         },
         // {
         //    label: "Products",
         //    url: "/products",
         //    icon: <MenuBookOutlinedIcon />,
         //    activeIcon: <MenuBookOutlinedIcon />,
         //    permission: "customer-list",
         //    children: [],
         // },
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
