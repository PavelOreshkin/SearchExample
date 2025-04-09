import { API_BASE } from '@/shared/config/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ParsedSpecialistResponse } from '../model/types';
import { normalizeSpecialists } from '../lib/normalizeResponse';

// const mockData = [
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     sex: 1,
//     age: 35,
//     photoUrl: 'https://dummyimage.com/512x512',
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     sex: 1,
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 0,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     sex: 2,
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
//   {
//     userId: 'c218310a-9e2b-4447-ad52-7718b1e4577c',
//     name: 'Михаил Владимирович',
//     age: 35,
//     avatarId: 'avatar-male-1',
//     level: 1,
//     rating: 80,
//     defaultSubjectName: '#семья',
//     subjectsCount: 0,
//     onlineStatus: 2,
//     lastActivityTime: '2023-10-08T09:28:24.2985824Z',
//   },
// ];

// const mockBaseQuery = async () => {
//   return {
//     data: {
//       items: mockData,
//       totalCount: 1,
//     },
//   };
// };

export const psychologistApi = createApi({
  reducerPath: 'psychologistApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  // baseQuery: mockBaseQuery,
  endpoints: (builder) => ({
    getPsychologists: builder.query<ParsedSpecialistResponse, any>({
      query: (filters) => ({
        url: 'search/specialists',
        params: filters,
      }),
      transformResponse: normalizeSpecialists,
      serializeQueryArgs: ({ queryArgs }) => {
        const { offset, ...rest } = queryArgs;
        return JSON.stringify(rest);
      },
      merge: (currentCache, newItems) => {
        W;
        currentCache.specialists.push(...newItems.specialists);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.offset !== previousArg?.offset;
      },
    }),
  }),
});

export const { useGetPsychologistsQuery } = psychologistApi;
