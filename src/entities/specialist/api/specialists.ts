import { API_BASE } from '@/shared/config/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ParsedSpecialistResponse,
  SpecialistFilters,
} from '../model/types';
import { normalizeSpecialists } from '../lib/normalizeResponse';

export const psychologistApi = createApi({
  reducerPath: 'psychologistApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (builder) => ({
    getPsychologists: builder.query<
      ParsedSpecialistResponse,
      SpecialistFilters
    >({
      query: (filters) => ({
        url: 'search/specialists',
        params: filters,
      }),
      transformResponse: normalizeSpecialists,
      serializeQueryArgs: ({ queryArgs }) => {
        const { offset: _offset, ...rest } = queryArgs;
        return JSON.stringify(rest);
      },
      merge: (currentCache, newItems) => {
        currentCache.specialists.push(...newItems.specialists);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.offset !== previousArg?.offset;
      },
    }),
  }),
});

export const { useGetPsychologistsQuery } = psychologistApi;
