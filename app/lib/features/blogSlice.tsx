import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-backend.onrender.com/api",
  }),
  endpoints: (builder) => ({
    // get all blogs post
    getAllblogs: builder.query({
      query: () => "/blogs",
    }),
    //get job post by id
    getBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
  }),
});

export const { useGetAllblogsQuery, useGetBlogByIdQuery} =
  blogsApi;
