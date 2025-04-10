import { memo } from 'react';
import type { ParsedSpecialist } from '../model/types';
import { Rating } from './Rating';
import { Info } from './Info';
import { Avatar } from './Avatar';

type SpecialistCardProps = Pick<
  ParsedSpecialist,
  | 'name'
  | 'age'
  | 'isOnline'
  | 'subjectsCount'
  | 'sex'
  | 'rating'
  | 'wasTimeAgo'
  | 'photoUrl'
> & {
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
  }) => (
    <article
      className="relative cursor-pointer text-sm duration-200 hover:scale-[1.05] focus:scale-[1.05] focus:outline-2 focus:outline-gray-normal"
      tabIndex={0}
    >
      <Rating rating={rating} />
      <Avatar photoUrl={photoUrl} sex={sex} />
      <Info
        name={name}
        age={age}
        isOnline={isOnline}
        defaultSubjectName={defaultSubjectName}
        subjectsCount={subjectsCount}
        wasTimeAgo={wasTimeAgo}
      />
    </article>
  ),
);
