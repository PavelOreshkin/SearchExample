import { createSelector } from '@reduxjs/toolkit';
import { subjectApi } from '../api/getSubjects';

export const selectSubjectOptions = createSelector(
  subjectApi.endpoints.getSubjects.select(),
  (result) => {
    const subjects = result?.data ?? [];
    return subjects.map((subject) => ({
      label: subject.name,
      value: subject.id,
    }));
  },
);
