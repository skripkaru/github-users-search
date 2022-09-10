import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Response, IUser, IUserInfo} from "../types";

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  endpoints: builder => ({
    searchUsers: builder.query<IUser[], string>({
      query: (search) => ({
        url: `search/users`,
        params: {
          page: 1,
          per_page: 5,
          q: search
        }
      }),
      transformResponse: (response: Response<IUser>) => response.items
    }),
    getUserByName: builder.query<IUserInfo, string>({
      query: (username) => ({
        url: `users/${username}`,
      }),
    }),
  })
})

export const {useSearchUsersQuery, useLazySearchUsersQuery, useGetUserByNameQuery} = githubApi
