import { TArticleResponse } from "../types/types";
import { apiSlice } from "./apiSlice";


type TRequest = {
  idObj: {ids: string[]},
  token:string
}

export const documentsSearchServiceAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
     documentsSearch: build.mutation< TArticleResponse[], TRequest>({
      query: ({idObj, token}) => ({
        method: "POST",
        url: '/api/v1/documents',
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
        'Accept': 'application/json'
         },
         body:JSON.stringify(idObj)
       }),
      //  providesTags:['login']
     })
  })

})

export const {useDocumentsSearchMutation} = documentsSearchServiceAPI