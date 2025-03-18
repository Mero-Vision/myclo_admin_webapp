import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../components/common/404";
import Dashboard from "../components/local/dashboard/Dashboard";
import Brand from "../components/local/dashboard/pages/Brand/Brand";
import Category from "../components/local/dashboard/pages/Category/Category";
import Customers from "../components/local/dashboard/pages/Customers/Customers";
import DeliveryCharges from "../components/local/dashboard/pages/DeliveryCharges/DeliveryCharges";
import Orders from "../components/local/dashboard/pages/Orders/Orders";
import Products from "../components/local/dashboard/pages/Products/Products";
import Settings from "../components/local/dashboard/pages/settings/Settings";
import StoreSiteSettings from "../components/local/dashboard/pages/settings/storeSiteSettings/StoreSiteSettings";
import UserProfile from "../components/local/dashboard/pages/settings/userProfile/UserProfile";
import UserProfileEdit from "../components/local/dashboard/pages/settings/userProfile/UserProfileEdit";
import Login from "../components/local/login";
import MainDashboardLayout from "../layout/MainDashboardLayout";
import RedirectLayout from "../layout/RedirectLayout";

const SiteRoutes = () => {
   return (
      <Routes>
         <Route element={<RedirectLayout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<Login />} />
         </Route>
         <Route element={<MainDashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/brands" element={<Brand />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route
               path="/delivery-charges"
               element={<DeliveryCharges />}
            />
            {/* <Route path="/menu-items" element={<MenuItems />} /> */}
            <Route path="/settings" element={<Settings />}>
               <Route
                  index
                  element={<Navigate to="user-profile" />}
               />
               <Route path="user-profile" element={<UserProfile />} />

               <Route
                  path="user-profile/edit"
                  element={<UserProfileEdit />}
               />
               <Route
                  path="store-site-settings"
                  element={<StoreSiteSettings />}
               />
            </Route>{" "}
         </Route>
      </Routes>
   );
};

export default SiteRoutes;
