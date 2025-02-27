import { mainApi } from "./mainApi";

export const universityCoursesApi = mainApi.injectEndpoints({
   tagTypes: ["university-courses"],
   endpoints: (builder) => ({
      getUniversityCourses: builder.query({
         query: (params) => ({
            url: `/api/super-admin/university-courses`,
            params,
         }),
         providesTags: ["university-courses"],
      }),
      getUniversityCoursesSingle: builder.query({
         query: (id) => ({
            url: `/api/super-admin/university-courses/${id}`,
         }),
         providesTags: ["university-courses"],
      }),

      postUniversityCourses: builder.mutation({
         query: (data) => ({
            url: `/api/super-admin/university-courses`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["university-courses"],
      }),
      updateUniversityCourses: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/super-admin/university-courses/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["university-courses"],
      }),
      deleteUniversityCourses: builder.mutation({
         query: (id) => ({
            url: `/api/super-admin/university-courses/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["university-courses"],
      }),
   }),
});

export const {
   useGetUniversityCoursesQuery,
   useGetUniversityCoursesSingleQuery,
   usePostUniversityCoursesMutation,
   useUpdateUniversityCoursesMutation,
   useDeleteUniversityCoursesMutation,
} = universityCoursesApi;
