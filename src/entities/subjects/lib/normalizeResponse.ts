// import type {
//   ParsedSpecialist,
//   ParsedSpecialistResponse,
//   SpecialistListRawResponse,
// } from '../model/types';

// export const normalizeSubjects = (
//   response: SpecialistListRawResponse,
// ): ParsedSpecialistResponse => {
//   const parsedSpecialists: ParsedSpecialist[] = response.items.map((item) => {
//     return {
//       userId: item.userId,
//       name: item.name,
//       sex: item.sex,
//       age: item.age,
//       rating: item.rating,
//       photoUrl: item.photoUrl,
//       defaultSubjectName: item.defaultSubjectName,
//       subjectsCount: item.subjectsCount,
//       isOnline: item.onlineStatus === 2,
//       wasTimeAgo: 'был давно',
//     };
//   });
//   return {
//     specialists: parsedSpecialists,
//     totalCount: response.totalCount,
//   };
// };
