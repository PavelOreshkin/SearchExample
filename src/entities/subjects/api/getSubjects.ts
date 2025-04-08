import { API_BASE } from '@/shared/config/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subjectApi = createApi({
  reducerPath: 'subjectApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (builder) => ({
    getSubjects: builder.query<any[], void>({
      query: () => ({
        url: 'subjects',
      }),
    }),
  }),
});

export const { useGetSubjectsQuery } = subjectApi;
