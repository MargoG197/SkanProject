// import { apiSlice } from "./apiSlice";



// type TAuth = {
// login: string,
// password: string
// }

// type TToken = {
//   accessToken: string,
//   expire: string
// }


// export const loginServiceAPI = apiSlice.injectEndpoints({
//   endpoints: (build) => ({
//     loginAPI: build.mutation<TToken|string, TAuth>({
//       query: (data) => ({
//         method: "POST",
//         url: '/api/v1/account/login',
//         headers: {
//         'Content-type': 'application/json',
//         'Accept': 'application/json'
//         },
//         body:JSON.stringify(data)
//       }),
//       invalidatesTags:()=>['login']
//     }),
//   })

// })

// export const {useLoginAPIMutation} = loginServiceAPI

