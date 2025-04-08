import { memo, useState } from 'react';
import dropdownIcon from '../assets/dropdown.svg';

export type SelectProps = {
  title: string;
  options: {
    label: string;
    value: string | number;
  }[];
  query: string;
  onChange: (arg: Record<string, string | undefined>) => void;
  initialValue?: SelectProps['options'][0]['value'];
  placeholder?: string;
  isRangeCalculation?: boolean;
  isSpecialTitleSize?: boolean;
};

const Select: React.FC<SelectProps> = ({
  title,
  options,
  query,
  initialValue = '',
  onChange,
  placeholder,
  isRangeCalculation,
  isSpecialTitleSize,
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    <div className="flex flex-col gap-3 max-sm:gap-2">
      <label
        htmlFor={title}
        className={`ml-2 text-${
          isSpecialTitleSize ? '2xl' : 'xl'
        } font-bold max-sm:ml-1 max-sm:text-base`}
      >
        {title}
      </label>
      <div className="relative rounded-sm border border-gray-light">
        <select
          value={selected}
          name={title}
          id={title}
          onChange={handleChange}
          // onMouseDown={() => setIsOpen(true)}
          // onBlur={() => setIsOpen(false)}
          className="border-gr relative h-13 w-full cursor-pointer appearance-none pl-3 text-2xl max-sm:h-10 max-sm:pl-1 max-sm:text-base"
        >
          <option value="">{placeholder}</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <img
          src={dropdownIcon}
          alt="dropdown arrow"
          className="pointer-events-none absolute right-3 top-[50%] h-4 w-4 translate-y-[-50%] max-sm:right-2 max-sm:h-3 max-sm:w-3"
          // isOpen ? 'rotate-180' : ''
        />
      </div>
    </div>
  );
};

export default memo(Select);
