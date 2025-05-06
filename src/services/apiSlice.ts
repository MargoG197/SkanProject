import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const API_URL = import.meta.env.BASE_URL as string;
const API_URL = "https://gateway.scan-interfax.ru/"

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['login',], // Общие теги для всех API
  endpoints: () => ({}), // Пока пусто, будем инжектить эндпоинты
});