import { API_BASE } from '@/shared/config/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { normalizeSubjects } from '../lib/normalizeResponse';
import type { ParsedSubject } from '../model/types';

// Чтобы симулировать ошибку нужно разкоментировать этот блок:
// const errorMockBaseQuery = async () => {
//   return {
//     error: {
//       status: 500,
//       data: { message: 'Ошибка запроса получения тем' },
//     },
//   };
// };

// и добавить эту строчку в функцию ниже
// baseQuery: errorMockBaseQuery,

export const subjectApi = createApi({
  reducerPath: 'subjectApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (builder) => ({
    getSubjects: builder.query<ParsedSubject[], void>({
      query: () => ({
        url: 'subjects',
      }),
      transformResponse: normalizeSubjects,
    }),
  }),
});

export const { useGetSubjectsQuery } = subjectApi;
