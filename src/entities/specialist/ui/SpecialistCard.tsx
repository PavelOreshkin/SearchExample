import { memo } from 'react';

type Props = {
  name: string;
  age: string;
  isVip: boolean;
  theme: string;
  themeCount: number;
  rating?: string;
  lastTime?: string;
};

const DEFAULT_RATING = 'NEW';

export const SpecialistCard: React.FC<Props> = memo(
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
      <div className="relative h-[444px] border">
        <div className="absolute left-3 top-3 flex h-13 w-13 flex-col items-center justify-center gap-1 bg-white">
          <div className="text-sm">РЕЙТИНГ</div>
          <div className={`text-${rating === DEFAULT_RATING ? 'lg' : '3xl'}`}>
            {rating}
          </div>
        </div>
        <div className="h-[348px] border" />
        <div className="mt-4 flex gap-1">
          <div className="text-4xl">
            {name}, {age}
          </div>
          {isVip ? <div className="h-3 w-3 rounded-full bg-green" /> : null}
        </div>
        <div className="mt-2 text-xl italic">
          <span className="text-gray-dark">#{theme}</span>
          <span className="text-gray-normal"> и ещё {themeCount} темы</span>
        </div>
        <div className="mt-2 text-xl text-gray-light">{lastTime}</div>
      </div>
    );
  },
);
