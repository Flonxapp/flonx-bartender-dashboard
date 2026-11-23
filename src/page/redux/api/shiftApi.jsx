import { baseApi } from "./baseApi";

const shift = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyShift: builder.query({
      query: ({ status }) => ({
        url: `/shift/my-shift?status=${status}`,
        method: "GET",
      }),
      providesTags: ["shift"],
    }),

    getMyNotification: builder.query({
      query: () => ({
        url: `/notification/get-notifications`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),

    updateSeen: builder.mutation({
      query: () => {
        return {
          url: `/notification/see-notifications`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["notification"],
    }),

    getSingleShift: builder.query({
      query: ({ id }) => {
        return {
          url: `/shift/single-shift/${id}`,
          method: "GET",
        };
      },
      providesTags: ["shift"],
    }),

    getSingleVenueShift: builder.query({
      query: ({ id }) => {
        return {
          url: `/venue/get-single/${id}`,
          method: "GET",
        };
      },
      providesTags: ["shift"],
    }),

    updateShiftRequest: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/shift/accept-reject/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["shift"],
    }),

    deleteNotification: builder.mutation({
      query: (id) => {
        return {
          url: `/notification/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["notification"],
    }),
  }),
});


export const {
  useGetMyShiftQuery,
  useGetSingleShiftQuery,
  useUpdateShiftRequestMutation,
  useGetSingleVenueShiftQuery,
  useGetMyNotificationQuery,
  useUpdateSeenMutation,
  useDeleteNotificationMutation,
} = shift;
