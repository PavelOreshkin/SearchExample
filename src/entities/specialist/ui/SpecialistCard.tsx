import { memo } from 'react';
import type { ParsedSpecialist } from '../model/types';
import Rating from './Rating';
import Avatar from './Avatar';
import Info from './Info';

type SpecialistCardProps = Pick<
  ParsedSpecialist,
  | 'userId'
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

const SpecialistCard: React.FC<SpecialistCardProps> = ({
  userId,
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
  const openCard = () => {
    console.log('открыть карточку c id: ', userId);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') openCard();
  };

  return (
    <article
      className="relative cursor-pointer text-sm duration-200 hover:scale-[1.05] focus:scale-[1.05] focus:outline-2 focus:outline-gray-normal"
      tabIndex={0}
      onClick={openCard}
      onKeyDown={handleKeyDown}
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
  );
};
export default memo(SpecialistCard);
