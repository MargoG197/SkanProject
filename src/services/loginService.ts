import { apiSlice } from "./apiSlice";
import { TToken, TAuth, TAccInfo } from "../types/types";



export const loginServiceAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
     requestAccInfo: build.query<TAccInfo, string|null>({
      query: (token) => ({
        method: "GET",
        url: '/api/v1/account/info',
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
        'Accept': 'application/json'
        }
       }),
       providesTags:['login']
     }),
    loginAPI: build.mutation<TToken | string, TAuth>({
      query: (data) => ({
        method: "POST",
        url: '/api/v1/account/login',
        headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
        },
        body:JSON.stringify(data)
      }),
      invalidatesTags:()=>['login']
    }),
   
  })

})

export const {useLoginAPIMutation, useLazyRequestAccInfoQuery} = loginServiceAPI

