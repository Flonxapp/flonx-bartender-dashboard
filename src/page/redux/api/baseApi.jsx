import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/auth/authSlice"; // path adjust

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.flonxapp.com/api/v1",

  prepareHeaders: (headers, { getState }) => {
    const token = getState().logInUser.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

// AUTO LOGOUT WRAPPER
const baseQueryWithAuth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  
  if (result?.error?.status === 401) {
    api.dispatch(logout()); 
    localStorage.removeItem("persist:quiz-app"); 

    window.location.href = "/login";
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["overview", "host"],
  endpoints: () => ({}),
});
export const imageUrl = "https://api.flonxapp.com";
