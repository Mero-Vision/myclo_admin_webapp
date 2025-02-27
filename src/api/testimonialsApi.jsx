import { mainApi } from "./mainApi";

export const testimonialApi = mainApi.injectEndpoints({
   tagTypes: ["testimonial"],
   endpoints: (builder) => ({
      getTestimonial: builder.query({
         query: (params) => ({
            url: `/api/super-admin/testimonial`,
            params,
         }),
         providesTags: ["testimonial"],
      }),
      getTestimonialSingle: builder.query({
         query: (slug) => ({
            url: `/api/super-admin/testimonial/${slug}`,
         }),
         providesTags: ["testimonial"],
      }),

      postTestimonial: builder.mutation({
         query: (data) => ({
            url: `/api/super-admin/testimonial`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["testimonial"],
      }),
      postTestimonialUpdate: builder.mutation({
         query: ({ data, id }) => ({
            url: `/api/super-admin/testimonial/${id}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["testimonial"],
      }),

      deleteTestimonial: builder.mutation({
         query: (slug) => ({
            url: `/api/super-admin/testimonial/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["testimonial"],
      }),
   }),
});

export const {
   useGetTestimonialQuery,
   useGetTestimonialSingleQuery,
   usePostTestimonialMutation,
   usePostTestimonialUpdateMutation,
   usePostTestimonialStatusUpdateMutation,
   useDeleteTestimonialMutation,
} = testimonialApi;
