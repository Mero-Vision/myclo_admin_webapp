import { mainApi } from "./mainApi";

export const faqApi = mainApi.injectEndpoints({
   tagTypes: ["faq"],
   endpoints: (builder) => ({
      getFaq: builder.query({
         query: (params) => ({
            url: `/api/admin/faq`,
            params,
         }),
         providesTags: ["faq"],
      }),
      getFaqSingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/faq/${slug}`,
         }),
         providesTags: ["faq"],
      }),

      postFaq: builder.mutation({
         query: (data) => ({
            url: `/api/admin/faq`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["faq"]),
      }),
      postFaqUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/faq/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["faq"]),
      }),
      postFaqStatusUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/faq/update-status/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["faq"]),
      }),
      deleteFaq: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/faq/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) => (error ? [] : ["faq"]),
      }),
   }),
});

export const {
   useGetFaqQuery,
   useGetFaqSingleQuery,
   usePostFaqMutation,
   usePostFaqUpdateMutation,
   usePostFaqStatusUpdateMutation,
   useDeleteFaqMutation,
} = faqApi;
