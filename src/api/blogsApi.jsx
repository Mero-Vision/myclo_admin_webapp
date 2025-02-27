import { mainApi } from "./mainApi";

export const blogsApi = mainApi.injectEndpoints({
   tagTypes: ["blogs"],
   endpoints: (builder) => ({
      getBlogs: builder.query({
         query: (params) => ({
            url: `/api/admin/blogs`,
            params,
         }),
         providesTags: ["blogs"],
      }),
      getBlogsSingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/blogs/${slug}`,
         }),
         providesTags: ["blogs"],
      }),

      postBlogs: builder.mutation({
         query: (data) => ({
            url: `/api/admin/blogs`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["blogs"]),
      }),
      postBlogsUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/blogs/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["blogs"]),
      }),
      postBlogsStatusUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/blogs/update-status/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["blogs"]),
      }),
      deleteBlog: builder.mutation({
         query: (slug) => ({
            url: `/api/admin/blogs/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) => (error ? [] : ["blogs"]),
      }),
   }),
});

export const {
   useGetBlogsQuery,
   useGetBlogsSingleQuery,
   usePostBlogsMutation,
   usePostBlogsUpdateMutation,
   usePostBlogsStatusUpdateMutation,
   useDeleteBlogMutation,
} = blogsApi;
