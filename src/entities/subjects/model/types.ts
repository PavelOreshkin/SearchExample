export type RawSubject = {
  id: number;
  name: string;
  sequence: number;
};

// export type SubjectsRawResponse = {
//   items: RawSpecialist[];
//   totalCount: number;
// };

export type ParsedSubject = {
  id: number;
  name: string;
};
