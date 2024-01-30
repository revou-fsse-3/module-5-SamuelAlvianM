

import React, { HTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import { optionType } from '@/features/types';

interface CityOptionsProps extends HTMLAttributes<HTMLDivElement> {
    option: optionType;
  }
  
  const CityOptions: React.FC<CityOptionsProps> = ({ option }) => {
    const router = useRouter();
  
    const handleCityForecast = () => {
      let cityName = option.name.trim();
      router.push(
        `/ForecastResult/${cityName}?lat=${option.lat}&lon=${option.lon}`
      );
    };
  
    return (
      <button
        onClick={handleCityForecast}
        style={{ textAlign: 'left', fontSize: 'sm', width: '100%', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', paddingLeft: '2px', paddingRight: '2px', paddingTop: '1px', paddingBottom: '1px' }}
        className="hover:bg-zinc-700 hover:text-white"
        role= "city-option"
      >
        {option.name}, {option.country}
      </button>
    );
  };
  
  export default CityOptions;
