export type RawSpecialist = {
  userId: string;
  name: string;
  sex?: 1 | 2; // М - 1, Ж - 2
  age: number;
  birthDate: string;
  photoUrl?: string;
  avatarId: string;
  level: 0 | 1; // Уровень 0 - базовый 1 - премиум
  rating: number;
  hasVideo: boolean;
  subjectId: number;
  subjectsCount: number;
  isFavorite: boolean;
  onlineStatus: 1 | 2; // 1 - Оффлайн 2 - Онлайн
  lastActivityTime: string;
};

export type SpecialistListRawResponse = {
  items: RawSpecialist[];
  totalCount: number;
};

export type ParsedSpecialist = Pick<
  RawSpecialist,
  | 'userId'
  | 'name'
  | 'sex'
  | 'age'
  | 'rating'
  | 'photoUrl'
  | 'subjectId'
  | 'subjectsCount'
> & {
  isOnline: boolean;
  wasTimeAgo: string;
};

export type ParsedSpecialistResponse = {
  specialists: ParsedSpecialist[];
  totalCount: SpecialistListRawResponse['totalCount'];
};
