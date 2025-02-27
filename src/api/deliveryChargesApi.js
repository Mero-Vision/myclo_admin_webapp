import { mainApi } from "./mainApi";

export const deliveryChargesApi = mainApi.injectEndpoints({
   tagTypes: ["deliveryCharges"],
   endpoints: (builder) => ({
      getDeliveryCharges: builder.query({
         query: () => ({
            url: `/api/admin/delivery-charges`,
         }),
         providesTags: ["deliveryCharges"],
      }),

      postDeliveryChargesUpdate: builder.mutation({
         query: ({ data, id }) => ({
            url: `/api/admin/delivery-charges/bulk-update`,
            method: "POST",
            body: { ...data, _method: "PUT" },
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["deliveryCharges"],
      }),
   }),
});

export const {
   useGetDeliveryChargesQuery,
   usePostDeliveryChargesUpdateMutation,
} = deliveryChargesApi;
