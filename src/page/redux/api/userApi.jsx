import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => ({ url: "/auth/login", method: "POST", body: data }),
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: "/user/register-user",
        method: "POST",
        body: data,
      }),
    }),

    // sign-up: verify the email code / resend it
    registerVerifyUser: builder.mutation({
      query: (data) => ({ url: "/user/verify-code", method: "POST", body: data }),
    }),
    resendVerifyCode: builder.mutation({
      query: (data) => ({
        url: "/user/resend-verify-code",
        method: "POST",
        body: data,
      }),
    }),

    // forgot password: send code / verify it / resend it / set new password
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: data,
      }),
    }),
    registerVerify: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-reset-otp",
        method: "POST",
        body: data,
      }),
    }),
    resentVerify: builder.mutation({
      query: (data) => ({
        url: "/auth/resend-reset-code",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    getProfile: builder.query({
      query: () => ({ url: "/user/user-profile", method: "GET" }),
      providesTags: ["profile"],
    }),
    updateProfile: builder.mutation({
      query: ({ data }) => ({
        url: "/user/update-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    updateBartenderProfile: builder.mutation({
      query: ({ data }) => ({
        url: "/user/update-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
    deleteAccount: builder.mutation({
      query: (data) => ({
        url: "/user/delete-account",
        method: "DELETE",
        body: data,
      }),
    }),

    createSupport: builder.mutation({
      query: (data) => ({ url: "/support/create", method: "POST", body: data }),
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useRegisterUserMutation,
  useRegisterVerifyUserMutation,
  useResendVerifyCodeMutation,
  useForgotPasswordMutation,
  useRegisterVerifyMutation,
  useResentVerifyMutation,
  useResetPasswordMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateBartenderProfileMutation,
  useChangePasswordMutation,
  useDeleteAccountMutation,
  useCreateSupportMutation,
} = userApi;
