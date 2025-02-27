import { mainApi } from "./mainApi";

export const menuItemsApi = mainApi.injectEndpoints({
   tagTypes: ["menuItems"],
   endpoints: (builder) => ({
      getMenuItems: builder.query({
         query: (params) => ({
            url: `/api/admin/menu-items`,
            params,
         }),
         providesTags: ["menuItems"],
      }),
      getMenuItemsSingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/menu-items/${slug}`,
         }),
         providesTags: ["menuItems"],
      }),

      postMenuItems: builder.mutation({
         query: (data) => ({
            url: `/api/admin/menu-items`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["menuItems"],
      }),
      postMenuItemsUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/menu-items/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["menuItems"],
      }),
      postMenuItemsStatusUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/menu-items/update-status/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["menuItems"],
      }),
      deleteMenuItems: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/menu-items/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["menuItems"],
      }),
   }),
});

export const {
   useGetMenuItemsQuery,
   useGetMenuItemsSingleQuery,
   usePostMenuItemsMutation,
   usePostMenuItemsUpdateMutation,
   usePostMenuItemsStatusUpdateMutation,
   useDeleteMenuItemsMutation,
} = menuItemsApi;
