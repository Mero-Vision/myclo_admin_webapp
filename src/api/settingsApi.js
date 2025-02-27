import { mainApi } from "./mainApi";

export const settingsApi = mainApi.injectEndpoints({
   tagTypes: [
      "settings",
      "countries",
      "genders",
      "edu",
      "application",
      "countryNepal",
      "paymentMethods",
      "email",
   ],
   endpoints: (builder) => ({
      getSettings: builder.query({
         query: (params) => ({
            url: `/api/admin/site-settings`,
            params,
         }),
         providesTags: ["settings"],
      }),

      postSettingsUpdate: builder.mutation({
         query: ({ data, type }) => ({
            url: `/api/admin/site-settings`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["settings"],
      }),

      // master data

      getCountries: builder.query({
         query: (params) => ({
            url: `/api/super-admin/master-data/country-list`,
            params,
         }),
         providesTags: ["countries"],
      }),

      getGenders: builder.query({
         query: (params) => ({
            url: `/api/super-admin/master-data/genders`,
            params,
         }),
         providesTags: ["genders"],
      }),

      getEducationLevels: builder.query({
         query: (params) => ({
            url: `/api/super-admin/master-data/education-levels`,
            params,
         }),
         providesTags: ["edu"],
      }),
      getApplicationPeriod: builder.query({
         query: (params) => ({
            url: `/api/super-admin/application-periods`,
            params,
         }),
         providesTags: ["application"],
      }),
      getCountryNepal: builder.query({
         query: (params) => ({
            url: `/api/super-admin/master-data/countries/nepal`,
            params,
         }),
         providesTags: ["countryNepal"],
      }),
      getPaymentMethods: builder.query({
         query: (params) => ({
            url: `/api/super-admin/master-data/payment-methods`,
            params,
         }),
         providesTags: ["paymentMethods"],
      }),

      // email
      getEmail: builder.query({
         query: (params) => ({
            url: `/api/admin/email`,
            params,
         }),
         providesTags: ["email"],
      }),
      postEmail: builder.mutation({
         query: (data) => ({
            url: `/api/admin/email`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["email"]),
      }),
   }),
});

export const {
   useGetSettingsQuery,
   usePostSettingsUpdateMutation,
   useGetCountriesQuery,
   useGetGendersQuery,
   useGetEducationLevelsQuery,
   useGetApplicationPeriodQuery,
   useGetCountryNepalQuery,
   useGetPaymentMethodsQuery,
   useGetEmailQuery,
   usePostEmailMutation,
} = settingsApi;
