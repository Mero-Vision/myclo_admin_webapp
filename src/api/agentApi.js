import { mainApi } from "./mainApi";

export const agentApi = mainApi.injectEndpoints({
   tagTypes: ["agent"],
   endpoints: (builder) => ({
      getAgent: builder.query({
         query: (params) => ({
            url: `/api/super-admin/agent`,
            params,
         }),
         providesTags: ["agent"],
      }),
      getAgentSingle: builder.query({
         query: (slug) => ({
            url: `/api/super-admin/agent/${slug}`,
         }),
         providesTags: ["agent"],
      }),

      postAgent: builder.mutation({
         query: (data) => ({
            url: `/api/super-admin/agent`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["agent"]),
      }),
      postAgentUpdate: builder.mutation({
         query: ({ data, slug }) => ({
            url: `/api/super-admin/agent/${slug}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["agent"]),
      }),

      deleteAgent: builder.mutation({
         query: (slug) => ({
            url: `/api/super-admin/agent/${slug}`,
            method: "DELETE",
         }),
         invalidatesTags: (result, error) => (error ? [] : ["agent"]),
      }),
   }),
});

export const {
   useGetAgentQuery,
   useGetAgentSingleQuery,
   usePostAgentMutation,
   usePostAgentUpdateMutation,
   usePostAgentStatusUpdateMutation,
   useDeleteAgentMutation,
} = agentApi;
