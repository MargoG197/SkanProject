import { apiSlice } from "./apiSlice";


type TRequest = {
  ids: string[],
  token:string
}

export const documentsSearchServiceAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
     documentsSearch: build.mutation<any, TRequest>({
      query: ({ids, token}) => ({
        method: "POST",
        url: '/api/v1/documents',
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
        'Accept': 'application/json'
         },
         body:JSON.stringify(ids)
       }),
      //  providesTags:['login']
     })
  })

})

export const {useDocumentsSearchMutation} = documentsSearchServiceAPI