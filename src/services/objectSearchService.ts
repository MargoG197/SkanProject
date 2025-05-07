import { THistogramData, ThistogramResult, TobjSearchResult } from "../types/types";
import { apiSlice } from "./apiSlice";


type TRequest = {
  data: THistogramData,
  token:string
}

export const objectSearchServiceAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
     histogramSearch: build.mutation<ThistogramResult, TRequest>({
      query: ({data, token}) => ({
        method: "POST",
        url: '/api/v1/objectsearch/histograms',
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
        'Accept': 'application/json'
         },
         body:JSON.stringify(data)
       }),
      //  providesTags:['login']
     }),
    loginAPI: build.mutation<TobjSearchResult, TRequest>({
      query: ({data, token}) => ({
        method: "POST",
        url: '/api/v1/objectsearch',
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
        'Accept': 'application/json'
        },
        body:JSON.stringify(data)
      }),
      // invalidatesTags:()=>['login']
    }),
   
  })

})

export const {useHistogramSearchMutation, useLoginAPIMutation} = objectSearchServiceAPI