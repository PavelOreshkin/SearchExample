import React, { memo } from "react";
import "./index.scss";

type Props = {
  name: string;
  age: string;
  isVip: boolean;
  theme: string;
  themeCount: number;
  rating?: string;
  lastTime?: string;
};

export const SpecialistCard: React.FC<Props> = memo(
  ({ name, age, isVip, theme, themeCount, rating = "NEW", lastTime }) => {
    return (
      <div className="SpecialistCard">
        <div className="Rating">
          <div className="Rating__title">РЕЙТИНГ</div>
          <div className="Rating__number">{rating}</div>
        </div>
        <div className="SpecialistCard__img" />
        <div className="SpecialistCard__name">
          {name}, {age} {isVip ? <div className="Vip" /> : null}
        </div>
        <div>
          #{theme} и ещё {themeCount} темы
        </div>
        <div>{lastTime}</div>
      </div>
    );
  }
);
