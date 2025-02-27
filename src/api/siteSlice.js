import { mainApi } from "./mainApi";

export const siteApi = mainApi.injectEndpoints({
   tagTypes: [
      "influencer-categories",
      "site-settings",
      "contact",
      "blogs",
      "BlogsSingle",
      "faq",
      "featured-influencers",
      "single-gallery",
      "featured-brands",
      "custom-package-order",
      "our-team",
   ],
   endpoints: (builder) => ({
      getInfluencerCategories: builder.query({
         query: (params) => ({
            url: `/api/influencer-categories`,
            params,
         }),
         providesTags: ["influencer-categories"],
      }),
      getFeaturedBrands: builder.query({
         query: (params) => ({
            url: `/api/featured-brands`,
            params,
         }),
         providesTags: ["featured-brands"],
      }),
      getSiteSettings: builder.query({
         query: (params) => ({
            url: `/api/site-settings`,
            params,
         }),
         providesTags: ["site-settings"],
      }),
      getBlogs: builder.query({
         query: (params) => ({
            url: `/api/blogs`,
            params,
         }),
         providesTags: ["blogs"],
      }),
      getBlogsSingle: builder.query({
         query: (slug) => ({
            url: `/api/blogs/${slug}`,
         }),
         providesTags: ["BlogsSingle"],
      }),

      getFaq: builder.query({
         query: (params) => ({
            url: `/api/faq`,
            params,
         }),
         providesTags: ["faq"],
      }),
      getFeaturedinfluencers: builder.query({
         query: (params) => ({
            url: `/api/featured-influencers`,
            params,
         }),
         providesTags: ["featured-influencers"],
      }),
      getTeam: builder.query({
         query: (params) => ({
            url: `/api/our-team`,
            params,
         }),
         providesTags: ["our-team"],
      }),
      getGallery: builder.query({
         query: (params) => ({
            url: `/api/gallery`,
            params,
         }),
         providesTags: ["gallery"],
      }),
      getSingleGallery: builder.query({
         query: (id) => ({
            url: `/api/gallery/${id}`,
         }),
         providesTags: ["single-gallery"],
      }),
      postContact: builder.mutation({
         query: (data) => ({
            url: `/api/contact-us`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["contact"],
      }),
      postCustomPackage: builder.mutation({
         query: (data) => ({
            url: `/api/custom-package-order`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["custom-package-order"],
      }),
   }),
});

export const {
   useGetInfluencerCategoriesQuery,
   useGetSiteSettingsQuery,
   useGetBlogsQuery,
   useGetBlogsSingleQuery,
   useGetFaqQuery,
   useGetTeamQuery,
   useGetFeaturedinfluencersQuery,
   useGetGalleryQuery,
   useGetFeaturedBrandsQuery,
   useGetSingleGalleryQuery,
   usePostContactMutation,
   usePostCustomPackageMutation,
} = siteApi;
