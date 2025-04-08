import { memo, useState } from 'react';
import dropdownIcon from '../assets/dropdown.svg';

export type RangeProps = {
  title: string;
  options: {
    label: string;
    value: string | number;
  }[];
  query: string;
  initialValueFrom?: RangeProps['options'][0]['value'];
  initialValueTo?: RangeProps['options'][0]['value'];
  onChange: (arg: Record<string, string | undefined>) => void;
};

const Range: React.FC<RangeProps> = ({
  title,
  options,
  query,
  initialValueFrom = '',
  initialValueTo = '',
  onChange,
}) => {
  const [selectedFrom, setSelectedFrom] = useState(initialValueFrom);
  const [selectedTo, setSelectedTo] = useState(initialValueTo);

  const handleChangeFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    onChange({
      [`${query}From`]: value,
      ...(value > selectedTo ? { [`${query}To`]: value } : undefined),
    });
    setSelectedFrom(value);
    if (value > selectedTo) setSelectedTo(value);
  };

  const handleChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    onChange({
      [`${query}To`]: value,
      ...(value < selectedFrom ? { [`${query}From`]: value } : undefined),
    });
    setSelectedTo(value);
    if (value < selectedFrom) setSelectedFrom(value);
  };

  return (
    <div className="flex flex-col gap-3 text-2xl max-sm:flex-row max-sm:items-center max-sm:gap-0">
      <label
        htmlFor={title}
        className="ml-2 whitespace-nowrap font-bold max-sm:ml-1 max-sm:text-base"
      >
        {title}
      </label>
      <div className="flex grow justify-between">
        <div className="flex w-full flex-nowrap">
          <label
            htmlFor={title}
            className="mx-3 self-center max-sm:mr-1 max-sm:text-md"
          >
            От
          </label>
          <div className="relative w-full rounded-sm border border-gray-light">
            <select
              value={selectedFrom}
              name={title}
              id={title}
              onChange={handleChangeFrom}
              className="border-gr h-13 w-full max-w-[88px] cursor-pointer appearance-none pl-3 max-lg:max-w-[130px] max-md:max-w-[250px] max-sm:h-10 max-sm:pl-2 max-sm:text-base"
            >
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
            />
          </div>
        </div>
        <div className="flex w-full flex-nowrap justify-end">
          <label
            htmlFor={title}
            className="mx-3 self-center max-sm:mr-1 max-sm:text-md"
          >
            До
          </label>
          <div className="relative w-full rounded-sm border border-gray-light">
            <select
              value={selectedTo}
              onChange={handleChangeTo}
              name={title}
              id={title}
              className="border-gr h-13 w-full max-w-[88px] cursor-pointer appearance-none pl-3 max-lg:max-w-[130px] max-md:max-w-[250px] max-sm:h-10 max-sm:pl-2 max-sm:text-base"
            >
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Range);
