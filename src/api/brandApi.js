import { mainApi } from "./mainApi";

export const brandApi = mainApi.injectEndpoints({
   tagTypes: ["Brand"],
   endpoints: (builder) => ({
      getBrand: builder.query({
         query: (params) => ({
            url: `/api/admin/brand`,
            params,
         }),
         providesTags: ["Brand"],
      }),
      getBrandSingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/brand/${slug}`,
         }),
         providesTags: ["Brand"],
      }),

      postBrand: builder.mutation({
         query: (data) => ({
            url: `/api/admin/brand`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["Brand"]),
      }),
      postBrandUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/brand/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["Brand"]),
      }),
      deleteBrand: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/brand/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) => (error ? [] : ["Brand"]),
      }),
   }),
});

export const {
   useGetBrandQuery,
   useGetBrandSingleQuery,
   usePostBrandMutation,
   usePostBrandUpdateMutation,
   useDeleteBrandMutation,
} = brandApi;
