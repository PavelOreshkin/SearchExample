import { memo } from 'react';

export const SpecialistErrorUI = memo(() => (
  <div className="flex flex-col items-center text-3xl leading-[160%] ">
    <p>Что то не так со списком специалистов.</p>
    <p>Мы уже работаем над этим вопросом</p>
  </div>
));
