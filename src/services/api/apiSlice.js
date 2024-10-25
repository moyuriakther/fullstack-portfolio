// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-server-delta-ten.vercel.app/api' }),
  endpoints: (builder) => ({
    getResume: builder.query({
      query: () => `/resume`,
    }),
    getAllBLog: builder.query({
        query: () => ({
          url: `/blog`,
          method: "GET",
        }),
        // providesTags: [ "blog"],
    }),
    getBlogById: builder.query({
        query: (id) => ({
          url: `/blog/${id}`,
          method: "GET",
        }),
        // providesTags: ["blog"],
      }),
    getAllProjects: builder.query({
        query: () => ({
            url: `/project`,
            method: "GET",
        }),
        // providesTags: ["project" ],
    }),
    getSingleProject: builder.query({
        query: (id) => ({
          url: `/project/${id}`,
          method: "GET",
        }),
        // providesTags: ["project"],
    }),
    getAllSkills: builder.query({
        query: () => ({
          url: `/skill`,
          method: "GET",
        }),
        // providesTags: ["skill"],
    }),
    getSkillById: builder.query({
        query: (id) => ({
          url: `/skill/${id}`,
          method: "GET",
        }),
        // providesTags: ["skill"],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllBLogQuery,
    useGetAllProjectsQuery,
    useGetAllSkillsQuery, 
    useGetResumeQuery, 
    useGetBlogByIdQuery, 
    useGetSingleProjectQuery, 
    useGetSkillByIdQuery 
} = apiSlice