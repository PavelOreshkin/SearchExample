export interface Specialist {
  userId: string;
  name: string;
  age: 1 | 2; // М - 1, Ж - 2
  sex: number;
  rating: number;
  photoUrl?: string;
  avatarId: string;
  level: 0 | 1; // Уровень 0 - базовый 1 - премиум
  defaultSubjectName: string;
  subjectsCount: number;
  isFavorite: boolean;
  onlineStatus: 1 | 2; // 1 - Оффлайн 2 - Онлайн
  lastActivityTime: string;
}
