import { memo } from 'react';

type SpecialistCardProps = {
  name: string;
  age: string;
  isVip: boolean;
  theme: string;
  themeCount: number;
  rating?: string;
  lastTime?: string;
};

const DEFAULT_RATING = 'NEW';

export const SpecialistCard: React.FC<SpecialistCardProps> = memo(
  ({
    name,
    age,
    isVip,
    theme,
    themeCount,
    rating = DEFAULT_RATING,
    lastTime,
  }) => {
    return (
      <div className="relative h-[444px] border max-sm:h-[180px]">
        <div className="absolute left-3 top-3 flex h-13 w-13 flex-col items-center justify-center gap-1 rounded-sm bg-white max-sm:h-[28px] max-sm:w-[28px] max-sm:gap-[2px]">
          <div className="text-sm max-sm:text-xs">РЕЙТИНГ</div>
          <div
            className={`
              text-${rating === DEFAULT_RATING ? 'lg' : '3xl'}
              max-sm:text-${rating === DEFAULT_RATING ? 'sm' : 'lg'}
            `}
          >
            {rating}
          </div>
        </div>
        <div className="h-[348px] rounded-sm border border-gray-light bg-pink max-sm:h-[140px]" />
        <div className="mt-4 flex gap-1 max-sm:mt-2">
          <div className="text-4xl max-sm:text-base">
            {name}, {age}
          </div>
          {isVip ? (
            <div className="h-3 max-h-2 w-3 max-w-2 rounded-full bg-green" />
          ) : null}
        </div>
        <div className="mt-2 text-xl italic max-sm:mt-1 max-sm:text-md">
          <span className="text-gray-dark">#{theme}</span>
          <span className="text-gray-normal"> и ещё {themeCount} темы</span>
        </div>
        <div className="mt-2 text-xl text-gray-light max-sm:hidden">
          {lastTime}
        </div>
      </div>
    );
  },
);
