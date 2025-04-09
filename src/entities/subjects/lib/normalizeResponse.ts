import type { ParsedSubject, SubjectsRawResponse } from '../model/types';

export const normalizeSubjects = (
  response: SubjectsRawResponse,
): ParsedSubject[] => {
  return response.data.map((item) => ({ id: item.id, name: item.name }));
};
