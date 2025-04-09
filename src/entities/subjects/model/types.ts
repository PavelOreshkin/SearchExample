export type RawSubject = {
  id: number;
  name: string;
  sequence: number;
};

export type SubjectsRawResponse = {
  data: RawSubject[];
};

export type ParsedSubject = {
  id: number;
  name: string;
};
