import { mainApi } from "./mainApi";

export const productsApi = mainApi.injectEndpoints({
   tagTypes: ["Products"],
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: (params) => ({
            url: `/api/admin/product`,
            params,
         }),
         providesTags: ["Products"],
      }),
      getProductsSingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/product/${slug}`,
         }),
         providesTags: ["Products"],
      }),

      postProducts: builder.mutation({
         query: (data) => ({
            url: `/api/admin/product`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Products"],
      }),
      postProductsUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/product/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Products"],
      }),
      deleteProducts: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/product/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Products"],
      }),
   }),
});

export const {
   useGetProductsQuery,
   useGetProductsSingleQuery,
   usePostProductsMutation,
   usePostProductsUpdateMutation,
   useDeleteProductsMutation,
} = productsApi;
