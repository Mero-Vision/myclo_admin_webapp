import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import customToaster from "../components/common/CustomToasters/CustomToaster";
import { getToken } from "../utils/helpers";
const baseQuery = fetchBaseQuery({
   baseUrl: import.meta.env.VITE_BASE_URL,
   prepareHeaders: (headers) => {
      const token = getToken()?.access_token;
      if (token) {
         headers?.set("Authorization", `Bearer ${token}`);

         headers?.set("Accept", "application/json");

         return headers;
      } else {
         headers?.set("Accept", "application/json");
      }
   },
});

// export const customBaseQuery = () => {
//    const baseQueryWithReauth = async (args, api, extraOptions) => {
//       let result = await baseQuery(args, api, extraOptions);

//       console.log({ apiiiiiiiiiiiiiiii: api, result, args });
//       if (
//          result?.error ||
//          result?.error?.status === 401 ||
//          result?.error?.status === 400
//       ) {
//          toast.error(result?.error?.data?.message);
//          window.location.replace("/login");
//       }
//       return result;
//    };
//    return baseQueryWithReauth;
// };

export const customBaseQuery = () => {
   const baseQueryWithReauth = async (args, api, extraOptions) => {
      let result = await baseQuery(args, api, extraOptions);

      if (result?.error && result.error.status === 401) {
         try {
            await refreshAccessToken();
            result = await baseQuery(args, api, extraOptions);
            if (result?.error) {
               customToaster({
                  type: "danger",
                  message: result.error.data?.message,
               });

               localStorage.clear();

               if (window.location.pathname !== "/login") {
                  window.location.replace("/login");
               }
            }
         } catch (error) {
            customToaster({
               type: "danger",
               message: result.error.data?.message,
            });

            if (window.location.pathname !== "/login") {
               window.location.replace("/login");
            }
         }
      }
      return result;
   };
   return baseQueryWithReauth;
};
