import { mainApi } from "./mainApi";

export const contactApi = mainApi.injectEndpoints({
   tagTypes: ["contact", "subscriptions", "bookings"],
   endpoints: (builder) => ({
      getContact: builder.query({
         query: (params) => ({
            url: `/api/admin/contact-us`,
            params,
         }),
         providesTags: ["contact"],
      }),

      deleteContact: builder.mutation({
         query: (id) => ({
            url: `/api/admin/contact-us/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["contact"],
      }),
      getSubscriptions: builder.query({
         query: (params) => ({
            url: `/api/admin/subscription`,
            params,
         }),
         providesTags: ["subscriptions"],
      }),

      deleteSubscriptions: builder.mutation({
         query: (id) => ({
            url: `/api/admin/subscription/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["subscriptions"],
      }),
      getBookings: builder.query({
         query: (params) => ({
            url: `/api/admin/booking`,
            params,
         }),
         providesTags: ["bookings"],
      }),

      deleteBookings: builder.mutation({
         query: (id) => ({
            url: `/api/admin/booking/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["bookings"],
      }),
   }),
});

export const {
   useGetContactQuery,
   useGetSubscriptionsQuery,
   useGetBookingsQuery,
   useDeleteContactMutation,
   useDeleteSubscriptionsMutation,
   useDeleteBookingsMutation,
} = contactApi;
