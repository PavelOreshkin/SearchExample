export interface Filters {
  sex: 1 | 2;
  ageFrom: number;
  ageTo: number;
  subjectId: number;
  profSpeciality: 1 | 2 | 3;
  ratingFrom: number;
  ratingTo: number;
  limit: number;
  offset: number;
}
