import React, { memo } from "react";
import { FiltersPanel } from "@/widgets/filters";
import { SpecialistCard } from "@/entities/specialist";
import "./index.scss";
import Button from "@/shared/ui/Button";
// type Props = {
//   title: string;
//   options: {
//     label: string;
//     value: string;
//   }[];
// };

// : React.FC<Props>

const CARD_MOCK = [
  { name: "Катерина", age: "45", isVip: true, theme: "тема", themeCount: 4 },
  { name: "Катерина", age: "45", isVip: true, theme: "тема", themeCount: 4 },
  { name: "Катерина", age: "45", isVip: true, theme: "тема", themeCount: 4 },
  { name: "Катерина", age: "45", isVip: true, theme: "тема", themeCount: 4 },
];

export const Search = memo(() => {
  return (
    <div className="Search">
      <FiltersPanel />
      <div className="Search__list">
        {CARD_MOCK.map((card, index) => (
          <SpecialistCard
            key={index}
            name="Катерина"
            age="45"
            isVip
            theme="тема"
            themeCount={4}
            lastTime="Была 2 часа назад"
          />
        ))}
      </div>
      <Button>Показать ещё</Button>
    </div>
  );
});
