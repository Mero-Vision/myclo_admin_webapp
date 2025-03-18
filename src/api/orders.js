import { mainApi } from "./mainApi";

export const ordersApi = mainApi.injectEndpoints({
   tagTypes: ["Orders"],
   endpoints: (builder) => ({
      getOrders: builder.query({
         query: (params) => ({
            url: `/api/admin/orders`,
            params,
         }),
         providesTags: ["Orders"],
      }),
      getOrdersSingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/orders/${slug}`,
         }),
         providesTags: ["Orders"],
      }),

      postOrders: builder.mutation({
         query: (data) => ({
            url: `/api/admin/orders`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Orders"],
      }),
      postOrdersStatusUpdate: builder.mutation({
         query: ({ data, id }) => ({
            url: `/api/admin/orders/update-status/${id}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Orders"],
      }),
      deleteOrders: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/orders/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Orders"],
      }),
   }),
});

export const {
   useGetOrdersQuery,
   useGetOrdersSingleQuery,
   usePostOrdersMutation,
   usePostOrdersStatusUpdateMutation,
   useDeleteOrdersMutation,
} = ordersApi;
