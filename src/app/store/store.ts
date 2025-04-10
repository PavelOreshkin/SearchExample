import { configureStore } from '@reduxjs/toolkit';
import { specialistApi } from '@/entities/specialist';
import { subjectApi } from '@/entities/subjects/api/getSubjects';

export const store = configureStore({
  reducer: {
    [specialistApi.reducerPath]: specialistApi.reducer,
    [subjectApi.reducerPath]: subjectApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(specialistApi.middleware).concat(subjectApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
