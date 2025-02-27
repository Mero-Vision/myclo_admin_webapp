import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mainApi } from "./mainApi";

const localArray = [
   "account_access_token",
   "account_refresh_token",
   "user",
   "company",
];
export const authSlice = createSlice({
   name: "auth",
   initialState: {},
   reducers: {
      auth: (state, action) => action.payload,
      logout: (state, action) => {
         localArray?.map((item) => localStorage.removeItem(item));
      },
   },
});

export const { auth, logout } = authSlice.actions;
export const authApi = mainApi.injectEndpoints({
   tagTypes: ["Auth"],
   endpoints: (builder) => ({
      login: builder.mutation({
         query: (data) => ({
            url: `/api/admin/login`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: ["Auth"],
         onSuccess: (response, variables, context) => {
            context.dispatch(auth(response));
            console.log({ context });
         },
      }),
   }),
});

export const { useLoginMutation } = authApi;

export const refreshAccessToken = async () => {
   const refresh_token = localStorage.getItem(
      "account_refresh_token"
   );

   try {
      const response = await axios.post(
         `${
            import.meta.env.VITE_BASE_URL
         }/api/refresh-token/${refresh_token}`
      );

      if (response?.data) {
         localStorage.setItem(
            "account_access_token",
            response?.data?.data?.token
         );

         localStorage.setItem(
            "account_refresh_token",
            response?.data?.data?.refresh_token
         );
      }
   } catch (err) {
      console.log({ err });
   }
};
