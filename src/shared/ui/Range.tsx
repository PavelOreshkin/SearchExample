import { memo, useState } from 'react';

type Props = {
  title: string;
  options: {
    label: string;
    value: string | number;
  }[];
  query: string;
  initialValueFrom: any;
  initialValueTo: any;
  onChange: (arg: any) => void;
};

const Range: React.FC<Props> = ({
  title,
  options,
  query,
  initialValueFrom,
  initialValueTo,
  onChange,
}) => {
  const [selectedFrom, setSelectedFrom] = useState(initialValueFrom);
  const [selectedTo, setSelectedTo] = useState(initialValueTo);

  const handleChangeFrom = (event: any) => {
    const { value } = event.target;

    onChange({
      [`${query}From`]: value,
      ...(value > selectedTo ? { [`${query}To`]: value } : undefined),
    });
    setSelectedFrom(value);
    if (value > selectedTo) setSelectedTo(value);
  };

  const handleChangeTo = (event: any) => {
    const { value } = event.target;

    onChange({
      [`${query}To`]: value,
      ...(value < selectedFrom ? { [`${query}From`]: value } : undefined),
    });
    setSelectedTo(value);
    if (value < selectedFrom) setSelectedFrom(value);
  };

  return (
    <div className="flex flex-col gap-3 text-2xl">
      <label htmlFor={title} className="ml-2 font-bold max-sm:ml-1">
        {title}
      </label>
      <div className="flex gap-[55px]">
        <div className="flex w-full  flex-nowrap">
          <label htmlFor={title} className="mx-3 self-center">
            От
          </label>
          <select
            value={selectedFrom}
            name={title}
            id={title}
            onChange={handleChangeFrom}
            className="border-gr h-13 w-full rounded-sm border border-gray-light pl-3"
          >
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-full  flex-nowrap">
          <label htmlFor={title} className="mx-3 self-center">
            До
          </label>
          <select
            value={selectedTo}
            onChange={handleChangeTo}
            name={title}
            id={title}
            className="border-gr h-13 w-full rounded-sm border border-gray-light pl-3"
          >
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default memo(Range);
