import { API_BASE } from '@/shared/config/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const psychologistApi = createApi({
  reducerPath: 'psychologistApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (builder) => ({
    getPsychologists: builder.query<any>({
      query: (filters) => ({
        url: 'search/specialists',
        params: filters,
      }),
    }),
  }),
});

export const { useGetPsychologistsQuery } = psychologistApi;
