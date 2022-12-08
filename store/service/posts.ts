import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6246c1b4e3450d61b00249a5.mockapi.io/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPostsByLimit: builder.query({
      query: (page) => `posts?_limit=25&_page=${page}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: "Post", id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
      // }),
    }),
    getPostsByUserId: builder.query({
      query: ({ page, userId }) =>
        `posts?_limit=25&_page=${page}&userId=${userId}`,
    }),
    getCommentsByPostId: builder.query({
      query: (postId) => `posts/${postId}/comments`,
    }),
    addPost: builder.mutation({
      query: (postImg: any, postTitle: string, postBody: string) => ({
        url: `posts`,
        method: "POST",
        body: {
          postImg,
          postTitle,
          postBody,
        },
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsByLimitQuery,
  useGetCommentsByPostIdQuery,
  useGetPostsByUserIdQuery,
  util: { getRunningMutationThunk },
} = postsApi;
export const {getPostsByLimit} = postsApi.endpoints