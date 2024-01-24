import React, { HTMLAttributes } from 'react';
import { useSearch } from "@/features/hooks/useSearch";
import CityOptions from './CityOptions';

interface SuggestionsProps extends HTMLAttributes<HTMLDivElement> {}

const Suggestions: React.FC<SuggestionsProps> = ({ children, ...resProps }) => {
  const { options } = useSearch();

  return (
    <div
      {...resProps}
      style={{ ...(resProps.style || {}), position: 'relative' }}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <ul style={{ position: 'absolute', top: '9px', backgroundColor: 'white', marginLeft: '1px', borderRadius: '4px' }}>
        {options && Array.isArray(options) && options.length > 0 && options?.map((option, index: number) => (
          <li key={option.name + "-" + index}>
            {option && <CityOptions option={option} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
