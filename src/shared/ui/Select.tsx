import { memo } from 'react';

type Props = {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
};

const Select: React.FC<Props> = ({ title, options }) => {
  return (
    <div className="flex flex-col gap-3 text-2xl max-sm:gap-2 max-sm:text-[14px]">
      <label htmlFor={title} className="ml-2 font-bold max-sm:ml-1">
        {title}
      </label>
      <select
        className="border-gr h-13 rounded-sm border border-gray-light pl-3 max-sm:h-10"
        name={title}
        id={title}
      >
        {options.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
