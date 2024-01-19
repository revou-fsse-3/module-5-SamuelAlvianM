// pages/index.tsx

import React, { ChangeEvent, Children, ReactNode, useState } from 'react';
import Search from '../Layout/Search/';
import Forecast from '../Layout/Forecast/';
import { forecastType, optionType } from '../types';


const IndexPage = ({ initialData, initialOptions }: { initialData: forecastType | null; initialOptions: optionType[] }) => {

    const BASE_URL = 'http://api.openweathermap.org'
    const [city, setCity] = useState<optionType | null>(null);
    const [term, setTerm] = useState<string>('');
    const [options, setOptions] = useState<optionType[]>(initialOptions);
    const [data, setData] = useState<forecastType | null>(initialData);
    const [error, setError] = useState<Error | null>(null);

    const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
    
        try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/find?q=${newTerm}&appid=${process.env.REACT_APP_API_KEY}`
        );
    
        if (!response.ok) {
            throw new Error('City not found');
        }
    
        const data = await response.json();
    
        
        const options = Array.isArray(data.list) ? data.list : [];
    
        setOptions(options);
        } catch (error) {
        console.error('Error fetching options:', error);
        setOptions([]);
        }
    };
    

    const handleOptionSelect = (option: optionType) => {
    setCity(option);
    };

    const handleSubmit = async () => {
    if (!city) {
        setError(new Error('City not selected.') as Error);
        return;
    }

    try {
        
        const forecastResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_API_KEY}`);
        const forecastData = await forecastResponse.json();
        setData(forecastData);
        setError(null);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        setData(null);
        setError(error as Error);
    }
    };

    return (
    <Search
        term={term}
        options={options}
        onInputChange={handleInputChange}
        onOptionSelect={handleOptionSelect}
        onSubmit={handleSubmit}
        data={data}
        error={error}
        city={city}
    >
        {data && <Forecast data={data} />}
    </Search>
    );
};

export const getServerSideProps = async () => {
    try {

    const response = await fetch('your-options-api-endpoint');
    const optionsData = await response.json();

    return {
        props: {
          initialData: null, 
        initialOptions: optionsData,
        },
    };
    } catch (error) {
    console.error('Error fetching initial options data:', error);

    return {
        props: {
        initialData: null,
          initialOptions: [], 
        },
    };
    }
};


export default IndexPage;