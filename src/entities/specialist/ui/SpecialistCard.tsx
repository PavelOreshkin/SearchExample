import { memo, useMemo } from 'react';
import noPhotoMan from '../assets/no_photo_man.svg';
import noPhotoWoman from '../assets/no_photo_woman.svg';
import noPhoto from '../assets/no_photo.svg';
import type { ParsedSpecialist } from '../model/types';

type SpecialistCardProps = Omit<ParsedSpecialist, 'userId' | 'subjectId'> & {
  defaultSubjectName: string;
};

export const SpecialistCard: React.FC<SpecialistCardProps> = memo(
  ({
    name,
    age,
    isOnline,
    defaultSubjectName,
    subjectsCount,
    sex,
    rating,
    wasTimeAgo,
    photoUrl,
  }) => {
    const avatar = useMemo(() => {
      if (photoUrl) return photoUrl;
      if (sex === 1) return noPhotoMan;
      if (sex === 2) return noPhotoWoman;
      return noPhoto;
    }, [photoUrl, sex]);

    return (
      <div className="relative cursor-pointer text-sm duration-200 hover:scale-[1.05]">
        <div className="absolute left-3 top-3 flex h-13 w-13 flex-col items-center justify-center gap-1 rounded-sm border border-gray-light bg-white max-sm:left-1 max-sm:top-1 max-sm:h-[28px] max-sm:w-[28px] max-sm:gap-[2px]">
          <p className="text-sm max-sm:text-xs">РЕЙТИНГ</p>
          <p
            className={`${
              rating ? 'text-3xl max-sm:text-lg' : 'text-lg  max-sm:text-sm'
            }`}
          >
            {rating || 'NEW'}
          </p>
        </div>
        <img
          src={avatar}
          alt="specialist photo"
          className="aspect-square w-full max-w-full rounded-sm border border-gray-light"
        />
        <div className="mt-4 flex gap-1 max-sm:mt-2">
          <div className="flex overflow-hidden whitespace-nowrap text-4xl max-sm:text-base">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {name}
            </span>
            <span className="ml-1 flex-shrink whitespace-nowrap">, {age}</span>
          </div>
          {isOnline ? (
            <div className="h-3 w-3 rounded-full bg-green max-sm:h-2 max-sm:w-2" />
          ) : null}
        </div>
        <div className="mt-2 flex overflow-hidden text-xl italic max-sm:mt-1 max-sm:text-md">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-dark">
            {defaultSubjectName}
          </span>
          {subjectsCount - 1 > 0 && (
            <span className="ml-1 flex-shrink whitespace-nowrap text-gray-normal max-sm:hidden">
              и ещё {subjectsCount - 1} темы
            </span>
          )}
        </div>
        <div className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xl text-gray-light max-sm:hidden">
          Был{sex === 2 ? 'а ' : ' '}
          {wasTimeAgo}
        </div>
      </div>
    );
  },
);
