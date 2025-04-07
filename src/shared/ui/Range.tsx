import { memo } from 'react';

type Props = {
  title: string;
  fromOptions: {
    label: string;
    value: string;
  }[];
  toOptions: {
    label: string;
    value: string;
  }[];
};

const Range: React.FC<Props> = ({ title, fromOptions, toOptions }) => {
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
            className="border-gr h-13 w-full rounded-sm border border-gray-light pl-3"
            name={title}
            id={title}
          >
            {fromOptions.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </div>
        <div className="flex w-full  flex-nowrap">
          <label htmlFor={title} className="mx-3 self-center">
            До
          </label>
          <select
            className="border-gr h-13 w-full rounded-sm border border-gray-light pl-3"
            name={title}
            id={title}
          >
            {toOptions.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default memo(Range);
