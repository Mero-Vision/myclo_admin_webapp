import { mainApi } from "./mainApi";

export const universitiesApi = mainApi.injectEndpoints({
   tagTypes: ["universities"],
   endpoints: (builder) => ({
      getUniversities: builder.query({
         query: (params) => ({
            url: `/api/super-admin/university`,
            params,
         }),
         providesTags: ["universities"],
      }),
      getUniversitiesSingle: builder.query({
         query: (slug) => ({
            url: `/api/super-admin/university/${slug}`,
         }),
         providesTags: ["universities"],
      }),

      postUniversities: builder.mutation({
         query: (data) => ({
            url: `/api/super-admin/university`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["universities"],
      }),
      updateUniversities: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/super-admin/university/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["universities"],
      }),
      deleteUniversity: builder.mutation({
         query: (slug) => ({
            url: `/api/super-admin/university/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["universities"],
      }),
   }),
});

export const {
   useGetUniversitiesQuery,
   useGetUniversitiesSingleQuery,
   usePostUniversitiesMutation,
   useUpdateUniversitiesMutation,
   useDeleteUniversityMutation,
} = universitiesApi;
