import { memo } from 'react';

export const FilterErrorUI = memo(() => (
  <div className="flex flex-col items-center text-3xl leading-[160%] ">
    <p>Что то не так c фильтрами.</p>
    <p>Мы уже работаем над этим вопросом</p>
  </div>
));
