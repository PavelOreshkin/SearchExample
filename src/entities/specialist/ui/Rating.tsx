import { memo } from 'react';
import type { ParsedSpecialist } from '../model/types';

type RatingProps = {
  rating: ParsedSpecialist['rating'];
};

export const Rating: React.FC<RatingProps> = memo(({ rating }) => (
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
));
