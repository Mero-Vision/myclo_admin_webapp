import { mainApi } from "./mainApi";

export const menuCategoryApi = mainApi.injectEndpoints({
   tagTypes: ["menuCategory", "dashboard"],
   endpoints: (builder) => ({
      getDashboard: builder.query({
         query: (params) => ({
            url: `/api/admin/dashboard`,
            params,
         }),
         providesTags: ["dashboard"],
      }),
      getMenuCategory: builder.query({
         query: (params) => ({
            url: `/api/admin/category`,
            params,
         }),
         providesTags: ["menuCategory"],
      }),
      getMenuCategorySingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/category/${slug}`,
         }),
         providesTags: ["menuCategory"],
      }),

      postMenuCategory: builder.mutation({
         query: (data) => ({
            url: `/api/admin/category`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["menuCategory"],
      }),
      postMenuCategoryUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/category/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["menuCategory"],
      }),
      deleteMenuCategory: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/category/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["menuCategory"],
      }),
   }),
});

export const {
   useGetDashboardQuery,
   useGetMenuCategoryQuery,
   useGetMenuCategorySingleQuery,
   usePostMenuCategoryMutation,
   usePostMenuCategoryUpdateMutation,
   useDeleteMenuCategoryMutation,
} = menuCategoryApi;
