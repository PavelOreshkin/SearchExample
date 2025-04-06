import React, { memo } from "react";
import Button from "@/shared/ui/Button";
import Select from "@/shared/ui/Select";

import "./index.scss";

// type Props = {
//   title: string;
//   options: {
//     label: string;
//     value: string;
//   }[];
// };

// : React.FC<Props>

export const FiltersPanel = memo(() => {
  return (
    <div className="FiltersPanel">
      <Select
        title="Я ищу психолога"
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
      />
      <Select
        title="В возрасте"
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
      />
      <Select
        title="Тема"
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
      />
      <Select
        title="Квалификация"
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
      />
      <Select
        title="Рейтинг"
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
      />
      <Button>Показать анкеты</Button>
    </div>
  );
});
