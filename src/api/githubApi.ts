import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Response, IUser, IUserInfo, IRepo} from "../types";

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
          per_page: 15,
          q: search
        }
      }),
      transformResponse: (response: Response<IUser>) => response.items
    }),
    getUserByName: builder.query<IUserInfo, string>({
      query: (username) => ({
        url: `users/${username}`,
        params: {
          page: 1,
          per_page: 15,
        }
      }),
    }),
    getUserRepos: builder.query<IRepo[], string>({
      query: (username) => ({
        url: `users/${username}/repos`,
        params: {
          page: 1,
          per_page: 15,
        }
      })
    }),
    getUserFollowers: builder.query<IUser[], string>({
      query: (username) => ({
        url: `users/${username}/followers`,
        params: {
          page: 1,
          per_page: 15,
        }
      })
    }),
    getUserFollowing: builder.query<IUser[], string>({
      query: (username) => ({
        url: `users/${username}/following`,
        params: {
          page: 1,
          per_page: 15,
        }
      })
    })
  })
})

export const {
  useLazySearchUsersQuery,
  useGetUserByNameQuery,
  useGetUserReposQuery,
  useGetUserFollowersQuery,
  useGetUserFollowingQuery
} = githubApi
