import { mainApi } from "./mainApi";

export const customersApi = mainApi.injectEndpoints({
   tagTypes: ["Customers"],
   endpoints: (builder) => ({
      getCustomers: builder.query({
         query: (params) => ({
            url: `/api/admin/customers`,
            params,
         }),
         providesTags: ["Customers"],
      }),
      getCustomersSingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/customer-orders/${slug}`,
         }),
         providesTags: ["Customers"],
      }),

      postCustomers: builder.mutation({
         query: (data) => ({
            url: `/api/admin/customers`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Customers"],
      }),
      postCustomersUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/customers/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Customers"],
      }),
      deleteCustomers: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/customers/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["Customers"],
      }),
   }),
});

export const {
   useGetCustomersQuery,
   useGetCustomersSingleQuery,
   usePostCustomersMutation,
   usePostCustomersUpdateMutation,
   useDeleteCustomersMutation,
} = customersApi;
