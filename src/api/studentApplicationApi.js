import { mainApi } from "./mainApi";

export const studentApplicationApi = mainApi.injectEndpoints({
   tagTypes: ["studentApplication"],
   endpoints: (builder) => ({
      getStudentApplication: builder.query({
         query: (params) => ({
            url: `/api/super-admin/student-applications`,
            params,
         }),
         providesTags: ["studentApplication"],
      }),
      getStudentApplicationSingle: builder.query({
         query: (id) => ({
            url: `/api/super-admin/student-applications/${id}`,
         }),
         providesTags: ["studentApplication"],
      }),

      postStudentApplication: builder.mutation({
         query: (data) => ({
            url: `/api/super-admin/student-applications`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["studentApplication"],
      }),

      postStudentApplicationUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/super-admin/student-applications/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["studentApplication"],
      }),

      deleteStudentApplication: builder.mutation({
         query: (id) => ({
            url: `/api/super-admin/student-applications/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["studentApplication"],
      }),
   }),
});

export const {
   useGetStudentApplicationQuery,
   useGetStudentApplicationSingleQuery,
   usePostStudentApplicationMutation,
   usePostStudentApplicationUpdateMutation,
   useDeleteStudentApplicationMutation,
} = studentApplicationApi;
