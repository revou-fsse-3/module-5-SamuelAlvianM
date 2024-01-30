import React from 'react';
import { render, screen } from '@testing-library/react';
import Forecast from '../Forecast';
import '@testing-library/jest-dom'
import Sunset from '../../Icons/Sunset';

type ForecastType = {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
    list: {
    dt: number;
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
        feels_like: number;
        humidity: number;
    };
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
    wind: {
        deg: number;
        speed: number;
    };
    visibility: number;
    pressure: number;
    pop: number;
    }[];
};

    const mockData: ForecastType = {
        name: 'CityName',
        country: 'US',
        list: [
            {
                dt: 1644168000,
                main: {
                    temp: 25,
                    temp_max: 30,
                    temp_min: 20,
                    feels_like: 26,
                    humidity: 50,
                },
                weather: [
                    {
                        main: 'Clear',
                        description: 'Clear sky',
                        icon: '01d',
                    },
                ],
                wind: {
                    deg: 180,
                    speed: 5,
                },
                visibility: 10,
                pressure: 1010,
                pop: 20,
            },
        ],
        sunrise: 0,
        sunset: 0
    };

    test('Forecast component renders without errors', () => {
    render(<Forecast data={mockData} />);
    const cityNameElement = screen.getByText('CityName');
    const temperatureElement = screen.getByText('25'); 
    const weatherDescriptionElement = screen.getByText('Clear (Clear sky)');
    expect(cityNameElement).toBeInTheDocument();
    expect(temperatureElement).toBeInTheDocument();
    expect(weatherDescriptionElement).toBeInTheDocument();
    });

    test('Forecast component renders multiple forecast items', () => {
        render(<Forecast data={mockData} />);
        const forecastItems = screen.getAllByTestId('forecast-item');
        expect(forecastItems).toHaveLength(mockData.list.length);
    });