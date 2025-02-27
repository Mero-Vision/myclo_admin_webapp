import { mainApi } from "./mainApi";

export const companyApi = mainApi.injectEndpoints({
   tagTypes: ["company"],
   endpoints: (builder) => ({
      getCompany: builder.query({
         query: () => ({
            url: `/api/super-admin/company`,
         }),
         providesTags: ["company"],
      }),
      getCompanySingle: builder.query({
         query: (id) => ({
            url: `/api/super-admin/company/${id}`,
         }),
         providesTags: ["company"],
      }),

      postCompanyUpdate: builder.mutation({
         query: ({ data, id }) => ({
            url: `/api/super-admin/company/${id}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["company"],
      }),
   }),
});

export const {
   useGetCompanyQuery,
   useGetCompanySingleQuery,
   usePostCompanyUpdateMutation,
} = companyApi;
