import { mainApi } from "./mainApi";

export const eventsApi = mainApi.injectEndpoints({
   tagTypes: ["events"],
   endpoints: (builder) => ({
      getEvents: builder.query({
         query: (params) => ({
            url: `/api/admin/events`,
            params,
         }),
         providesTags: ["events"],
      }),
      getEventsSingle: builder.query({
         query: (id) => ({
            url: `/api/admin/events/${id}`,
         }),
         providesTags: ["events"],
      }),
      getUpcomingEvents: builder.query({
         query: (params) => ({
            url: `/api/admin/upcoming-events`,
            params,
         }),
         providesTags: ["events"],
      }),
      getPastEvents: builder.query({
         query: (params) => ({
            url: `/api/admin/past-events`,
            params,
         }),
         providesTags: ["events"],
      }),
      postEvents: builder.mutation({
         query: (data) => ({
            url: `/api/admin/events`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["events"],
      }),

      deleteEvents: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/events/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["events"],
      }),
   }),
});

export const {
   useGetEventsQuery,
   useGetEventsSingleQuery,
   useGetUpcomingEventsQuery,
   useGetPastEventsQuery,
   usePostEventsMutation,
   useDeleteEventsMutation,
} = eventsApi;
