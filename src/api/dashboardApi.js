import { mainApi } from "./mainApi";

export const dashboardApi = mainApi.injectEndpoints({
   tagTypes: ["Dashboard"],
   endpoints: (builder) => ({
      getDashboard: builder.query({
         query: (params) => ({
            url: `/api/admin/dashboard`,
            params,
         }),
         providesTags: ["Dashboard"],
      }),
   }),
});

export const { useGetDashboardQuery } = dashboardApi;
