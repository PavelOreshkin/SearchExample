import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import type {
  ParsedSpecialist,
  ParsedSpecialistResponse,
  SpecialistListRawResponse,
} from '../model/types';

export const normalizeSpecialists = (response: {
  data: SpecialistListRawResponse;
}): ParsedSpecialistResponse => {
  console.log('response: ', response);
  const { items, totalCount } = response.data || {};

  const parsedSpecialists: ParsedSpecialist[] = items?.map((item) => {
    return {
      userId: item.userId,
      name: item.name,
      sex: item.sex,
      age: item.age,
      rating: item.rating,
      photoUrl: item.photoUrl,
      subjectId: item.subjectId,
      subjectsCount: item.subjectsCount,
      isOnline: item.onlineStatus === 2,
      wasTimeAgo: formatDistanceToNowStrict(parseISO(item.lastActivityTime), {
        addSuffix: true,
        locale: ru,
      }),
    };
  });
  return {
    specialists: parsedSpecialists,
    totalCount,
  };
};
