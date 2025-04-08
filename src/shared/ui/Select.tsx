import { memo, useState } from 'react';

type Props = {
  title: string;
  options: {
    label: string;
    value: string | number;
  }[];
  query: string;
  initialValue: any;
  onChange: (arg: any) => void;
  placeholder?: string;
  isRangeCalculation?: boolean;
};

const Select: React.FC<Props> = ({
  title,
  options,
  query,
  initialValue,
  onChange,
  placeholder,
  isRangeCalculation,
}) => {
  const [selected, setSelected] = useState(initialValue);
  const handleChange = (event: any) => {
    const { value } = event.target;
    setSelected(value);
    if (isRangeCalculation) {
      const [from, to] = value.split('-');
      onChange({ [`${query}From`]: from, [`${query}To`]: to });
      return;
    }
    onChange({ [query]: value });
  };
  return (
    <div className="flex flex-col gap-3 text-2xl max-sm:gap-2 max-sm:text-[14px]">
      <label htmlFor={title} className="ml-2 font-bold max-sm:ml-1">
        {title}
      </label>
      <select
        value={selected}
        name={title}
        id={title}
        onChange={handleChange}
        className="border-gr h-13 rounded-sm border border-gray-light pl-3 max-sm:h-10"
      >
        <option value="">{placeholder}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
