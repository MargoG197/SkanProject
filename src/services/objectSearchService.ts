import { THistogramData, ThistogramResult, TObjectResult} from "../types/types";
import { apiSlice } from "./apiSlice";


type TRequest = {
  data: THistogramData,
  token:string
}

export const objectSearchServiceAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    histogramSearch: build.mutation < {data:ThistogramResult[]}, TRequest>({
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
    objectSearch: build.mutation<{items:TObjectResult[]}, TRequest>({
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

export const {useHistogramSearchMutation, useObjectSearchMutation} = objectSearchServiceAPI