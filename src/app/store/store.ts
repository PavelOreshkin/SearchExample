import { configureStore } from '@reduxjs/toolkit';
import { specialistFilterReducer } from '@/features/specialistFilter';
import { psychologistApi } from '@/entities/specialist';
import { subjectApi } from '@/entities/subjects/api/getSubjects';

export const store = configureStore({
  reducer: {
    filters: specialistFilterReducer,
    [psychologistApi.reducerPath]: psychologistApi.reducer,
    [subjectApi.reducerPath]: subjectApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault()
      .concat(psychologistApi.middleware)
      .concat(subjectApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
