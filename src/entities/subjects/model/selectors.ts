import { createSelector } from '@reduxjs/toolkit';
import { subjectApi } from '../api/getSubjects';

export const selectSubjectOptions = createSelector(
  subjectApi.endpoints.getSubjects.select(), // селектор RTK Query
  (result) => {
    const subjects = result?.data?.data ?? [];
    return subjects.map((subject) => ({
      label: subject.name,
      value: subject.id,
    }));
  },
);
