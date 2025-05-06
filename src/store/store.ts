import { configureStore } from "@reduxjs/toolkit"

// import { useReducer } from "./reducers/UserSlice";
import { apiSlice } from "../services/apiSlice";

export const setupStore = () => {
  
  return configureStore({
    reducer: {
      // user: userReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware)
  });
}

export type TRootState = ReturnType<ReturnType<typeof setupStore>['getState']>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];