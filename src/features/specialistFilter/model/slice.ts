import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sex: '',
  ageFrom: 18,
  ageTo: 99,
  subjectId: '',
  profSpeciality: '',
  ratingFrom: '',
  ratingTo: '',
  limit: 12,
  offset: 0,
};

const specialistFilterSlice = createSlice({
  name: 'specialistFilter',
  initialState,
  reducers: {
    setSpecialistFilter: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setSpecialistFilter } = specialistFilterSlice.actions;
export const specialistFilterReducer = specialistFilterSlice.reducer;
