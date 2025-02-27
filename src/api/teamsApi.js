import { mainApi } from "./mainApi";

export const galleryApi = mainApi.injectEndpoints({
   tagTypes: ["gallery"],
   endpoints: (builder) => ({
      getGallery: builder.query({
         query: (params) => ({
            url: `/api/admin/gallery`,
            params,
         }),
         providesTags: ["gallery"],
      }),
      getGallerySingle: builder.query({
         query: (slug) => ({
            url: `/api/admin/gallery/${slug}`,
         }),
         providesTags: ["gallery"],
      }),

      postGallery: builder.mutation({
         query: (data) => ({
            url: `/api/admin/gallery`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["gallery"],
      }),
      postGalleryUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/gallery/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["gallery"],
      }),
      postGalleryStatusUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/admin/gallery/update-status/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["gallery"],
      }),
      deleteGallery: builder.mutation({
         query: (id) => ({
            url: `/api/admin/gallery/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["gallery"],
      }),
   }),
});

export const {
   useGetGalleryQuery,
   useGetGallerySingleQuery,
   usePostGalleryMutation,
   usePostGalleryUpdateMutation,
   usePostGalleryStatusUpdateMutation,
   useDeleteGalleryMutation,
} = galleryApi;
